@extends('layouts.app')
@section('page')
<main class="pt-24">
    <!-- Steps -->
    <section class="max-w-7xl mx-auto px-6 py-14">
        <h1 class="text-3xl md:text-4xl font-extrabold mb-8">How OneMAI Works</h1>
        <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white shadow rounded-xl p-6">
            <h3 class="text-xl font-semibold mb-2">1) Verify & Set Up</h3>
            <p class="text-gray-700">Create an account and complete KYC. This unlocks group participation and helps prevent fraud.</p>
        </div>
        <div class="bg-white shadow rounded-xl p-6">
            <h3 class="text-xl font-semibold mb-2">2) Join or Create a Group</h3>
            <p class="text-gray-700">Groups define members, fixed contribution amount, payout order, start/end dates, and default rules.</p>
        </div>
        <div class="bg-white shadow rounded-xl p-6">
            <h3 class="text-xl font-semibold mb-2">3) Automate Contributions</h3>
            <p class="text-gray-700">Payments run on schedule through approved processors. Rotation payouts follow the agreed order.</p>
        </div>
        </div>

        <div class="grid md:grid-cols-2 gap-8 mt-10">
        <div class="bg-blue-50 border border-blue-100 rounded-xl p-6">
            <h4 class="text-lg font-semibold mb-2">Responsibilities</h4>
            <ul class="list-disc pl-5 space-y-2 text-gray-700">
            <li>Admins: set fair rules, monitor payments, coordinate, and mediate issues.</li>
            <li>Members: pay on time, respect payout order, and communicate early if issues arise.</li>
            </ul>
        </div>
        <div class="bg-green-50 border border-green-100 rounded-xl p-6">
            <h4 class="text-lg font-semibold mb-2">Defaults & Disputes</h4>
            <ul class="list-disc pl-5 space-y-2 text-gray-700">
            <li>Delays trigger reminders; repeated defaults can pause or reorder payouts and restrict access.</li>
            <li>Resolve in-group first → escalate to admin → escalate to OneMAI with logs for mediation.</li>
            </ul>
        </div>
        </div>

        <div class="mt-10">
        <a href="faq.html" class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">Read FAQs</a>
        </div>
    </section>
</main>
@endsection