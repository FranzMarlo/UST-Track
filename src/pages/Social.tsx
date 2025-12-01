import React from "react";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { FaCheck } from "react-icons/fa";
import { PiArrowCounterClockwiseBold } from "react-icons/pi";

const Social: React.FC = () => {
  const [isSmoker, setIsSmoker] = useState(false);
  const [smokingType, setSmokingType] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Social History Saved!");
  };

  const saveRecord = () => {
    toast.success("Record Saved!");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <section className="p-4 md:p-10 flex justify-center">
      <div className="bg-white border-2 border-slate-200 p-6 md:p-8 rounded-lg w-full max-w-3xl shadow-sm">
        <div className="flex flex-col items-center gap-2 mb-8">
          <img
            src="/img/services/track.png"
            alt="Health History Icon"
            className="h-20 md:h-24"
          />
          <h3 className="text-amber-400 font-extrabold text-lg md:text-xl">
            Social History
          </h3>
          <p className="text-sm font-semibold text-gray-600 text-center">
            Your health & medical history
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="mt-4 flex flex-col gap-3">
            <div>
              <label className="flex items-center gap-2 text-gray-700 font-semibold">
                <input
                  type="checkbox"
                  className="w-4 h-4 cursor-pointer accent-amber-500 shrink-0"
                  checked={isSmoker}
                  onChange={(e) => setIsSmoker(e.target.checked)}
                />
                <span className="cursor-pointer">Are you a smoker?</span>
              </label>
            </div>

            <div>
              <span className="text-gray-700 font-semibold">
                Do you use e-cigarettes (vapes) or cigarettes?
              </span>

              <label className="flex items-center gap-2 text-gray-700 mt-2 font-semibold">
                <input
                  type="radio"
                  name="smoking"
                  value="vape"
                  disabled={!isSmoker}
                  checked={smokingType === "vape"}
                  onChange={(e) => setSmokingType(e.target.value)}
                  className="
                    w-4 h-4 cursor-pointer shrink-0 accent-amber-500
                    appearance-none border-2 border-gray-400 rounded 
                    checked:bg-amber-500 checked:border-amber-500 disabled:bg-gray-200 disabled:border-gray-300
                "
                />
                <span className="cursor-pointer">E-cigarettes (Vapes)</span>
              </label>

              <label className="flex items-center gap-2 text-gray-700 mt-2 font-semibold">
                <input
                  type="radio"
                  name="smoking"
                  value="cigarette"
                  disabled={!isSmoker}
                  checked={smokingType === "cigarette"}
                  onChange={(e) => setSmokingType(e.target.value)}
                  className="
                    w-4 h-4 cursor-pointer shrink-0 accent-amber-500
                    appearance-none border-2 border-gray-400 rounded
                    checked:bg-amber-500 checked:border-amber-500 disabled:bg-gray-200 disabled:border-gray-300
                "
                />
                <span className="cursor-pointer">Cigarettes</span>
              </label>
            </div>

            <div>
              <label className="font-semibold text-gray-700">
                How many e-cigarettes do you purchase monthly?
              </label>
              <input
                name="vape"
                type="number"
                disabled={smokingType !== "vape"}
                className="mt-1 w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-amber-400 focus:outline-none disabled:bg-gray-200"
                placeholder="Enter Number"
              />
            </div>

            <div>
              <label className="font-semibold text-gray-700">
                How many cigarette sticks per day?
              </label>
              <input
                name="cigarette"
                type="number"
                disabled={smokingType !== "cigarette"}
                className="mt-1 w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-amber-400 focus:outline-none disabled:bg-gray-200"
                placeholder="Enter Number"
              />
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 text-gray-700 font-semibold">
              <input
                type="checkbox"
                className="w-4 h-4 cursor-pointer accent-amber-500 shrink-0"
              />
              <span className="cursor-pointer">Do you drink alcohol?</span>
            </label>
          </div>

          <div className="mt-4 flex flex-col gap-5">
            <h3 className="text-amber-400 font-extrabold text-lg md:text-xl">
              Obstetric History
            </h3>
            <span>
              <strong>Check</strong> the items that apply to you.
            </span>

            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-2 text-gray-700 font-semibold">
                <input
                  type="checkbox"
                  className="w-4 h-4 cursor-pointer accent-amber-500 shrink-0"
                />
                <span className="cursor-pointer">
                  Do you have a regular menstrual cycle?
                </span>
              </label>
              <input
                type="text"
                className="mt-1 w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-amber-400 focus:outline-none disabled:bg-gray-200"
                placeholder="Indicate cycle interval & duration"
              />
            </div>

            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-2 text-gray-700 font-semibold">
                <input
                  type="checkbox"
                  className="w-4 h-4 cursor-pointer accent-amber-500 shrink-0"
                />
                <span className="cursor-pointer">
                  Are you taking oral contraceptive pills (OCP)?
                </span>
              </label>
              <label className="flex items-center gap-2 text-gray-700 font-semibold">
                <input
                  type="checkbox"
                  className="w-4 h-4 cursor-pointer accent-amber-500 shrink-0"
                />
                <span className="cursor-pointer">Have you been pregnant?</span>
              </label>
              <input
                type="number"
                className="mt-1 w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-amber-400 focus:outline-none disabled:bg-gray-200"
                placeholder="If yes, how many times?"
              />
              <label className="flex items-center gap-2 text-gray-700 font-semibold">
                <input
                  type="checkbox"
                  className="w-4 h-4 cursor-pointer accent-amber-500 shrink-0"
                />
                <span className="cursor-pointer">
                  Any history of miscarriage?
                </span>
              </label>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-5">
            <h3 className="text-amber-400 font-extrabold text-lg md:text-xl">
              Surgical History
            </h3>
            <div className="bg-cyan-100 p-4 sm:p-6 rounded-md">
              <ul className="list-disc pl-5 space-y-2">
                <li className="font-semibold text-sm sm:text-base text-slate-700">
                  Specify the surgical operations you have undergone.
                </li>

                <li className="font-semibold text-sm sm:text-base text-slate-700">
                  <span className="flex flex-wrap sm:flex-nowrap items-center gap-1">
                    <strong className="font-extrabold">Click</strong>
                    <FaCheck className="text-green-600 inline-block w-4 h-4 sm:w-5 sm:h-5" />
                    <span>to save the record.</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <input
                type="text"
                className="mt-1 w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-amber-400 focus:outline-none disabled:bg-gray-200"
                placeholder="Date"
              />
              <input
                type="text"
                className="mt-1 w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-amber-400 focus:outline-none disabled:bg-gray-200"
                placeholder="Procedure"
              />
            </div>

            <div className="flex gap-4 mt-2">
              <button
                onClick={saveRecord}
                className="text-green-600 cursor-pointer hover:text-green-400"
                type="button"
              >
                <FaCheck size={20} />
              </button>
              <button className="text-gray-600 cursor-pointer hover:text-gray-400">
                <PiArrowCounterClockwiseBold size={25} />
              </button>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-5">
            <h3 className="text-amber-400 font-extrabold text-lg md:text-xl">
              Hospitalization History
            </h3>
            <div className="bg-cyan-100 p-4 sm:p-6 rounded-md">
              <ul className="list-disc pl-5 space-y-2">
                <li className="font-semibold text-sm sm:text-base text-slate-700">
                  Specify your hospitalization history.
                </li>

                <li className="font-semibold text-sm sm:text-base text-slate-700">
                  <span className="flex flex-wrap sm:flex-nowrap items-center gap-1">
                    <strong className="font-extrabold">Click</strong>
                    <FaCheck className="text-green-600 inline-block w-4 h-4 sm:w-5 sm:h-5" />
                    <span>to save the record.</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <input
                type="text"
                className="mt-1 w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-amber-400 focus:outline-none disabled:bg-gray-200"
                placeholder="Date"
              />
              <input
                type="text"
                className="mt-1 w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-amber-400 focus:outline-none disabled:bg-gray-200"
                placeholder="Procedure"
              />
            </div>

            <div className="flex gap-4 mt-2">
              <button
                onClick={saveRecord}
                className="text-green-600 cursor-pointer hover:text-green-400"
                type="button"
              >
                <FaCheck size={20} />
              </button>
              <button className="text-gray-600 cursor-pointer hover:text-gray-400">
                <PiArrowCounterClockwiseBold size={25} />
              </button>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-5">
            <h3 className="text-amber-400 font-extrabold text-lg md:text-xl">
              Traumas/Accidents
            </h3>
            <div className="bg-cyan-100 p-4 sm:p-6 rounded-md">
              <ul className="list-disc pl-5 space-y-2">
                <li className="font-semibold text-sm sm:text-base text-slate-700">
                  Specify the traumas/accidents you experienced.
                </li>

                <li className="font-semibold text-sm sm:text-base text-slate-700">
                  <span className="flex flex-wrap sm:flex-nowrap items-center gap-1">
                    <strong className="font-extrabold">Click</strong>
                    <FaCheck className="text-green-600 inline-block w-4 h-4 sm:w-5 sm:h-5" />
                    <span>to save the record.</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <input
                type="text"
                className="mt-1 w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-amber-400 focus:outline-none disabled:bg-gray-200"
                placeholder="Date"
              />
              <input
                type="text"
                className="mt-1 w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-amber-400 focus:outline-none disabled:bg-gray-200"
                placeholder="Procedure"
              />
            </div>

            <div className="flex gap-4 mt-2">
              <button
                onClick={saveRecord}
                className="text-green-600 cursor-pointer hover:text-green-400"
                type="button"
              >
                <FaCheck size={20} />
              </button>
              <button className="text-gray-600 cursor-pointer hover:text-gray-400">
                <PiArrowCounterClockwiseBold size={25} />
              </button>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-5">
            <h3 className="text-amber-400 font-extrabold text-lg md:text-xl">
              Family History
            </h3>
            <div className="bg-cyan-100 p-4 sm:p-6 rounded-md">
              <ul className="list-disc pl-5 space-y-2">
                <li className="font-semibold text-sm sm:text-base text-slate-700">
                  List any significant family medical history (heart disease,
                  diabetes, stroke, bleeding disorder, asthma, etc)
                </li>
              </ul>
            </div>

            <div>
              <textarea
                className="mt-1 w-full border border-slate-300 rounded-md p-2 h-24 resize-none focus:ring-2 focus:ring-amber-400 focus:outline-none"
                placeholder="Text goes here..."
                name="address"
              ></textarea>
            </div>

            <div className="bg-cyan-100 p-4 sm:p-6 rounded-md">
              <ul className="list-disc pl-5 space-y-2">
                <li className="font-semibold text-sm sm:text-base text-slate-700">
                  Use <strong className="font-extrabold">semi-colon (;)</strong>{" "}
                  to separate your entries.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-5">
            <h3 className="text-amber-400 font-extrabold text-lg md:text-xl">
              Allergies
            </h3>
            <div className="bg-cyan-100 p-4 sm:p-6 rounded-md">
              <ul className="list-disc pl-5 space-y-2">
                <li className="font-semibold text-sm sm:text-base text-slate-700">
                  Indicate your allergies (e.g. medicine, food, etc.)
                </li>
              </ul>
            </div>

            <div>
              <textarea
                className="mt-1 w-full border border-slate-300 rounded-md p-2 h-24 resize-none focus:ring-2 focus:ring-amber-400 focus:outline-none"
                placeholder="Text goes here..."
                name="address"
              ></textarea>
            </div>

            <div className="bg-cyan-100 p-4 sm:p-6 rounded-md">
              <ul className="list-disc pl-5 space-y-2">
                <li className="font-semibold text-sm sm:text-base text-slate-700">
                  Use <strong className="font-extrabold">semi-colon (;)</strong>{" "}
                  to separate your entries.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-5">
            <h3 className="text-amber-400 font-extrabold text-lg md:text-xl">
              Medications
            </h3>
            <div className="bg-cyan-100 p-4 sm:p-6 rounded-md">
              <ul className="list-disc pl-5 space-y-2">
                <li className="font-semibold text-sm sm:text-base text-slate-700">
                  List all medications and/or supplements you are taking (e.g. drugs/supplement, dossage, frequency)
                </li>
              </ul>
            </div>

            <div>
              <textarea
                className="mt-1 w-full border border-slate-300 rounded-md p-2 h-24 resize-none focus:ring-2 focus:ring-amber-400 focus:outline-none"
                placeholder="Text goes here..."
                name="address"
              ></textarea>
            </div>

            <div className="bg-cyan-100 p-4 sm:p-6 rounded-md">
              <ul className="list-disc pl-5 space-y-2">
                <li className="font-semibold text-sm sm:text-base text-slate-700">
                  Use <strong className="font-extrabold">semi-colon (;)</strong>{" "}
                  to separate your entries.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-4 mt-6">
            <button
              type="reset"
              className="cursor-pointer px-4 py-2 border border-slate-400 rounded-lg text-gray-700 font-semibold hover:bg-slate-100"
            >
              Clear
            </button>
            <button
              type="submit"
              className="cursor-pointer px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700"
            >
              Save Information
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Social;
