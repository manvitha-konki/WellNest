// src/components/CustomTipsScreen.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TipsScreen from "./TipsScreen";

export default function CustomTipsScreen() {
  const [profileData, setProfileData] = useState(
    JSON.parse(localStorage.getItem("profileData")) || null
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!profileData) {
      navigate("/profile"); // redirect if no profile exists
    }
  }, [profileData, navigate]);

  if (!profileData) return null; // wait for redirect

  return <TipsScreen profileData={profileData} />;
}
