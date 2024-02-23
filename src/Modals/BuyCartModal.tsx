import { BsArrowLeft } from "react-icons/bs";

export default function BuyCartModal({ closeBuyCartModal, total }) {
  return (
    <>
      <div
        className="fixed inset-0 bg-black/80 top-0 z-50 mx-auto"
        onClick={closeBuyCartModal}
      ></div>
      <div
        className="fixed bg-white items-center justify-center flex flex-col gap-10 z-50 size-[70%] top-0 right-0 left-0 bottom-0 m-auto 
      rounded-lg"
      >
        <div
          className="absolute top-0 left-0 p-3 flex flex-row gap-2 text-sm text-black items-center hover:scale-105 transition cursor-pointer font-semibold"
          onClick={closeBuyCartModal}
        >
          <div>
            <BsArrowLeft className="" />
          </div>
          <p>Carrito</p>
        </div>
        <p className="font-semibold text-xl">Total a pagar: ${total}.00 mx</p>
      </div>
    </>
  );
}
