// src/pages/HowItWorks.tsx
import React from "react";
import { Link } from "react-router-dom";
import { useRegion } from "../context/RegionContext";


export default function HowItWorks() {
    const { regionData } = useRegion();
    const hw = regionData.howItWorks;

    return (
        <main className="">
            {/* Hero Section with Background Image */}
            <section className="relative min-h-[40vh] md:min-h-[50vh] flex items-center bg-gray-900">
                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                    <img
                        src={regionData.images.howItWorksHero}
                        alt="How It Works Background"
                        className="w-full h-full object-cover"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 w-full text-white">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                            {hw.heroTitle}
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl opacity-95 leading-relaxed">
                            {hw.heroSubtitle}
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="max-w-7xl mx-auto px-6 py-14">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        {hw.sectionTitle}
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {hw.steps.map((step, idx) => (
                        <div key={idx} className="bg-white shadow rounded-xl p-6">
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-gray-700">
                                {step.text}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-10">
                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                        <h4 className="text-lg font-semibold mb-2">{hw.responsibilities.title}</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            {hw.responsibilities.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-green-50 border border-green-100 rounded-xl p-6">
                        <h4 className="text-lg font-semibold mb-2">{hw.disputes.title}</h4>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            {hw.disputes.items.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
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
