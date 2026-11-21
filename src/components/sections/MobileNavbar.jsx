import React from "react";


export const MobileNavbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full border-b border-white/15 bg-slate-950/85 backdrop-blur-2xl z-40 flex flex-col items-center justify-center
                     transition-all duration-300 ease-in-out

                     ${
                       menuOpen
                         ? "h-screen opacity-100 pointer-events-auto"
                         : "h-0 opacity-0 pointer-events-none"
                     }
                   `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-cyan-100 text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Men u"
      >
        &times;
      </button>

      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-cyan-50 my-4 transform transition-all duration-300
                    ${
                      menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                    }        
            `}
      >
        Home
      </a>
      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-cyan-50 my-4 transform transition-all duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }        
    `}
      >
        About
      </a>
      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-cyan-50 my-4 transform transition-all duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }        
    `}
      >
        Projects
      </a>
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-cyan-50 my-4 transform transition-all duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }        
    `}
      >
        Contact
      </a>
      <a
        href="/resume.pdf"
        download="Gokul_Babu_Resume.pdf"
        target="_blank"
        rel="noreferrer"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-emerald-400 my-4 transform transition-all duration-300
            ${
              menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }        
    `}
      >
        Resume (PDF) ↓
      </a>
    </div>
  );
};
