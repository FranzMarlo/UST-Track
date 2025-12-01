import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";
import { PiMegaphoneFill } from "react-icons/pi";
import advisories from "../data/advisories.json";
import { useState, useEffect } from "react";

function Advisory() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getItemsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
      return 4;
    }
    return 4;
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(getItemsPerView());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    const maxIndex = advisories.length - itemsPerView;
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleAdvisories = advisories.slice(
    currentIndex,
    currentIndex + itemsPerView
  );

  return (
    <section className="m-4 sm:m-6 md:m-10" id="advisories">
      <div className="w-full h-auto flex justify-between items-center">
        <h2 className="font-extrabold text-base sm:text-lg md:text-xl">
          Important Advisory
        </h2>
        <div className="flex gap-2">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="bg-amber-400 p-1.5 sm:p-2 text-white cursor-pointer rounded hover:bg-amber-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous advisories"
          >
            <FaArrowLeft className="text-sm sm:text-base" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= advisories.length - itemsPerView}
            className="bg-amber-400 p-1.5 sm:p-2 text-white cursor-pointer rounded hover:bg-amber-500 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            aria-label="Next advisories"
          >
            <FaArrowRight className="text-sm sm:text-base" />
          </button>
        </div>
      </div>
      <div className="w-full mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
        {visibleAdvisories.map((item) => (
          <div
            key={item.id}
            className="p-1 border-2 border-slate-200 flex flex-col bg-white shadow-lg hover:shadow-xl transition-shadow"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 sm:h-56 md:h-64 lg:h-80 mb-3 object-cover"
            />
            <div className="flex flex-col p-3 sm:p-4">
              <span className="flex gap-1 items-center text-gray-500 mb-2">
                <FaRegCalendarDays size={15} className="shrink-0" />
                <p className="text-xs sm:text-sm font-semibold">{item.date}</p>
              </span>
              <h3 className="text-base sm:text-lg font-extrabold mb-2 text-amber-400">
                {item.title}
              </h3>
              <p className="font-bold mb-2 text-sm sm:text-base leading-relaxed">
                {item.content}
              </p>
              <div className="flex items-start gap-2">
                <PiMegaphoneFill
                  size={24}
                  className="shrink-0 sm:w-7 sm:h-7 md:w-8 md:h-8"
                />
                <p className="font-bold text-sm sm:text-base leading-relaxed">
                  {item.subcontent}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Advisory;
