import React from 'react';

const HelpPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-white rounded-lg shadow p-8">
        <h1 className="text-2xl font-semibold mb-4 text-gray-800">Need Help?</h1>
        
        <p className="text-gray-700 mb-4">
          Welcome to <span className="font-medium text-blue-600">WellNest</span> — your personal wellness companion.
        </p>

        <p className="text-gray-700 mb-4">
          With WellNest, you can track your mood, receive personalized health and mental wellness tips, practice meditation, and explore exercises to improve your overall well-being.
        </p>

        <p className="text-gray-700 mb-4">
          If you're unsure how to use a feature, facing any issues, or need guidance on wellness tips — we are here to help. Our goal is to support you on your journey to better mental and physical health.
        </p>

        <p className="text-sm text-gray-500">
          For further assistance, contact us at{" "}
          <a href="mailto:support@wellnest.app" className="text-blue-600 underline">
            support@wellnest.app
          </a>
        </p>
      </div>
    </div>
  );
};

export default HelpPage;
