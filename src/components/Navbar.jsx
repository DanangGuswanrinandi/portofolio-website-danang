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
  const buttonRef = useRef(null);

  return (
    <div className="fixed top-7 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">

      {/* === INDICATOR — muncul hanya saat COLLAPSE === */}
      {!open && (
        <div className="absolute flex items-center gap-20 mt-3 animate-softblink z-100 pointer-events-none">
          {/* LEFT TEXT */}
          <div>
          <span className="text-[#c8b6ff] font-semibold text-sm drop-shadow-[0_0_6px_#805bff]">
            Navbar
          </span>

          {/* LEFT ARROW */}
          <span className="text-[#d7c6ff] text-lg drop-shadow-[0_0_6px_#805bff]">
            {`>>`}
          </span>
          </div>

          <div>
          {/* RIGHT ARROW */}
          <span className="text-[#d7c6ff] text-lg drop-shadow-[0_0_6px_#805bff]">
            {`<<`}
          </span>

          {/* RIGHT TEXT */}
          <span className="text-[#c8b6ff] font-semibold text-sm drop-shadow-[0_0_6px_#805bff]">
            Navbar
          </span>
          </div>
        </div>
      )}

      {/* === WRAPPER NAVBAR === */}
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

        {/* — COLLAPSE BUTTON — */}
        <div
          ref={buttonRef}
          onClick={() => setOpen(!open)}
          className="w-10 h-10 rounded-full bg-[#5e2eff] cursor-pointer 
                     flex items-center justify-center shadow-[0_0_12px_#5e2eff]
                     hover:scale-110 transition-all duration-300"
        >
          <span className="text-white font-bold text-xl">D</span>
        </div>

        {/* — TITLE — */}
        {open && (
          <h1 className="text-white font-semibold text-md drop-shadow-[0_0_8px_#5e2eff]">
            Danang.
          </h1>
        )}

        {/* — NAV ITEMS — */}
        {open && (
          <div className="flex-1 flex justify-center">
            <ul className="flex gap-6 ">
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

        {/* — CONTACT BUTTON — */}
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
      `}</style>
    </div>
  );
}
