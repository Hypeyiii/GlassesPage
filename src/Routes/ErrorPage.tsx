import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="text-black dark:text-white flex flex-col items-center justify-center gap-y-4 w-screen h-screen">
      <p className="text-3xl font-light text-black dark:text-white">Ups...</p>
      <h1 className="text-5xl">Error 404 - Página no encontrada</h1>
      <Link
        to="/"
        className="text-black dark:text-white text-2xl font-semibold px-4 py-1 border-[1px] border-black dark:border-white
        hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300 ease-in-out"
      >
        Regresar a la página principal
      </Link>
    </div>
  );
}
