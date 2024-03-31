import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (window.scrollY < 200) {
      setShowButton(true);
      console.log(showButton)
    } else {
      setShowButton(false);
      {console.log(showButton)}
    }
  }, [location, showButton]);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return { goToTop, showButton };
}
