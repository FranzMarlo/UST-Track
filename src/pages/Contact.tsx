import React from "react";
import toast from "react-hot-toast";

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Contact Information Saved!");
  };

  return (
    <section className="p-4 md:p-10 flex justify-center">
      <div className="bg-white border-2 border-slate-200 p-6 md:p-8 rounded-lg w-full max-w-3xl shadow-sm">
        <div className="flex flex-col items-center gap-2 mb-8">
          <img
            src="/img/services/patient-info.png"
            alt="Patient Info Icon"
            className="h-20 w-20 md:h-24 md:w-24"
          />
          <h3 className="text-amber-400 font-extrabold text-lg md:text-xl">
            Contact Information
          </h3>
          <p className="text-sm font-semibold text-gray-600 text-center">
            For medical certificate validation
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label className="font-semibold text-gray-700">Mobile Number</label>
            <input
              type="tel"
              className="mt-1 w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-amber-400 focus:outline-none"
              placeholder="Enter Mobile Number"
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700">Phone Number</label>
            <input
              type="tel"
              className="mt-1 w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-amber-400 focus:outline-none"
              placeholder="Enter Phone Number"
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-amber-400 focus:outline-none"
              placeholder="Enter Email"
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700">Facebook/Messenger Username</label>
            <input
              type="text"
              className="mt-1 w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-amber-400 focus:outline-none"
              placeholder="Enter Facebook/Messenger Username"
            />
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

export default Contact;
