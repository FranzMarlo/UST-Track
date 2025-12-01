import React from "react";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { medicalHistoryOptions } from "../data/medicalHistory";

const Medical: React.FC = () => {
  interface MedicalForm {
    medicalHistory: string[];
    others: string;
  }

  interface FormErrors {
    medicalHistory?: string;
    others?: string;
  }

  const [formData, setFormData] = useState<MedicalForm>({
    medicalHistory: [],
    others: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validate = () => {
    const newErrors: FormErrors = {};

    if (formData.medicalHistory.length === 0) {
      newErrors.medicalHistory = "Please select at least one condition";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      toast.success("Medical History Saved!");
      console.log(formData);
    }
  };

  const handleChange = (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

  const handleClear = () => {
    setFormData({
      medicalHistory: [],
      others: "",
    });

    setErrors({});
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
            Medical History
          </h3>
          <p className="text-sm font-semibold text-gray-600 text-center">
            Your health & medical history
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="mt-4">
            <label className="font-semibold text-gray-700">
              Medical History
            </label>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-2">
              {medicalHistoryOptions.map((item) => (
                <label
                  key={item}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <input
                    type="checkbox"
                    name="medicalHistory"
                    value={item}
                    checked={formData.medicalHistory.includes(item)}
                    onChange={(e) => {
                      const value = e.target.value;
                      const isChecked = e.target.checked;

                      setFormData((prev) => ({
                        ...prev,
                        medicalHistory: isChecked
                          ? [...prev.medicalHistory, value]
                          : prev.medicalHistory.filter((mh) => mh !== value),
                      }));
                    }}
                    className="w-4 h-4 cursor-pointer accent-amber-500 shrink-0"
                  />
                  <span className="cursor-pointer">{item}</span>
                </label>
              ))}
            </div>

            {errors.medicalHistory && (
              <p className="text-sm text-red-500 mt-1">
                {errors.medicalHistory}
              </p>
            )}
          </div>

          <div>
            <label className="font-semibold text-gray-700">Others</label>
            <textarea
              className="mt-1 w-full border border-slate-300 rounded-md p-2 h-24 resize-none focus:ring-2 focus:ring-amber-400 focus:outline-none"
              placeholder="Other Medical Conditions"
              name="others"
              value={formData.others}
              onChange={handleChange}
              
            ></textarea>
            <div className="bg-cyan-100 p-6">
              <ul className="list-disc pl-5">
                <li className="font-bold text-slate-700">
                  Use <strong className="font-extrabold">semi-colon (;)</strong>{" "}
                  to separate your entries.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-4 mt-6">
            <button
              type="button"
              onClick={handleClear}
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

export default Medical;
