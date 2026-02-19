// src/pages/Terms.tsx
import React from "react";

export default function Terms() {
  return (
    <main className="">
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-normal text-gray-900 mb-6">Terms of Use</h1>

        <p className="text-lg text-gray-700 mb-4">
          These Terms of Use (&quot;Terms&quot;) govern your access to and use of the OneMAI platform and services. By
          accessing or using our services, you agree to be bound by these Terms.
        </p>

        <h3 className="text-xl text-gray-700 mb-8">
          Last Updated: January 27, 2026
        </h3>

        <h2 className="text-2xl font-normal text-gray-900 mb-4">1. Regulatory Position</h2>
        <p className="text-lg text-gray-700 mb-8">
          OneMAI is not a bank, lender, or financial institution and does not hold or safeguard customer funds.
          Regulated financial services are provided by licensed Electronic Money Institutions (EMIs) or Payment
          Institutions (PIs) in accordance with EU law, including PSD2.
        </p>

        <h2 className="text-2xl font-normal text-gray-900 mb-4">2. Eligibility and Account Responsibility</h2>
        <p className="text-lg text-gray-700 mb-3">
          To use OneMAI and participate in community savings groups, you must meet basic eligibility criteria:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>Be at least 18 years old with full legal capacity.</li>
          <li>Provide accurate identification and maintain a valid bank account or payout method.</li>
          <li>Not be subject to sanctions or prior bans from OneMAI services.</li>
          <li>Keep your login credentials confidential. You are responsible for all activity carried out through your account.</li>
        </ul>

        <h2 className="text-2xl font-normal text-gray-900 mb-4">3. Community Participation and Contributions</h2>
        <p className="text-lg text-gray-700 mb-8">
          By joining a group or Pot, you agree to contribute in line with the rules shown in the app. Contributions,
          payouts, and rotation order are managed transparently through the platform. Commission structures, where
          applicable, are based on actual usage, not just sign-ups.
        </p>

        <h2 className="text-2xl font-normal text-gray-900 mb-4">4. Prohibited Conduct</h2>
        <h3 className="text-xl font-medium text-gray-900 mb-2">Things You Must Not Do</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li>Create fake, duplicate, or self-referral accounts.</li>
          <li>Promise profits, loans, or guaranteed returns to other users.</li>
          <li>Use spam, bots, or deceptive advertising to bring people into the platform.</li>
          <li>Collect or store user personal data outside approved OneMAI processes.</li>
        </ul>

        <h3 className="text-xl font-medium text-gray-900 mb-2">Misrepresentation</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-1">
          <li>Claiming to be an employee, agent, or financial advisor of OneMAI.</li>
          <li>Using OneMAI branding in a way that confuses or misleads people.</li>
          <li>Giving personal financial or investment advice in OneMAI’s name.</li>
          <li>Misrepresenting how our savings groups or payouts work.</li>
        </ul>

        <h2 className="text-2xl font-normal text-gray-900 mb-4">5. Payouts, Suspension, and Termination</h2>
        <p className="text-lg text-gray-700 mb-3">
          Payouts and commissions (where applicable) are subject to verification and compliance checks.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li>
            We may suspend or terminate access if these Terms are violated or if there are regulatory concerns.
          </li>
          <li>
            Serious violations may result in immediate forfeiture of unpaid commissions or removal from groups.
          </li>
          <li>You are responsible for any taxes or reporting obligations related to payouts you receive.</li>
        </ul>

        <h2 className="text-2xl font-normal text-gray-900 mb-4">6. Governing Law</h2>
        <p className="text-lg text-gray-700 mb-3">
          These Terms are governed by the laws of the European Union and the applicable national laws of OneMAI’s
          registered operating entity.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>
            Any disputes will be handled under the jurisdiction of the courts where OneMAI’s primary operating entity is
            established.
          </li>
          <li>Local consumer protection laws in your country of residence may also grant you additional rights.</li>
        </ul>

        <h2 className="text-2xl font-normal text-gray-900 mb-4">7. Contact and Changes to These Terms</h2>
        <p className="text-lg text-gray-700 mb-3">
          We may update these Terms from time to time, for example to reflect changes in law, features, or business
          practices. When we make material changes, we will notify you through the app or by email.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          If you have questions about these Terms or how they apply to you, contact us at:
        </p>
        <p className="text-lg text-gray-700">
          <a href="mailto:hello@joinonemai.com" className="text-brand-600 underline">
            hello@joinonemai.com
          </a>
        </p>
      </section>
    </main>
  );
}
