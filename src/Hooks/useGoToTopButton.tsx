import { useState, useEffect } from "react";

export default function useGoToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
        document.querySelector("#arrow-up")?.classList.remove("rotate-0");
      }
      return setShowButton;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const goToTop = () => {
    window.scrollTo(0, 0);
    document.querySelector("#arrow-up")?.classList.add("rotate-0");
    console.log("arriba");
  };
  return { goToTop, showButton };
}
