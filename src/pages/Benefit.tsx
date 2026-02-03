// src/pages/Benefits.tsx
import React, { useEffect, useState } from "react";

import { useRegion } from "../context/RegionContext";


export default function Benefits() {
    const { regionData } = useRegion();
    const b = regionData.benefits;

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

            {/* Hero Section with Background Image */}
            <section className="relative min-h-[40vh] md:min-h-[50vh] flex items-center bg-gray-900">
                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                    <img
                        src={regionData.images.benefitsHero}
                        alt="Benefits Background"
                        className="w-full h-full object-cover"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                            {b.heroTitle}
                        </h1>
                        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-white opacity-95">
                            {b.heroSubtitle}
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section id="benefits" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                            {b.sectionTitle.split(" - ")[0]} - <br />
                            <span className="text-[#3390D5] font-semibold">{b.sectionTitle.split(" - ")[1]}</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {/* User Benefits */}
                        <article className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-3xl p-6 lg:p-10">
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-brand-600 rounded-2xl mr-4">
                                    <SvgUsers className="h-7 w-7 text-white" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{b.userBenefits.title}</h3>
                            </div>

                            <div className="space-y-6">
                                {b.userBenefits.items.map((item, idx) => (
                                    <BenefitItem
                                        key={idx}
                                        title={item.title}
                                        text={item.text}
                                    />
                                ))}
                            </div>
                        </article>

                        {/* Org Benefits */}
                        <article className="bg-gradient-to-br from-brand-50 to-brand-100 rounded-3xl p-6 lg:p-10">
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-brand-600 rounded-2xl mr-4">
                                    <SvgBuilding className="h-7 w-7 text-white" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{b.orgBenefits.title}</h3>
                            </div>

                            <div className="space-y-6">
                                {b.orgBenefits.items.map((item, idx) => (
                                    <BenefitItem
                                        key={idx}
                                        title={item.title}
                                        text={item.text}
                                    />
                                ))}
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            {/* Community & Safety Section */}
            <section className="bg-[#3390D5] text-white pt-10 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-0 md:gap-x-12 mb-8">
                        <div className="space-y-4">
                            <div className="w-10 h-10 border border-white/30 rounded-lg flex items-center justify-center">
                                <SvgShield className="w-6 h-6" />
                            </div>
                            <p className="text-lg font-medium leading-snug max-w-[240px]">
                                {b.safetyPoints[0]}
                            </p>
                        </div>

                        <div className="space-y-4 md:border-l md:border-white/20 md:pl-12">
                            <div className="w-10 h-10 border border-white/30 rounded-lg flex items-center justify-center">
                                <SvgWallet className="w-6 h-6" />
                            </div>
                            <p className="text-lg font-medium leading-snug max-w-[240px]">
                                {b.safetyPoints[1]}
                            </p>
                        </div>

                        <div className="space-y-4 md:border-l md:border-white/20 md:pl-12">
                            <div className="w-10 h-10 border border-white/30 rounded-lg flex items-center justify-center">
                                <SvgKey className="w-6 h-6" />
                            </div>
                            <p className="text-lg font-medium leading-snug max-w-[240px]">
                                {b.safetyPoints[2]}
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-0 md:gap-x-12 mb-4">
                        <div className="space-y-4">
                            <div className="w-10 h-10 border border-white/30 rounded-lg flex items-center justify-center">
                                <SvgSearch className="w-6 h-6" />
                            </div>
                            <p className="text-lg font-medium leading-snug max-w-[240px]">
                                {b.safetyPoints[3]}
                            </p>
                        </div>

                        <div className="space-y-4 md:border-l md:border-white/20 md:pl-12">
                            <div className="w-10 h-10 border border-white/30 rounded-lg flex items-center justify-center">
                                <SvgHandshake className="w-6 h-6" />
                            </div>
                            <p className="text-lg font-medium leading-snug max-w-[240px]">
                                {b.safetyPoints[4]}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Illustration */}
                <div className="relative mt-0">
                    <img
                        src={regionData.images.benefitsIllustration}
                        alt="Diverse Community"
                        className="w-full h-auto object-contain block"
                        style={{ marginBottom: '-2px' }} // Prevent tiny gap
                    />
                </div>
            </section>
        </main>
    );
}

const SvgShield: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
);

const SvgWallet: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const SvgKey: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
    </svg>
);

const SvgSearch: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const SvgHandshake: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.706l.83-6a2 2 0 00-2-2.294H14zM7 11V7a2 2 0 012-2h4a2 2 0 012 2v4M7 11H4v11h3V11z" />
    </svg>
);

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
