// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import ProfileScreen from "./components/ProfileScreen";
import HelpPage from "./components/HelpPage";
import TermsAndConditions from "./components/TermsAndConditionsPage";
import MeditationPage from "./components/MeditationPage";
import BreathingPage from "./components/BreathingPage";
import TipsScreen from "./components/TipsScreen";
import CustomTipsScreen from "./components/CustomTipsScreen";
import SavedTips from "./components/SavedTips";
import Settings from "./components/Settings";
import Chatbot from "./components/Chatbot"; // 👈 chatbot

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-blue-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile-screen" element={<ProfileScreenWrapper />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/termsAndConditions" element={<TermsAndConditions />} />
          <Route path="/meditation" element={<MeditationPage />} />
          <Route path="/breathing" element={<BreathingPage />} />
          <Route path="/health-tips" element={<TipsScreen />} />
          <Route path="/custom-tips" element={<CustomTipsScreen />} />
          <Route path="/saved-tips" element={<SavedTips />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>

        {/* 👇 Floating chatbot is available everywhere */}
        <Chatbot />
      </div>
    </Router>
  );
}

// Wrapper stays the same
function ProfileScreenWrapper() {
  const handleProfileSubmit = (profile) => {
    localStorage.setItem("profileData", JSON.stringify(profile));
    window.location.href = "/custom-tips";
  };

  return <ProfileScreen onSubmit={handleProfileSubmit} />;
}
