# AI-Generated Wellness Recommendation Board  

An interactive web app that captures user profile (age, gender, goals) and generates **personalized wellness tips** using Google Gemini AI. Users can explore, save, and revisit their favorite health recommendations.  

---

## 🚀 Features  

- 👤 **Profile Capture**: Age, gender, and wellness goal (Fitness, Nutrition, Mental Health).  
- 🤖 **AI-Powered Tips**: Fetches **5 personalized health tips** from Gemini API.  
- 📖 **Detailed View**: Click a tip to see step-by-step guidance.  
- 💾 **Save Tips**: Store favorites locally for future access.  
- 🎨 **UI/UX**: Clean dashboard, sidebar navigation, mood tracker, and customizable settings.  
- 🌗 **Dark Mode (WIP)**: Planned feature for better accessibility.  
- 💬 **Chatbot Integration**: Floating chatbot for interactive Q&A.  

---

## ⚙️ Installation  

### 1. Clone the Repository  
git clone https://github.com/manvitha-konki/WellNest.git
cd WellNest

### 2. Install Dependancies
  - Frontend:
      ```bash
      npm install
  - Backend:
      ```bash
      cd server
      npm install express node-fetch cors dotenv


### 3. Set up Environment Variables

Create a file named **`.env`** in the project root directory and add your API key:
  ```bash
  GEMINI_API_KEY=your_api_key_here
