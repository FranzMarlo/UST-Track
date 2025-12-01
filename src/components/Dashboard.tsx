import { FaRegCalendarDays } from "react-icons/fa6";
import announcementsData from "../data/announcements.json";
import { useState } from "react";

function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;

  const totalPages = announcementsData.length;

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentAnnouncements = announcementsData.slice(
    indexOfFirst,
    indexOfLast
  );

  const goToPage = (page: number) => {
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;
    setCurrentPage(page);
  };

  return (
    <section
      className="m-4 sm:m-6 md:m-10 pt-4 sm:pt-6 md:pt-10"
      id="announcements"
    >
      <div className="border-2 sm:border-4 border-slate-200 w-full bg-white shadow-lg mt-6 sm:mt-0">
        <div className="bg-green-600 w-full p-2">
          <h2 className="text-white font-bold text-sm sm:text-base">
            Announcements
          </h2>
        </div>
        {currentAnnouncements.map((item) => (
          <div
            key={item.id}
            className="w-full p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10"
          >
            <div className="pt-2 shrink-0">
              <img
                src={item.image}
                alt={item.title}
                className="h-auto w-full sm:w-48 md:w-64 border object-cover"
              />
            </div>

            <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
              <div className="flex flex-col">
                <h3 className="font-extrabold text-base sm:text-lg">
                  {item.title}
                </h3>
                <span className="flex gap-1 items-center text-gray-500">
                  <FaRegCalendarDays size={15} />
                  <p className="text-xs sm:text-sm font-semibold">
                    {item.date}
                  </p>
                </span>
              </div>
              <div className="flex flex-col">
                {item.subtitle && (
                  <h3
                    className={
                      item.color + " font-extrabold text-sm sm:text-base"
                    }
                  >
                    {item.subtitle}
                  </h3>
                )}
                <p className="font-bold leading-5 text-sm sm:text-base">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
        <div className="w-[calc(100%-2rem)] sm:w-[calc(100%-3rem)] md:w-[calc(100%-5rem)] bg-slate-200 h-0.5 mx-auto mt-5"></div>

        <div className="flex justify-center sm:justify-end p-3 sm:p-4">
          <div className="flex items-center text-xs sm:text-sm font-semibold overflow-x-auto">
            <button
              onClick={() => goToPage(1)}
              disabled={currentPage === 1}
              className="cursor-pointer px-2 sm:px-3 py-1.5 border border-gray-300 bg-white text-black rounded-l hover:bg-amber-400 disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap text-xs sm:text-sm"
            >
              First
            </button>

            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="cursor-pointer px-2 sm:px-3 py-1.5 border border-gray-300 bg-white text-black hover:bg-amber-400 disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap text-xs sm:text-sm"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`cursor-pointer px-2 sm:px-3 py-1.5 border border-gray-300 text-xs sm:text-sm ${
                  currentPage === page
                    ? "bg-amber-400 text-black font-semibold hover:bg-amber-400"
                    : "bg-white text-black hover:bg-amber-400"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="cursor-pointer px-2 sm:px-3 py-1.5 border border-gray-300 bg-white text-black hover:bg-amber-400 disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap text-xs sm:text-sm"
            >
              Next
            </button>

            <button
              onClick={() => goToPage(totalPages)}
              disabled={currentPage === totalPages}
              className="cursor-pointer px-2 sm:px-3 py-1.5 border border-gray-300 bg-white text-black rounded-r hover:bg-amber-400 disabled:opacity-40 disabled:cursor-not-allowed whitespace-nowrap text-xs sm:text-sm"
            >
              Last
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
