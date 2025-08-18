@extends('layouts.app')
@section('page')

<main class="pt-24">
<!-- Hero -->
<section class="bg-gradient-to-r from-blue-900 to-cyan-500 text-white">
    <div class="max-w-7xl mx-auto px-6 py-16">
    <h1 class="text-4xl md:text-5xl font-extrabold">About OneMAI</h1>
    <p class="mt-4 text-lg md:text-xl max-w-3xl">
        OneMAI is a community group-savings platform that helps people contribute on a schedule and receive payouts in a fair rotation — zero interest, transparent, and secure.
    </p>
    </div>
</section>

<!-- Mission -->
<section class="max-w-7xl mx-auto px-6 py-14">
    <div class="grid md:grid-cols-2 gap-10">
    <div>
        <h2 class="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
        <p class="text-gray-700 leading-relaxed">
        Build a safe, disciplined savings culture powered by trust, clear rules, and accountable processes — with tools that automate contributions and protect members through verification and dispute support.
        </p>
    </div>
    <div class="bg-white rounded-xl shadow p-6">
        <h3 class="text-xl font-semibold mb-3">What we facilitate</h3>
        <ul class="space-y-2 text-gray-700 list-disc pl-5">
        <li>Join or create a savings group with fixed contribution and payout order.</li>
        <li>Automated payment schedules and rotation tracking.</li>
        <li>Clear group rules, responsibilities, and escalation paths.</li>
        </ul>
    </div>
    </div>
</section>

<!-- Trust & Safety -->
<section class="bg-gray-50">
    <div class="max-w-7xl mx-auto px-6 py-14">
    <h2 class="text-2xl md:text-3xl font-bold mb-6">Trust, Safety & Compliance</h2>
    <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white rounded-xl shadow p-6">
        <h4 class="font-semibold text-lg mb-2">KYC & AML/CFT</h4>
        <p class="text-gray-700">Every user is verified; transactions are monitored for suspicious patterns and may be reviewed or restricted when flagged.</p>
        </div>
        <div class="bg-white rounded-xl shadow p-6">
        <h4 class="font-semibold text-lg mb-2">Security & Resilience</h4>
        <p class="text-gray-700">Encryption, access controls, incident response, and business continuity practices keep your data and operations safe.</p>
        </div>
        <div class="bg-white rounded-xl shadow p-6">
        <h4 class="font-semibold text-lg mb-2">Your Rights</h4>
        <p class="text-gray-700">We follow GDPR/NDPR principles so you can access, correct, export, or request deletion of your data where applicable.</p>
        </div>
    </div>
    </div>
</section>

<!-- CTA -->
<section class="max-w-7xl mx-auto px-6 py-14">
    <div class="bg-blue-50 border border-blue-100 rounded-xl p-8 flex flex-col md:flex-row md:items-center md:justify-between">
    <div>
        <h3 class="text-2xl font-bold mb-2">Ready to explore?</h3>
        <p class="text-gray-700">See how groups run, what’s expected of members, and how payouts are handled.</p>
    </div>
    <div class="mt-4 md:mt-0">
        <a href="how-it-works.html" class="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">How It Works</a>
    </div>
    </div>
</section>
</main>

@endsection