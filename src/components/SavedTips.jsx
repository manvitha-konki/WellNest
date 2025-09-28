  // src/components/SavedTips.jsx
  import { useState, useEffect } from "react";
  import TipDetail from "./TipDetail";

  export default function SavedTips() {
    const [savedTips, setSavedTips] = useState([]);
    const [selectedTip, setSelectedTip] = useState(null);

    useEffect(() => {
      setSavedTips(JSON.parse(localStorage.getItem("savedTips")) || []);
    }, []);

    const deleteTip = (id) => {
      const updated = savedTips.filter((t) => t.id !== id);
      setSavedTips(updated);
      localStorage.setItem("savedTips", JSON.stringify(updated));
    };

    if (selectedTip) {
      return <TipDetail tip={selectedTip} onBack={() => setSelectedTip(null)} />;
    }

    return (
      <div className="p-6 min-h-screen bg-blue-50">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Saved Tips</h2>

        {savedTips.length === 0 ? (
          <p>No saved tips yet.</p>
        ) : (
          <div className="flex flex-wrap gap-4">
            {savedTips.map((tip) => (
              <div
                key={tip.id}
                className="relative p-4 bg-white shadow-md rounded-xl w-60 cursor-pointer hover:shadow-lg transition"
              >
                {/* Clickable area for details */}
                <div onClick={() => setSelectedTip(tip)}>
                  <div className="text-3xl">{tip.icon}</div>
                  <h3 className="font-semibold text-lg">{tip.title}</h3>
                </div>

                {/* Delete button */}
                <button
                  onClick={() => deleteTip(tip.id)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                >
                  ❌
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
