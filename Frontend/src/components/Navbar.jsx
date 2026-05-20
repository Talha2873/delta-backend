import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/services" },
  { label: "PORTFOLIO", href: "/portfolio" },
  { label: "EXPERTISE", href: "/expertise" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#060f07]/90 backdrop-blur-md border-b border-[#1e3a20]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-8">
        {/* LOGO */}

        <Link
          to="/"
          className="flex items-center gap-2 mr-auto no-underline"
        >
          <div className="w-8 h-8 rounded-md bg-[#b8ff57] flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
            >
              <polygon
                points="12,2 22,20 2,20"
                fill="#000"
              />
            </svg>
          </div>

          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#b8ff57] leading-none">
              DELTA
            </p>

            <p className="text-[10px] font-bold tracking-[0.2em] text-white leading-none">
              DEVELOPERS
            </p>
          </div>
        </Link>

        {/* NAV LINKS */}

        <div className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.label}
              to={l.href}
              className={({ isActive }) =>
                `text-xs font-bold tracking-widest transition-colors no-underline ${
                  isActive
                    ? "text-[#b8ff57]"
                    : "text-[#8aaa8a] hover:text-[#b8ff57]"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* BUTTONS */}

        <div className="flex items-center gap-3 ml-6">
          <Link
            to="/contact"
            className="hidden sm:block text-xs font-bold tracking-widest bg-[#b8ff57] text-black px-4 py-2 rounded-full hover:bg-[#d4ff80] transition-colors no-underline"
          >
            HIRE US
          </Link>

          <Link
            to="/contact"
            className="text-xs font-bold tracking-wide border border-[#2a4a2c] text-white px-4 py-2 rounded-full hover:border-[#b8ff57] hover:text-[#b8ff57] transition-colors whitespace-nowrap no-underline"
          >
            Free Audit →
          </Link>
        </div>
      </div>
    </nav>
  );
}