// src/pages/Cookies.tsx
import React from "react";

export default function Cookies() {
  return (
    <main className="">
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">MAI Cookie Policy</h1>

        <p className="text-lg text-gray-700 mb-4">
          Welcome to OneMAI! Your privacy is our priority. This page explains how we use cookies and similar
          technologies when you use our services. By accessing <strong>www.joinonemai.com</strong> or using our
          platform, you consent to the practices outlined here. If you disagree with any part, please discontinue use of
          our services.
        </p>

        <h3 className="text-xl text-gray-700 mb-4">
          Effective Date: February 8, 2025
          <br />
          Last Updated: February 8, 2025
        </h3>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Who We Are</h2>
        <p className="text-lg text-gray-700 mb-4">
          OneMAI operates as a digital community-based financial platform. We comply with GDPR and applicable local
          laws. Contact us at{" "}
          <a href="mailto:hello@joinonemai.com" className="underline">joinonemai.com</a>.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
        <p className="text-lg text-gray-700 mb-4">
          We collect information to enhance your experience and ensure platform security:
        </p>

        <h3 className="text-xl font-bold text-gray-900 mb-2">Personal Information</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li>Name, email address, phone number</li>
          <li>Nationality, identification documents (if required for verification)</li>
          <li>Banking details (for transactions and security purposes)</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900 mb-2">Usage Data</h3>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li>Device information (IP address, browser type, operating system)</li>
          <li>Interaction history (pages visited, time spent on the platform)</li>
          <li>Log-in timestamps and preferences</li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900 mb-2">Third-Party Integrations</h3>
        <p className="text-lg text-gray-700 mb-4">
          If you register using Google, Facebook, LinkedIn, WhatsApp or Twitter, we may collect basic details linked to
          these accounts.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Data</h2>
        <p className="text-lg text-gray-700 mb-4">
          Data helps us deliver seamless services and maintain security (e.g., transactions, verification, communication,
          analytics). We do <strong>not</strong> sell your personal information.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security &amp; Retention</h2>
        <p className="text-lg text-gray-700 mb-4">
          We use encryption, access controls, and fraud prevention. Data is retained only as long as necessary for
          compliance and service improvement.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Sharing Your Information</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
          <li>Banking &amp; Financial Partners – secure transaction processing</li>
          <li>Regulatory Authorities – when required by law</li>
          <li>Third-Party Service Providers – analytics, fraud detection, or cloud storage</li>
        </ul>
        <p className="text-lg text-gray-700 mb-4">
          All third parties are held to GDPR-compliant confidentiality standards.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights &amp; Control</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-1">
          <li>Access &amp; Correction</li>
          <li>Data Deletion</li>
          <li>Opt-Out of marketing emails</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Use of Cookies &amp; Tracking</h2>
        <p className="text-gray-700 mb-4">
          We use cookies to improve experience, personalize content, and analyze traffic. You can disable cookies in your
          browser; certain features may be affected.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Policy Updates</h2>
        <p className="text-gray-700">
          We may update this policy periodically and will notify users of significant changes on the site or via email.
          For cookie/privacy questions, contact{" "}
          <a href="mailto:hello@joinonemai.com" className="underline">joinonemai.com</a>.
        </p>
      </section>
    </main>
  );
}
