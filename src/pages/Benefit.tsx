// src/pages/Benefits.tsx
import React, { useEffect, useState } from "react";

export default function Benefits() {
  // Back-to-top visibility
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main>
      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={[
          "fixed bottom-8 right-8 bg-[#3390D5] text-white p-3 rounded-full shadow-lg hover:bg-brand-600 focus:outline-none z-50 transition",
          showTop ? "opacity-100" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {/* Compact Hero (trimmed height + tighter text) */}
      <section className="relative bg-gradient-to-r from-blue-900 to-teal-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
            {/* Text */}
            <div className="text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Benefits
              </h1>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl opacity-95">
                Unlock collective financial power and build a stronger future with OneMAI.
              </p>
            </div>

            {/* Image — constrained height */}
            <div className="flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80"
                alt="Community"
                loading="lazy"
                className="w-full h-56 sm:h-64 md:h-72 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Benefits of OneMAI</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Creating value for individuals and organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* For Users */}
            <article className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-3xl p-6 lg:p-10">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-brand-600 rounded-2xl mr-4">
                  <SvgUsers className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">For Users</h3>
              </div>

              <div className="space-y-6">
                <BenefitItem
                  title="Access to Zero-interest Financing"
                  text="Eliminate traditional loan burdens with interest-free financial solutions."
                />
                <BenefitItem
                  title="Secured Rotational Savings"
                  text="Safe and transparent pooled savings with blockchain security."
                />
                <BenefitItem
                  title="Financial Literacy Tools"
                  text="Access educational resources and tools for better financial management."
                />
                <BenefitItem
                  title="Community Support"
                  text="Join a network of like-minded individuals working towards financial goals."
                />
              </div>
            </article>

            {/* For Companies & Organizations */}
            <article className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-3xl p-6 lg:p-10">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-brand-600 rounded-2xl mr-4">
                  <SvgBuilding className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">For Companies &amp; Organizations</h3>
              </div>

              <div className="space-y-6">
                <BenefitItem
                  title="Employee Financial Welfare"
                  text="Support your employees' financial well-being with innovative solutions."
                />
                <BenefitItem
                  title="Improved Retention"
                  text="Enhance employee loyalty through financial support programs."
                />
                <BenefitItem
                  title="Enhanced Productivity"
                  text="Boost workplace performance by reducing financial stress."
                />
                <BenefitItem
                  title="Analytics and Insight"
                  text="Access detailed reports and insights on financial wellness programs."
                />
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

/* -------------------- Small building blocks -------------------- */

function BenefitItem({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 mt-1">
        <SvgCheck className="h-6 w-6 text-brand-600" />
      </div>
      <div className="ml-4">
        <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
        <p className="mt-2 text-gray-600">{text}</p>
      </div>
    </div>
  );
}

const SvgCheck: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const SvgUsers: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

const SvgBuilding: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  </svg>
);
