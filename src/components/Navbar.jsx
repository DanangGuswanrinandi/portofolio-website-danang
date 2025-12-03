import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const items = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const buttonRef = useRef(null);

  /* === CLOSE MENU WHEN CLICK OUTSIDE === */
  useEffect(() => {
    const handler = (e) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        !buttonRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      {/* === DESKTOP NAVBAR === */}
      <div className="hidden md:flex fixed top-7 left-1/2 -translate-x-1/2 z-50 flex-col items-center">

        {/* INDICATOR — Only when collapsed */}
        {!open && (
          <div className="absolute flex items-center gap-20 mt-3 animate-softblink pointer-events-none">
            <div>
              <span className="text-[#c8b6ff] font-semibold text-sm drop-shadow-[0_0_6px_#805bff]">
                Navbar
              </span>
              <span className="text-[#d7c6ff] text-lg drop-shadow-[0_0_6px_#805bff]">
                {`>>`}
              </span>
            </div>

            <div>
              <span className="text-[#d7c6ff] text-lg drop-shadow-[0_0_6px_#805bff]">
                {`<<`}
              </span>
              <span className="text-[#c8b6ff] font-semibold text-sm drop-shadow-[0_0_6px_#805bff]">
                Navbar
              </span>
            </div>
          </div>
        )}

        {/* DESKTOP WRAPPER */}
        <div
          className={`
            flex items-center gap-4
            bg-[#1b1327]/80 backdrop-blur-xl
            border border-[#2a1f39]
            shadow-[0_0_25px_#5e2eff40]
            rounded-full
            transition-all duration-500
            overflow-hidden
            ${open ? "px-6 py-1 w-[90vw] max-w-7xl" : "p-2 w-14"}
          `}
        >
          {/* BUTTON */}
          <div
            ref={buttonRef}
            onClick={() => setOpen(!open)}
            className="w-10 h-10 rounded-full bg-[#5e2eff] cursor-pointer 
            flex items-center justify-center shadow-[0_0_12px_#5e2eff]
            hover:scale-110 transition-all duration-300"
          >
            <span className="text-white font-bold text-xl">D</span>
          </div>

          {/* TITLE */}
          {open && (
            <h1 className="text-white font-semibold text-md drop-shadow-[0_0_8px_#5e2eff]">
              Danang.
            </h1>
          )}

          {/* NAV ITEMS */}
          {open && (
            <div className="flex-1 flex justify-center">
              <ul className="flex gap-6">
                {items.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.path}
                    className={({ isActive }) =>
                      `
                      px-4 py-2 mt-3 rounded-full text-md font-semibold transition-all duration-300 no-underline!
                      ${
                        isActive
                          ? "bg-white text-black shadow-[0_0_12px_#ffffff90]"
                          : "text-white hover:text-[#c4baff] hover:shadow-[0_0_8px_#5e2eff70]"
                      }
                    `
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
              </ul>
            </div>
          )}

          {/* CONTACT */}
          {open && (
            <Link
              to="/contact"
              className="
                px-6 py-2 rounded-full
                text-white font-semibold
                shadow-[0_0_15px_#5e2eff60]
                border border-[#5e2eff70]
                bg-[#5e2eff]/60
                hover:bg-[#7a54ff]
                hover:shadow-[0_0_20px_#7a54ff]
                transition-all duration-300
                no-underline!
              "
            >
              Contact Me
            </Link>
          )}
        </div>
      </div>

      
      {/* === MOBILE NAVBAR === */}
      <div className="md:hidden fixed top-5 right-5 z-50">
              
        {/* MOBILE TOGGLE USING <a> */}
        <a
          ref={buttonRef}
          onClick={() => setOpen(!open)}
          className="
            w-11 h-11 
            bg-[#5e2eff] 
            rounded-lg   
            cursor-pointer 
            flex items-center justify-center 
            shadow-[0_0_12px_#5e2eff]
            hover:scale-110 
            transition-all duration-300 
            text-white font-bold text-xl
            select-none
            fixed top-5 right-5    /* BIAR TETAP STAY */
            z-60
            no-underline!
          "
        >
          D
        </a>
              
        {/* MOBILE DROPDOWN */}
        {open && (
          <div
            ref={mobileMenuRef}
            className="
              mt-2
              bg-[#1b1327]/90 backdrop-blur-xl
              rounded-2xl border border-[#2a1f39]
              shadow-[0_0_20px_#5e2eff40]
              p-4 w-56
              animate-slideDown
              absolute right-0 top-0
              translate-y-14
            "
          >
            {/* ITEMS */}
            <ul className="flex flex-col gap-3 items-center w-full">
              {items.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `
                      block w-full text-center mr-6 py-2 rounded-lg text-md font-medium no-underline!
                      ${
                        isActive
                          ? "bg-white text-black shadow-[0_0_12px_#ffffff90]"
                          : "text-white hover:text-white hover:bg-[#5e2eff30]"
                      }
                    `
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </ul>
            
            {/* CONTACT BUTTON */}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="
                block text-center mt-4 px-4 py-2
                rounded-lg bg-[#5e2eff]/70 
                border border-[#7a54ff70]
                text-white font-semibold
                shadow-[0_0_15px_#5e2eff60]
                hover:bg-[#7a54ff]
                transition-all
                no-underline!
              "
            >
              Contact Me
            </Link>
          </div>
        )}
      </div>

      {/* ANIMATION CSS */}
      <style>{`
        .animate-softblink {
          animation: softBlink 1.6s infinite ease-in-out;
        }
        @keyframes softBlink {
          0%   { opacity: 0.3; transform: scale(0.98); }
          50%  { opacity: 1;   transform: scale(1); }
          100% { opacity: 0.3; transform: scale(0.98); }
        }
        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-10px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-slideDown {
          animation: slideDown 0.25s ease-out;
        }
      `}</style>
    </>
  );
}
