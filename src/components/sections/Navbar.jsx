
import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 border-b border-white/15 bg-slate-950/45 backdrop-blur-2xl">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white tracking-tight">
            {" "}
            Gokul<span className="text-cyan-300">Babu</span>{" "}
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-blue-100"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-slate-200/90 hover:text-cyan-200 transition-colors duration-300"
            >
              {" "}
              Home
            </a>
            <a
              href="#about"
              className="text-slate-200/90 hover:text-cyan-200 transition-colors duration-300"
            >
              {" "}
              About{" "}
            </a>
            <a
              href="#projects"
              className="text-slate-200/90 hover:text-cyan-200 transition-colors duration-300"
            >
              {" "}
              Projects{" "}
            </a>
            <a
              href="#contact"
              className="text-slate-200/90 hover:text-cyan-200 transition-colors duration-300"
            >
              {" "}
              Contact{" "}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
