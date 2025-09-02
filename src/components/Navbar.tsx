// src/components/Navbar.tsx
import { useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/MAI.png";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyzjYnO2dy0slHRNpXQbj097OlsTqjhoJtVCPxEYCPcXUSHnqU85fFVC6zr_eKPfTff/exec"; // Google Apps Script endpoint

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // ===== Early Perks popup state (mirrors Home.tsx) =====
  const [showEmailPopup, setShowEmailPopup] = useState(false);

  // Email form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("Portugal");
  const [countryOther, setCountryOther] = useState("");
  const [phone, setPhone] = useState("");
  const [consented, setConsented] = useState(false);
  const [submitMsg, setSubmitMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const EU_COUNTRIES = useMemo(
    () => [
      "Austria","Belgium","Bulgaria","Croatia","Cyprus","Czechia (Czech Republic)","Denmark","Estonia","Finland",
      "France","Germany","Greece","Hungary","Ireland","Italy","Latvia","Lithuania","Luxembourg","Malta","Netherlands",
      "Poland","Portugal","Romania","Slovakia","Slovenia","Spain","Sweden",
    ],
    []
  );

  // ===== Submit to Google Sheet (same behavior as Home.tsx) =====
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const selected = country;
    const finalCountry = selected === "__other" ? (countryOther || "").trim() : selected;

    // Basic validation parity
    if (!email.trim()) {
      setSubmitMsg({ ok: false, text: "Please enter a valid email." });
      return;
    }
    if (selected === "__other" && !finalCountry) {
      setSubmitMsg({ ok: false, text: "Please type your country." });
      return;
    }
    if (!consented) {
      setSubmitMsg({ ok: false, text: "Please agree to receive emails to continue." });
      return;
    }

    const payload: Record<string, string> = {
      name: name.trim(),
      email: email.trim(),
      country: finalCountry,
      phone: phone.trim(),
      consent_email: consented ? "yes" : "no",
    };

    const body = new URLSearchParams(payload).toString();

    console.log("[early-access] POST →", SCRIPT_URL);
    console.log("[early-access] payload:", payload);

    try {
      setIsSubmitting(true);
      setSubmitMsg(null);

      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body,
      });

      const raw = await res.text();
      let data: any;
      try {
        data = JSON.parse(raw);
      } catch {
        data = { success: false, raw };
      }

      console.log("[early-access] status:", res.status, res.statusText);
      console.log("[early-access] response:", data);

      if (!res.ok || data?.success === false) {
        throw new Error(data?.error || `Request failed (${res.status})`);
      }

      setSubmitMsg({ ok: true, text: "Thanks! You'll be notified at launch." });
      // Reset fields
      setName("");
      setEmail("");
      setCountry("Portugal");
      setCountryOther("");
      setPhone("");
      setConsented(false);

      // REMOVED: Auto-close timeout - let user close manually
      // setTimeout(() => {
      //   setShowEmailPopup(false);
      //   setSubmitMsg(null);
      // }, 400);
    } catch (err) {
      console.error("[early-access] submit error:", err);
      setSubmitMsg({ ok: false, text: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

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

            {/* Auth Buttons (Desktop) – open popup */}
            <div className="hidden md:flex md:items-center space-x-4">
              <button
                type="button"
                onClick={() => setShowEmailPopup(true)}
                className="px-4 py-2 text-lg font-medium text-[#3390D5] hover:text-brand-700 transition duration-300"
                aria-haspopup="dialog"
                aria-controls="early-perks-modal"
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => setShowEmailPopup(true)}
                className="px-6 py-2 bg-[#3390D5] text-white rounded-lg font-semibold hover:bg-brand-700 transition duration-300"
                aria-haspopup="dialog"
                aria-controls="early-perks-modal"
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
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setShowEmailPopup(true);
                }}
                className="block w-full text-center px-4 py-2 text-lg text-brand-600 hover:bg-gray-100"
                aria-haspopup="dialog"
                aria-controls="early-perks-modal"
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setShowEmailPopup(true);
                }}
                className="block w-full text-center mt-2 px-4 py-2 bg-[#3390D5] text-white rounded-lg font-semibold hover:bg-brand-700"
                aria-haspopup="dialog"
                aria-controls="early-perks-modal"
              >
                Register
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      {/* ===== Early Access Popup (embedded in Navbar) ===== */}
      {showEmailPopup && (
        <div
          id="early-perks-modal"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60]"
        >
          <div className="bg-white rounded-lg p-8 max-w-md w-full text-left">
            <h3 className="text-xl font-bold text-gray-900">Sign Up for Early Access</h3>
            <p className="mt-2 text-sm text-gray-600">
              We will only use your data to inform you about OneMAI launch, updates and early perks.*
            </p>

            <form className="space-y-4 mt-6" onSubmit={handleEmailSubmit}>
              {/* Name */}
              <div>
                <label htmlFor="nameInput" className="block text-sm font-medium text-gray-700">
                  Name <span className="text-gray-500">(first name only is enough)</span>
                </label>
                <input
                  id="nameInput"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="First name"
                  autoComplete="given-name"
                  className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="emailInput" className="block text-sm font-medium text-gray-700">
                  Email <span className="text-red-600">(required)</span>
                </label>
                <input
                  id="emailInput"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                />
              </div>

              {/* Country */}
              <div>
                <label htmlFor="countrySelect" className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <select
                  id="countrySelect"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                >
                  {EU_COUNTRIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                  <option value="__other">Other (not listed)</option>
                </select>

                {country === "__other" && (
                  <>
                    <input
                      type="text"
                      placeholder="Type your country"
                      value={countryOther}
                      onChange={(e) => setCountryOther(e.target.value)}
                      autoComplete="country-name"
                      className="mt-3 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                    />
                    <p className="mt-1 text-xs text-gray-500">
                      If your country isn't listed, choose "Other (not listed)" and type it.
                    </p>
                  </>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phoneInput" className="block text-sm font-medium text-gray-700">
                  Phone number <span className="text-gray-500">(Only if you'd like us to reach you by phone)</span>
                </label>
                <input
                  id="phoneInput"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+351 ..."
                  autoComplete="tel"
                  className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                />
              </div>

              {/* Consent */}
              <label className="flex items-start space-x-3 text-sm text-gray-700">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4"
                  checked={consented}
                  onChange={(e) => setConsented(e.target.checked)}
                />
                <span>
                  I agree to receive emails about OneMAI early access and perks. See{" "}
                  <Link to="/privacy" className="text-blue-600 underline">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#3390D5] text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-700 transition disabled:opacity-60"
              >
                {isSubmitting ? "Submitting..." : "Notify Me"}
              </button>

              {submitMsg && (
                <p className={`mt-2 text-center ${submitMsg.ok ? "text-green-600" : "text-red-600"}`}>
                  {submitMsg.text}
                </p>
              )}
            </form>

            <button
              onClick={() => {
                setShowEmailPopup(false);
                setSubmitMsg(null);
              }}
              className="mt-4 w-full bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-400 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}