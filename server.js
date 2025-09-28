import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Proxy route
app.post("/api/gemini", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            }),
        }
        );

    const data = await response.json();
    res.json(data); 
  } catch (error) {
    console.error("Proxy Error:", error);
    res.status(500).json({ error: "Failed to fetch from Gemini" });
  }
});

app.listen(PORT, () =>
  console.log(`🚀 Proxy server running on http://localhost:${PORT}`)
);
