
import { useState } from "react";
import { Link } from "react-router";

const links = [
  { path: "/", label: "Home" },
  { path: "/skills", label: "Skills" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a0a0a]/60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to={'/'} className="font-mono font-bold text-3xl text-[#c8f65d] tracking-tight ">
          AZP
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `text-xs uppercase tracking-widest transition-all duration-300 hover:[text-shadow:0_0_15px_#c8f65d,0_0_30px_#c8f65d] hover:scale-105 ${
                  isActive ? "text-[#c8f65d]" : "text-white/40 hover:text-[#c8f65d]"
                }`
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-1"
        >
          <span className={`block w-5 h-px bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-px bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0a0a0a] flex flex-row gap-6 justify-center py-4">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-xs uppercase tracking-widest transition-all duration-300 hover:[text-shadow:0_0_15px_#c8f65d,0_0_30px_#c8f65d] hover:scale-105 ${
                  isActive ? "text-[#c8f65d]" : "text-white/40 hover:text-[#c8f65d]"
                }`
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}