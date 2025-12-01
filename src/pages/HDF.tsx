import React from "react";
import { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { MdAddCircle } from "react-icons/md";
import toast from "react-hot-toast";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { FaInfoCircle } from "react-icons/fa";

const HDF: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [setFever, updateFever] = useState(true);
  const [setCough, updateCough] = useState(true);
  const [setColds, updateColds] = useState(true);
  const [setThroat, updateThroat] = useState(true);
  const [setBreath, updateBreath] = useState(true);
  const [setDiff, updateDiff] = useState(true);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  const saveRecord = () => {
    setShowModal(!showModal);
    toast.success("Record Added!");
  };

  return (
    <section className="p-4 md:p-10 flex justify-center">
      <div className="bg-white border-2 border-slate-200 w-full max-w-7xl shadow-sm">
        <div className="bg-amber-400 p-2 md:p-3">
          <h3 className="text-white font-extrabold">Health Declaration</h3>
        </div>

        <div className="m-6 mb-0 flex flex-col md:flex-row gap-4">
          <button
            className="bg-amber-400 text-white p-2 cursor-pointer rounded-md hover:bg-amber-600"
            onClick={() => setShowModal(true)}
          >
            <span className="font-bold flex items-center gap-1">
              <MdAddCircle size={20} />
              New Health Declaration Checklist
            </span>
          </button>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6 relative max-h-screen overflow-y-auto">
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 cursor-pointer"
                onClick={() => setShowModal(false)}
              >
                <ImCross />
              </button>

              <h2 className="text-xl font-bold text-amber-500 mb-4">
                Health Declaration Checklist
              </h2>

              <form className="flex flex-col gap-4">
                <div>
                  <span className="text-gray-700 font-bold">
                    Purpose of Visit
                  </span>

                  <label className="flex items-center gap-2 text-gray-700 mt-2 font-semibold">
                    <input
                      type="radio"
                      name="visit"
                      value="Official"
                      className="
                        w-4 h-4 cursor-pointer shrink-0 accent-amber-500
                        border-2 border-gray-400 rounded 
                        disabled:bg-gray-200 disabled:border-gray-300
                        "
                    />
                    <span className="cursor-pointer">Official</span>
                  </label>

                  <label className="flex items-center gap-2 text-gray-700 mt-2 font-semibold">
                    <input
                      type="radio"
                      name="visit"
                      value="Personal"
                      className="
                        w-4 h-4 cursor-pointer shrink-0 accent-amber-500
                        border-2 border-gray-400 rounded
                        disabled:bg-gray-200 disabled:border-gray-300
                        "
                    />
                    <span className="cursor-pointer">Personal</span>
                  </label>
                </div>

                <div>
                  <label className="font-bold text-gray-700">
                    Place of Work / Visit
                  </label>
                  <input
                    name="place"
                    type="text"
                    className="mt-1 w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-amber-400 focus:outline-none disabled:bg-gray-200"
                    placeholder="Enter Place of Work / Visit"
                  />
                </div>

                <div>
                  <label className="font-bold text-gray-700">
                    Temperature(&#8451;)
                  </label>
                  <input
                    name="temp"
                    type="text"
                    className="mt-1 w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-amber-400 focus:outline-none disabled:bg-gray-200"
                    placeholder="Enter Temperature(&#8451;)"
                  />
                </div>

                <div>
                  <label className="font-bold text-gray-700">
                    Are you experiencing any of the following symptom/s in the
                    last 2 weeks: (Nakakaranas ka ba ng mga ganitong sintomas sa
                    nakalipas na 2 linggo:)
                  </label>

                  <ul className="list-disc pl-5 space-y-4 mt-4">
                    <li className="space-y-2">
                      <span className="text-gray-700 font-bold">
                        Fever (Lagnat - Temp &gt; 37.8 Celcius)
                      </span>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 text-gray-700 mt-2 font-semibold">
                          <input
                            type="radio"
                            name="fever"
                            value="yes"
                            onChange={() => updateFever(false)}
                            className="
                            w-4 h-4 cursor-pointer shrink-0 accent-amber-500
                            border-2 border-gray-400 rounded 
                            disabled:bg-gray-200 disabled:border-gray-300
                            "
                          />
                          <span className="cursor-pointer">Yes</span>
                        </label>

                        <label className="flex items-center gap-2 text-gray-700 mt-2 font-semibold">
                          <input
                            type="radio"
                            name="fever"
                            value="no"
                            onChange={() => updateFever(true)}
                            className="
                            w-4 h-4 cursor-pointer shrink-0 accent-amber-500
                            border-2 border-gray-400 rounded
                            disabled:bg-gray-200 disabled:border-gray-300
                            "
                          />
                          <span className="cursor-pointer">No</span>
                        </label>
                      </div>

                      <div>
                        <label className="font-bold text-gray-700">
                          If yes, date started
                        </label>
                        <input
                          name="feverStart"
                          type="date"
                          className="mt-1 w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-amber-400 focus:outline-none disabled:bg-gray-200"
                          disabled={setFever}
                        />
                      </div>
                    </li>

                    <li className="space-y-2">
                      <span className="text-gray-700 font-bold">
                        Cough (Ubo)
                      </span>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 text-gray-700 mt-2 font-semibold">
                          <input
                            type="radio"
                            name="cough"
                            value="yes"
                            onChange={() => updateCough(false)}
                            className="
                            w-4 h-4 cursor-pointer shrink-0 accent-amber-500
                            border-2 border-gray-400 rounded 
                            disabled:bg-gray-200 disabled:border-gray-300
                            "
                          />
                          <span className="cursor-pointer">Yes</span>
                        </label>

                        <label className="flex items-center gap-2 text-gray-700 mt-2 font-semibold">
                          <input
                            type="radio"
                            name="cough"
                            value="no"
                            onChange={() => updateCough(true)}
                            className="
                            w-4 h-4 cursor-pointer shrink-0 accent-amber-500
                            border-2 border-gray-400 rounded
                            disabled:bg-gray-200 disabled:border-gray-300
                            "
                          />
                          <span className="cursor-pointer">No</span>
                        </label>
                      </div>

                      <div>
                        <label className="font-bold text-gray-700">
                          If yes, date started
                        </label>
                        <input
                          name="coughStart"
                          type="date"
                          className="mt-1 w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-amber-400 focus:outline-none disabled:bg-gray-200"
                          disabled={setCough}
                        />
                      </div>
                    </li>

                    <li className="space-y-2">
                      <span className="text-gray-700 font-bold">
                        Colds (Sipon)
                      </span>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 text-gray-700 mt-2 font-semibold">
                          <input
                            type="radio"
                            name="colds"
                            value="yes"
                            onChange={() => updateColds(false)}
                            className="
                            w-4 h-4 cursor-pointer shrink-0 accent-amber-500
                            border-2 border-gray-400 rounded 
                            disabled:bg-gray-200 disabled:border-gray-300
                            "
                          />
                          <span className="cursor-pointer">Yes</span>
                        </label>

                        <label className="flex items-center gap-2 text-gray-700 mt-2 font-semibold">
                          <input
                            type="radio"
                            name="colds"
                            value="no"
                            onChange={() => updateColds(true)}
                            className="
                            w-4 h-4 cursor-pointer shrink-0 accent-amber-500
                            border-2 border-gray-400 rounded
                            disabled:bg-gray-200 disabled:border-gray-300
                            "
                          />
                          <span className="cursor-pointer">No</span>
                        </label>
                      </div>

                      <div>
                        <label className="font-bold text-gray-700">
                          If yes, date started
                        </label>
                        <input
                          name="coldsStart"
                          type="date"
                          className="mt-1 w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-amber-400 focus:outline-none disabled:bg-gray-200"
                          disabled={setColds}
                        />
                      </div>
                    </li>

                    <li className="space-y-2">
                      <span className="text-gray-700 font-bold">
                        Throat Pain (Pananakit ng lalamunan)
                      </span>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 text-gray-700 mt-2 font-semibold">
                          <input
                            type="radio"
                            name="throat"
                            value="yes"
                            onChange={() => updateThroat(false)}
                            className="
                            w-4 h-4 cursor-pointer shrink-0 accent-amber-500
                            border-2 border-gray-400 rounded 
                            disabled:bg-gray-200 disabled:border-gray-300
                            "
                          />
                          <span className="cursor-pointer">Yes</span>
                        </label>

                        <label className="flex items-center gap-2 text-gray-700 mt-2 font-semibold">
                          <input
                            type="radio"
                            name="throat"
                            value="no"
                            onChange={() => updateThroat(true)}
                            className="
                            w-4 h-4 cursor-pointer shrink-0 accent-amber-500
                            border-2 border-gray-400 rounded
                            disabled:bg-gray-200 disabled:border-gray-300
                            "
                          />
                          <span className="cursor-pointer">No</span>
                        </label>
                      </div>

                      <div>
                        <label className="font-bold text-gray-700">
                          If yes, date started
                        </label>
                        <input
                          name="throatStart"
                          type="date"
                          className="mt-1 w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-amber-400 focus:outline-none disabled:bg-gray-200"
                          disabled={setThroat}
                        />
                      </div>
                    </li>

                    <li className="space-y-2">
                      <span className="text-gray-700 font-bold">
                        Shortness of breath (Kinakapos sa paghinga)
                      </span>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 text-gray-700 mt-2 font-semibold">
                          <input
                            type="radio"
                            name="breath"
                            value="yes"
                            onChange={() => updateBreath(false)}
                            className="
                            w-4 h-4 cursor-pointer shrink-0 accent-amber-500
                            border-2 border-gray-400 rounded 
                            disabled:bg-gray-200 disabled:border-gray-300
                            "
                          />
                          <span className="cursor-pointer">Yes</span>
                        </label>

                        <label className="flex items-center gap-2 text-gray-700 mt-2 font-semibold">
                          <input
                            type="radio"
                            name="breath"
                            value="no"
                            onChange={() => updateBreath(true)}
                            className="
                            w-4 h-4 cursor-pointer shrink-0 accent-amber-500
                            border-2 border-gray-400 rounded
                            disabled:bg-gray-200 disabled:border-gray-300
                            "
                          />
                          <span className="cursor-pointer">No</span>
                        </label>
                      </div>

                      <div>
                        <label className="font-bold text-gray-700">
                          If yes, date started
                        </label>
                        <input
                          name="breathStart"
                          type="date"
                          className="mt-1 w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-amber-400 focus:outline-none disabled:bg-gray-200"
                          disabled={setBreath}
                        />
                      </div>
                    </li>

                    <li className="space-y-2">
                      <span className="text-gray-700 font-bold">
                        Difficulty of breathing (Hirap sa paghinga)
                      </span>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 text-gray-700 mt-2 font-semibold">
                          <input
                            type="radio"
                            name="diff"
                            value="yes"
                            onChange={() => updateDiff(false)}
                            className="
                            w-4 h-4 cursor-pointer shrink-0 accent-amber-500
                            border-2 border-gray-400 rounded 
                            disabled:bg-gray-200 disabled:border-gray-300
                            "
                          />
                          <span className="cursor-pointer">Yes</span>
                        </label>

                        <label className="flex items-center gap-2 text-gray-700 mt-2 font-semibold">
                          <input
                            type="radio"
                            name="diff"
                            value="no"
                            onChange={() => updateDiff(true)}
                            className="
                            w-4 h-4 cursor-pointer shrink-0 accent-amber-500
                            border-2 border-gray-400 rounded
                            disabled:bg-gray-200 disabled:border-gray-300
                            "
                          />
                          <span className="cursor-pointer">No</span>
                        </label>
                      </div>

                      <div>
                        <label className="font-bold text-gray-700">
                          If yes, date started
                        </label>
                        <input
                          name="diffStart"
                          type="date"
                          className="mt-1 w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-amber-400 focus:outline-none disabled:bg-gray-200"
                          disabled={setDiff}
                        />
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-extrabold text-black mt-4">
                    Authorization for Health Declaration Checklist
                  </h3>
                  <p className="font-semibold">
                    I hereby authorize University of Santo Tomas, to collect and
                    process the data indicated herein for the purpose of healthy
                    and safe environment. I understand that my personal
                    information is protected by RA 10173, Data Privacy Act of
                    2012, and that I am required by RA 11469, Bayanihan to Heal
                    as One Act, to provide truthful information.
                  </p>

                  <span className="font-bold">
                    UST:S042-00-F073 rev05 11/07/22
                  </span>
                </div>

                <div
                  className="
                    flex flex-col gap-3 mt-4
                    sm:flex-col
                    md:flex-row md:justify-end
                "
                >
                  <button
                    type="button"
                    onClick={saveRecord}
                    className="
                    bg-green-600 hover:bg-green-700 text-white font-bold p-2 rounded cursor-pointer
                    w-full md:w-auto
                    "
                  >
                    Save Health Declaration
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowModal(!showModal)}
                    className="
                    bg-red-600 hover:bg-red-700 text-white font-bold p-2 rounded cursor-pointer
                    w-full md:w-auto
                    "
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="p-6 flex flex-col gap-6">
          <div>
            <h3 className="text-amber-400 font-extrabold text-lg md:text-xl">
              ACTION PLAN:
            </h3>
            <div className="bg-cyan-100 p-4 sm:p-6 rounded-md mt-6">
              <span className="flex gap-2 mb-2">
                <FaInfoCircle className="text-slate-700" size={22} />
                <h4 className="text-md sm:text-lg font-bold text-slate-700">
                  You are <strong>required to accomplish </strong>the Health
                  Declaration Checklist if:
                </h4>
              </span>
              <ul className="list-disc pl-5 space-y-2">
                <li className="font-semibold text-sm sm:text-base text-slate-700">
                  You are experiencing symptoms such as fever, cough, sore
                  throat, shortness of breath, or any flu-like conditions.
                </li>
                <li className="font-semibold text-sm sm:text-base text-slate-700">
                  You had recent exposure to a confirmed or suspected infectious
                  disease case within the last 14 days.
                </li>
                <li className="font-semibold text-sm sm:text-base text-slate-700">
                  You recently traveled domestically or internationally,
                  especially to areas with reported health risks or outbreaks.
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-amber-400 font-extrabold text-lg md:text-xl">
              CASE RECORDS
            </h3>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full border border-slate-300 text-gray-700 min-w-[600px]">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 p-2 text-left">
                      Date Recorded
                    </th>
                    <th className="border border-slate-300 p-2 text-left">
                      Symptoms
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="border border-slate-300 p-2 text-left font-semibold">
                      22-JUL-2024 04:46 PM
                    </td>

                    <td className="border border-slate-300 p-2 text-left font-semibold">
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-md text-sm">
                          Flu (20-JUL-2024)
                        </span>
                        <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-md text-sm">
                          Cough (19-JUL-2024)
                        </span>
                        <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-md text-sm">
                          Fever (20-JUL-2024)
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </section>
  );
};

export default HDF;
