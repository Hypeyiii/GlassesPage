import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { FaStripe, FaStripeS } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { CiCircleCheck } from "react-icons/ci";
import { useCart } from "../Hooks/useCart";
import Confetti from "react-confetti";

interface Metadata {
  name: string;
  email: string;
  phoneNumber: string;
  lastName: string;
}

const Checkout: React.FC = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [metadata, setMetadata] = useState<Metadata>({
    name: "",
    email: "",
    phoneNumber: "",
    lastName: "",
  });

  const stripe = useStripe();
  const elements = useElements();
  const { total, allProducts, cleanStorage } = useCart();

  const productDetails = allProducts
    .map((product) => `(${product.quantity}) ${product.brand}`)
    .join(", ");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { name, lastName, email, phoneNumber } = metadata;

    if (!stripe || !elements || !name || !lastName || !email || !phoneNumber) {
      setLoading(false);
      setError("Todos los campos son obligatorios.");
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      setLoading(false);
      setError("Por favor ingrese los detalles de su tarjeta.");
      return;
    }

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (error) {
        setLoading(false);
        setError(
          "Ocurrió un error al procesar el pago. Por favor, inténtelo de nuevo."
        );
        return;
      }

      if (!paymentMethod || !paymentMethod.id) {
        setLoading(false);
        setError("No se pudo obtener el método de pago.");
        return;
      }

      const { id } = paymentMethod;

      const response = await axios.post(
        "https://glasses-page-api-rest-production.up.railway.app/checkout",
        {
          id,
          amount: total * 100,
          email: email,
          name: name,
          lastName: lastName,
          phoneNumber: phoneNumber,
          allProducts: productDetails,
          customerId: email,
        }
      );

      if (response.status !== 200) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      setPaymentSuccess(true);
      console.log("Payment successful:", response.data);

      cleanStorage();
    } catch (err) {
      setError(
        "Ocurrió un error al procesar el pago. Por favor, inténtelo de nuevo."
      );
      console.error("Payment error:", err);
    }

    setLoading(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMetadata((prevMetadata) => ({
      ...prevMetadata,
      [name]: value,
    }));
  };
  return (
    <>
      {paymentSuccess && (
        <div className="absolute inset-0 h-auto w-full mt-24">
          <Confetti width={window.innerWidth} height={window.innerHeight} />
        </div>
      )}
      <div className="grid grid-cols-12 h-screen gap-4 md:gap-0 mt-32 w-[85%] mx-auto">
        <>
          <div className="col-span-12 md:col-span-4 w-ful h-full relative flex items-center justify-center p-4">
            <div className="absolute top-0 left-0 md:left-auto md:right-0 p-5">
              <div className="p-1 text-black dark:text-white bg-purple-500 rounded-lg group/item">
                <a
                  target="_blank"
                  rel="noopener noreference"
                  href="https://stripe.com/es"
                >
                  <FaStripeS className="text-white" />
                </a>
                <div className="invisible group-hover/item:visible absolute text-white bottom-4 left-12 text-xs w-fit p-2 text-center bg-black/50 mx-auto">
                  ir a stripe.com
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center md:text-pretty gap-y-8 mt-10 md:mt-0 text-black dark:text-white">
              <p className="text-xl md:text-3xl font-semibold w-full">
                Los pagos y transacciones en{" "}
                <span
                  className="text-pink-300 animate-text-gradient bg-clip-text text-transparent 
                    bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-700 ease-in-out"
                >
                  Lensmania
                </span>{" "}
                son procesados y asegurados por{" "}
                <a
                  href="https://stripe.com/es"
                  target="_blank"
                  rel="noopener noreference"
                  className="text-black hover:underline transition hover:text-purple-500"
                >
                  Stripe
                </a>
              </p>
              <img
                src="https://static.tildacdn.com/tild3332-6431-4536-b461-356361346362/Screen_Shot_2022-03-.png"
                alt="Shopping online image"
              />
            </div>
            <ul className="absolute bottom-0 md:mb-2 text-black/70 dark:text-white flex flex-row gap-x-6 text-[10px] items-center justify-center mx-auto">
              <a
                href="https://stripe.com/es"
                target="_blank"
                rel="noopener noreference"
                className="flex flex-row gap-x-1 items-center justify-center"
              >
                Powered by
                <FaStripe className="text-black dark:text-white size-6" />
              </a>
              <a href="#">Privacidad</a>
              <a href="#">Términos</a>
            </ul>
          </div>
          <div className="text-base flex flex-col items-center justify-center col-span-12 md:col-span-8 mx-auto gap-10 relative w-full text-black dark:text-white">
            {paymentSuccess ? (
              <>
                <div className="slide-in-blurred-top text-2xl font-bold text-green-500 flex flex-col gap-y-4 items-center justify-center px-20 text-center">
                  <CiCircleCheck className="size-10 text-green-500" />
                  <p>¡Pago realizado exitosamente!</p>
                  <p className="text-lg font-thin">
                    Gracias por comprar en Mariana Accesorios, te enviaremos un
                    correo con la información de tu recibo.
                  </p>
                </div>
              </>
            ) : (
              <>
                <h1 className="text-base md:text-2xl font-semibold">
                  Total a pagar: <span>${total}.00 MX</span>
                </h1>
                {error && <p className="text-red-500">{error}</p>}
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6 items-center justify-center w-full px-8"
                >
                  <div className="flex flex-col md:flex-row gap-4 w-full">
                    <div className="flex flex-col gap-2 w-full">
                      <p className="text-black dark:text-white font-normal text-sm md:text-base">
                        Nombre
                      </p>
                      <input
                        type="text"
                        onChange={handleInputChange}
                        name="name"
                        value={metadata.name}
                        className="rounded-lg border-black/30 shadow-black/20 dark:shadow-white/20 dark:bg-white/80 shadow-lg w-full text-white dark:text-black p-2"
                      />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <p className="text-black dark:text-white font-normal text-sm md:text-base">
                        Apellido
                      </p>
                      <input
                        type="text"
                        onChange={handleInputChange}
                        name="lastName"
                        value={metadata.lastName}
                        className="rounded-lg border-black/30 shadow-black/20 dark:shadow-white/20 dark:bg-white/80 shadow-lg w-full text-white dark:text-black p-2"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-4 w-full">
                    <div className="flex flex-col gap-2 w-full">
                      <p className="text-black dark:text-white font-normal text-sm md:text-base">
                        Número telefónico
                      </p>
                      <input
                        type="text"
                        onChange={handleInputChange}
                        name="phoneNumber"
                        value={metadata.phoneNumber}
                        className="rounded-lg border-black/30 shadow-black/20 dark:shadow-white/20 dark:bg-white/80 shadow-lg w-full text-white dark:text-black p-2"
                      />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                      <p className="text-black dark:text-white font-normal text-sm md:text-base">
                        Correo electrónico
                      </p>
                      <input
                        type="email"
                        value={metadata.email}
                        onChange={handleInputChange}
                        name="email"
                        className="rounded-lg border-black/30 shadow-black/20 dark:shadow-white/20 dark:bg-white/80 shadow-lg w-full text-white dark:text-black p-2"
                      />
                    </div>
                  </div>
                  <div className="text-white w-full bg-white/40">
                    <CardElement className="rounded-lg border-black/30 shadow-black/20 dark:shadow-white/20 dark:bg-white/80 shadow-lg p-3 w-full h-auto text-black dark:text-white" />
                  </div>
                  <button className="p-2 border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition cursor-pointer font-medium md:absolute bottom-0 w-full">
                    {loading ? (
                      <div className="flex flex-row gap-x-2 items-center justify-center">
                        <AiOutlineLoading3Quarters className="spin" />
                        <h1>Procesando pago</h1>
                      </div>
                    ) : (
                      "Pagar ahora"
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </>
      </div>
    </>
  );
};

export default Checkout;
