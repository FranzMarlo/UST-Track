import React from "react";
import { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { FaFilePdf } from "react-icons/fa6";
import { FaFileImage } from "react-icons/fa";
import { MdSend, MdVerified } from "react-icons/md";
import toast from "react-hot-toast";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { FaCheckCircle, FaSave, FaBookOpen, FaExclamationCircle } from "react-icons/fa";
import { Verified } from "lucide-react";

const Validation: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const [showModal, setShowModal] = useState(false);

  const [showSendModal, setShowSendModal] = useState(false);

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

  useEffect(() => {
    if (showSendModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showSendModal]);

  const saveRecord = () => {
    setShowModal(!showModal);
    toast.success("Attachment Added!");
  };

  const sendRecord = () => {
    setShowSendModal(!showSendModal);
    toast.success("Medical Certificate Sent To Professor!");
  };

  return (
    <section className="p-4 md:p-10 flex justify-center">
      <div className="bg-white border-2 border-slate-200 w-full max-w-7xl shadow-sm">
        <div className="bg-amber-400 p-2 md:p-3">
          <h3 className="text-white font-extrabold">
            Medical Certificate Validation
          </h3>
        </div>

        <div className="m-6 mb-0 flex flex-col md:flex-row gap-4">
          <button
            className="bg-green-600 text-white p-2 cursor-pointer rounded-md hover:bg-green-400"
            onClick={() => setShowModal(true)}
          >
            <span className="font-bold flex items-center gap-1">
              <MdVerified size={20} />
              Apply For Validation
            </span>
          </button>
          <button
            className="bg-amber-400 text-white p-2 cursor-pointer rounded-md hover:bg-amber-300"
            onClick={() => setShowSendModal(true)}
          >
            <span className="font-bold flex items-center gap-1">
              <MdSend size={20} />
              Send To Professor
            </span>
          </button>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6 relative">
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 cursor-pointer"
                onClick={() => setShowModal(false)}
              >
                <ImCross />
              </button>

              <h2 className="text-xl font-bold text-amber-500 mb-4">
                Apply For Validation
              </h2>

              <form className="flex flex-col gap-4">
                <div>
                  <label className="font-semibold text-gray-700">
                    Upload Attachments
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
                    />
                    <span className="text-gray-600">
                      "Click to upload attachments"
                    </span>
                  </label>
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

        {showSendModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-6 relative">
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 cursor-pointer"
                onClick={() => setShowSendModal(false)}
              >
                <ImCross />
              </button>

              <h2 className="text-xl font-bold text-amber-500 mb-4">
                Send To Professor
              </h2>

              <form className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm text-gray-600">Name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded"
                    placeholder="Enter Name"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600">
                    University Email
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded"
                    placeholder="Enter University Email"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600">Faculty</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded"
                    placeholder="Enter Faculty"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600">
                    Course Code
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded"
                    placeholder="Enter Course Code"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600">Section</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 p-2 rounded"
                    placeholder="Enter Section"
                  />
                </div>

                <button
                  type="button"
                  onClick={sendRecord}
                  className="bg-amber-400 hover:bg-amber-500 text-white font-bold p-2 rounded"
                >
                  Send Record
                </button>
              </form>
            </div>
          </div>
        )}

        <div className="p-6 flex flex-col gap-6">
          <div>
            <h3 className="text-amber-400 font-extrabold text-lg md:text-xl">
              ATTACHMENTS
            </h3>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full border border-slate-300 text-gray-700 min-w-[600px]">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="border border-slate-300 p-2 text-left">
                      Document
                    </th>
                    <th className="border border-slate-300 p-2 text-left">
                      Date Submitted
                    </th>
                    <th className="border border-slate-300 p-2 text-left">
                      Activity
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td className="border border-slate-300 p-2 text-left">
                      <span className="flex items-center gap-2 font-semibold">
                        <FaFilePdf size={20} />
                        Medical Certificate.pdf
                      </span>
                    </td>
                    <td className="border border-slate-300 p-2 text-left font-semibold">
                      22-JUL-2024 04:46 PM
                    </td>
                    <td className="border border-slate-300 p-2 text-left font-semibold"></td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-2 text-left">
                      <span className="flex items-center gap-2 font-semibold">
                        <FaFileImage size={20} />
                        2X2 ID photo.png
                      </span>
                    </td>
                    <td className="border border-slate-300 p-2 text-left font-semibold">
                      22-JUL-2024 04:46 PM
                    </td>
                    <td className="border border-slate-300 p-2 text-left font-semibold"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

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
                      19-JUL-2024 10:00 AM
                    </td>
                    <td className="border border-slate-300 p-2 text-left">
                      <span className="flex items-center gap-2 font-semibold">
                        <FaSave size={20} />
                        Submitted
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-2 text-left font-semibold">
                      20-JUL-2024 10:00 AM
                    </td>
                    <td className="border border-slate-300 p-2 text-left">
                      <span className="flex items-center gap-2 font-semibold">
                        <FaBookOpen size={20} />
                        For Health Service Review
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-2 text-left font-semibold">
                      21-JUL-2024 10:00 AM
                    </td>
                    <td className="border border-slate-300 p-2 text-left">
                      <span className="flex items-center gap-2 font-semibold">
                        <Verified size={20} />
                        Verified Medical Certificate
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-2 text-left font-semibold">
                      22-JUL-2024 03:21 PM
                    </td>
                    <td className="border border-slate-300 p-2 text-left">
                      <span className="flex items-center gap-2 text-green-600 font-semibold">
                        <FaCheckCircle size={20} />
                        Sent To Professor
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

          <div>
            <h3 className="text-amber-400 font-extrabold text-lg md:text-xl">
              REMARKS
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
                      19-JUL-2024 10:00 AM
                    </td>
                    <td className="border border-slate-300 p-2 text-left">
                      <span className="flex items-center gap-2 font-semibold">
                        <FaExclamationCircle
                          size={20}
                          className="text-red-600"
                        />
                        Lacking Requirements
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-2 text-left font-semibold">
                      20-JUL-2024 10:00 AM
                    </td>
                    <td className="border border-slate-300 p-2 text-left">
                      <span className="flex items-center gap-2 font-semibold">
                        <FaExclamationCircle
                          size={20}
                          className="text-red-600"
                        />
                        Need to be validated by a diplomate doctor
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 p-2 text-left font-semibold">
                      21-JUL-2024 10:00 AM
                    </td>
                    <td className="border border-slate-300 p-2 text-left">
                      <span className="flex items-center gap-2 font-semibold">
                        <FaExclamationCircle
                          size={20}
                          className="text-red-600"
                        />
                        Documents are in order, please reupload
                      </span>
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

export default Validation;
