// src/components/Navbar.tsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/MAI.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: "Home", href: "/" },
    { label: "Benefit", href: "/benefit" },
    { label: "About", href: "/about" },
    { label: "How it works", href: "/how-it-works" },
    { label: "Support", href: "/contact" },
  ];

  return (
    <>
      <nav className="shadow-lg fixed w-full z-50 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-brand-600">
                <img src={logo} alt="MAI" className="w-10" />
              </Link>
            </div>

            {/* Primary Nav (Desktop) */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              {links.map(({ label, href }) => {
                const isActive = location.pathname === href;
                return (
                  <Link
                    key={label}
                    to={href}
                    className={`inline-flex items-center px-3 py-2 text-lg font-medium rounded-lg transition-all duration-200 ${
                      isActive
                        ? "text-white bg-[#3390D5] shadow-md"
                        : "text-gray-700 hover:text-brand-600 hover:bg-blue-50"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>

            {/* Auth Buttons (Desktop) */}
            <div className="hidden md:flex md:items-center space-x-4">
              <a
                href="https://app.joinonemai.com/signin"
                className="px-4 py-2 text-lg font-medium text-[#3390D5] hover:text-brand-700 transition duration-300"
              >
                Sign In
              </a>
              <a
                href="https://app.joinonemai.com/signup"
                className="px-6 py-2 bg-[#3390D5] text-white rounded-lg font-semibold hover:bg-brand-700 transition duration-300"
              >
                Register
              </a>
            </div>

            {/* Hamburger (Mobile) */}
            <div className="flex items-center md:hidden">
              <button
                aria-label="Toggle menu"
                onClick={() => setOpen((v) => !v)}
                className="text-gray-700 focus:outline-none"
              >
                {!open ? (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                ) : (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white shadow-lg absolute top-20 left-0 w-full border-t border-gray-200 z-40">
            {links.map(({ label, href }) => {
              const isActive = location.pathname === href;
              return (
                <Link
                  key={label}
                  to={href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 text-lg font-medium transition-all duration-200 ${
                    isActive
                      ? "text-white bg-[#3390D5] shadow-inner font-semibold"
                      : "text-gray-700 hover:bg-blue-50 hover:text-brand-600"
                  }`}
                >
                  {label}
                </Link>
              );
            })}

            <div className="border-t border-gray-200 px-4 py-3">
              <a
                href="https://app.joinonemai.com/signin"
                onClick={() => setOpen(false)}
                className="block w-full text-center px-4 py-2 text-lg text-brand-600 hover:bg-gray-100"
              >
                Sign In
              </a>
              <a
                href="https://app.joinonemai.com/signup"
                onClick={() => setOpen(false)}
                className="block w-full text-center mt-2 px-4 py-2 bg-[#3390D5] text-white rounded-lg font-semibold hover:bg-brand-700"
              >
                Register
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20" />
    </>
  );
}