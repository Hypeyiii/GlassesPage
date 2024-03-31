import { IoArrowUp } from "react-icons/io5";
import useGoToTopButton from "../Hooks/useGoToTopButton.tsx";

export const ScrollToTop = () => {
  const { goToTop, showButton } = useGoToTopButton();

  return (
    <div
      className={`fixed bottom-0 right-0 p-2 md:p-5 z-50 ${
        showButton ? "flex" : ""
      }`}
    >
      <button
        className="text-black dark:text-white p-1 md:p-2 border-[0.5px] border-black dark:border-white rounded-lg 
        [&>#aarrow-up]:hover:rotate-0 opacity-60 hover:opacity-100"
        onClick={goToTop}
      >
        <IoArrowUp
          id="arrow-up"
          className="size-5 md:size-6 rotate-[-45deg] transition-all duration-200"
        />
      </button>
    </div>
  );
};
