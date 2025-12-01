import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg bg-amber-400 
      hover:bg-amber-300 text-white transition-all duration-300 z-50
      ${
        visible
          ? "opacity-100 translate-y-0 cursor-pointer"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <FaArrowUp size={16} />
    </button>
  );
}
