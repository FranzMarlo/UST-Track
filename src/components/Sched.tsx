import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, Clock, Calendar } from "lucide-react";

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

interface Appointment {
  id: string;
  date: string;
  time: string;
  patientName: string;
  type: string;
}

interface DoctorScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DoctorScheduleModal: React.FC<DoctorScheduleModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [view, setView] = useState<"calendar" | "schedule">("calendar");

  // Sample appointments data
  const [appointments] = useState<Appointment[]>([
    {
      id: "1",
      date: "2024-11-30",
      time: "09:00 AM",
      patientName: "John Smith",
      type: "Check-up",
    },
    {
      id: "2",
      date: "2024-11-30",
      time: "10:30 AM",
      patientName: "Sarah Johnson",
      type: "Follow-up",
    },
    {
      id: "3",
      date: "2024-12-02",
      time: "02:00 PM",
      patientName: "Mike Davis",
      type: "Consultation",
    },
  ]);


  const timeSlots: TimeSlot[] = [
    { id: "1", time: "09:00 AM", available: true },
    { id: "2", time: "09:30 AM", available: true },
    { id: "3", time: "10:00 AM", available: false },
    { id: "4", time: "10:30 AM", available: true },
    { id: "5", time: "11:00 AM", available: true },
    { id: "6", time: "02:00 PM", available: true },
    { id: "7", time: "02:30 PM", available: false },
    { id: "8", time: "03:00 PM", available: true },
    { id: "9", time: "03:30 PM", available: true },
    { id: "10", time: "04:00 PM", available: true },
  ];

  const getDaysInMonth = (date: Date): (Date | null)[] => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: (Date | null)[] = [];

    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const formatDate = (date: Date): string => {
    return date.toISOString().split("T")[0];
  };

  const getAppointmentsForDate = (date: Date): Appointment[] => {
    const dateStr = formatDate(date);
    return appointments.filter((apt) => apt.date === dateStr);
  };

  const hasAppointments = (date: Date): boolean => {
    return getAppointmentsForDate(date).length > 0;
  };

  const previousMonth = (): void => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const nextMonth = (): void => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const handleDateClick = (date: Date): void => {
    setSelectedDate(date);
    setView("schedule");
  };

  const days = getDaysInMonth(currentDate);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const isToday = (date: Date): boolean => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="bg-amber-400 text-white p-6 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Doctor's Schedule</h2>
                <p className="text-amber-50 text-sm mt-1">
                 View doctors' appointments and availability
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-amber-700 hover:bg-opacity-20 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex border-b">
              <button
                onClick={() => setView("calendar")}
                className={`flex-1 py-3 font-medium transition-colors ${
                  view === "calendar"
                    ? "text-amber-600 border-b-2 border-amber-400"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Calendar View
              </button>
              <button
                onClick={() => setView("schedule")}
                className={`flex-1 py-3 font-medium transition-colors ${
                  view === "schedule"
                    ? "text-amber-600 border-b-2 border-amber-400"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Schedule View
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {view === "calendar" ? (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <button
                      onClick={previousMonth}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <h3 className="text-xl font-bold text-gray-800">
                      {monthNames[currentDate.getMonth()]}{" "}
                      {currentDate.getFullYear()}
                    </h3>
                    <button
                      onClick={nextMonth}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="grid grid-cols-7 gap-2">
                    {dayNames.map((day) => (
                      <div
                        key={day}
                        className="text-center text-sm font-semibold text-gray-600 py-2"
                      >
                        {day}
                      </div>
                    ))}
                    {days.map((day, idx) => (
                      <div
                        key={idx}
                        onClick={() => day && handleDateClick(day)}
                        className={`aspect-square p-2 rounded-lg transition-all ${
                          day
                            ? "cursor-pointer hover:bg-amber-100 hover:shadow-md"
                            : ""
                        } ${
                          day && isToday(day)
                            ? "bg-amber-400 text-white hover:bg-amber-500"
                            : day
                            ? "bg-white border border-gray-200"
                            : ""
                        }`}
                      >
                        {day && (
                          <div className="flex flex-col h-full">
                            <span
                              className={`text-sm font-medium ${
                                isToday(day) ? "text-white" : "text-gray-800"
                              }`}
                            >
                              {day.getDate()}
                            </span>
                            {hasAppointments(day) && (
                              <div className="mt-auto">
                                <div
                                  className={`w-2 h-2 rounded-full mx-auto ${
                                    isToday(day) ? "bg-white" : "bg-amber-400"
                                  }`}
                                ></div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {selectedDate
                        ? `Schedule for ${selectedDate.toLocaleDateString(
                            "en-US",
                            {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}`
                        : "Select a date to view schedule"}
                    </h3>
                  </div>

                  {selectedDate ? (
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          Scheduled Appointments
                        </h4>
                        <div className="space-y-2">
                          {getAppointmentsForDate(selectedDate).length > 0 ? (
                            getAppointmentsForDate(selectedDate).map((apt) => (
                              <div
                                key={apt.id}
                                className="bg-amber-50 border border-amber-300 rounded-lg p-4 hover:shadow-md transition-shadow"
                              >
                                <div className="flex items-start justify-between">
                                  <div>
                                    <p className="font-semibold text-gray-800">
                                      {apt.patientName}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                      {apt.type}
                                    </p>
                                  </div>
                                  <div className="flex items-center gap-1 text-amber-600">
                                    <Clock className="w-4 h-4" />
                                    <span className="text-sm font-medium">
                                      {apt.time}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            ))
                          ) : (
                            <p className="text-gray-500 text-center py-4">
                              No appointments scheduled
                            </p>
                          )}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-3 flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          Available Time Slots
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {timeSlots.map((slot) => (
                            <button
                              key={slot.id}
                              disabled={!slot.available}
                              className={`py-3 px-4 rounded-lg font-medium transition-all ${
                                slot.available
                                  ? "bg-green-50 text-green-700 border border-green-200 hover:bg-green-100 cursor-pointer"
                                  : "bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed"
                              }`}
                            >
                              {slot.time}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12 text-gray-500">
                      <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p>Please select a date from the calendar view</p>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="border-t p-4 bg-gray-50 flex justify-end gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DoctorScheduleModal;
