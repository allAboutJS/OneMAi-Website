@extends('layouts.app')
@section('page')
<!-- Add padding to the hero section to account for fixed navbar -->
<div class="pt-16">
    <!-- Hero Section -->
    <div class="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-cyan-500">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
            <!-- Text Column -->
            <div class="flex flex-col justify-center">
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                Community Financing for a Better Future
            </h1>
            <p class="text-xl sm:text-2xl text-white mb-8">
                Empowering communities through zero-interest and a secured
                democratic financial solution
            </p>
            </div>
            <!-- Image Column -->
            <div class="flex items-center justify-center h-full">
            <img
                src="./images/partners/exchange.jpeg"
                alt="Community"
                class="w-full h-[80vh] object-cover rounded-lg shadow-lg"
            />
            </div>
        </div>
        </div>
    </div>

    <!-- Key Features Section -->
    <div id="features" class="my-bg py-16 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
        <h2
            class="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center"
        >
            Key Features
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Zero Interest Card -->
            <div
            class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300"
            >
            <div class="text-brand-600 mb-4">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
                Zero Interest
            </h3>
            <p class="text-gray-600">
                Access to funds without paying interests. It will eliminate the
                burden of traditional loan system makingOneMAI accessible and
                affordable.
            </p>
            </div>

            <!-- Automated Contribution Card -->
            <div
            class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300"
            >
            <div class="text-brand-600 mb-4">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
                </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
                Automated Contribution and Payout
            </h3>
            <p class="text-gray-600">
                Contributions and payouts are handled seamlessly using
                automations with insured finance houses.
            </p>
            </div>

            <!-- Democratic Management Card -->
            <div
            class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300"
            >
            <div class="text-brand-600 mb-4">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
                </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
                Democratic Community Management
            </h3>
            <p class="text-gray-600">
                Your community, your finance. This will enable community set
                parameters by themselves for their community. This helps build
                trust internally.
            </p>
            </div>

            <!-- Scalable Plans Card -->
            <div
            class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300"
            >
            <div class="text-brand-600 mb-4">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
                </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
                Scalable Contribution Plans
            </h3>
            <p class="text-gray-600">
                Flexible contribution options based on individual financial
                capacity. This makesOneMAI inclusive for users across different
                income levels.
            </p>
            </div>

            <!-- Blockchain Tracking Card -->
            <div
            class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300"
            >
            <div class="text-brand-600 mb-4">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
                </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
                Transparent Fund Tracking with Blockchain
            </h3>
            <p class="text-gray-600">
                Real time updates on fund allocation and contribution. Enhance
                trust with immutable records and transparency.
            </p>
            </div>

            <!-- AI Transparency Card -->
            <div
            class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300"
            >
            <div class="text-brand-600 mb-4">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
                </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
                AI-driven Transparency and Risk Assessment
            </h3>
            <p class="text-gray-600">
                Advanced Fraud detection and predictive analysis.
            </p>
            </div>
        </div>
        </div>
    </div>

    <!-- Features & Technology Section -->
    <div class="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
            <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Technology
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Powered by cutting-edge technology for secure and efficient
            community financing
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Community Management -->
            <div
            class="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
            <div
                class="absolute inset-0 bg-gradient-to-r from-brand-600 to-brand-400 opacity-75 transition-opacity group-hover:opacity-85"
            ></div>
            <div class="relative p-8">
                <div class="text-white mb-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">
                Community Management
                </h3>
                <ul class="space-y-3 text-white/90">
                <li class="flex items-center">
                    <svg
                    class="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                    />
                    </svg>
                    Member roles and permissions
                </li>
                <li class="flex items-center">
                    <svg
                    class="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                    />
                    </svg>
                    Voting system
                </li>
                <li class="flex items-center">
                    <svg
                    class="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                    />
                    </svg>
                    Communication tools
                </li>
                </ul>
            </div>
            </div>

            <!-- Automated Pooling -->
            <div
            class="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
            <div
                class="absolute inset-0 bg-gradient-to-r from-brand-600 to-brand-400 opacity-75 transition-opacity group-hover:opacity-85"
            ></div>
            <div class="relative p-8">
                <div class="text-white mb-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">
                Automated Pooling & Payout
                </h3>
                <ul class="space-y-3 text-white/90">
                <li class="flex items-center">
                    <svg
                    class="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                    />
                    </svg>
                    Scheduled contributions
                </li>
                <li class="flex items-center">
                    <svg
                    class="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                    />
                    </svg>
                    Smart contracts
                </li>
                <li class="flex items-center">
                    <svg
                    class="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                    />
                    </svg>
                    Automated distributions
                </li>
                </ul>
            </div>
            </div>

            <!-- User Profile Management -->
            <div
            class="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
            <div
                class="absolute inset-0 bg-gradient-to-r from-brand-600 to-brand-400 opacity-75 transition-opacity group-hover:opacity-85"
            ></div>
            <div class="relative p-8">
                <div class="text-white mb-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">
                User Profile Management
                </h3>
                <ul class="space-y-3 text-white/90">
                <li class="flex items-center">
                    <svg
                    class="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                    />
                    </svg>
                    KYC verification
                </li>
                <li class="flex items-center">
                    <svg
                    class="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                    />
                    </svg>
                    Financial history
                </li>
                <li class="flex items-center">
                    <svg
                    class="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                    />
                    </svg>
                    Reputation system
                </li>
                </ul>
            </div>
            </div>

            <!-- AI Risk Assessment -->
            <div
            class="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
            <div
                class="absolute inset-0 bg-gradient-to-r from-brand-600 to-brand-400 opacity-75 transition-opacity group-hover:opacity-85"
            ></div>
            <div class="relative p-8">
                <div class="text-white mb-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">
                AI-driven Risk Assessment
                </h3>
                <ul class="space-y-3 text-white/90">
                <li class="flex items-center">
                    <svg
                    class="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                    />
                    </svg>
                    Fraud detection
                </li>
                <li class="flex items-center">
                    <svg
                    class="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                    />
                    </svg>
                    Risk scoring
                </li>
                <li class="flex items-center">
                    <svg
                    class="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                    />
                    </svg>
                    Behavioral analysis
                </li>
                </ul>
            </div>
            </div>

            <!-- Blockchain Security -->
            <div
            class="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
            <div
                class="absolute inset-0 bg-gradient-to-r from-brand-600 to-brand-400 opacity-75 transition-opacity group-hover:opacity-85"
            ></div>
            <div class="relative p-8">
                <div class="text-white mb-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">
                Blockchain Security
                </h3>
                <ul class="space-y-3 text-white/90">
                <li class="flex items-center">
                    <svg
                    class="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                    />
                    </svg>
                    Immutable records
                </li>
                <li class="flex items-center">
                    <svg
                    class="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                    />
                    </svg>
                    Smart contracts
                </li>
                <li class="flex items-center">
                    <svg
                    class="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                    />
                    </svg>
                    Transparent tracking
                </li>
                </ul>
            </div>
            </div>

            <!-- AI Financial Tools -->
            <div
            class="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
            <div
                class="absolute inset-0 bg-gradient-to-r from-brand-600 to-brand-400 opacity-75 transition-opacity group-hover:opacity-85"
            ></div>
            <div class="relative p-8">
                <div class="text-white mb-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">
                AI Financial Tools
                </h3>
                <ul class="space-y-3 text-white/90">
                <li class="flex items-center">
                    <svg
                    class="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                    />
                    </svg>
                    Personalized learning
                </li>
                <li class="flex items-center">
                    <svg
                    class="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                    />
                    </svg>
                    Smart recommendations
                </li>
                <li class="flex items-center">
                    <svg
                    class="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                    />
                    </svg>
                    Progress tracking
                </li>
                </ul>
            </div>
            </div>
        </div>
        </div>
    </div>
        <!-- Financial Literacy Tools Section -->
    <div class="py-16 px-4 sm:px-6 lg:px-8 bg-white">
    <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Financial Literacy Tools
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering communities with knowledge and tools for financial
            success
        </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <!-- Global Accessibility -->
        <div class="relative group">
            <div
            class="bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg">
            <div class="text-brand-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">
                Global Accessibility
            </h3>
            <ul class="space-y-3 text-gray-600">
                <li class="flex items-start">
                <span class="mr-2">•</span>
                Multi-language support
                </li>
                <li class="flex items-start">
                <span class="mr-2">•</span>
                Mobile-first design
                </li>
                <li class="flex items-start">
                <span class="mr-2">•</span>
                Offline learning capabilities
                </li>
            </ul>
            </div>
        </div>

        <!-- Social Impact Metrics -->
        <div class="relative group">
            <div
            class="bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg">
            <div class="text-brand-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">
                Social Impact Metrics
            </h3>
            <ul class="space-y-3 text-gray-600">
                <li class="flex items-start">
                <span class="mr-2">•</span>
                Community growth tracking
                </li>
                <li class="flex items-start">
                <span class="mr-2">•</span>
                Financial literacy scores
                </li>
                <li class="flex items-start">
                <span class="mr-2">•</span>
                Impact visualization
                </li>
            </ul>
            </div>
        </div>

        <!-- Early Adoption Incentives -->
        <div class="relative group">
            <div
            class="bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg">
            <div class="text-brand-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">
                Early Adoption Incentives
            </h3>
            <ul class="space-y-3 text-gray-600">
                <li class="flex items-start">
                <span class="mr-2">•</span>
                Reward programs
                </li>
                <li class="flex items-start">
                <span class="mr-2">•</span>
                Priority access features
                </li>
                <li class="flex items-start">
                <span class="mr-2">•</span>
                Community leadership roles
                </li>
            </ul>
            </div>
        </div>
        </div>
    </div>
    </div>

</div>
@endsection