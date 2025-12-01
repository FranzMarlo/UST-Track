import React from "react";
import { useEffect, useState } from "react";
import { FaUpload, FaPencilAlt, FaTrash } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { MdAddCircle } from "react-icons/md";
import toast from "react-hot-toast";
import ScrollToTopButton from "../components/ScrollToTopButton";

const Immunization: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const [showModal, setShowModal] = useState(false);

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
    setShowModal(!showModal)
    toast.success("Record Saved!");
  };


  return (
    <section className="p-4 md:p-10 flex justify-center">
      <div className="bg-white border-2 border-slate-200 w-full max-w-7xl shadow-sm">
        <div className="bg-amber-400 p-2 md:p-3">
          <h3 className="text-white font-extrabold">Immunization Records</h3>
        </div>
        <button
          className="bg-amber-400 text-white p-2 max-w-50 m-6 cursor-pointer rounded-md hover:bg-amber-300"
          onClick={() => setShowModal(true)}
        >
          <span className="font-bold flex items-center gap-1">
            <MdAddCircle size={20} />
            New Immunization Record
          </span>
        </button>

        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 cursor-pointer"
                onClick={() => setShowModal(false)}
              >
                <ImCross />
              </button>

              <h2 className="text-xl font-bold text-amber-500 mb-4">
                New Immunization Record
              </h2>

              <form className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm text-gray-600">
                    Vaccine Type
                  </label>
                  <select className="w-full border border-gray-300 p-2 rounded">
                    <option value="">Select Vaccine Type</option>
                    <option value="Cervical Cancer">Cervical Cancer</option>
                    <option value="COVID-19">COVID-19</option>
                    <option value="Flu">Flu</option>
                    <option value="Hepatitis A">Hepatitis A</option>
                    <option value="Hepatitis B">Hepatitis B</option>
                    <option value="Hepatitis AB">Hepatitis AB</option>
                    <option value="MMR">MMR (Measles, Mumps, Rubella)</option>
                    <option value="Tetanus Toxoid">Tetanus Toxoid</option>
                    <option value="Varicella">Varicella</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-600">Dose</label>
                  <select className="w-full border border-gray-300 p-2 rounded">
                    <option value="">Select Dose</option>
                    <option value="1-dose-only">1-dose-only</option>
                    <option value="1st">1st</option>
                    <option value="2nd">2nd</option>
                    <option value="3rd">3rd</option>
                    <option value="Booster">Booster</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-600">
                    Date Administered
                  </label>
                  <input
                    type="date"
                    className="w-full border border-gray-300 p-2 rounded"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600">
                    Vaccination Card Remarks
                  </label>
                  <textarea className="w-full border border-gray-300 p-2 rounded"></textarea>
                </div>

                <button
                  type="button"
                  onClick={saveRecord}
                  className="bg-amber-400 hover:bg-amber-500 text-white font-bold p-2 rounded"
                >
                  Save Record
                </button>
              </form>
            </div>
          </div>
        )}

        <div className="p-6 flex flex-col gap-6">
          <div className="bg-cyan-100 p-4 sm:p-6 rounded-md">
            <ul className="list-disc pl-5 space-y-2">
              <li className="font-semibold text-sm sm:text-base text-slate-700">
                Listed below are your records encoded in the system, along with
                the records you have added.
              </li>
              <li className="font-semibold text-sm sm:text-base text-slate-700">
                <strong className="font-extrabold">Upload</strong> your
                vaccination card for each vaccine by clicking the upload icon.
                If a single photo contains all doses for a vaccine, you may
                upload that instead.
              </li>
              <li className="font-semibold text-sm sm:text-base text-slate-700">
                You can only{" "}
                <strong className="font-extrabold">edit or delete</strong> the
                records you have added.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-amber-400 font-extrabold text-lg md:text-xl">
              CERVICAL CANCER
            </h3>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full border border-slate-300 text-gray-700 min-w-[600px]">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 p-2 text-left w-30">
                      Dose
                    </th>
                    <th className="border border-slate-300 p-2 text-left w-80">
                      Date Administered
                    </th>
                    <th className="border border-slate-300 p-2 text-left">
                      Vaccination Card Remarks
                    </th>
                    <th className="border border-slate-300 p-2 text-left w-30">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td
                      className="border border-slate-300 p-2 text-center"
                      colSpan={4}
                    >
                      No Records Found.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-amber-400 font-extrabold text-lg md:text-xl">
              COVID-19
            </h3>

            <div className="bg-cyan-100 p-4 sm:p-6 rounded-md mt-4">
              <ul className="list-disc pl-5 space-y-2">
                <li className="font-semibold text-sm sm:text-base text-slate-700">
                  Use the{" "}
                  <strong className="font-extrabold">1-dose only</strong> option
                  for vaccines that require only a single dose (e.g. J&J/
                  Janssen).
                </li>
                <li className="font-semibold text-sm sm:text-base text-slate-700">
                  If you have received a{" "}
                  <strong className="font-extrabold">
                    primary and booster series
                  </strong>{" "}
                  vaccination, please encode the individual doses and
                  <strong className="font-extrabold"> upload</strong> your
                  vaccination card.
                </li>
              </ul>
            </div>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full border border-slate-300 text-gray-700 min-w-[600px]">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 p-2 text-left w-30">
                      Dose
                    </th>
                    <th className="border border-slate-300 p-2 text-left w-80">
                      Date Administered
                    </th>
                    <th className="border border-slate-300 p-2 text-left">
                      Vaccination Card Remarks
                    </th>
                    <th className="border border-slate-300 p-2 text-left w-30">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="border border-slate-300 p-2 text-left">
                      2nd
                    </td>
                    <td className="border border-slate-300 p-2 text-left">
                      2021-11-25
                    </td>
                    <td className="border border-slate-300 p-2 text-left">
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-1">
                          <h4 className="text-slate-700 font-bold underline">
                            245CCFCA-D3E704194-84C9-BCA2C8BABC34.jpeg
                          </h4>
                          <button className="text-red-400 cursor-pointer">
                            <ImCross size={15} />
                          </button>
                        </div>
                        <span className="font-semibold">
                          (2024-08-01 11:19 PM)
                        </span>
                      </div>
                    </td>
                    <td className="border border-slate-300 p-2 text-center">
                      <div className="flex gap-2 justify-center">
                        <button className="text-slate-700">
                          <FaUpload size={20} />
                        </button>
                        <button className="text-slate-700">
                          <FaPencilAlt size={20} />
                        </button>
                        <button className="text-red-500">
                          <FaTrash size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-2 text-left">
                      1st
                    </td>
                    <td className="border border-slate-300 p-2 text-left">
                      2021-11-05
                    </td>
                    <td className="border border-slate-300 p-2 text-left"></td>
                    <td className="border border-slate-300 p-2 text-center">
                      <div className="flex gap-2 justify-center">
                        <button className="text-slate-700">
                          <FaUpload size={20} />
                        </button>
                        <button className="text-slate-700">
                          <FaPencilAlt size={20} />
                        </button>
                        <button className="text-red-500">
                          <FaTrash size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-amber-400 font-extrabold text-lg md:text-xl">
              FLU
            </h3>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full border border-slate-300 text-gray-700 min-w-[600px]">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 p-2 text-left w-30">
                      Dose
                    </th>
                    <th className="border border-slate-300 p-2 text-left w-80">
                      Date Administered
                    </th>
                    <th className="border border-slate-300 p-2 text-left">
                      Vaccination Card Remarks
                    </th>
                    <th className="border border-slate-300 p-2 text-left w-30">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="border border-slate-300 p-2 text-left">
                      1st
                    </td>
                    <td className="border border-slate-300 p-2 text-left"></td>
                    <td className="border border-slate-300 p-2 text-left"></td>
                    <td className="border border-slate-300 p-2 text-left">
                      <button className="text-slate-700">
                        <FaUpload size={20} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-amber-400 font-extrabold text-lg md:text-xl">
              HEPATITIS A
            </h3>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full border border-slate-300 text-gray-700 min-w-[600px]">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 p-2 text-left w-30">
                      Dose
                    </th>
                    <th className="border border-slate-300 p-2 text-left w-80">
                      Date Administered
                    </th>
                    <th className="border border-slate-300 p-2 text-left">
                      Vaccination Card Remarks
                    </th>
                    <th className="border border-slate-300 p-2 text-left w-30">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td
                      className="border border-slate-300 p-2 text-center"
                      colSpan={4}
                    >
                      No Record Found.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-amber-400 font-extrabold text-lg md:text-xl">
              HEPATITIS B
            </h3>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full border border-slate-300 text-gray-700 min-w-[600px]">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 p-2 text-left w-30">
                      Dose
                    </th>
                    <th className="border border-slate-300 p-2 text-left w-80">
                      Date Administered
                    </th>
                    <th className="border border-slate-300 p-2 text-left">
                      Vaccination Card Remarks
                    </th>
                    <th className="border border-slate-300 p-2 text-left w-30">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="border border-slate-300 p-2 text-left">
                      Booster
                    </td>
                    <td className="border border-slate-300 p-2 text-left"></td>
                    <td className="border border-slate-300 p-2 text-left"></td>
                    <td className="border border-slate-300 p-2 text-left">
                      <button className="text-slate-700">
                        <FaUpload size={20} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-amber-400 font-extrabold text-lg md:text-xl">
              HEPATITIS AB
            </h3>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full border border-slate-300 text-gray-700 min-w-[600px]">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 p-2 text-left w-30">
                      Dose
                    </th>
                    <th className="border border-slate-300 p-2 text-left w-80">
                      Date Administered
                    </th>
                    <th className="border border-slate-300 p-2 text-left">
                      Vaccination Card Remarks
                    </th>
                    <th className="border border-slate-300 p-2 text-left w-30">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td
                      className="border border-slate-300 p-2 text-center"
                      colSpan={4}
                    >
                      No Record Found.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-amber-400 font-extrabold text-lg md:text-xl">
              MMR (MEASLES, MUMPS, RUBELLA)
            </h3>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full border border-slate-300 text-gray-700 min-w-[600px]">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 p-2 text-left w-30">
                      Dose
                    </th>
                    <th className="border border-slate-300 p-2 text-left w-80">
                      Date Administered
                    </th>
                    <th className="border border-slate-300 p-2 text-left">
                      Vaccination Card Remarks
                    </th>
                    <th className="border border-slate-300 p-2 text-left w-30">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="border border-slate-300 p-2 text-left">
                      2nd
                    </td>
                    <td className="border border-slate-300 p-2 text-left">
                      2024-12-17
                    </td>
                    <td className="border border-slate-300 p-2 text-left"></td>
                    <td className="border border-slate-300 p-2 text-left">
                      <button className="text-slate-700">
                        <FaUpload size={20} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-amber-400 font-extrabold text-lg md:text-xl">
              TETANUS TOXOID
            </h3>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full border border-slate-300 text-gray-700 min-w-[600px]">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 p-2 text-left w-30">
                      Dose
                    </th>
                    <th className="border border-slate-300 p-2 text-left w-80">
                      Date Administered
                    </th>
                    <th className="border border-slate-300 p-2 text-left">
                      Vaccination Card Remarks
                    </th>
                    <th className="border border-slate-300 p-2 text-left w-30">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="border border-slate-300 p-2 text-left">
                      2nd
                    </td>
                    <td className="border border-slate-300 p-2 text-left">
                      2024-12-17
                    </td>
                    <td className="border border-slate-300 p-2 text-left"></td>
                    <td className="border border-slate-300 p-2 text-left">
                      <button className="text-slate-700">
                        <FaUpload size={20} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-amber-400 font-extrabold text-lg md:text-xl">
              VARICELLA
            </h3>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full border border-slate-300 text-gray-700 min-w-[600px]">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 p-2 text-left w-30">
                      Dose
                    </th>
                    <th className="border border-slate-300 p-2 text-left w-80">
                      Date Administered
                    </th>
                    <th className="border border-slate-300 p-2 text-left">
                      Vaccination Card Remarks
                    </th>
                    <th className="border border-slate-300 p-2 text-left w-30">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="border border-slate-300 p-2 text-left">
                      2nd
                    </td>
                    <td className="border border-slate-300 p-2 text-left">
                      2024-12-17
                    </td>
                    <td className="border border-slate-300 p-2 text-left"></td>
                    <td className="border border-slate-300 p-2 text-left">
                      <button className="text-slate-700">
                        <FaUpload size={20} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-amber-400 font-extrabold text-lg md:text-xl">
              TETANUS ANTIOXIN
            </h3>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full border border-slate-300 text-gray-700 min-w-[600px]">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 p-2 text-left w-30">
                      Dose
                    </th>
                    <th className="border border-slate-300 p-2 text-left w-80">
                      Date Administered
                    </th>
                    <th className="border border-slate-300 p-2 text-left">
                      Vaccination Card Remarks
                    </th>
                    <th className="border border-slate-300 p-2 text-left w-30">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td
                      className="border border-slate-300 p-2 text-center"
                      colSpan={4}
                    >
                      No Record Found.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-amber-400 font-extrabold text-lg md:text-xl">
              TETANUS DIPTHERIA
            </h3>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full border border-slate-300 text-gray-700 min-w-[600px]">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 p-2 text-left w-30">
                      Dose
                    </th>
                    <th className="border border-slate-300 p-2 text-left w-80">
                      Date Administered
                    </th>
                    <th className="border border-slate-300 p-2 text-left">
                      Vaccination Card Remarks
                    </th>
                    <th className="border border-slate-300 p-2 text-left w-30">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td
                      className="border border-slate-300 p-2 text-center"
                      colSpan={4}
                    >
                      No Record Found.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-amber-400 font-extrabold text-lg md:text-xl">
              TETANUS DIPTHERIA ACELLULAR PERTUSSIS
            </h3>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full border border-slate-300 text-gray-700 min-w-[600px]">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 p-2 text-left w-30">
                      Dose
                    </th>
                    <th className="border border-slate-300 p-2 text-left w-80">
                      Date Administered
                    </th>
                    <th className="border border-slate-300 p-2 text-left">
                      Vaccination Card Remarks
                    </th>
                    <th className="border border-slate-300 p-2 text-left w-30">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td
                      className="border border-slate-300 p-2 text-center"
                      colSpan={4}
                    >
                      No Record Found.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-amber-400 font-extrabold text-lg md:text-xl">
              TETANUS GLOBULIN
            </h3>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full border border-slate-300 text-gray-700 min-w-[600px]">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 p-2 text-left w-30">
                      Dose
                    </th>
                    <th className="border border-slate-300 p-2 text-left w-80">
                      Date Administered
                    </th>
                    <th className="border border-slate-300 p-2 text-left">
                      Vaccination Card Remarks
                    </th>
                    <th className="border border-slate-300 p-2 text-left w-30">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td
                      className="border border-slate-300 p-2 text-center"
                      colSpan={4}
                    >
                      No Record Found.
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

export default Immunization;
