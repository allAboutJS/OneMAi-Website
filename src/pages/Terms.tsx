// src/pages/Terms.tsx
import React from "react";

export default function Terms() {
  return (
    <main className="">
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Use</h1>

        <p className="text-lg text-gray-700 mb-4">
          These Terms of Use (&quot;Terms&quot;) govern your access to and use of the OneMAI platform and services. By
          accessing or using our services, you agree to be bound by these Terms.
        </p>

        <h3 className="text-xl text-gray-700 mb-4">
          Effective Date: February 8, 2025
          <br />
          Last Updated: February 8, 2025
        </h3>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Eligibility</h2>
        <p className="text-lg text-gray-700 mb-4">To use OneMAI services, you must:</p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>Be at least 18 years old</li>
          <li>Have legal capacity to enter into contracts</li>
          <li>Provide accurate and complete registration information</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Account Registration</h2>
        <p className="text-lg text-gray-700 mb-2">You must register for an account to access certain features. You are responsible for:</p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>Maintaining the confidentiality of your account credentials</li>
          <li>All activities that occur under your account</li>
          <li>Promptly notifying us of any unauthorized use</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Prohibited Activities</h2>
        <p className="text-lg text-gray-700 mb-2">You agree not to:</p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>Use the service for illegal purposes</li>
          <li>Attempt to gain unauthorized access to our systems</li>
          <li>Interfere with the proper working of the service</li>
          <li>Engage in fraudulent financial activities</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Financial Transactions</h2>
        <p className="text-lg text-gray-700 mb-2">OneMAI provides a platform for community-based financial services. You acknowledge that:</p>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>We are not a bank or financial institution</li>
          <li>All transactions are between community members</li>
          <li>We may impose transaction limits for security</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
        <p className="text-lg text-gray-700 mb-6">
          All content on the OneMAI platform, including text, graphics, logos, and software, is our property or the
          property of our licensors and is protected by intellectual property laws.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
        <p className="text-lg text-gray-700 mb-6">
          To the maximum extent permitted by law, OneMAI shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages resulting from your use of the service.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Modifications to Terms</h2>
        <p className="text-lg text-gray-700 mb-6">
          We reserve the right to modify these Terms at any time. We will provide notice of material changes through our
          platform or via email.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Governing Law</h2>
        <p className="text-lg text-gray-700 mb-6">
          These Terms shall be governed by and construed in accordance with the laws of Portugal, without regard to its
          conflict of law provisions.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
        <p className="text-lg text-gray-700">
          For questions about these Terms, please contact us at:{" "}
          <a href="mailto:hello@joinonemai.com" className="text-brand-600 underline">
            joinonemai.com
          </a>
        </p>
      </section>
    </main>
  );
}
