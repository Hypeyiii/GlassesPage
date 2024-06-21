import { useState, useEffect } from "react";

export function useSetMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
      setIsTablet(false);
      setIsDesktop(false);
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      setIsMobile(false);
      setIsTablet(true);
      setIsDesktop(false);
    } else {
      setIsMobile(false);
      setIsTablet(false);
      setIsDesktop(true);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobile, isTablet, isDesktop };
}
