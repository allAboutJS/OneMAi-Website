// src/pages/About.tsx
import React from "react";
import { Link } from "react-router-dom";
import PhoneImage from "@/assets/images/phone-image.png";

export default function About() {
  // Smoothly jump back to top on internal navigation
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="font-outfit">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-cyan-500 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                OneMAI The Story
              </h1>
              <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-2xl">
                Inspired by long-standing community finance practices, OneMAI brings structure, transparency, and security to how groups coordinate money today — without complexity and with full traceability.
              </p>
            </div>

            {/* Right Phone Visual */}
            <div className="relative flex justify-center lg:justify-end [perspective:2000px]">
              <div className="relative w-[300px] md:w-[380px] drop-shadow-2xl [transform:rotateY(-15deg)_rotateX(5deg)_rotateZ(5deg)] transition-transform duration-1000">
                <img
                  src={PhoneImage}
                  alt="OneMAI Dashboard"
                  className="w-full h-auto block"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-cyan-400/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Story and Facilitation Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Our Story */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Story</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Imran is a member of Lisbon Project, and he is from Morrocco. Imran is a brilliant young man with a drive for
                entrepreneurship, but Imran does not have any access to alternative funds to help him drive his proposed
                4,000 Euros venture. With OneMAI, Imran will achieve this overtime within his own group.
              </p>
              <p>
                Across European communities, people have long relied on informal savings groups to pool funds and support one
                another, especially people who have their credit history in other continents of the world.
              </p>
              <p>
                OneMAI takes this age-old practice and modernizes it for today's world. By combining technology and transparency, we offer a digital platform where saving together is safe, automated, and scalable.
              </p>
            </div>
          </div>

          {/* What we facilitate Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 leading-tight">
                What we facilitate — <br />
                <span className="text-[#3390D5]">Group Power, Personal Gains</span>
              </h3>
              <div className="space-y-4">
                {[
                  "Transparent and secure system",
                  "Recognized by Startup Portugal",
                  "Engaged with regulators",
                  "Backed by banking partners"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-[#3390D5]">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To make financial inclusion practical through transparent, community-powered financial coordination built on trust, clarity, and access.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold mb-3">Our Values</h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>Trust</strong> — built into every interaction
                </li>
                <li>
                  <strong>Transparency</strong> — no hidden charges, no confusion
                </li>
                <li>
                  <strong>Community</strong> — because together, we go further
                </li>
                <li>
                  <strong>Inclusion</strong> — financial access for everyone
                </li>
                <li>
                  <strong>Innovation</strong> — modern solutions for timeless practices
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-8">
        <div className="bg-blue-50 border border-blue-100 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">Join Us</h3>
            <p className="text-gray-700">
              You don’t have to do it alone. Coordinate money with people you trust in a clear and secure way.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              to="/how-it-works"
              onClick={scrollToTop}
              className="px-6 py-3 bg-[#3390D5] text-white rounded-lg font-semibold hover:bg-blue-700"
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}