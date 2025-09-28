import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-semibold mb-6 text-gray-800">Terms and Conditions</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">1. Introduction</h2>
          <p className="text-gray-600">
            Welcome to WellNest — your personal wellness and mental health companion. By using this platform, you agree to comply with the terms outlined here. Please read them carefully.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">2. Use of the Platform</h2>
          <p className="text-gray-600">
            WellNest is intended for wellness and mental health support. Users must not use the platform for illegal or unauthorized purposes. You are responsible for all activities under your account.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">3. Account Responsibility</h2>
          <p className="text-gray-600">
            You are responsible for maintaining the confidentiality of your account credentials. WellNest is not liable for any loss or damage resulting from unauthorized account access.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">4. Content and Conduct</h2>
          <p className="text-gray-600">
            Users should not share harmful, abusive, or inappropriate content. WellNest reserves the right to remove any content that violates these terms without prior notice.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">5. Privacy</h2>
          <p className="text-gray-600">
            We respect your privacy. Please refer to our Privacy Policy for details on how we collect, use, and protect your information.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">6. Termination</h2>
          <p className="text-gray-600">
            We reserve the right to suspend or terminate your access to WellNest at any time if you violate these terms or misuse the platform.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">7. Changes to Terms</h2>
          <p className="text-gray-600">
            We may update these terms from time to time. Continued use of the platform after changes are made constitutes your acceptance of the new terms.
          </p>
        </section>

        <section className="mt-8 text-sm text-gray-500">
          <p>
            If you have any questions or concerns, contact us at{" "}
            <a href="mailto:support@wellnest.app" className="text-blue-600 underline">
              support@wellnest.app
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
