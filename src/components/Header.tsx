import { Menu, LogIn } from "lucide-react";
import Logo from "/img/logo.png";
import { useState } from "react";
import Sidebar from "./Sidebar";

function Header() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

      <header
        className="
        fixed top-0 left-0 w-full 
        bg-black/80 
        px-4 py-2 
        flex justify-between items-center 
        z-50
      "
      >
        <div className="flex items-center gap-4">
          <button
            className="text-white border border-gray-300 rounded p-2 flex items-center justify-center cursor-pointer"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            <Menu size={18} />
          </button>
          <div className="flex items-center gap-1">
            <img src={Logo} alt="logo" className="h-8 w-auto" />
            <span className="font-extrabold text-white">USTrack</span>
          </div>
        </div>

        <button className="flex items-center gap-2 text-white font-semibold cursor-pointer">
          <LogIn size={18} />
          <span className="hidden md:inline">Sign In</span>
        </button>
      </header>
    </>
  );
}

export default Header;
