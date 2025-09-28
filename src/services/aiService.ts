// src/services/aiService.ts
export const generateText = async (prompt: string): Promise<string> => {
  try {
    const response = await fetch("http://localhost:5000/api/gemini", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error(`Proxy returned status ${response.status}`);
    }

    const data = await response.json();

    // Safe extraction of AI text
    return (
      data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
      "⚠️ No response from AI"
    );
  } catch (error) {
    console.error("Proxy API Error:", error);
    return "⚠️ Unable to fetch AI response right now.";
  }
};
