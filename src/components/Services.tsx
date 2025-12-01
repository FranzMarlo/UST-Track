import { FaChevronCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Services() {
  return (
    <section className="m-4 sm:m-6 md:m-10" id="services">
      <div className="w-full h-auto flex justify-between items-center">
        <h2 className="font-extrabold text-base sm:text-lg md:text-xl">
          What would you like to access?
        </h2>
      </div>
      <div className="w-full mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
        <div className="bg-white border-2 border-slate-200 flex flex-col p-4 sm:p-5 gap-3 sm:gap-4 min-h-64 sm:min-h-72 md:min-h-80 shadow hover:shadow-lg transition-shadow">
          <img
            src="/img/services/patient-info.png"
            alt="Patient Info Icon"
            className="h-20 w-20 sm:h-24 sm:w-24 md:h-25 md:w-25"
          />
          <div className="flex flex-col gap-1">
            <h3 className="text-amber-400 font-extrabold text-base sm:text-lg">
              Patient Information
            </h3>
            <p className="text-xs sm:text-sm font-semibold">
              Your health & medical information
            </p>
          </div>
          <div className="flex flex-col">
            <Link
              to="/personal-info"
              className="flex gap-2 items-center p-0.5 rounded hover:bg-amber-50 hover:text-amber-500 transition-all duration-200"
            >
              <FaChevronCircleRight className="transition-transform duration-200 group-hover:translate-x-1 shrink-0 text-sm sm:text-base" />
              <p className="font-semibold text-sm sm:text-base">
                Personal Information
              </p>
            </Link>
            <Link
              to="/contact-info"
              className="flex gap-2 items-center p-0.5 rounded hover:bg-amber-50 hover:text-amber-500 transition-all duration-200"
            >
              <FaChevronCircleRight className="transition-transform duration-200 group-hover:translate-x-1 shrink-0 text-sm sm:text-base" />
              <p className="font-semibold text-sm sm:text-base">
                Contact Information
              </p>
            </Link>
            <Link
              to="/emergency-info"
              className="flex gap-2 items-center p-0.5 rounded hover:bg-amber-50 hover:text-amber-500 transition-all duration-200"
            >
              <FaChevronCircleRight className="transition-transform duration-200 group-hover:translate-x-1 shrink-0 text-sm sm:text-base" />
              <p className="font-semibold text-sm sm:text-base">
                Emergency Contact Information
              </p>
            </Link>
            <Link
              to="/philhealth-info"
              className="flex gap-2 items-center p-0.5 rounded hover:bg-amber-50 hover:text-amber-500 transition-all duration-200"
            >
              <FaChevronCircleRight className="transition-transform duration-200 group-hover:translate-x-1 shrink-0 text-sm sm:text-base" />
              <p className="font-semibold text-sm sm:text-base">
                Philhealth Information
              </p>
            </Link>
          </div>
        </div>

        <div className="bg-white border-2 border-slate-200 flex flex-col p-4 sm:p-5 gap-3 sm:gap-4 min-h-64 sm:min-h-72 md:min-h-80 shadow hover:shadow-lg transition-shadow">
          <img
            src="/img/services/track.png"
            alt="Health History Icon"
            className="h-20 w-20 sm:h-24 sm:w-24 md:h-25 md:w-25"
          />
          <div className="flex flex-col gap-1">
            <h3 className="text-amber-400 font-extrabold text-base sm:text-lg">
              Health History
            </h3>
            <p className="text-xs sm:text-sm font-semibold">
              Your health & medical history
            </p>
          </div>
          <div className="flex flex-col">
            <Link
              to="/medical-history"
              className="flex gap-2 items-center p-0.5 rounded hover:bg-amber-50 hover:text-amber-500 transition-all duration-200"
            >
              <FaChevronCircleRight className="transition-transform duration-200 group-hover:translate-x-1 shrink-0 text-sm sm:text-base" />
              <p className="font-semibold text-sm sm:text-base">
                Medical History
              </p>
            </Link>
            <Link
              to="/social-history"
              className="flex gap-2 items-center p-0.5 rounded hover:bg-amber-50 hover:text-amber-500 transition-all duration-200"
            >
              <FaChevronCircleRight className="transition-transform duration-200 group-hover:translate-x-1 shrink-0 text-sm sm:text-base" />
              <p className="font-semibold text-sm sm:text-base">
                Social History
              </p>
            </Link>
            <Link
              to="/immunization"
              className="flex gap-2 items-center p-0.5 rounded hover:bg-amber-50 hover:text-amber-500 transition-all duration-200"
            >
              <FaChevronCircleRight className="transition-transform duration-200 group-hover:translate-x-1 shrink-0 text-sm sm:text-base" />
              <p className="font-semibold text-sm sm:text-base">Immunization</p>
            </Link>
            <Link
              to="/physical-exam"
              className="flex gap-2 items-center p-0.5 rounded hover:bg-amber-50 hover:text-amber-500 transition-all duration-200"
            >
              <FaChevronCircleRight className="transition-transform duration-200 group-hover:translate-x-1 shrink-0 text-sm sm:text-base" />
              <p className="font-semibold text-sm sm:text-base">
                Physical Exam Status
              </p>
            </Link>
          </div>
        </div>

        <div className="bg-white border-2 border-slate-200 flex flex-col p-4 sm:p-5 gap-3 sm:gap-4 min-h-64 sm:min-h-72 md:min-h-80 shadow hover:shadow-lg transition-shadow">
          <img
            src="/img/services/medcert.png"
            alt="Medcert Icon"
            className="h-20 w-20 sm:h-24 sm:w-24 md:h-25 md:w-25"
          />
          <div className="flex flex-col gap-1">
            <h3 className="text-amber-400 font-extrabold text-base sm:text-lg">
              Medical Certificate
            </h3>
            <p className="text-xs sm:text-sm font-semibold">
              Your medical certificate validation
            </p>
          </div>
          <div className="flex flex-col">
            <Link
              to="/student-info"
              className="flex gap-2 items-center p-0.5 rounded hover:bg-amber-50 hover:text-amber-500 transition-all duration-200"
            >
              <FaChevronCircleRight className="transition-transform duration-200 group-hover:translate-x-1 shrink-0 text-sm sm:text-base" />
              <p className="font-semibold text-sm sm:text-base">
                Student Information
              </p>
            </Link>
            <Link
              to="/contact"
              className="flex gap-2 items-center p-0.5 rounded hover:bg-amber-50 hover:text-amber-500 transition-all duration-200"
            >
              <FaChevronCircleRight className="transition-transform duration-200 group-hover:translate-x-1 shrink-0 text-sm sm:text-base" />
              <p className="font-semibold text-sm sm:text-base">
                Contact Information
              </p>
            </Link>
            <Link
              to="/validation"
              className="flex gap-2 items-center p-0.5 rounded hover:bg-amber-50 hover:text-amber-500 transition-all duration-200"
            >
              <FaChevronCircleRight className="transition-transform duration-200 group-hover:translate-x-1 shrink-0 text-sm sm:text-base" />
              <p className="font-semibold text-sm sm:text-base">
                Apply For Validation
              </p>
            </Link>
          </div>
        </div>

        <div className="bg-white border-2 border-slate-200 flex flex-col p-4 sm:p-5 gap-3 sm:gap-4 min-h-64 sm:min-h-72 md:min-h-80 shadow hover:shadow-lg transition-shadow">
          <img
            src="/img/services/consituency.png"
            alt="Consituency Icon"
            className="h-20 w-20 sm:h-24 sm:w-24 md:h-25 md:w-25"
          />
          <div className="flex flex-col gap-1">
            <h3 className="text-amber-400 font-extrabold text-base sm:text-lg">
              Consituency Check
            </h3>
            <p className="text-xs sm:text-sm font-semibold">
              Your response is needed
            </p>
          </div>
          <div className="flex flex-col">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfPDTohtnozK8XkhkUeheUZfeEjey_DIS5Hxe8vQ0n9fgk0Ug/viewform?usp=sharing&ouid=103337615691391075524"
              className="flex gap-2 items-center p-0.5 rounded hover:bg-amber-50 hover:text-amber-500 transition-all duration-200"
            >
              <FaChevronCircleRight className="transition-transform duration-200 group-hover:translate-x-1 shrink-0 text-sm sm:text-base" />
              <p className="font-semibold text-sm sm:text-base">Open Forms</p>
            </a>
          </div>
        </div>

        <div className="bg-white border-2 border-slate-200 flex flex-col p-4 sm:p-5 gap-3 sm:gap-4 min-h-64 sm:min-h-72 md:min-h-80 shadow hover:shadow-lg transition-shadow">
          <img
            src="/img/services/hdf.png"
            alt="HDF Icon"
            className="h-20 w-20 sm:h-24 sm:w-24 md:h-25 md:w-25"
          />
          <div className="flex flex-col gap-1">
            <h3 className="text-amber-400 font-extrabold text-base sm:text-lg">
              Health Declaration
            </h3>
            <p className="text-xs sm:text-sm font-semibold">
              Your response is needed
            </p>
          </div>
          <div className="flex flex-col">
            <Link
              to="/health-declaration"
              className="flex gap-2 items-center p-0.5 rounded hover:bg-amber-50 hover:text-amber-500 transition-all duration-200"
            >
              <FaChevronCircleRight className="transition-transform duration-200 group-hover:translate-x-1 shrink-0 text-sm sm:text-base" />
              <p className="font-semibold text-sm sm:text-base">
                Open Health Declaraion Form
              </p>
            </Link>
          </div>
        </div>

        <div className="bg-white border-2 border-slate-200 flex flex-col p-4 sm:p-5 gap-3 sm:gap-4 min-h-64 sm:min-h-72 md:min-h-80 shadow hover:shadow-lg transition-shadow">
          <img
            src="/img/services/online-consultation.png"
            alt="Online Consultation Icon"
            className="h-20 w-20 sm:h-24 sm:w-24 md:h-25 md:w-25"
          />
          <div className="flex flex-col gap-1">
            <h3 className="text-amber-400 font-extrabold text-base sm:text-lg">
              Online Consultation
            </h3>
            <p className="text-xs sm:text-sm font-semibold">
              Online consultation without hassle
            </p>
          </div>
          <div className="flex flex-col">
            <Link
              to="/medical-consultation"
              className="flex gap-2 items-center p-0.5 rounded hover:bg-amber-50 hover:text-amber-500 transition-all duration-200"
            >
              <FaChevronCircleRight className="transition-transform duration-200 group-hover:translate-x-1 shrink-0 text-sm sm:text-base" />
              <p className="font-semibold text-sm sm:text-base">
                Medical Consultation
              </p>
            </Link>
            <Link
              to="/dental-consultation"
              className="flex gap-2 items-center p-0.5 rounded hover:bg-amber-50 hover:text-amber-500 transition-all duration-200"
            >
              <FaChevronCircleRight className="transition-transform duration-200 group-hover:translate-x-1 shrink-0 text-sm sm:text-base" />
              <p className="font-semibold text-sm sm:text-base">
                Dental Consultation
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
