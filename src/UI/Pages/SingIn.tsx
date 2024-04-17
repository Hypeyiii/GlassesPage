import { useState } from "react";
import "../Components/Animations.css";
import SingInForm from "../Components/SingInForm";
import LoggedInForm from "../Components/LoggedInForm";
const SingIn = () => {
  const [wantToSingIn, setWantToSingIn] = useState(true);

  return (
    <div
      className="mt-24 md:mt-32 grid justify-center relative items-center w-[80%] md:w-[50%] h-[500px] m-auto border-black/20 text-center text-wrap bg-gray-300 dark:bg-white
    border p-10"
    >
      <header className="absolute top-0 left-o right-0 w-full py-5 md:py-10">
        <nav>
          <ul className="gap-x-2 grid grid-cols-2 w-[90%] mx-auto mb-5 border-b-[1px] py-2 px-4 border-black text-black text-xl uppercase">
            <li
              id="title"
              className={`${
                wantToSingIn ? "opacity-100" : "opacity-50"
              } w-full h-full border-r border-black cursor-pointer`}
              onClick={() => setWantToSingIn(true)}
            >
              <h1 className="text-sm md:text-base lg:text-lg">Registrate</h1>
            </li>
            <li
              id="title"
              className={`${
                wantToSingIn ? "opacity-50" : "opacity-100"
              } w-full h-full border-black cursor-pointer`}
              onClick={() => setWantToSingIn(false)}
            >
              <h1 className="text-sm md:text-base lg:text-lg">Iniciar Sesión</h1>
            </li>
          </ul>
        </nav>
      </header>
      <main>{wantToSingIn ? <SingInForm /> : <LoggedInForm />}</main>
    </div>
  );
};
export default SingIn;
