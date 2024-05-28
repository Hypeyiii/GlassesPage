import { BiLeftArrowAlt, BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Products } from "../Interface/Products";
import { useFav } from "../Hooks/useFav";
import { RiHeartAddLine } from "react-icons/ri";
// import { useLocation } from "react-router-dom";

const Wishlist = () => {
  // const location = useLocation();
  const { allFavProducts, deleteFavProduct } = useFav();

  const backUp = () => {
    window.history.back();
  };

  return (
    <>
      {allFavProducts.length ? (
        <>
          <div className="w-[80%] md:w-[70%] mt-20 md:mt-32 text-black dark:text-white flex flex-row items-center justify-between m-auto text-xs md:text-base">
            <div>
              <Link to={"/"} className="text-black/60 dark:text-white/60">
                Inicio /
              </Link>{" "}
              <Link to={`/WishList`} className="text-black dark:text-white">
                WishList
              </Link>
            </div>
            <div
              className="flex flex-row gap-1 items-center text-xs md:text-base border-b-[0.5px] border-transparent hover:border-black dark:hover:border-white cursor-pointer"
              onClick={backUp}
            >
              <BiLeftArrowAlt className="size-4" />
              <p>Regresar</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-4 items-center justify-center w-[80%] md:w-[70%] gap-5 mx-auto">
            {allFavProducts.map((product) => (
              <div
                key={product.id}
                className="text-white bg-[#f6f6f6] dark:bg-black/80 rounded-sm hover:shadow-2xl dark:hover:shadow-lg hover:shadow-black/40 
                dark:hover:shadow-white/20 border-[0.5px] border-black/10 hover:border-black/25 dark:border-white/10 dark:hover:border-white/20 
                flex-flex-col col-span-2 md:col-span-1 relative [&>div>img]:hover:scale-100 p-2 md:p-5 [&>div>#description]:hover:font-bold cursor-pointer h-full w-full 
                opacity-85 hover:opacity-100 transition"
              >
                <div
                  className="absolute top-0 right-0 p-2 text-black dark:text-white hover:text-red-500 dark:hover:text-red-400"
                  onClick={() => deleteFavProduct(product as Products)}
                >
                  <BiTrash className="size-3 md:size-4" />
                </div>
                <div className="absolute top-0 flex w-full justify-center">
                  <div
                    className="left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(245,245,245,0)] to-[rgba(245,245,245,0)  
                    dark:from-[rgba(17,17,17,0)] via-neutral-800 dark:via-white dark:to-[rgba(17,17,17,0)] transition-all duration-1000"
                  />
                </div>
                <Link
                  to={`/${product.category}/Product/${product.id}`}
                  className="size-[100px] md:size-[200px] mx-auto flex items-center justify-center"
                >
                  <img
                    src={product.image}
                    alt={product.description + "image"}
                  />
                </Link>
                <p className="text-black/60 dark:text-white/60 text-xs md:text-base font-semibold">
                  {product.brand}
                </p>
                <p className="text-black dark:text-white font-semibold text-xs md:text-lg">
                  {product.description}
                </p>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-xs font-extrabold text-black dark:text-white">
                    ${product.price}.00 mx
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-full gap-y-5 w-[50%] md:w-[20%] mx-auto text-black dark:text-white">
          <RiHeartAddLine className="size-32  opacity-20" />
          <h1 className="text-xl md:text-3xl font-bold  mx-auto text-center">
            Tus favoritos parecen estar vacío
          </h1>
          <p className="text-center">Agregue articulos favoritos</p>
          <Link
            to={"/"}
            className="py-2 px-5 border-[0.5px] border-black dark:border-white hover:bg-black hover:text-white
            dark:hover:bg-white dark:hover:text-black dark:text-white transition flex justify-center uppercase font-bold text-center"
          >
            Seguir comprando
          </Link>
        </div>
      )}
    </>
  );
};
export default Wishlist;
