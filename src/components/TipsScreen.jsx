// src/components/TipsScreen.jsx
import { useState, useEffect } from "react";
import TipDetail from "./TipDetail";
import { generateText } from "../services/aiService";

export default function TipsScreen({ profileData }) {
  const [tips, setTips] = useState([]);
  const [selectedTip, setSelectedTip] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchAITips = async () => {
    setLoading(true);
    try {
      const prompt = `Generate 5 simple, engaging health tips for a ${profileData.age}-year-old ${profileData.gender} who wants to improve ${profileData.goal}.
Always return as a numbered list. Each line should start with an emoji, then a short title, then a short description.
Do not use bold, italics, or markdown formatting. Example:
1. 🌿 Stay Hydrated: Drink water daily.`;

      const aiResponse = await generateText(prompt);

      const parsedTips = aiResponse
        .split("\n")
        .filter((line) => line.trim() && /^\d+\./.test(line)) // only keep numbered lines
        .map((line, idx) => {
          let clean = line.replace(/^\d+\.\s*/, "").trim();

          // Extract emoji
          const icon = clean.charAt(0).match(/\p{Emoji}/u) ? clean.charAt(0) : "💡";

          // Clean rest (strip emoji, bold, markdown)
          clean = clean
            .slice(1)
            .trim()
            .replace(/\*\*/g, "") // strip bold
            .replace(/[_~`]/g, "") // strip other markdown chars
            .normalize("NFC");

          return { id: idx + 1, icon, title: clean };
        });

      setTips(parsedTips);
    } catch (err) {
      console.error("Error fetching AI tips:", err);
    }
    setLoading(false);
  };

  const handleSave = (tip) => {
    const saved = JSON.parse(localStorage.getItem("savedTips") || "[]");
    if (!saved.find((t) => t.title === tip.title)) {
      localStorage.setItem("savedTips", JSON.stringify([...saved, tip]));
      alert("✅ Tip saved!");
    } else {
      alert("⚠️ Tip already saved.");
    }
  };

  useEffect(() => {
    fetchAITips();
  }, [profileData]);

  if (selectedTip) {
    return <TipDetail tip={selectedTip} onBack={() => setSelectedTip(null)} />;
  }

  return (
    <div className="p-6 min-h-screen bg-blue-50">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Health Tips for You</h2>

      {loading ? (
        <p>⏳ Generating your tips...</p>
      ) : (
        <div className="flex overflow-x-auto space-x-4 mb-6">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="relative min-w-[180px] max-w-[220px] p-4 bg-white shadow-md rounded-xl 
                         cursor-pointer transition transform hover:scale-105 hover:shadow-lg hover:bg-blue-50"
              onClick={() => setSelectedTip(tip)}
            >
              {/* Save icon in top right */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // prevent opening detail when clicking save
                  handleSave(tip);
                }}
                className="absolute top-2 right-2 text-blue-500 hover:text-blue-700"
                title="Save Tip"
              >
                💾
              </button>

              <div className="text-3xl">{tip.icon}</div>
              <div className="mt-2 font-semibold">{tip.title}</div>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={fetchAITips}
        className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
      >
        Regenerate Tips
      </button>
    </div>
  );
}
