import React from "react";
import { useEffect, useState } from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";
import DoctorScheduleModal from "../components/Sched";
import { Clock, Calendar } from "lucide-react";
import MedTable from "../components/MedTable";
import AppointmentModal from "../components/AppointmentModal";

const MedConsult: React.FC = () => {
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

  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const formatted = date.toLocaleString("en-US", {
        weekday: "short", // Mon, Tue, Wed...
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setCurrentTime(formatted);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="p-4 md:p-10 flex flex-col items-center">
      <div className="flex w-full flex-col md:flex-row md:items-center max-w-7xl gap-2">
        <h2 className="text-black text-2xl font-extrabold">
          Online Consultation:
        </h2>
        <h4 className="text-red-700 text-xl font-extrabold">
          Monday to Saturday @ 08:00 AM - 05:00 PM
        </h4>
      </div>

      <div className="bg-white border-2 border-slate-200 w-full max-w-7xl shadow-sm">
        <div className="bg-amber-400 p-2 md:p-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <h3 className="text-white font-extrabold text-center md:text-left">
            Medical Cases
          </h3>

          <div className="flex items-center gap-2 justify-center md:justify-end text-white font-semibold">
            <Clock className="w-5 h-5" />
            <span>{currentTime}</span>
          </div>
        </div>

        <div className="m-6 mb-0 flex flex-col md:flex-row gap-4">
          <button
            className="bg-sky-700 text-white p-2 cursor-pointer rounded-md hover:bg-sky-800"
            onClick={() => setShowModal(true)}
          >
            <span className="font-bold flex items-center gap-1">
              <Calendar size={20} />
              Doctors' Schedule
            </span>
          </button>
          <AppointmentModal />
        </div>

        <DoctorScheduleModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        />

        <div className="p-6 flex flex-col gap-6">
          <div>
            <MedTable />
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </section>
  );
};

export default MedConsult;
