import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PersonalInfo from "./pages/PersonalInfo";
import ContactInfo from "./pages/ContactInfo";
import Emergency from "./pages/Emergency";
import Philhealth from "./pages/Philhealth";
import Medical from "./pages/Medical";
import Social from "./pages/Social";
import Immunization from "./pages/Immunization";
import Physical from "./pages/PhysicalExam";
import { Toaster } from "react-hot-toast";
import Student from "./pages/StudentInfo";
import Contact from "./pages/Contact";
import Validation from "./pages/Validation";
import HDF from "./pages/HDF";
import MedConsult from "./pages/MedConsult";
import DentalConsult from "./pages/DentalConsult";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personal-info" element={<PersonalInfo />} />
        <Route path="/contact-info" element={<ContactInfo />} />
        <Route path="/emergency-info" element={<Emergency />} />
        <Route path="/philhealth-info" element={<Philhealth />} />
        <Route path="/medical-history" element={<Medical />} />
        <Route path="/social-history" element={<Social />} />
        <Route path="/immunization" element={<Immunization />} />
        <Route path="/physical-exam" element={<Physical />} />
        <Route path="/student-info" element={<Student />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/validation" element={<Validation />} />
        <Route path="/health-declaration" element={<HDF />} />
        <Route path="/medical-consultation" element={<MedConsult />} />
        <Route path="/dental-consultation" element={<DentalConsult />} />
      </Routes>
    </>
  );
}

export default App;
