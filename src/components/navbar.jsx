import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
    
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4 ">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-2xl text-white font-bold">
            {""}
            YOUSEF<span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent text-center ">SITE</span>
          </a>
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors font-bold"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors font-bold"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors font-bold"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors font-bold"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
