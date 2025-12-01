import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";

const ContactInfo: React.FC = () => {
  interface ContactInfoForm {
    mobileNumber: string;
    otherContact: string;
    email: string;
    username: string;
    address: string;
  }

  interface FormErrors {
    mobileNumber?: string;
    otherContact?: string;
    email?: string;
    username?: string;
    address?: string;
  }

  const [formData, setFormData] = useState<ContactInfoForm>({
    mobileNumber: "",
    otherContact: "",
    email: "",
    address: "",
    username: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validate = () => {
    const newErrors: Partial<ContactInfoForm> = {};

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Please enter your mobile number";
    }

    if (!/^09\d{9}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber =
        "Please enter a valid PH mobile number";
    }

    if (!formData.otherContact.trim()) {
      newErrors.otherContact = "Please enter other contact number";
    }

    if (!/^09\d{9}$/.test(formData.otherContact)) {
      newErrors.otherContact =
        "Please enter a valid PH mobile number";
    }

    if (
      formData.otherContact == formData.mobileNumber &&
      formData.mobileNumber.trim()
    ) {
      newErrors.otherContact = "Please enter different contact number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    }

    if (!formData.username.trim()) {
      newErrors.username = "Please enter your Facebook/Messenger username";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Please enter your address";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      toast.success("Contact Information Saved!");
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
      mobileNumber: "",
      otherContact: "",
      email: "",
      username: "",
      address: "",
    });

    setErrors({});
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
            Your health & medical information
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label className="font-semibold text-gray-700">Mobile Number</label>
            <input
              name="mobileNumber"
              type="tel"
              pattern="09\d{9}"
              maxLength={11}
              className="mt-1 w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-amber-400 focus:outline-none"
              placeholder="Enter Mobile Number"
              value={formData.mobileNumber}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value) && value.length <= 11) {
                  setFormData({ ...formData, mobileNumber: value });
                }
              }}
            />
            {errors.mobileNumber && (
              <p className="text-sm text-red-500 mt-1">{errors.mobileNumber}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="font-semibold text-gray-700">
                Other Contact No.
              </label>
              <input
                name="otherContact"
                type="tel"
                pattern="09\d{9}"
                maxLength={11}
                className="mt-1 w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                placeholder="Enter Mobile Number"
                value={formData.otherContact}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*$/.test(value) && value.length <= 11) {
                    setFormData({ ...formData, otherContact: value });
                  }
                }}
              />
              {errors.otherContact && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.otherContact}
                </p>
              )}
            </div>

            <div>
              <label className="font-semibold text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                name="email"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          <div>
            <label className="font-semibold text-gray-700">
              Facebook/Messenger Username
            </label>
            <input
              type="text"
              className="mt-1 w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-amber-400 focus:outline-none"
              placeholder="Enter Facebook/Messenger Username"
              value={formData.username}
              onChange={handleChange}
              name="username"
            />
            {errors.username && (
              <p className="text-sm text-red-500 mt-1">{errors.username}</p>
            )}
          </div>

          <div>
            <label className="font-semibold text-gray-700">Residence</label>
            <textarea
              className="mt-1 w-full border border-slate-300 rounded-md p-2 h-24 resize-none focus:ring-2 focus:ring-amber-400 focus:outline-none"
              placeholder="House No., Street, Barangay, City, Province"
              name="address"
              value={formData.address}
              onChange={handleChange}
            ></textarea>
            {errors.address && (
              <p className="text-sm text-red-500 mt-1">{errors.address}</p>
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

export default ContactInfo;
