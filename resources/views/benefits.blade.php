@extends('layouts.app')
@section('page')
<!-- Add padding to the hero section to account for fixed navbar -->
<div class="pt-16">
    <!-- Hero Section -->
    <div class="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-teal-500">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Text Column -->
            <div class="flex flex-col justify-center">
            <h1
                class="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            >
            Benfits
            </h1>
            <p class="text-xl sm:text-2xl text-white mb-8">
                Unlock collective financial power and build a stronger future with OneMAI.
            </p>
            
            </div>
            <!-- Image Column -->
            <div class="flex items-center justify-center">
            <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80"
                alt="Community"
                class="w-full h-full object-cover rounded-lg shadow-lg"
            />
            </div>
        </div>
        </div>
    </div>

    <!-- About Us Section -->
    <div id="about" class="py-16 px-4 sm:px-6 lg:px-8 bg-white">
    <div class="max-w-7xl mx-auto">
        <!-- What isOneMAI? Section -->
        <div class="mb-12">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        About OneMAI
        </h2>
        <p class="text-lg text-gray-700 leading-relaxed max-w-4xl">
            OneMAI is a platform designed for you to revolutionize community-based financing. By modernizing traditional
            rotational savings, OneMAI provides a secure, transparent and democratic way for communities to pool funds
            for
            personal and shared goals towards achiving financial independence. A blend of technology and your trusted
            community for financial inclusion.
        </p>
        </div>

        <!-- Mission Statement Section -->
        <!-- <div>
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Benfits of OneMAI
        </h2>
        <p class="text-lg text-gray-700 leading-relaxed max-w-4xl">
            To empower communities and groups by providing an inclusive financial platform that promotes trust,
            financial growth and sustainable processes. OneMAI aims to bridge the gap in financial inclusion and create
            a
            future where everyone can achieve their financial goals collaboratively.
        </p>
        </div> -->
    </div>
    </div>
    
    <!-- Benefits Section -->
    <div id="benefits" class="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
            <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Benefits of OneMAI
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Creating value for individuals and organizations
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <!-- For Users -->
            <div
            class="bg-gradient-to-br from-brand-50 to-brand-100 rounded-3xl p-8 lg:p-12"
            >
            <div class="flex items-center mb-8">
                <div class="p-3 bg-brand-600 rounded-2xl mr-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 text-white"
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
                <h3 class="text-2xl font-bold text-gray-900">For Users</h3>
            </div>
            <div class="space-y-6">
                <div class="flex items-start">
                <div class="flex-shrink-0">
                    <svg
                    class="h-6 w-6 text-brand-600 mt-1"
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
                </div>
                <div class="ml-4">
                    <h4 class="text-lg font-semibold text-gray-900">
                    Access to Zero-interest Financing
                    </h4>
                    <p class="mt-2 text-gray-600">
                    Eliminate traditional loan burdens with interest-free
                    financial solutions.
                    </p>
                </div>
                </div>
                <div class="flex items-start">
                <div class="flex-shrink-0">
                    <svg
                    class="h-6 w-6 text-brand-600 mt-1"
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
                </div>
                <div class="ml-4">
                    <h4 class="text-lg font-semibold text-gray-900">
                    Secured Rotational Savings
                    </h4>
                    <p class="mt-2 text-gray-600">
                    Safe and transparent pooled savings with blockchain
                    security.
                    </p>
                </div>
                </div>
                <div class="flex items-start">
                <div class="flex-shrink-0">
                    <svg
                    class="h-6 w-6 text-brand-600 mt-1"
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
                </div>
                <div class="ml-4">
                    <h4 class="text-lg font-semibold text-gray-900">
                    Financial Literacy Tools
                    </h4>
                    <p class="mt-2 text-gray-600">
                    Access educational resources and tools for better
                    financial management.
                    </p>
                </div>
                </div>
                <div class="flex items-start">
                <div class="flex-shrink-0">
                    <svg
                    class="h-6 w-6 text-brand-600 mt-1"
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
                </div>
                <div class="ml-4">
                    <h4 class="text-lg font-semibold text-gray-900">
                    Community Support
                    </h4>
                    <p class="mt-2 text-gray-600">
                    Join a network of like-minded individuals working towards
                    financial goals.
                    </p>
                </div>
                </div>
            </div>
            </div>

            <!-- For Companies -->
            <div
            class="bg-gradient-to-br from-brand-50 to-brand-100 rounded-3xl p-8 lg:p-12"
            >
            <div class="flex items-center mb-8">
                <div class="p-3 bg-brand-600 rounded-2xl mr-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-900">
                For Companies & Organizations
                </h3>
            </div>
            <div class="space-y-6">
                <div class="flex items-start">
                <div class="flex-shrink-0">
                    <svg
                    class="h-6 w-6 text-brand-600 mt-1"
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
                </div>
                <div class="ml-4">
                    <h4 class="text-lg font-semibold text-gray-900">
                    Employee Financial Welfare
                    </h4>
                    <p class="mt-2 text-gray-600">
                    Support your employees' financial well-being with
                    innovative solutions.
                    </p>
                </div>
                </div>
                <div class="flex items-start">
                <div class="flex-shrink-0">
                    <svg
                    class="h-6 w-6 text-brand-600 mt-1"
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
                </div>
                <div class="ml-4">
                    <h4 class="text-lg font-semibold text-gray-900">
                    Improved Retention
                    </h4>
                    <p class="mt-2 text-gray-600">
                    Enhance employee loyalty through financial support
                    programs.
                    </p>
                </div>
                </div>
                <div class="flex items-start">
                <div class="flex-shrink-0">
                    <svg
                    class="h-6 w-6 text-brand-600 mt-1"
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
                </div>
                <div class="ml-4">
                    <h4 class="text-lg font-semibold text-gray-900">
                    Enhanced Productivity
                    </h4>
                    <p class="mt-2 text-gray-600">
                    Boost workplace performance by reducing financial stress.
                    </p>
                </div>
                </div>
                <div class="flex items-start">
                <div class="flex-shrink-0">
                    <svg
                    class="h-6 w-6 text-brand-600 mt-1"
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
                </div>
                <div class="ml-4">
                    <h4 class="text-lg font-semibold text-gray-900">
                    Analytics and Insight
                    </h4>
                    <p class="mt-2 text-gray-600">
                    Access detailed reports and insights on financial wellness
                    programs.
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>

</div> 
@endsection