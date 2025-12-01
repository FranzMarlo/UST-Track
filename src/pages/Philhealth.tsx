import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";

const Philhealth: React.FC = () => {
  interface PhilhealthForm {
    philhealth: string;
    mdrFile: File | null;
  }

  interface FormErrors {
    philhealth?: string;
    mdrFile?: string;
  }

  const [formData, setFormData] = useState<PhilhealthForm>({
    philhealth: "",
    mdrFile: null,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!formData.philhealth.trim()) {
      newErrors.philhealth = "Please enter your philhealth number";
    }

    if (!/^\d{11}$/.test(formData.philhealth)) {
      newErrors.philhealth = "PhilHealth number must be 11 digits";
    }

    if (!formData.mdrFile) {
      newErrors.mdrFile = "Please upload your PhilHealth ID or MDR file";
    } else {
      const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];

      if (!allowedTypes.includes(formData.mdrFile.type)) {
        newErrors.mdrFile = "Only JPG, PNG, or PDF files are allowed";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      toast.success("Philhealth Information Saved!");
      console.log(formData);
    }
  };

  const handleClear = () => {
    setFormData({
      philhealth: "",
      mdrFile: null,
    });

    setErrors({});
  };

  return (
    <section className="p-4 md:p-10 flex justify-center">
      <div className="bg-white border-2 border-slate-200 p-6 md:p-8 rounded-lg w-full max-w-3xl shadow-sm">
        <div className="flex flex-col items-center gap-2 mb-8">
          <img
            src="/img/services/philhealth.png"
            alt="PhilHealth Icon"
            className="h-20 md:h-24"
          />
          <h3 className="text-amber-400 font-extrabold text-lg md:text-xl">
            Philhealth Information
          </h3>
          <p className="text-sm font-semibold text-gray-600 text-center">
            Your health & medical information
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label className="font-semibold text-gray-700">
              Philhealth Number
            </label>
            <input
              name="philhealth"
              type="tel"
              maxLength={11}
              className="mt-1 w-full border border-slate-300 rounded-md p-2 
             focus:ring-2 focus:ring-amber-400 focus:outline-none"
              placeholder="Enter PhilHealth Number (11 digits)"
              value={formData.philhealth}
              onChange={(e) => {
                const value = e.target.value;

                if (/^\d*$/.test(value)) {
                  setFormData({ ...formData, philhealth: value });
                }
              }}
            />

            {errors.philhealth && (
              <p className="text-sm text-red-500 mt-1">{errors.philhealth}</p>
            )}
          </div>

          <div>
            <label className="font-semibold text-gray-700">
              Upload PhilHealth ID / MDR
            </label>

            <label
              className="mt-1 flex items-center justify-center w-full cursor-pointer 
               border-2 border-dashed border-slate-300 rounded-md p-4 
               hover:border-amber-400 transition"
            >
              <input
                type="file"
                accept="image/*,application/pdf"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setFormData({ ...formData, mdrFile: file });
                  }
                }}
              />
              <span className="text-gray-600">
                {formData.mdrFile
                  ? formData.mdrFile.name
                  : "Click to upload PhilHealth ID or MDR"}
              </span>
            </label>

            {errors.mdrFile && (
              <p className="text-sm text-red-500 mt-1">{errors.mdrFile}</p>
            )}
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

export default Philhealth;
