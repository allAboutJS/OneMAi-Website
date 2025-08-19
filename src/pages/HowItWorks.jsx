// src/pages/HowItWorks.tsx
import React from "react";
import { Link } from "react-router-dom";

export default function HowItWorks() {
  return (
    <main className="">
      {/* Steps */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-8">How OneMAI Works</h1>

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
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
          >
            Read FAQs
          </Link>
        </div>
      </section>
    </main>
  );
}
