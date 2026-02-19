// src/pages/Privacy.tsx
import React from "react";

export default function Privacy() {
  return (
    <main className="">
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>

        <p className="text-lg text-gray-700 mb-4">
          This Privacy Policy explains what personal data we collect when you use OneMAI, why we collect it, how it is
          stored and shared, and the rights you have under GDPR.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          By accessing <strong>www.joinonemai.com</strong> (the &quot;Website&quot;) or using our platform, you consent
          to the practices outlined in this policy. If you disagree with any part of this Privacy Policy, please
          discontinue use of our services.
        </p>

        <h3 className="text-xl text-gray-700 mb-8">
          Last Updated: January 27, 2026
        </h3>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Personal Data We Collect</h2>
        <p className="text-lg text-gray-700 mb-4">
          While using our services, we may ask you to provide certain personal information to protect you and other
          users. This may include, but is not limited to:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>First name and last name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Address, State, Province, ZIP/Postal code, City</li>
          <li>Transaction details</li>
          <li>Device and usage data</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Why We Collect Your Data</h2>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Core Purposes</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li>To verify your identity and keep the platform secure.</li>
          <li>To manage savings groups, contributions, and payouts.</li>
          <li>To contact you with important updates and service messages.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-900 mb-2">Additional Purposes</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li>To handle your requests and support tickets.</li>
          <li>
            To provide you with news, special offers, and general information related to OneMAI where permitted by law.
          </li>
          <li>To analyse usage so we can improve features, performance, and security.</li>
        </ul>
        <p className="text-sm text-gray-600 mb-8">
          We only collect the minimum data needed for each purpose and always aim to keep it accurate and up to date.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How Your Data Is Stored</h2>
        <p className="text-lg text-gray-700 mb-3">
          We take data security seriously and follow industry best practices to protect your information at all times.
        </p>
        <p className="text-lg text-gray-700 mb-2">
          All personal data is encrypted and stored on secure servers. Access is restricted to authorised personnel only.
        </p>
        <p className="text-lg text-gray-700 mb-2">
          We apply layered security controls, including encryption in transit and at rest, access controls, monitoring,
          and fraud prevention systems.
        </p>
        <p className="text-lg text-gray-700 mb-2">
          Data is retained only for as long as necessary to provide our services, comply with legal obligations, and
          resolve disputes.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          When data is no longer needed, we securely delete or anonymise it in line with our retention policies.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Who Your Data Is Shared With</h2>
        <p className="text-lg text-gray-700 mb-8">
          We do not sell your personal information. However, to run our platform safely and smoothly, we may share some
          of your data with trusted third parties under strict privacy and security agreements.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Types of Recipients</h2>
        <p className="text-lg text-gray-700 mb-3">
          Depending on how you use OneMAI, your data may be shared with the following categories of recipients:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
          <li>
            Financial institutions and payment processors that help us process your contributions and payouts. They may
            receive information such as your name, bank details, and transaction records.
          </li>
          <li>
            Licensed KYC (Know Your Customer) providers that verify your identity or IBAN details to prevent fraud and
            protect the community.
          </li>
          <li>
            Regulatory and law-enforcement authorities, but only when required by law (for example, fraud
            investigations, court orders, or financial compliance).
          </li>
          <li>
            Trusted technology and service providers who support our infrastructure, such as cloud hosting, data
            storage, analytics, and customer support tools. They may process your data on our behalf but cannot use it
            for their own purposes.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Transparency and Your Rights</h2>
        <p className="text-lg text-gray-700 mb-3">
          We believe your personal data belongs to you. As a user protected by GDPR, you have strong rights over how
          your information is used.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>
            <strong>Right of Access</strong> – You can ask us what personal data we hold about you and request a copy.
          </li>
          <li>
            <strong>Right to Rectification</strong> – If any of your data is incorrect or incomplete, you can ask us to
            correct it.
          </li>
          <li>
            <strong>Right to Erasure</strong> – In certain cases, you can ask us to delete your personal data, especially
            if you no longer use OneMAI or we no longer need it, unless we are legally required to keep it.
          </li>
          <li>
            <strong>Other Rights</strong> – You may also have the right to restrict processing, to data portability, and
            to object to certain types of processing, including direct marketing.
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact and Data Requests</h2>
        <p className="text-lg text-gray-700 mb-2">
          If you have any questions about this Privacy Policy, or if you wish to exercise your GDPR rights (access,
          rectification, erasure, restriction, portability, or objection), you can contact us at:
        </p>
        <p className="text-lg text-gray-700 mb-4">
          <a href="mailto:hello@joinonemai.com" className="underline">
            hello@joinonemai.com
          </a>
        </p>
        <p className="text-sm text-gray-600">
          We will review and respond to all valid data protection requests in accordance with applicable law.
        </p>
      </section>
    </main>
  );
}
