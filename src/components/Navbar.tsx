// src/components/Navbar.tsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import defaultLogo from "@/assets/MAI.png";
import ngLogo from "@/assets/mai-ng.png";
import euLogo from "@/assets/mai-eu.png";
import { useRegion } from "@/context/RegionContext";

export default function Navbar() {
  const { region } = useRegion();
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'signin' | 'register'>('signin');
  const location = useLocation();

  const logoSrc = region === "NG" ? ngLogo : region === "EU" ? euLogo : defaultLogo;

  const links = [
    { label: "Home", href: "/" },
    { label: "How it works", href: "/how-it-works" },
    { label: "Benefits", href: "/benefits" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Support", href: "/contact" },
  ];

  const handleAuthClick = (type: 'signin' | 'register') => {
    setModalType(type);
    setShowModal(true);
    setOpen(false);
  };

  const handleSelection = (role: 'user' | 'affiliate') => {
    const urls = {
      signin: {
        user: 'https://app.joinonemai.com/signin',
        affiliate: 'https://x.joinonemai.com/signin'
      },
      register: {
        user: 'https://app.joinonemai.com/signup',
        affiliate: 'https://x.joinonemai.com/affilator-create-account'
      }
    };

    window.location.href = urls[modalType][role];
    setShowModal(false);
  };

  return (
    <>
      <nav className="shadow-lg fixed w-full z-50 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-normal text-brand-600">
                <img src={logoSrc} alt="MAI" className="w-10" />
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
                    className={`inline-flex items-center px-3 py-2 text-lg font-medium rounded-lg transition-all duration-200 ${isActive
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
              <button
                onClick={() => handleAuthClick('signin')}
                className="px-4 py-2 text-lg font-medium text-[#3390D5] hover:text-brand-700 transition duration-300"
              >
                Sign In
              </button>
              <button
                onClick={() => handleAuthClick('register')}
                className="px-6 py-2 bg-[#3390D5] text-white rounded-lg font-medium hover:bg-brand-700 transition duration-300"
              >
                Register
              </button>
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
                  className={`block px-4 py-3 text-lg font-medium transition-all duration-200 ${isActive
                    ? "text-white bg-[#3390D5] shadow-inner font-medium"
                    : "text-gray-700 hover:bg-blue-50 hover:text-brand-600"
                    }`}
                >
                  {label}
                </Link>
              );
            })}

            <div className="border-t border-gray-200 px-4 py-3">
              <button
                onClick={() => handleAuthClick('signin')}
                className="block w-full text-center px-4 py-2 text-lg text-brand-600 hover:bg-gray-100"
              >
                Sign In
              </button>
              <button
                onClick={() => handleAuthClick('register')}
                className="block w-full text-center mt-2 px-4 py-2 bg-[#3390D5] text-white rounded-lg font-medium hover:bg-brand-700"
              >
                Register
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      {/* Selection Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 relative">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-normal text-gray-800 mb-2">
                {modalType === 'signin' ? 'Sign In As' : 'Register As'}
              </h2>
              <p className="text-gray-600">
                Choose your account type to continue
              </p>
            </div>

            {/* Selection Buttons */}
            <div className="space-y-4">
              <button
                onClick={() => handleSelection('user')}
                className="w-full py-4 px-6 bg-[#3390D5] text-white rounded-xl font-medium hover:bg-brand-700 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-center space-x-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-lg">User Account</span>
                </div>
              </button>

              <button
                onClick={() => handleSelection('affiliate')}
                className="w-full py-4 px-6 bg-white border-2 border-[#3390D5] text-[#3390D5] rounded-xl font-medium hover:bg-blue-50 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-center space-x-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-lg">Affiliate Account</span>
                </div>
              </button>
            </div>

            <p className="text-sm text-gray-500 text-center mt-6">
              {modalType === 'signin'
                ? 'Select the account type you registered with'
                : 'Not sure? Choose User Account for regular access'}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
