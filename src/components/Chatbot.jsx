// src/components/Chatbot.jsx
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { generateText } from "../services/aiService";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hi! I'm your WellNest assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const aiResponse = await generateText(input);
      const botMessage = { sender: "bot", text: aiResponse || "⚠️ I couldn’t get a response." };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error("Chatbot error:", err);
      setMessages((prev) => [...prev, { sender: "bot", text: "❌ Something went wrong. Try again." }]);
    }

    setLoading(false);
  };

  return (
    <div className="fixed bottom-10 right-10 z-50"> 
      {/* 🔹 moved up (bottom-20) and slightly left (right-8) */}

      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          <MessageCircle size={30} />
        </button>
      ) : (
        <div className="w-80 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center p-3 bg-blue-500 text-white">
            <h3 className="font-semibold">WellNest Chatbot</h3>
            <button onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg max-w-[75%] ${
                  msg.sender === "user"
                    ? "ml-auto bg-blue-100 dark:bg-blue-600 text-right"
                    : "bg-gray-100 dark:bg-gray-700"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && <p className="text-gray-400">🤖 Typing...</p>}
          </div>

          {/* Input */}
          <div className="flex border-t border-gray-300 dark:border-gray-700">
            <input
              type="text"
              className="flex-1 p-2 text-sm outline-none dark:bg-gray-800 dark:text-white"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="px-4 bg-blue-500 text-white text-sm hover:bg-blue-600"
              disabled={loading}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
