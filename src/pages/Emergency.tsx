import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";

const Emergency: React.FC = () => {
  interface EmergencyForm {
    contact: string;
    relationship: string;
    mobileNumber: string;
    email: string;
    address: string;
    zipcode: string;
  }

  interface FormErrors {
    contact?: string;
    relationship?: string;
    mobileNumber?: string;
    email?: string;
    address?: string;
    zipcode?: string;
  }

  const [formData, setFormData] = useState<EmergencyForm>({
    contact: "",
    relationship: "",
    mobileNumber: "",
    email: "",
    address: "",
    zipcode: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validate = () => {
    const newErrors: Partial<EmergencyForm> = {};
    if (!formData.contact.trim()) {
      newErrors.contact = "Please enter contact person";
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Please enter contact no. for contact person";
    }

    if (!/^09\d{9}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Please enter a valid PH mobile number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter email of contact person";
    }

    if (!formData.relationship.trim()) {
      newErrors.relationship = "Please select relationship to contact person";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Please enter address of contact person";
    }

    if (!formData.zipcode.trim()) {
      newErrors.zipcode = "Please enter zip code of contact person";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      toast.success("Emergency Contact Information Saved!");
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
      contact: "",
      relationship: "",
      mobileNumber: "",
      email: "",
      address: "",
      zipcode: "",
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
            Emergency Contact Information
          </h3>
          <p className="text-sm font-semibold text-gray-600 text-center">
            Your health & medical information
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label className="font-semibold text-gray-700">
              Contact Person
            </label>
            <input
              name="contact"
              type="text"
              className="mt-1 w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-amber-400 focus:outline-none"
              placeholder="Enter Contact Person Name"
              value={formData.contact}
              onChange={handleChange}
            />
            {errors.contact && (
              <p className="text-sm text-red-500 mt-1">{errors.contact}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="font-semibold text-gray-700">
                Relationship To Contact Person
              </label>
              <select
                className="mt-1 w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                name="relationship"
                value={formData.relationship}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select Relationship To Contact Person
                </option>
                <option value="Guardian">Guardian</option>
                <option value="Parent">Parent</option>
                <option value="Brother">Brother</option>
                <option value="Sister">Sister</option>
                <option value="Grandparent">Grandparent</option>
                <option value="Uncle">Uncle</option>
                <option value="Auntie">Auntie</option>
                <option value="Cousin">Cousin</option>
                <option value="Spouse">Spouse</option>
                <option value="Daughter">Daughter</option>
                <option value="Son">Son</option>
                <option value="Father">Father</option>
                <option value="Mother">Mother</option>
                <option value="Mother-in-law">Mother-in-law</option>
                <option value="Father-in-law">Father-in-law</option>
              </select>
              {errors.relationship && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.relationship}
                </p>
              )}
            </div>

            <div>
              <label className="font-semibold text-gray-700">
                Primary Contact No.
              </label>
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
                <p className="text-sm text-red-500 mt-1">
                  {errors.mobileNumber}
                </p>
              )}
            </div>
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

          <div>
            <label className="font-semibold text-gray-700">Zip Code</label>
            <input
              type="text"
              name="zipcode"
              maxLength={4}
              placeholder="Enter Zip Code"
              value={formData.zipcode}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value) && value.length <= 4) {
                  setFormData({ ...formData, zipcode: value });
                }
              }}
              className="mt-1 w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-amber-400 focus:outline-none"
            />
            {errors.zipcode && (
              <p className="text-sm text-red-500 mt-1">{errors.zipcode}</p>
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

export default Emergency;
