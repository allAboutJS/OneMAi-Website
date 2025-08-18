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
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Community Financing for a Better Future
        </h1>
        <p class="text-xl sm:text-2xl text-white mb-8">
            Empowering communities through zero-interest and a secured
            democratic financial solution
        </p>
        <a href="#" id="signupEarlyAccessBtn-2"
            class="inline-block bg-brand-600 text-white px-4 py-2 rounded-lg text-lg text-center font-semibold hover:bg-brand-700 transition duration-300 ease-in-out transform hover:-translate-y-1 w-50">
            Signup for early Perks.
        </a>
        </div>
        <!-- Image Column -->
        <div class="flex items-center justify-center">
        <img src="images/content.png" alt="Community" class="w-full h-full object-cover" />
        </div>
    </div>
    </div>
</div>




<!-- How It Works Section -->
<div class="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50"> <!-- Reduced padding -->
    <div class="max-w-7xl mx-auto">
    <div class="text-center mb-12"> <!-- Reduced margin-bottom -->
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        How It Works
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Get started with OneMAI in four simple steps
        </p>
    </div>

    <div class="space-y-16"> <!-- Reduced spacing between steps -->
        <!-- Step 1: Create and Join -->
        <div class="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12"> <!-- Reduced gap -->
        <div class="w-full md:w-1/2 order-2 md:order-1">
            <div class="bg-white rounded-2xl shadow-lg p-6"> <!-- Reduced padding -->
            <div class="text-brand-600 mb-4">
                <span class="inline-block px-4 py-2 rounded-full bg-brand-100 text-brand-600 text-sm font-semibold">
                Step 1
                </span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">
                Create and Join a Community
            </h3>
            <p class="text-gray-600 mb-6">
                Start by creating your own community or joining an existing
                one. Connect with like-minded individuals who share your
                financial goals.
            </p>
            <ul class="space-y-3 text-gray-600">
                <li class="flex items-start">
                <svg class="h-6 w-6 text-brand-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Create a new community in minutes
                </li>
                <li class="flex items-start">
                <svg class="h-6 w-6 text-brand-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Join existing communities
                </li>
            </ul>
            </div>
        </div>
        <div class="order-1 md:order-2">
            <img src="./images/join-a-community.png" alt="Create Community Interface"
            class="rounded-2xl h-[550px] object-contain" /> <!-- Reduced image height -->
        </div>
        </div>

        <!-- Step 2: Set Rules -->


        <!-- Step 3: Set Parameters -->
        <div class="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12"> <!-- Reduced gap -->
        <div class="w-full md:w-1/2 order-2 md:order-1">
            <div class="bg-white rounded-2xl shadow-lg p-6"> <!-- Reduced padding -->
            <div class="text-brand-600 mb-4">
                <span class="inline-block px-4 py-2 rounded-full bg-brand-100 text-brand-600 text-sm font-semibold">
                Step 3
                </span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">
                Set Pooling and Withdrawal Parameters
            </h3>
            <p class="text-gray-600 mb-6">
                Configure contribution amounts, frequency, and withdrawal
                rules that work for your community.
            </p>
            <ul class="space-y-3 text-gray-600">
                <li class="flex items-start">
                <svg class="h-6 w-6 text-brand-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Set contribution schedules
                </li>
                <li class="flex items-start">
                <svg class="h-6 w-6 text-brand-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Define withdrawal criteria
                </li>
            </ul>
            </div>
        </div>
        <div class="order-1 md:order-2">
            <img src="./images/community-rules.png" alt="Parameters Setup Interface"
            class="rounded-2xl h-[550px] object-contain" /> <!-- Reduced image height -->
        </div>
        </div>

        <!-- Step 4: Pool and Receive -->
        <div class="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12"> <!-- Reduced gap -->
        <div>
            <img src="./images/receive-fund.png" alt="Fund Management Interface"
            class="rounded-2xl h-[550px] object-contain" /> <!-- Reduced image height -->
        </div>
        <div class="w-full md:w-1/2">
            <div class="bg-white rounded-2xl shadow-lg p-6"> <!-- Reduced padding -->
            <div class="text-brand-600 mb-4">
                <span class="inline-block px-4 py-2 rounded-full bg-brand-100 text-brand-600 text-sm font-semibold">
                Step 4
                </span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">
                Pool and Receive Funds
            </h3>
            <p class="text-gray-600 mb-6">
                Start contributing to the pool and receive funds according
                to your community's established rules.
            </p>
            <ul class="space-y-3 text-gray-600">
                <li class="flex items-start">
                <svg class="h-6 w-6 text-brand-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Step in profile
                </li>
                <li class="flex items-start">
                <svg class="h-6 w-6 text-brand-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Join or create a community
                </li>
                <li class="flex items-start">
                <svg class="h-6 w-6 text-brand-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Set paramters
                </li>
                <li class="flex items-start">
                <svg class="h-6 w-6 text-brand-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Pool and receive funds
                </li>

            </ul>
            </div>
        </div>
        </div>
    </div>
    </div>
</div>
<!-- Survey Results -->
<div class="mt-20 bg-white rounded-3xl p-8 lg:p-12 shadow-lg text-center">
    <h3 class="text-2xl font-bold text-gray-900 mb-8">
    Community Impact Survey
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="text-center">
        <div class="text-4xl font-bold text-brand-600 mb-2">850+</div>
        <p class="text-gray-600">
        Already signed up for OneMAI release
        </p>
    </div>
    <div class="text-center">
        <div class="text-4xl font-bold text-brand-600 mb-2">80%</div>
        <p class="text-gray-600">
        Believe OneMAI will be more reliable than traditional rotational savings method
        </p>
    </div>
    <div class="text-center">
        <div class="text-4xl font-bold text-brand-600 mb-2">50+</div>
        <p class="text-gray-600">
        Direct and indirect Jobs
        </p>
    </div>
    </div>
</div>

<!-- Testimonials Section -->
<div class="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
    <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Success Stories
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Real stories from our community members who transformed their
        financial future
        </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Success Story 1 -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div class="relative h-64">
            <img src="./images/indian-3.jpg" alt="John's Story" class="w-full h-full object-cover" />
            <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
            <h3 class="text-xl font-semibold text-white">Arjun's Story</h3>
            <p class="text-gray-200">Small Business Owner</p>
            </div>
        </div>
        <div class="p-6">
            <blockquote class="text-gray-600 italic mb-4">
            "OneMAI will help me secure interest-free financing for my small
            business at Martim Moniz. The community support will grow , and the
            transparent system will give me peace of mind."
            </blockquote>
            <p class="text-gray-700">
            Achieved business expansion goal in 8 months through community
            funding
            </p>
        </div>
        </div>

        <!-- Success Story 2 - Video Testimonial -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div class="relative h-64">
            <video class="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
            controls>
            <source src="path-to-your-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
            <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
            <h3 class="text-xl font-semibold text-white">
                Sarah's Journey
            </h3>
            <p class="text-gray-200">Community Leader</p>
            </div>
        </div>
        <div class="p-6">
            <blockquote class="text-gray-600 italic mb-4">
            "Traditional savings groups were challenging to manage. With
            OneMAI, everything will be automated and secure. Our community will surely
            grow stronger."
            </blockquote>
            <p class="text-gray-700">
            Managing a 50-member savings group successfully for 2 years
            </p>
        </div>
        </div>

        <!-- Success Story 3 -->
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div class="relative h-64">
            <img src="./images/santos.jpg" alt="Maria's Story" class="w-full h-full object-cover" />
            <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
            <h3 class="text-xl font-semibold text-white">
                Santos's Success
            </h3>
            <p class="text-gray-200">Student</p>
            </div>
        </div>
        <div class="p-6">
            <blockquote class="text-gray-600 italic mb-4">
            "Before OneMAI, I struggled with traditional rotating savings
            groups. Now, I can easily track contributions and access funds
            when needed."
            </blockquote>
            <p class="text-gray-700">
            Funded education through community support
            </p>
        </div>
        </div>
    </div>

    </div>
</div>
<!-- Partner Logos -->
<div class="bg-gray-50 rounded-2xl p-8 md:p-12">
    <h1 class="text-xl font-semibold text-gray-900 text-center mb-8">
    Partners
    </h1>
    <div class="grid grid-cols-2 md:grid-cols-8 gap-8 items-center justify-items-center opacity-75">
    <img src="./images/partners/start-up.png" alt="Better Finance"
        class="max-h-20 grayscale hover:grayscale-0 transition-all duration-300" />
    <img src="./images/partners/eit.png" alt="Better Finance"
        class="max-h-20 grayscale hover:grayscale-0 transition-all duration-300" />
    <img src="./images/partners/lisbon.png" alt="Better Finance"
        class="max-h-20 grayscale hover:grayscale-0 transition-all duration-300" />

    </div>
</div>

<!-- Call to Action Section -->
<div class="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-600 to-brand-800">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
    <svg class="h-full w-full" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
        <path
        d="M-22.4-10.4l15.5 15.5L-22.4 20.6l15.5 15.5L-22.4 51.6l15.5 15.5L-22.4 82.6l15.5 15.5L-22.4 113.6l15.5 15.5L-22.4 144.6l15.5 15.5"
        stroke="currentColor" stroke-width="2" fill="none"></path>
    </svg>
    </div>

    <div class="relative max-w-7xl mx-auto text-center">
    <h2 class="text-3xl sm:text-4xl font-bold text-white mb-8">
        Ready to Transform Your Community's Financial Future?
    </h2>
    <p class="text-xl text-brand-100 mb-12 max-w-3xl mx-auto">
        Join thousands of communities already benefiting from OneMAI's
        innovative financial solutions
    </p>

    <!-- Email Signup Popup -->
    <div id="emailSignupPopup" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center hidden">
        <div class="bg-white rounded-lg p-8 max-w-md w-full text-center">
        <h3 class="text-xl font-bold text-gray-900 mb-6">Sign Up for Early Access</h3>
        <form id="emailSignupForm" class="space-y-4">
            <input type="email" id="emailInput" name="email" placeholder="Enter your email"
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            required />
            <button type="submit"
            class="w-full bg-brand-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-700 transition duration-300">
            Notify Me
            </button>
            <p id="response-message" class="mt-4 text-center"></p>
        </form>
        <button id="closeEmailPopupBtn"
            class="mt-4 bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-400 transition duration-300">
            Close
        </button>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

        <!-- Sign Up Card -->
        <div
        class="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div class="text-brand-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-4">
            Early Access
        </h3>
        <p class="text-gray-600 mb-6">
            Be among the first to experience the future of community financing
        </p>
        <button id="signupEarlyAccessBtn"
            class="inline-block bg-brand-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-700 transition duration-300">
            Get Started
        </button>
        </div>

        <!-- Join Community Card -->
        <div
        class="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div class="text-brand-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-4">
            Join the Community
        </h3>
        <p class="text-gray-600 mb-6">
            Connect with like-minded individuals and start your financial journey
        </p>
        <button id="joinCommunityBtn"
            class="inline-block bg-brand-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-700 transition duration-300">
            Join Now
        </button>
        </div>

        <!-- Popup Modal -->
        <div id="socialMediaPopup"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center hidden">
        <div class="bg-white rounded-lg p-8 max-w-md w-full text-center">
            <h3 class="text-xl font-bold text-gray-900 mb-6">Join Us On Social Media</h3>
            <div class="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/company/joinonemai/" target="_blank"
                class="text-gray-600 hover:text-brand-600">
                <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
            </a>
            <a href="http://instagram.com/mai.platform/" target="_blank" class="text-gray-600 hover:text-brand-600">
                <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            </a>
            <a href="https://web.facebook.com/joinonemai?_rdc=1&_rdr#" target="_blank"
                class="text-gray-600 hover:text-brand-600">
                <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z" />
                </svg>
            </a>
            <a href="https://t.me/joinonemai" target="_blank" class="text-gray-600 hover:text-brand-600">
                <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path
                    d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.428.26l.204-3.05 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.87 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.57-4.458c.538-.196 1.006.128.832.941z" />
                </svg>
            </a>
            </div>
            <button id="closePopupBtn"
            class="mt-6 bg-brand-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-brand-700 transition duration-300">
            Close
            </button>
        </div>
        </div>

        <!-- Download Pitchdeck Card -->
        <!-- <div
        class="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div class="text-brand-600 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        </div>
        <h3 class="text-xl font-bold text-gray-900 mb-4">
            Download Pitchdeck
        </h3>
        <p class="text-gray-600 mb-6">
            Learn more about our vision, technology, and business model
        </p>
        <a href="#"
            class="inline-block bg-brand-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-700 transition duration-300">
            Download Now
        </a>
        </div> -->
    </div>

    <!-- Newsletter Signup -->
    <div class="mt-16 max-w-xl mx-auto">
        <h3 class="text-xl font-semibold text-white mb-6">
        Stay Updated with Our Progress
        </h3>
        <form class="flex flex-col sm:flex-row gap-4">
        <input type="email" placeholder="Enter your email"
            class="flex-1 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-400" />
        <button type="submit"
            class="bg-brand-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-400 transition duration-300">
            Subscribe
        </button>
        </form>
    </div>
    </div>
</div>

<!-- FAQ Section -->
<div id="faq" class="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
    <div class="max-w-3xl mx-auto">
    <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Frequently Asked Questions
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Find answers to common questions about OneMAI
        </p>
    </div>

    <!-- FAQ Tabs -->
    <div x-data="{ 
                tab: 'users',
                openItem: null,
                setTab(newTab) { 
                    this.tab = newTab;
                    this.openItem = null;
                },
                isOpen(item) {
                    return this.openItem === item
                },
                toggleItem(item) {
                    this.openItem = this.openItem === item ? null : item
                }
            }">
        <!-- Tab Buttons -->
        <div class="flex justify-center space-x-4 mb-8">
        <button @click="setTab('users')"
            :class="tab === 'users' ? 'bg-brand-600 text-white' : 'bg-gray-100 text-gray-600'"
            class="px-6 py-3 rounded-lg font-semibold transition duration-300">
            For Users
        </button>
        <button @click="setTab('partners')"
            :class="tab === 'partners' ? 'bg-brand-600 text-white' : 'bg-gray-100 text-gray-600'"
            class="px-6 py-3 rounded-lg font-semibold transition duration-300">
            For Partners
        </button>
        </div>

        <!-- Users FAQ -->
        <div x-show="tab === 'users'" class="space-y-4">
        <!-- Question 1 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <button @click="toggleItem('user-1')"
            class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50">
            <span class="font-semibold text-gray-900">What is OneMAI, and how does it work?</span>
            <svg class="h-6 w-6 text-gray-400 transform transition-transform duration-200"
                :class="{ 'rotate-180': isOpen('user-1') }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
            </button>
            <div x-show="isOpen('user-1')" x-collapse class="px-6 py-4 bg-gray-50">
            <p class="text-gray-600">
                OneMAI is a community-driven financial platform modernizing
                informal savings systems. Users pool money in groups and
                take turns accessing funds, ensuring transparency and
                security through advanced technology.
            </p>
            </div>
        </div>

        <!-- Question 2 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <button @click="toggleItem('user-2')"
            class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50">
            <span class="font-semibold text-gray-900">How is OneMAI different from traditional savings
                platforms?</span>
            <svg class="h-6 w-6 text-gray-400 transform transition-transform duration-200"
                :class="{ 'rotate-180': isOpen('user-2') }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
            </button>
            <div x-show="isOpen('user-2')" x-collapse class="px-6 py-4 bg-gray-50">
            <p class="text-gray-600">
                Unlike banks or loan services, OneMAI provides customizable savings groups tailored to your
                needs.
            </p>
            </div>
        </div>

        <!-- Question 3 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <button @click="toggleItem('user-3')"
            class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50">
            <span class="font-semibold text-gray-900">Is OneMAI secure?</span>
            <svg class="h-6 w-6 text-gray-400 transform transition-transform duration-200"
                :class="{ 'rotate-180': isOpen('user-3') }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
            </button>
            <div x-show="isOpen('user-3')" x-collapse class="px-6 py-4 bg-gray-50">
            <p class="text-gray-600">
                Yes, We are partnered with insured financial institutions
                (Local and International Banks) to ensure your funds are
                safe at all times. OneMAI does not handle funds withholding,
                financial institutions does. The OneMAI platform also leverages
                core technology and strict encryption protocols to
                ensure all transactions are transparent, secure, and
                tamper-proof.
            </p>
            </div>
        </div>

        <!-- Question 4 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <button @click="toggleItem('user-4')"
            class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50">
            <span class="font-semibold text-gray-900">Can I create my own savings group?</span>
            <svg class="h-6 w-6 text-gray-400 transform transition-transform duration-200"
                :class="{ 'rotate-180': isOpen('user-4') }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
            </button>
            <div x-show="isOpen('user-4')" x-collapse class="px-6 py-4 bg-gray-50">
            <p class="text-gray-600">
                Absolutely! You can create or join savings groups based on
                your financial goals and invite trusted participants.
            </p>
            </div>
        </div>

        <!-- Question 5 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <button @click="toggleItem('user-5')"
            class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50">
            <span class="font-semibold text-gray-900">What happens if someone defaults on payments?</span>
            <svg class="h-6 w-6 text-gray-400 transform transition-transform duration-200"
                :class="{ 'rotate-180': isOpen('user-5') }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
            </button>
            <div x-show="isOpen('user-5')" x-collapse class="px-6 py-4 bg-gray-50">
            <p class="text-gray-600">
                OneMAI uses AI-powered risk assessment to minimize defaults and
                provides backup options to safeguard group funds.
            </p>
            </div>
        </div>

        <!-- Question 6 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <button @click="toggleItem('user-6')"
            class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50">
            <span class="font-semibold text-gray-900">Are there any fees for using OneMAI?</span>
            <svg class="h-6 w-6 text-gray-400 transform transition-transform duration-200"
                :class="{ 'rotate-180': isOpen('user-6') }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
            </button>
            <div x-show="isOpen('user-6')" x-collapse class="px-6 py-4 bg-gray-50">
            <p class="text-gray-600">
                OneMAI charges a service/withdrawal fee between 0.5-2%.
            </p>
            </div>
        </div>

        <!-- Question 7 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <button @click="toggleItem('user-7')"
            class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50">
            <span class="font-semibold text-gray-900">What is OneMAI's social impact?</span>
            <svg class="h-6 w-6 text-gray-400 transform transition-transform duration-200"
                :class="{ 'rotate-180': isOpen('user-7') }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
            </button>
            <div x-show="isOpen('user-7')" x-collapse class="px-6 py-4 bg-gray-50">
            <p class="text-gray-600">
                OneMAI empowers users with financial independence, reduces
                reliance on predatory loans, and promotes financial
                literacy, aligning with ESG (Environmental, Social,
                Governance) goals.
            </p>
            </div>
        </div>
        </div>

        <!-- Partners FAQ -->
        <div x-show="tab === 'partners'" class="space-y-4">
        <!-- Question 1 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <button @click="toggleItem('partner-1')"
            class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50">
            <span class="font-semibold text-gray-900">How can companies benefit from partnering with OneMAI?</span>
            <svg class="h-6 w-6 text-gray-400 transform transition-transform duration-200"
                :class="{ 'rotate-180': isOpen('partner-1') }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
            </button>
            <div x-show="isOpen('partner-1')" x-collapse class="px-6 py-4 bg-gray-50">
            <p class="text-gray-600">
                Companies can offer OneMAI as a financial cooperative platform
                for employees, fostering financial well-being, improving
                productivity, and enhancing retention.
            </p>
            </div>
        </div>

        <!-- Question 2 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <button @click="toggleItem('partner-2')"
            class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50">
            <span class="font-semibold text-gray-900">How does OneMAI ensure compliance with EU financial
                regulations?</span>
            <svg class="h-6 w-6 text-gray-400 transform transition-transform duration-200"
                :class="{ 'rotate-180': isOpen('partner-2') }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
            </button>
            <div x-show="isOpen('partner-2')" x-collapse class="px-6 py-4 bg-gray-50">
            <p class="text-gray-600">
                OneMAI is fully compliant with EU financial and data protection
                regulations, ensuring secure and lawful operations across
                all markets.
            </p>
            </div>
        </div>

        <!-- Question 3 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <button @click="toggleItem('partner-3')"
            class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50">
            <span class="font-semibold text-gray-900">How can OneMAI improve financial inclusion in my
                organization?</span>
            <svg class="h-6 w-6 text-gray-400 transform transition-transform duration-200"
                :class="{ 'rotate-180': isOpen('partner-3') }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
            </button>
            <div x-show="isOpen('partner-3')" x-collapse class="px-6 py-4 bg-gray-50">
            <p class="text-gray-600">
                OneMAI provides employees with access to savings tools,
                and financial literacy programs,
                promoting financial security and trust.
            </p>
            </div>
        </div>

        <!-- Question 4 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <button @click="toggleItem('partner-4')"
            class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50">
            <span class="font-semibold text-gray-900">What analytics or insights will I have access to?</span>
            <svg class="h-6 w-6 text-gray-400 transform transition-transform duration-200"
                :class="{ 'rotate-180': isOpen('partner-4') }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
            </button>
            <div x-show="isOpen('partner-4')" x-collapse class="px-6 py-4 bg-gray-50">
            <p class="text-gray-600">
                Partners can access engagement reports, group performance
                data, and impact metrics to evaluate the program's success.
            </p>
            </div>
        </div>
        </div>
    </div>
    </div>
</div>


<!-- Contact Us Section -->
<div id="contact" class="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
    <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Contact Us
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
        Have questions? We're here to help. Reach out to us through any of
        these channels.
        </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="bg-white rounded-2xl shadow-lg p-8">
        <h3 class="text-2xl font-bold text-gray-900 mb-6">
            Send us a Message
        </h3>
        <form class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input type="text" id="name" name="name"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                placeholder="Your name" />
            </div>
            <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" id="email" name="email"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                placeholder="your@email.com" />
            </div>
            </div>
            <div>
            <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">Subject</label>
            <input type="text" id="subject" name="subject"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                placeholder="How can we help?" />
            </div>
            <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea id="message" name="message" rows="4"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent"
                placeholder="Your message..."></textarea>
            </div>
            <button type="submit"
            class="w-full bg-brand-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-700 transition duration-300">
            Send Message
            </button>
        </form>
        </div>

        <!-- Contact Information -->
        <div class="lg:pl-12">
        <div class="bg-gradient-to-br from-brand-600 to-brand-700 rounded-2xl p-8 text-white h-full">
            <h3 class="text-2xl font-bold mb-8">Get in Touch</h3>

            <!-- Contact Details -->
            <div class="space-y-6 mb-12">
            <div class="flex items-start">
                <div class="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mt-1" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                </div>
                <div class="ml-4">
                <p class="font-semibold">Email</p>
                <a href="mailto:hello@joinonemai.com"
                    class="text-brand-100 hover:text-white">hello@joinonemai.com</a>
                </div>
            </div>
            <div class="flex items-start">
                <div class="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mt-1" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                </div>
                <div class="ml-4">
                <p class="font-semibold">Phone</p>
                <a href="tel:+351912351720" class="text-brand-100 hover:text-white">+351 969 519 614</a>
                </div>
            </div>
            </div>

            <!-- Social Media Links -->
            <div>
            <h4 class="font-semibold mb-4">Follow Us</h4>
            <div class="flex space-x-4">
                <a href="https://www.linkedin.com/company/joinonemai/"
                class="bg-white/10 p-3 rounded-full hover:bg-white/20 transition duration-300">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                </a>
                <a href="http://instagram.com/mai.platform/"
                class="bg-white/10 p-3 rounded-full hover:bg-white/20 transition duration-300">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                </a>
                <a href="https://web.facebook.com/joinonemai?_rdc=1&_rdr#"
                class="bg-white/10 p-3 rounded-full hover:bg-white/20 transition duration-300">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z" />
                </svg>
                </a>
                <a href="https://t.me/joinonemai"
                class="bg-white/10 p-3 rounded-full hover:bg-white/20 transition duration-300">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                    d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.428.26l.204-3.05 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.87 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.57-4.458c.538-.196 1.006.128.832.941z" />
                </svg>
                </a>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
</div>
</div>
@endsection