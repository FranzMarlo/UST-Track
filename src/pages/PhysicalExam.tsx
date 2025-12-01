import React from "react";
import { useEffect } from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";
import {
  FaCheckCircle,
  FaMinusCircle,
  FaExclamationCircle,
} from "react-icons/fa";

const Physical: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <section className="p-4 md:p-10 flex justify-center">
      <div className="bg-white border-2 border-slate-200 w-full max-w-7xl shadow-sm">
        <div className="bg-amber-400 p-2 md:p-3">
          <h3 className="text-white font-extrabold">Physical Exam Status</h3>
        </div>

        <div className="p-6 flex flex-col gap-6">
          <div>
            <h3 className="text-amber-400 font-extrabold text-lg md:text-xl">
              STATUS
            </h3>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full border border-slate-300 text-gray-700 min-w-[600px]">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 p-2 text-left">
                      Date
                    </th>
                    <th className="border border-slate-300 p-2 text-left">
                      Status
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="border border-slate-300 p-2 text-left font-semibold">
                      22-JUL-2024 04:46 PM
                    </td>
                    <td className="border border-slate-300 p-2 text-left">
                      <span className="flex items-center gap-2 text-red-600 font-semibold">
                        <FaExclamationCircle size={20} />
                        Lacking Requirements: X-ray
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-2 text-left font-semibold">
                      21-JUL-2024 10:00 AM
                    </td>
                    <td className="border border-slate-300 p-2 text-left">
                      <span className="flex items-center gap-2 text-amber-400 font-semibold">
                        <FaMinusCircle size={20} />
                        Evaluated
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-2 text-left font-semibold">
                      19-JUL-2024 03:21 PM
                    </td>
                    <td className="border border-slate-300 p-2 text-left">
                      <span className="flex items-center gap-2 text-green-600 font-semibold">
                        <FaCheckCircle size={20} />
                        Cleared physical examination
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex justify-center">
              <div className="flex gap-2 text-gray-700 font-bold mt-4 items-start max-w-2xl">
                <input
                  type="checkbox"
                  className="w-4 h-4 cursor-pointer accent-green-600 shrink-0 mt-1"
                />
                <span className="leading-normal">
                  I confirm that the above information is accurate and correct
                  to the best of my knowledge, and that I have read and agreed
                  to the UST-OSA Data Privacy Policy.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </section>
  );
};

export default Physical;
