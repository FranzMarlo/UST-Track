import { FaStar, FaCircleQuestion, FaComments } from "react-icons/fa6";
import { IoInformationCircle, IoMegaphone } from "react-icons/io5";
import { PiFlagFill } from "react-icons/pi";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/20 z-40" onClick={onClose}></div>
      )}
      <aside
        className={`fixed top-[50px] left-0 h-[calc(100%-50px)] w-60 bg-black/80 backdrop-blur-md
      p-5 z-50 transform
        transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-5">
          <h5 className="text-xs font-extrabold text-white">MENU</h5>
        </div>

        <nav className="space-y-2">
          <a
            href="#announcements"
            onClick={(e) => handleSmoothScroll(e, "#announcements")}
            className="flex gap-2 items-center cursor-pointer text-white text-sm font-semibold hover:text-gray-400 transition-colors"
          >
            <IoMegaphone className="text-amber-400" size={20} />
            Announcements
          </a>
          <a
            href="#advisories"
            onClick={(e) => handleSmoothScroll(e, "#advisories")}
            className="flex gap-2 items-center cursor-pointer text-white text-sm font-semibold hover:text-gray-400 transition-colors"
          >
            <PiFlagFill className="text-amber-400" size={20} />
            Advisory
          </a>
          <a
            href="#services"
            onClick={(e) => handleSmoothScroll(e, "#services")}
            className="flex gap-2 items-center cursor-pointer text-white text-sm font-semibold hover:text-gray-400 transition-colors"
          >
            <FaStar className="text-amber-400" size={20} />
            Online Services
          </a>
          <a className="flex gap-2 items-center cursor-pointer text-white text-sm font-semibold hover:text-gray-400 transition-colors">
            <IoInformationCircle className="text-amber-400" size={20} />
            How To Login?
          </a>
          <a className="flex gap-2 items-center cursor-pointer text-white text-sm font-semibold hover:text-gray-400 transition-colors">
            <FaCircleQuestion className="text-amber-400" size={20} />
            Help & Support
          </a>
          <a className="flex gap-2 items-center cursor-pointer text-white text-sm font-semibold hover:text-gray-400 transition-colors">
            <FaComments className="text-amber-400" size={20} />
            Feedback
          </a>
        </nav>
      </aside>
    </>
  );
}
