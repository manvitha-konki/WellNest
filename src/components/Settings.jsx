import React from "react";

export default function Settings() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div className="p-6 min-h-screen bg-blue-50 dark:bg-gray-900 dark:text-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-300">
        Settings ⚙️
      </h2>

      {/* Dark Mode Toggle */}
      <div className="flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <span className="text-lg font-medium">Dark Mode</span>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-4 py-2 rounded transition ${
            darkMode
              ? "bg-yellow-400 text-gray-900 hover:bg-yellow-500"
              : "bg-gray-700 text-white hover:bg-gray-600"
          }`}
        >
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* Other Settings */}
      <div className="mt-6 space-y-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Notifications</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Manage your app notifications and reminders.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="font-semibold mb-2">Privacy</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Adjust your privacy preferences and account visibility.
          </p>
        </div>
      </div>
    </div>
  );
}
