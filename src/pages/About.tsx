// src/pages/About.tsx
import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  // Smoothly jump back to top on internal navigation
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="font-outfit">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-extrabold">About Us — OneMAI</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl">
            OneMAI is a modern community financing platform that empowers people, groups, and organizations to save and
            achieve their financial goals together. Inspired by the rotational savings (ROSCAs) culture, we are a trusted
            digital system that brings people together, simplifies group savings, and ensures security through licensed
            banking partners.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed">
              OneMAI is a modern community financing platform that empowers people, groups, and organizations to save and
              achieve their financial goals together. Inspired by the rotational savings (ROSCAs) culture, we are a trusted
              digital system that brings people together, simplifies group savings, and ensures security through licensed
              banking partners.
            </p>
          </div>

          {/* What we facilitate — Group Power, Personal Gains */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold mb-2">What we facilitate — <span className="text-blue-600">Group Power, Personal Gains</span></h3>
            <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
              <li>Transparent and secure system</li>
              <li>Recognized by Startup Portugal</li>
              <li>Engaged with regulators including Banco de Portugal and CMVM</li>
              <li>Backed by licensed and insured banking partners</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid gap-10 md:grid-cols-2 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To make financial inclusion a reality by providing secure, transparent, and community-driven savings
                solutions. We believe everyone deserves access to affordable, reliable ways to achieve financial
                freedom—without the heavy burden of traditional bank interest rates.
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

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Imran is a member of Lisbon Project, and he is from Morrocco. Imran is a brilliant young man with a drive for
              entrepreneurship, but Imran does not have any access to alternative funds to help him drive his proposed
              4,000 Euros venture. With OneMAI, Imran will achieve this overtime within his own group.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Across European communities, people have long relied on informal savings groups to pool funds and support one
              another—especially people who have their credit history in other continents of the world. While this system
              works, it often faces challenges—lack of structure, risks of mismanagement, and little accountability.
            </p>
            <p className="text-gray-700 leading-relaxed">
              OneMAI takes this age-old practice and modernizes it for today's world. By combining technology, transparency,
              and regulatory compliance, we offer a digital platform where saving together is safe, automated, and scalable.
              With OneMAI, trust is built into the system.
            </p>
          </div>

          {/* Trust & Compliance cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-xl shadow p-5">
              <h4 className="font-semibold text-lg mb-1">Bank-Backed Safety</h4>
              <p className="text-gray-700">
                Funds are safeguarded through licensed and insured partners. OneMAI coordinates the rails; regulated partners
                handle custody.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow p-5">
              <h4 className="font-semibold text-lg mb-1">Clear Rules, Less Friction</h4>
              <p className="text-gray-700">
                Contributions, rotation order, and payout timelines are set upfront—everyone sees the same source of truth.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow p-5">
              <h4 className="font-semibold text-lg mb-1">Accountability Built-in</h4>
              <p className="text-gray-700">
                Activity logs and auditable records reduce mismanagement risk and strengthen group trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">Join Us</h3>
            <p className="text-gray-700">
              We are reshaping community finance—making it simple, secure, and powerful. Be part of the movement.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              to="/how-it-works"
              onClick={scrollToTop}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}