// src/pages/Home.tsx
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

// ---------- Image assets ----------
import contentImg from "@/assets/images/content.png";
import joinCommunityImg from "@/assets/images/join-a-community.jpeg";
import groupImg from "@/assets/images/group.jpeg";
import receiveFundImg from "@/assets/images/receive-fund.jpeg";
import indian3Img from "@/assets/images/indian-3.jpg";
import santosImg from "@/assets/images/santos.jpg";
import startUpLogo from "@/assets/images/partners/start-up.png";
import eitLogo from "@/assets/images/partners/eit.png";
import lisbonLogo from "@/assets/images/partners/lisbon.png";
import pageimage from "@/assets/firstimage.png"

type TabKey = "users" | "partners";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyzjYnO2dy0slHRNpXQbj097OlsTqjhoJtVCPxEYCPcXUSHnqU85fFVC6zr_eKPfTff/exec"; // Google Apps Script endpoint

const Home: React.FC = () => {
  // Back-to-top
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Popups
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [showSocialPopup, setShowSocialPopup] = useState(false);

  // Email form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("Portugal");
  const [countryOther, setCountryOther] = useState("");
  const [phone, setPhone] = useState("");
  const [consented, setConsented] = useState(false);
  const [submitMsg, setSubmitMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ====== Submit to Google Sheet (mirrors index.html) ======
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const selected = country;
    const finalCountry = selected === "__other" ? (countryOther || "").trim() : selected;

    // Basic validation parity with HTML
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

    // Build URL-encoded body to avoid CORS preflight (same as HTML)
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

      setSubmitMsg({ ok: true, text: "Thanks! You’ll be notified at launch." });
      // Reset fields to match HTML behavior
      setName("");
      setEmail("");
      setCountry("Portugal");
      setCountryOther("");
      setPhone("");
      setConsented(false);

      // Close popup slightly after success (UI parity)
      setTimeout(() => {
        setShowEmailPopup(false);
        setSubmitMsg(null);
      }, 400);
    } catch (err) {
      console.error("[early-access] submit error:", err);
      setSubmitMsg({ ok: false, text: "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  // FAQ tabs/accordions
  const [tab, setTab] = useState<TabKey>("users");
  const [openItem, setOpenItem] = useState<string | null>(null);
  const toggleItem = (id: string) => setOpenItem((prev) => (prev === id ? null : id));
  useEffect(() => setOpenItem(null), [tab]);

  const EU_COUNTRIES = useMemo(
    () => [
      "Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czechia (Czech Republic)", "Denmark", "Estonia", "Finland",
      "France", "Germany", "Greece", "Hungary", "Ireland", "Italy", "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands",
      "Poland", "Portugal", "Romania", "Slovakia", "Slovenia", "Spain", "Sweden",
    ],
    []
  );

  return (
    <div className="">
      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={[
          "fixed bottom-8 right-8 bg-[#000] text-white p-3 rounded-full shadow-lg hover:bg-[#3390D5] focus:outline-none z-50 transition",
          showTop ? "opacity-100" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {/* Hero */}
      <section className="relative min-h-[70vh] md:h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-teal-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Text */}
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Community Financing for a Better Future
              </h1>
              <p className="text-xl sm:text-2xl text-white mb-8">
                Empowering communities through zero-interest and a secured democratic financial solution
              </p>
              <button
                onClick={() => setShowEmailPopup(true)}
                className="inline-block bg-[#3390D5] text-white px-4 py-2 rounded-lg text-lg text-center font-semibold hover:bg-brand-700 transition duration-300 ease-in-out transform hover:-translate-y-1 w-50"
              >
                Signup for early Perks.
              </button>
            </div>
            {/* Image (optimized for mobile) */}
            <div className="flex items-center justify-center md:justify-end">
              <img
                src={contentImg}
                alt="Community"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain rounded-2xl shadow-lg"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Get started with OneMAI in three simple steps</p>
          </div>
          <img
            src={pageimage}
            alt="Community"
            className="w-full h-auto max-h-[55vh] md:h-[420px] object-contain rounded mx-auto"
            loading="lazy"
          />


          <div className="space-y-16">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
              <div className="w-full md:w-1/2 order-2 md:order-2">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="text-brand-600 mb-4">
                    <span className="inline-block px-4 py-2 rounded-full bg-brand-100 text-brand-600 text-sm font-semibold">
                      Step 1
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Create and Join a Community</h3>
                  <p className="text-gray-600 mb-6">
                    Start by creating your own community or joining an existing one. Connect with like-minded individuals
                    who share your financial goals.
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <SvgCheck className="h-6 w-6 text-brand-500 mr-2" />
                      Create a new community in minutes
                    </li>
                    <li className="flex items-start">
                      <SvgCheck className="h-6 w-6 text-brand-500 mr-2" />
                      Join existing communities
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-2 md:order-2 w-full flex items-center justify-center">
                <img
                  src={joinCommunityImg}
                  alt="Create Community Interface"
                  className="rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain object-center shadow-md"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="text-brand-600 mb-4">
                    <span className="inline-block px-4 py-2 rounded-full bg-brand-100 text-brand-600 text-sm font-semibold">
                      Step 2
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Set Pooling and Withdrawal Parameters</h3>
                  <p className="text-gray-600 mb-6">
                    Configure contribution amounts, frequency, and withdrawal rules that work for your community.
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <SvgCheck className="h-6 w-6 text-brand-500 mr-2" />
                      Set contribution schedules
                    </li>
                    <li className="flex items-start">
                      <SvgCheck className="h-6 w-6 text-brand-500 mr-2" />
                      Define withdrawal criteria
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-1 md:order-2 w-full flex items-center justify-center">
                <img
                  src={groupImg}
                  alt="Parameters Setup Interface"
                  className="rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain object-center shadow-md"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
              <div className="w-full flex items-center justify-center">
                <img
                  src={receiveFundImg}
                  alt="Fund Management Interface"
                  className="rounded-2xl w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain object-center shadow-md"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="w-full md:w-1/2">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="text-brand-600 mb-4">
                    <span className="inline-block px-4 py-2 rounded-full bg-brand-100 text-brand-600 text-sm font-semibold">
                      Step 3
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Pool and Receive Funds</h3>
                  <p className="text-gray-600 mb-6">
                    Start contributing to the pool and receive funds according to your community&apos;s established rules.
                  </p>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <SvgCheck className="h-6 w-6 text-brand-500 mr-2" />
                      Step in profile
                    </li>
                    <li className="flex items-start">
                      <SvgCheck className="h-6 w-6 text-brand-500 mr-2" />
                      Join or create a community
                    </li>
                    <li className="flex items-start">
                      <SvgCheck className="h-6 w-6 text-brand-500 mr-2" />
                      Set parameters
                    </li>
                    <li className="flex items-start">
                      <SvgCheck className="h-6 w-6 text-brand-500 mr-2" />
                      Pool and receive funds
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Survey Results */}
      <section className="mt-20 bg-white rounded-3xl p-8 lg:p-12 shadow-lg text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">Community Impact Survey</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Stat value="850+" label="Already signed up for OneMAI release" />
          <Stat value="80%" label="Believe OneMAI will be more reliable than traditional rotational savings method" />
          <Stat value="50+" label="Direct and indirect Jobs" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from our community members who transformed their financial future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Story 1 */}
            <StoryCard
              img={indian3Img}
              title="Arjun's Story"
              role="Small Business Owner"
              quote={`"OneMAI will help me secure interest-free financing for my small business at Martim Moniz. The community support will grow, and the transparent system will give me peace of mind."`}
              detail="Achieved business expansion goal in 8 months through community funding"
            />

            {/* Story 2 (Video placeholder) */}
            <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-64">
                <video className="w-full h-full object-cover" controls>
                  Your browser does not support the video tag.
                </video>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-xl font-semibold text-white">Sarah&apos;s Journey</h3>
                  <p className="text-gray-200">Community Leader</p>
                </div>
              </div>
              <div className="p-6">
                <blockquote className="text-gray-600 italic mb-4">
                  Traditional savings groups were challenging to manage. With OneMAI, everything will be automated and secure.
                  Our community will surely grow stronger.
                </blockquote>
                <p className="text-gray-700">Managing a 50-member savings group successfully for 2 years</p>
              </div>
            </article>

            {/* Story 3 */}
            <StoryCard
              img={santosImg}
              title="Santos's Success"
              role="Student"
              quote={`"Before OneMAI, I struggled with traditional rotating savings groups. Now, I can easily track contributions and access funds when needed."`}
              detail="Funded education through community support"
            />
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-gray-50 rounded-2xl p-8 md:p-12">
        <h1 className="text-xl font-semibold text-gray-900 text-center mb-8">Partners</h1>
        <div className="grid grid-cols-2 md:grid-cols-8 gap-8 items-center justify-items-center opacity-75">
          <img src={startUpLogo} alt="Start-up" className="max-h-20 grayscale hover:grayscale-0 transition-all" />
          <img src={eitLogo} alt="EIT" className="max-h-20 grayscale hover:grayscale-0 transition-all" />
          <img src={lisbonLogo} alt="Lisbon" className="max-h-20 grayscale hover:grayscale-0 transition-all" />
        </div>
      </section>

      {/* CTA + Newsletter */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-600 to-brand-800">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path
              d="M-22.4-10.4l15.5 15.5L-22.4 20.6l15.5 15.5L-22.4 51.6l15.5 15.5L-22.4 82.6l15.5 15.5L-22.4 113.6l15.5 15.5L-22.4 144.6l15.5 15.5"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Ready to Transform Your Community&apos;s Financial Future?
          </h2>
          <p className="text-xl text-brand-100 mb-12 max-w-3xl mx-auto">
            Join thousands of communities already benefiting from OneMAI&apos;s innovative financial solutions
          </p>

          {/* Email Signup Popup */}
          {showEmailPopup && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
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
                          If your country isn’t listed, choose “Other (not listed)” and type it.
                        </p>
                      </>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phoneInput" className="block text-sm font-medium text-gray-700">
                      Phone number <span className="text-gray-500">(Only if you’d like us to reach you by phone)</span>
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

          {/* Social popup */}
          {showSocialPopup && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Join Us On Social Media</h3>
                <div className="flex justify-center space-x-6">
                  <a
                    href="https://www.linkedin.com/company/joinonemai/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-600 hover:text-brand-600"
                    aria-label="LinkedIn"
                  >
                    <SvgLinkedIn className="h-8 w-8" />
                  </a>
                  <a
                    href="https://instagram.com/mai.platform/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-600 hover:text-brand-600"
                    aria-label="Instagram"
                  >
                    <SvgInstagram className="h-8 w-8" />
                  </a>
                  <a
                    href="https://web.facebook.com/joinonemai?_rdc=1&_rdr#"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-600 hover:text-brand-600"
                    aria-label="Facebook"
                  >
                    <SvgFacebook className="h-8 w-8" />
                  </a>
                  <a
                    href="https://t.me/joinonemai"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-600 hover:text-brand-600"
                    aria-label="Telegram"
                  >
                    <SvgTelegram className="h-8 w-8" />
                  </a>
                </div>
                <button
                  onClick={() => setShowSocialPopup(false)}
                  className="mt-6 bg-[#3390D5] text-white px-6 py-2 rounded-lg font-semibold hover:bg-brand-700 transition"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {/* CTA cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Sign Up Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="text-brand-600 mb-4">
                <SvgUserPlus className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Early Access</h3>
              <p className="text-gray-600 mb-6">Be among the first to experience the future of community financing</p>
              <button
                onClick={() => setShowEmailPopup(true)}
                className="inline-block bg-[#3390D5] text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-700 transition"
              >
                Get Started
              </button>
            </div>

            {/* Join Community Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="text-brand-600 mb-4">
                <SvgUsers className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Join the Community</h3>
              <p className="text-gray-600 mb-6">Connect with like-minded individuals and start your financial journey</p>
              <button
                onClick={() => setShowSocialPopup(true)}
                className="inline-block bg-[#3390D5] text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-700 transition"
              >
                Join Now
              </button>
            </div>
          </div>

          {/* Newsletter (static) */}
          <div className="mt-16 max-w-xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-6">Stay Updated with Our Progress</h3>
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3390D5]"
              />
              <button
                type="submit"
                className="bg-[#3390D5] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#3390D5] transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ (trimmed to essentials for brevity) */}
      <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Find answers to common questions about OneMAI</p>
          </div>
          <div>
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={() => setTab("users")}
                className={`px-6 py-3 rounded-lg font-semibold transition ${tab === "users" ? "bg-[#3390D5] text-white" : "bg-gray-100 text-gray-600"
                  }`}
              >
                For Users
              </button>
              <button
                onClick={() => setTab("partners")}
                className={`px-6 py-3 rounded-lg font-semibold transition ${tab === "partners" ? "bg-[#3390D5] text-white" : "bg-gray-100 text-gray-600"
                  }`}
              >
                For Partners
              </button>
            </div>

            {tab === "users" && (
              <div className="space-y-4">
                <FaqItem id="user-1" openItem={openItem} onToggle={toggleItem} question="What is OneMAI, and how does it work?">
                  OneMAI is a community-driven financial platform modernizing informal savings systems. Users pool money in
                  groups and take turns accessing funds, ensuring transparency and security through technology.
                </FaqItem>

                <FaqItem
                  id="user-2"
                  openItem={openItem}
                  onToggle={toggleItem}
                  question="How is OneMAI different from traditional savings platforms?"
                >
                  Unlike banks or loan services, OneMAI provides customizable savings groups tailored to your needs.
                </FaqItem>
              </div>
            )}

            {tab === "partners" && (
              <div className="space-y-4">
                <FaqItem id="partner-1" openItem={openItem} onToggle={toggleItem} question="How can partners collaborate with OneMAI?">
                  Partners can onboard communities, provide education, and co-design financial products that meet local needs.
                </FaqItem>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

// ===== UI bits =====
const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="text-4xl font-bold text-brand-600 mb-2">{value}</div>
    <p className="text-gray-600">{label}</p>
  </div>
);

const StoryCard = ({
  img,
  title,
  role,
  quote,
  detail,
}: {
  img: string;
  title: string;
  role: string;
  quote: string;
  detail: string;
}) => (
  <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
    <div className="relative h-64">
      <img src={img} alt={title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-200">{role}</p>
      </div>
    </div>
    <div className="p-6">
      <blockquote className="text-gray-600 italic mb-4">{quote}</blockquote>
      <p className="text-gray-700">{detail}</p>
    </div>
  </article>
);

const FaqItem: React.FC<{
  id: string;
  question: string;
  children: React.ReactNode;
  openItem: string | null;
  onToggle: (id: string) => void;
}> = ({ id, question, children, openItem, onToggle }) => {
  const open = openItem === id;
  return (
    <div className="border rounded-lg bg-white">
      <button
        className="w-full flex justify-between items-center p-4"
        onClick={() => onToggle(id)}
        aria-expanded={open}
      >
        <span className="text-left font-medium">{question}</span>
        <span className="ml-4">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="p-4 pt-0 text-gray-600">{children}</div>}
    </div>
  );
};

// Simple inline SVGs to avoid external deps
const SvgCheck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);
const SvgUserPlus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0M3 20a6 6 0 0112 0v1H3v-1z" />
  </svg>
);
const SvgUsers = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0m6 3a2 2 0 11-4 0 2 2 0 014 0M7 10a2 2 0 11-4 0 2 2 0 114 0" />
  </svg>
);
const SvgTelegram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.428.26l.204-3.05 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.87 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.57-4.458c.538-.196 1.006.128.832.941z" />
  </svg>
);
const SvgLinkedIn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5zM8 19H5V8h3v11zM6.5 6.732A1.75 1.75 0 116.5 3.204a1.75 1.75 0 010 3.528zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765C14.396 7.179 20 6.988 20 12.241V19z" />
  </svg>
);
const SvgInstagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm6.406-1.683a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
  </svg>
);
const SvgFacebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M24 12.073C24 5.446 18.627 0 12 0S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.063 24 12.073z" />
  </svg>
);

export default Home;
