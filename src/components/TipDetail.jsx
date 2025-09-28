// src/components/TipDetail.jsx
import { useState, useEffect } from "react";
import { generateText } from "../services/aiService";

export default function TipDetail({ tip, onBack }) {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchDetails = async () => {
    setLoading(true);
    try {
      const prompt = `Explain the following health tip in 2-3 sentences,
and then give 3 short, actionable steps formatted clearly as a numbered list.
Do not use bold or markdown in the response. 
Tip: ${tip.icon} ${tip.title}`;

      const aiResponse = await generateText(prompt);

      // Split into lines
      const lines = aiResponse.split("\n").map((l) => l.trim()).filter(Boolean);

      // Explanation = first non-numbered line
      const explanation = (
        lines.find((l) => !/^\d+\./.test(l)) ||
        "This is a helpful tip to improve your wellness."
      )
        .replace(/\*\*/g, "") // remove **bold**
        .normalize("NFC");    // fix emoji rendering

      // Steps = numbered lines
      const steps = lines
        .filter((l) => /^\d+\./.test(l))
        .map((s) =>
          s
            .replace(/^\d+\.\s*/, "") // remove numbering
            .replace(/\*\*/g, "")     // remove **bold**
            .normalize("NFC")         // normalize emoji
        );

      setDetails({ explanation, steps });
    } catch (err) {
      console.error("Error fetching tip details:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchDetails();
  }, [tip]);

  const handleSave = () => {
    const saved = JSON.parse(localStorage.getItem("savedTips") || "[]");
    if (!saved.find((t) => t.title === tip.title)) {
      localStorage.setItem("savedTips", JSON.stringify([...saved, tip]));
      alert("✅ Tip saved!");
    } else {
      alert("⚠️ Tip already saved.");
    }
  };

  return (
    <div className="p-6 min-h-screen bg-blue-50">
      <button onClick={onBack} className="mb-4 text-blue-500 hover:underline">
        ← Back
      </button>

      <h2 className="text-2xl font-bold mb-4">
        {tip.icon} {tip.title}
      </h2>

      {loading ? (
        <p className="italic text-gray-600">⏳ Loading detailed advice...</p>
      ) : (
        <>
          {details ? (
            <>
              <p className="mb-4">{details.explanation}</p>
              {details.steps.length > 0 && (
                <ul className="list-disc list-inside mb-6">
                  {details.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <p className="text-gray-600 italic mb-4">
              No detailed explanation available, but you can still save this tip.
            </p>
          )}

          <button
            onClick={handleSave}
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            💾 Save Tip
          </button>
        </>
      )}
    </div>
  );
}
