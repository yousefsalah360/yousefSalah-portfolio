export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.9)] z-50 flex flex-col items-center justify-center h-screen transition-all duration-300 ease-in-out ${
        menuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      } `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close menu"
      >
        X
      </button>

      <div className="flex flex-col items-center space-y-8">
        <a
          href="#home"
          className={`text-gray-300 hover:text-white transition-colors  ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          onClick={() => setMenuOpen(false)}
        >
          Home
        </a>
        <a
          href="#about"
          className={`text-gray-300 hover:text-white transition-colors ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>
        <a
          href="#projects"
          className={`text-gray-300 hover:text-white transition-colors ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          onClick={() => setMenuOpen(false)}
        >
          Projects
        </a>
        <a
          href="#contact"
          className={`text-gray-300 hover:text-white transition-colors ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>
      </div>
    </div>
  );
};
