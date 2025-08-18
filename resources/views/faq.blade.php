@extends('layouts.app')
@section('page')

<main class="pt-24">
    <section class="max-w-4xl mx-auto px-6 py-14">
        <h1 class="text-3xl md:text-4xl font-extrabold mb-8">Frequently Asked Questions</h1>

        <!-- FAQ Item -->
        <div class="divide-y divide-gray-200 rounded-xl border border-gray-200">
            <!-- Q1 -->
            <details class="group p-6">
                <summary class="flex cursor-pointer list-none items-center justify-between">
                    <h3 class="text-lg font-semibold">Who can use OneMAI?</h3>
                    <span class="ml-4 text-gray-500 group-open:rotate-180 transition">▾</span>
                </summary>
                <p class="mt-3 text-gray-700">Adults (18+) who can legally enter contracts and pass KYC
                    verification.</p>
            </details>

            <!-- Q2 -->
            <details class="group p-6">
                <summary class="flex cursor-pointer list-none items-center justify-between">
                    <h3 class="text-lg font-semibold">Is there interest or hidden fees?</h3>
                    <span class="ml-4 text-gray-500 group-open:rotate-180 transition">▾</span>
                </summary>
                <p class="mt-3 text-gray-700">Group savings cycles are zero-interest. Standard processing fees (if
                    any) are disclosed before payments.</p>
            </details>

            <!-- Q3 -->
            <details class="group p-6">
                <summary class="flex cursor-pointer list-none items-center justify-between">
                    <h3 class="text-lg font-semibold">What happens if someone misses a payment?</h3>
                    <span class="ml-4 text-gray-500 group-open:rotate-180 transition">▾</span>
                </summary>
                <p class="mt-3 text-gray-700">
                    Reminders go out; repeated defaults may pause or reorder payouts and can restrict the member
                    from future groups. Admins can apply group-agreed penalties.
                </p>
            </details>

            <!-- Q4 -->
            <details class="group p-6">
                <summary class="flex cursor-pointer list-none items-center justify-between">
                    <h3 class="text-lg font-semibold">How are disputes handled?</h3>
                    <span class="ml-4 text-gray-500 group-open:rotate-180 transition">▾</span>
                </summary>
                <p class="mt-3 text-gray-700">
                    Resolve in the group first using chat; escalate to the admin; if unresolved, escalate to OneMAI
                    with logs for mediation. Payouts may be temporarily frozen during review.
                </p>
            </details>

            <!-- Q5 -->
            <details class="group p-6">
                <summary class="flex cursor-pointer list-none items-center justify-between">
                    <h3 class="text-lg font-semibold">What data do you collect and why?</h3>
                    <span class="ml-4 text-gray-500 group-open:rotate-180 transition">▾</span>
                </summary>
                <p class="mt-3 text-gray-700">
                    We collect personal, device, and transaction data to verify identity, process
                    contributions/payouts, and secure the platform. You can access, correct, or request deletion as
                    allowed by law.
                </p>
            </details>

            <!-- Q6 -->
            <details class="group p-6">
                <summary class="flex cursor-pointer list-none items-center justify-between">
                    <h3 class="text-lg font-semibold">Can I get a refund?</h3>
                    <span class="ml-4 text-gray-500 group-open:rotate-180 transition">▾</span>
                </summary>
                <p class="mt-3 text-gray-700">
                    Contributions aren’t refundable once a rotation has started. Pre-start refunds or payment errors
                    are handled case-by-case within stated time windows.
                </p>
            </details>

            <!-- Q7 -->
            <details class="group p-6">
                <summary class="flex cursor-pointer list-none items-center justify-between">
                    <h3 class="text-lg font-semibold">How does OneMAI manage risk?</h3>
                    <span class="ml-4 text-gray-500 group-open:rotate-180 transition">▾</span>
                </summary>
                <p class="mt-3 text-gray-700">
                    KYC, transaction monitoring, sanctions screening, and fraud detection are combined with user
                    education and clear group governance. Availability may be affected by bank or network
                    disruptions.
                </p>
            </details>
        </div>

        <div class="mt-10">
            <a href="https://one-mai-affiliate.vercel.app/support"
                class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">Still
                need help? Contact us</a>
        </div>
    </section>
</main>

@endsection