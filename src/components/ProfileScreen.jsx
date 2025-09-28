// src/components/ProfileScreen.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TipsScreen from "./TipsScreen";
import SavedTips from "./SavedTips";

export default function ProfileScreen() {
  const [activeTab, setActiveTab] = useState("profile");
  const [profileData, setProfileData] = useState(
    JSON.parse(localStorage.getItem("profileData")) || { age: "", gender: "male", goal: "fitness" }
  );

  const navigate = useNavigate();

  const handleSaveProfile = (profile) => {
    setProfileData(profile);
    localStorage.setItem("profileData", JSON.stringify(profile));
    alert("Profile saved! Now you can view your customized health tips.");
  };

  const renderRightContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Tell us about yourself</h2>
            <input
              type="number"
              placeholder="Age"
              value={profileData.age}
              onChange={(e) => setProfileData({ ...profileData, age: e.target.value })}
              className="my-2 p-2 border rounded w-full"
            />
            <select
              value={profileData.gender}
              onChange={(e) => setProfileData({ ...profileData, gender: e.target.value })}
              className="my-2 p-2 border rounded w-full"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <select
              value={profileData.goal}
              onChange={(e) => setProfileData({ ...profileData, goal: e.target.value })}
              className="my-2 p-2 border rounded w-full"
            >
              <option value="fitness">Fitness</option>
              <option value="mental">Mental Health</option>
              <option value="nutrition">Nutrition</option>
            </select>
            <button
              onClick={() => handleSaveProfile(profileData)}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Save Profile
            </button>
          </div>
        );

      case "healthTips":
        return <TipsScreen profileData={profileData} />;

      case "savedTips":
        return <SavedTips />;

      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-blue-200 text-blue-900 p-6 shadow-md flex flex-col gap-4">
        <h2 className="text-2xl font-bold mb-6">Profile Menu</h2>
        <button
          onClick={() => setActiveTab("profile")}
          className={`text-left py-2 px-3 rounded hover:bg-blue-300 ${
            activeTab === "profile" ? "bg-blue-300" : ""
          }`}
        >
          👤 Profile
        </button>
        <button
          onClick={() => setActiveTab("healthTips")}
          className={`text-left py-2 px-3 rounded hover:bg-blue-300 ${
            activeTab === "healthTips" ? "bg-blue-300" : ""
          }`}
        >
          💡 Health Tips
        </button>
        <button
          onClick={() => setActiveTab("savedTips")}
          className={`text-left py-2 px-3 rounded hover:bg-blue-300 ${
            activeTab === "savedTips" ? "bg-blue-300" : ""
          }`}
        >
          💾 Saved Tips
        </button>
      </div>

      {/* Right content */}
      <div className="flex-1 bg-blue-50 p-6">{renderRightContent()}</div>
    </div>
  );
}
