// src/pages/HowItWorks.tsx
import React from "react";
import { Link } from "react-router-dom";
import Users from "@/assets/images/users.avif";

export default function HowItWorks() {
  return (
    <main className="">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[40vh] md:min-h-[50vh] flex items-center bg-gray-900">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={Users}
            alt="Two people looking at their phones"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 w-full text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              How OneMAI Works
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl opacity-95 leading-relaxed">
              Step-by-step to group savings, transparent coordination, and secure payouts.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            A Seamless Experience — <span className="text-[#3390D5]">Driven by Trust</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">1) Verify &amp; Set Up</h3>
            <p className="text-gray-700">
              Create an account and complete KYC. This unlocks group participation and helps prevent fraud.
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">2) Join or Create a Group</h3>
            <p className="text-gray-700">
              Groups define members, fixed contribution amount, payout order, start/end dates, and default rules.
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">3) Automate Contributions and Payout</h3>
            <p className="text-gray-700">
              Payments run on schedule through approved processors. Rotation payouts follow the agreed order.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
            <h4 className="text-lg font-semibold mb-2">Responsibilities</h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Admins: set fair rules, monitor payments, coordinate, and mediate issues.</li>
              <li>Members: pay on time, respect payout order, and communicate early if issues arise.</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-100 rounded-xl p-6">
            <h4 className="text-lg font-semibold mb-2">Defaults &amp; Disputes</h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                Delays trigger reminders; repeated defaults can pause or reorder payouts and restrict access.
              </li>
              <li>
                Resolve in-group first → escalate to admin → escalate to OneMAI with logs for mediation.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10">
          <Link
            to="/faq"
            className="inline-block px-6 py-3 bg-[#3390D5] text-white rounded-lg font-semibold hover:bg-blue-700"
          >
            Read FAQs
          </Link>
        </div>
      </section>
    </main>
  );
}
