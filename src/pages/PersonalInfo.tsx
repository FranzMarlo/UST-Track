import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";

const PersonalInfo: React.FC = () => {
  interface PersonalInfoForm {
    fullName: string;
    gender: string;
    age: string;
    personType: string;
    college: string;
    civilStatus: string;
    citizenship: string;
    religion: string;
    address: string;
  }

  interface FormErrors {
    fullName?: string;
    gender?: string;
    age?: string;
    personType?: string;
    college?: string;
    civilStatus?: string;
    citizenship?: string;
    religion?: string;
    address?: string;
  }

  const [formData, setFormData] = useState<PersonalInfoForm>({
    fullName: "",
    gender: "",
    age: "",
    personType: "",
    college: "",
    civilStatus: "",
    citizenship: "",
    religion: "",
    address: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validate = () => {
    const newErrors: Partial<PersonalInfoForm> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
    }

    if (!formData.gender.trim()) {
      newErrors.gender = "Please select your gender";
    }

    if (!formData.age.trim()) {
      newErrors.age = "Please enter your age";
    }

    const ageValue = Number(formData.age);

    if (ageValue <= 0) {
      newErrors.age = "Please enter a valid age";
    }

    if (!formData.personType.trim()) {
      newErrors.personType = "Please select person type";
    }

    if (!formData.college.trim()) {
      newErrors.college = "Please select college department";
    }

    if (!formData.civilStatus.trim()) {
      newErrors.civilStatus = "Please select your civil status";
    }

    if (!formData.citizenship.trim()) {
      newErrors.citizenship = "Please enter your citizenship";
    }

    if (!formData.religion.trim()) {
      newErrors.religion = "Please enter your religion";
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
      toast.success("Patient Information Saved!");
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
      fullName: "",
      gender: "",
      age: "",
      personType: "",
      college: "",
      civilStatus: "",
      citizenship: "",
      religion: "",
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
            Patient Information
          </h3>
          <p className="text-sm font-semibold text-gray-600 text-center">
            Your health & medical information
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <label className="font-semibold text-gray-700">Full Name</label>
            <input
              name="fullName"
              type="text"
              className="mt-1 w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-amber-400 focus:outline-none"
              placeholder="Enter Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && (
              <p className="text-sm text-red-500 mt-1">{errors.fullName}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="font-semibold text-gray-700">Gender</label>
              <select
                className="mt-1 w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {errors.gender && (
                <p className="text-sm text-red-500 mt-1">{errors.gender}</p>
              )}
            </div>

            <div>
              <label className="font-semibold text-gray-700">Age</label>
              <input
                type="number"
                className="mt-1 w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                placeholder="Enter Age"
                value={formData.age}
                onChange={handleChange}
                name="age"
              />
              {errors.age && (
                <p className="text-sm text-red-500 mt-1">{errors.age}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="font-semibold text-gray-700">Person Type</label>
              <select
                className="mt-1 w-full border border-slate-300 rounded-md p-2 bg-white focus:ring-2 focus:ring-amber-400 focus:outline-none"
                name="personType"
                value={formData.personType}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select Person Type
                </option>
                <option value="Student">Student</option>
                <option value="Faculty">Faculty</option>
                <option value="Educational Worker">Educational Worker</option>
              </select>
              {errors.personType && (
                <p className="text-sm text-red-500 mt-1">{errors.personType}</p>
              )}
            </div>

            <div>
              <label className="font-semibold text-gray-700">
                College Department
              </label>
              <select
                className="mt-1 w-full border border-slate-300 rounded-md p-2 bg-white focus:ring-2 focus:ring-amber-400 focus:outline-none"
                name="college"
                value={formData.college}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select College Department
                </option>
                <option value="College of Accountancy">
                  College of Accountancy
                </option>
                <option value="College of Architecture">
                  College of Architecture
                </option>
                <option value="College of Education">
                  College of Education
                </option>
                <option value="College of Fine Arts and Design">
                  College of Fine Arts and Design
                </option>
                <option value="College of Information and Computing Sciences">
                  College of Information and Computing Sciences
                </option>
              </select>
              {errors.college && (
                <p className="text-sm text-red-500 mt-1">{errors.college}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="font-semibold text-gray-700">
                Civil Status
              </label>
              <select
                className="mt-1 w-full border border-slate-300 rounded-md p-2 bg-white focus:ring-2 focus:ring-amber-400 focus:outline-none"
                name="civilStatus"
                value={formData.civilStatus}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select Civil Status
                </option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Widowed">Widowed</option>
                <option value="Divorced">Divorced</option>
              </select>
              {errors.civilStatus && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.civilStatus}
                </p>
              )}
            </div>

            <div>
              <label className="font-semibold text-gray-700">Citizenship</label>
              <input
                type="text"
                className="mt-1 w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                placeholder="Enter Citizenship"
                name="citizenship"
                value={formData.citizenship}
                onChange={handleChange}
              />
              {errors.citizenship && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.citizenship}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="font-semibold text-gray-700">Religion</label>
            <input
              type="text"
              className="mt-1 w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-amber-400 focus:outline-none"
              placeholder="Enter Religion"
              value={formData.religion}
              onChange={handleChange}
              name="religion"
            />
            {errors.religion && (
              <p className="text-sm text-red-500 mt-1">{errors.religion}</p>
            )}
          </div>

          <div>
            <label className="font-semibold text-gray-700">
              Complete Address
            </label>
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

export default PersonalInfo;
