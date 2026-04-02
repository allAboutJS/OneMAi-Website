// src/pages/About.tsx
import React from "react";
import { Link } from "react-router-dom";
import { useRegion } from "../context/RegionContext";
import TijaniImg from "../assets/images/Tijani.jpeg";
import JonathanImg from "../assets/images/Jonathan.jpeg";
export default function About() {
    const { regionData } = useRegion();
    const a = regionData.about;

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
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight">
                                {a.heroTitle}
                            </h1>
                            <div className="space-y-3 md:space-y-4 text-lg md:text-xl opacity-90 leading-relaxed max-w-2xl">
                                {a.heroSubtitle.split('\n\n').map((para, idx) => {
                                    const lines = para.split('\n');
                                    return (
                                        <p key={idx}>
                                            {lines.map((line, lineIdx) => (
                                                <React.Fragment key={lineIdx}>
                                                    {line}
                                                    {lineIdx < lines.length - 1 && <br />}
                                                </React.Fragment>
                                            ))}
                                        </p>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Right Phone Visual */}
                        <div className="relative flex justify-center lg:justify-end [perspective:2000px]">
                            <div className="relative w-[300px] md:w-[380px] drop-shadow-2xl [transform:rotateY(-15deg)_rotateX(5deg)_rotateZ(5deg)] transition-transform duration-1000">
                                <img
                                    src={regionData.images.aboutHero}
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
                <p className="text-white/70 text-sm mt-6 pb-2">
                    OneMAI is developed and operated by Cortejo Magnata Lda, a technology company based in Portugal, building financial coordination infrastructure for communities.
                </p>
            </section>

            {/* Story and Facilitation Section */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    {/* Our Story */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                            {a.storyParagraphs.map((p, idx) => {
                                const lines = p.split('\n');
                                return (
                                    <p key={idx}>
                                        {lines.map((line, lineIdx) => (
                                            <React.Fragment key={lineIdx}>
                                                {line}
                                                {lineIdx < lines.length - 1 && <br />}
                                            </React.Fragment>
                                        ))}
                                    </p>
                                );
                            })}
                        </div>
                    </div>

                    {/* What we facilitate Card */}
                    <div className="lg:col-span-5 flex justify-start lg:justify-end">
                        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 w-full max-w-md">
                            <h3 className="text-2xl font-normal mb-6 text-gray-900 leading-tight">
                                {a.facilitationTitle} <br />
                                <span className="text-[#3390D5]">{a.facilitationSubtitle}</span>
                            </h3>
                            <div className="space-y-4">
                                {a.facilitationItems.map((item, idx) => (
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
                            <h2 className="text-2xl md:text-3xl font-normal mb-4">{a.missionTitle}</h2>
                            <p className="text-gray-700 leading-relaxed">
                                {a.missionText}
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 md:p-8 w-full md:max-w-md md:ml-auto">
                            <h3 className="text-xl font-normal mb-3">{a.valuesTitle}</h3>
                            <ul className="space-y-3 text-gray-700">
                                {a.valuesList.map((val, idx) => (
                                    <li key={idx}>
                                        <strong>{val.label}</strong> — {val.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Behind the Brand */}
            <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-4">Team Behind the Brand</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Meet the visionaries leading the OneMAI movement.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Tijani */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
                        <img 
                            src={TijaniImg} 
                            alt="Tijani Mukhtar Olatunji" 
                            className="w-48 h-48 rounded-full object-cover mb-6 border-4 border-blue-50 shadow-sm"
                        />
                        <h3 className="text-2xl font-normal text-gray-900 mb-2">Tijani Mukhtar Olatunji</h3>
                        <p className="text-[#3390D5] font-medium mb-5">Co-Founder / CEO</p>
                        <a 
                            href="https://www.linkedin.com/in/olatunjitijani0611/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#0A66C2] transition-colors"
                            aria-label="LinkedIn Profile"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </a>
                    </div>

                    {/* Jonathan */}
                    <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300">
                        <img 
                            src={JonathanImg} 
                            alt="Jonathan Cohen" 
                            className="w-48 h-48 rounded-full object-cover mb-6 border-4 border-blue-50 shadow-sm"
                        />
                        <h3 className="text-2xl font-normal text-gray-900 mb-2">Jonathan Cohen</h3>
                        <p className="text-[#3390D5] font-medium mb-5">Co-Founder / CFO</p>
                        <a 
                            href="https://www.linkedin.com/in/jonathan-cohen-port/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-[#0A66C2] transition-colors"
                            aria-label="LinkedIn Profile"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-7xl mx-auto px-6 pb-8">
                <div className="bg-blue-50 border border-blue-100 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                        <h3 className="text-2xl font-normal mb-2">{a.ctaTitle}</h3>
                        <p className="text-gray-700">
                            {a.ctaText}
                        </p>
                    </div>
                    <div className="mt-4 md:mt-0">
                        <a
                            href="https://linktr.ee/joinonemai"
                            onClick={scrollToTop}
                            className="px-6 py-3 bg-[#3390D5] text-white rounded-lg font-medium hover:bg-blue-700"
                        >
                            Join the Movement
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
