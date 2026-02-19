// src/pages/Cookies.tsx
import React from "react";

export default function Cookies() {
  return (
    <main className="">
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Cookie Policy</h1>

        <p className="text-lg text-gray-700 mb-4">
          This Cookie Policy explains how OneMAI uses cookies and similar technologies to recognise you when you visit
          our website or use the app, what types of cookies we use, and how you can control them.
        </p>

        <h3 className="text-xl text-gray-700 mb-8">
          Last Updated: January 27, 2026
        </h3>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
        <p className="text-lg text-gray-700 mb-8">
          Cookies are small text files stored on your device when you visit a website or use an app. They help the site
          remember your actions and preferences over time so you do not have to re-enter information every time you
          return.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Types of Cookies We Use</h2>

        <h3 className="text-xl font-semibold text-gray-900 mb-1">Strictly Necessary Cookies</h3>
        <p className="text-sm text-gray-600 mb-1">These cookies are essential for the basic functioning of the service.</p>
        <p className="text-lg text-gray-700 mb-4">
          They enable core features such as security, network management, and allowing you to log in and move around the
          platform. You cannot opt out of these cookies as the service would not work without them.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-1">Performance and Analytics Cookies</h3>
        <p className="text-sm text-gray-600 mb-1">Used to understand how the platform is used.</p>
        <p className="text-lg text-gray-700 mb-4">
          These cookies help us measure traffic, identify popular features, and understand where users might be
          experiencing errors, so we can improve performance and reliability.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-1">Functional and Preference Cookies</h3>
        <p className="text-sm text-gray-600 mb-1">Used to remember your choices.</p>
        <p className="text-lg text-gray-700 mb-8">
          These cookies remember things like your preferred language, region, or display settings so that your
          experience is smoother and more personalised.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Third-Party Tools and Services</h2>
        <p className="text-lg text-gray-700 mb-8">
          We may use trusted third-party tools (such as analytics providers) that place their own cookies to help us
          understand usage patterns, detect fraud, or integrate with services like payment providers. These third
          parties are bound by data protection and confidentiality obligations.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Your Choices and Control</h2>
        <p className="text-lg text-gray-700 mb-3">
          You can control cookies through your browser or device settings. Most browsers allow you to block or delete
          cookies, and some let you decide which sites may use them.
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-1">
          <li>You can choose to block all cookies, but some features of OneMAI may not function properly.</li>
          <li>You can clear cookies from your device at any time using your browser settings.</li>
          <li>For mobile apps, your operating system may provide additional controls over tracking technologies.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Updates to This Cookie Policy</h2>
        <p className="text-lg text-gray-700 mb-6">
          We may update this Cookie Policy from time to time to reflect changes in technology, law, or how we use
          cookies. When we make significant changes, we will notify you through the website, app, or by email where
          appropriate.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie and Privacy Questions</h2>
        <p className="text-lg text-gray-700">
          If you have questions about how we use cookies or how they relate to your privacy, contact us at{" "}
          <a href="mailto:hello@joinonemai.com" className="underline">
            hello@joinonemai.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}
