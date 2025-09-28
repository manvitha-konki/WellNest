import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export default function CollapsibleSidebarDashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedMood, setSelectedMood] = useState("");

  const moods = ["😊", "😌", "😐", "😔", "😢"];
  const tips = {
    "😊": "Keep up the great energy! Try a short meditation to maintain your positivity.",
    "😌": "Relaxed mood! Take a gentle walk or do some light stretching.",
    "😐": "Neutral mood. How about journaling your thoughts for a few minutes?",
    "😔": "Feeling low? Try a 5-minute deep breathing exercise.",
    "😢": "It’s okay to feel sad. Listen to soothing music or practice self-care.",
  };

  const sidebarItems = [
    { title: "Dashboard", route: "/dashboard" },
    { title: "Meditation", route: "/meditation" },
    { title: "Breathing Exercise", route: "/breathing" },
    { title: "Customizable Health Tips", route: "/profile-screen" },
    { title: "Saved Tips", route: "/saved-tips" },
    { title: "Settings", route: "/settings" },
    { title: "Help", route: "/help" },
    { title: "Terms & Conditions", route: "/termsAndConditions" },
    {
      title: "Log Out",
      action: () => {
        if (window.confirm("Are you sure you want to log out?")) {
          localStorage.clear();
          // sessionStorage.clear();     // Clear session storage too
          navigate("/");
        }
      },
    },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-blue-200/30 backdrop-blur-sm z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-blue-200 text-blue-900 p-6 shadow-md z-50 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center gap-3 mb-6">
          <img
            src="/logo.png"
            alt="WellNest
             Logo"
            className="w-10 h-10 rounded-full shadow"
          />
          <h2 className="text-2xl font-extrabold text-blue-700 tracking-wide">
            WellNest
          </h2>
        </div>
        {sidebarItems.map((item) => (
          <button
            key={item.title}
            onClick={() => {
              if (item.action) {
                item.action();
              } else if (item.route) {
                navigate(item.route);
              }
              setSidebarOpen(false);
            }}
            className="text-left py-3 px-4 rounded-lg hover:bg-blue-300 transition-all w-full text-blue-900"
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-blue-50 p-8 flex flex-col items-center gap-6">
        {/* Sidebar Toggle Button */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="self-start mb-2 p-3 rounded-lg bg-blue-400 text-white shadow-lg hover:brightness-105 hover:scale-105 transition"
        >
          <FaBars size={20} />
        </button>

        {/* Welcome */}
        <h2 className="text-4xl font-extrabold text-blue-600">Welcome Back!</h2>
        <p className="text-blue-800 text-center max-w-lg">
          How are you feeling today? Select your mood to receive personalized wellness tips.
        </p>

        {/* Mood Tracker */}
        <div className="flex gap-4 mt-2 text-4xl">
          {moods.map((m) => (
            <button
              key={m}
              onClick={() => setSelectedMood(m)}
              className={`p-5 rounded-full transition hover:scale-110 ${
                selectedMood === m
                  ? "bg-blue-400 text-white shadow-lg"
                  : "bg-white shadow-sm"
              }`}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Daily Tip */}
        {selectedMood && (
          <div className="mt-6 p-6 bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl shadow-lg max-w-md text-center">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Today's Tip
            </h3>
            <p className="text-blue-800">{tips[selectedMood]}</p>
          </div>
        )}

        {/* Daily Inspiration */}
        <div className="mt-6 p-6 bg-white rounded-2xl shadow-lg max-w-4xl w-full text-center">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">
            Daily Inspiration
          </h3>
          <p className="text-gray-700 italic">
            "Peace comes from within. Do not seek it without." – Buddha
          </p>
        </div>

        {/* Quick Access */}
        <div className="mt-6 p-6 bg-white rounded-2xl shadow-lg max-w-md w-full text-center">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">
            Personalized Health Tips
          </h3>
          <p className="text-gray-700 mb-4">
            Set your profile details to receive tips tailored for your goals.
          </p>
          <button
            onClick={() => navigate("/profile-screen")}
            className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 hover:scale-105 transition"
          >
            Go to Profile & Customize Tips
          </button>
        </div>
      </div>
    </div>
  );
}
