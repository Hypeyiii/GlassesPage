import { useState, useEffect } from "react";

export function useDarkMode() {
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);
  const toggleColorScheme = () => {
    document.querySelector("body")?.classList.toggle("dark");
    setIsDarkModeOn(!isDarkModeOn);
  };
  useEffect(() => {
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDarkMode) {
      document.querySelector("body")?.classList.add("dark");
      setIsDarkModeOn(true);
    } else {
      document.querySelector("body")?.classList.remove("dark");
      setIsDarkModeOn(false);
    }
  }, [setIsDarkModeOn]);

  return { toggleColorScheme, isDarkModeOn };
}
