# AI-Generated Wellness Recommendation Board  

An interactive web app that captures user profile (age, gender, goals) and generates **personalized wellness tips** using Google Gemini AI. Users can explore, save, and revisit their favorite health recommendations.  

---

## Features  

- **Profile Capture**: Age, gender, and wellness goal (Fitness, Nutrition, Mental Health).  
- **AI-Powered Tips**: Fetches **5 personalized health tips** from Gemini API.  
- **Detailed View**: Click a tip to see step-by-step guidance.  
- **Save Tips**: Store favorites locally for future access.  
- **UI/UX**: Clean dashboard, sidebar navigation, mood tracker, and customizable settings.  
- **Dark Mode (WIP)**: Planned feature for better accessibility.  
- **Chatbot Integration**: Floating chatbot for interactive Q&A.  

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

Create a file named **`.env`** in the project root directory and add your API key

---

## Problem Understanding

The task is to build an AI-powered wellness board that generates personalized health tips based on user input (age, gender, and wellness goals).

- Users first provide profile details.
- The system generates 5 simple, engaging health tips using Gemini AI.
- Clicking a tip provides detailed explanation and step-by-step advice.
- Users can save their favorite tips, which persist locally.

---

## Assumptions:

- Tips are generated dynamically with Gemini API, not hardcoded.
- LocalStorage is sufficient for saving tips (no external DB required).
- Target platform: Web first, but architecture allows mobile extension.

---

## AI Prompts & Iterations

- **Initial Prompt** (Issue – returned markdown with bold text):

Generate 5 simple health tips for a 21-year-old female who wants to improve fitness.
- **Refined Prompt** (Fixed bold/markdown issues, added structure):

Generate 5 simple, engaging health tips for a {age}-year-old {gender} who wants to improve {goal}.
Always return as a numbered list. Each line should start with an emoji, then a short title, then a short description.

---

## Architecture & Code Structure

- **Navigation:** App.jsx manages routes (Dashboard, Profile, Tips, Saved Tips, Settings).
- **Components:** Each feature is modularized into screens:
    - ProfileScreen.jsx → capture age, gender, goal.
    - TipsScreen.jsx → show scrollable AI tips.
    - TipDetail.jsx → expanded view of a selected tip.
    - SavedTips.jsx → view saved tips from localStorage.
    - Dashboard.jsx → main entry with sidebar + mood tracker.
- **AI Service:**
    - aiService.ts → handles API calls to backend /api/gemini.
    - server.js → Express backend proxy to Google Gemini API.
      
---

## Screenshots / Screen Recording

-Login Page 
  <img width="1000" height="600" alt="image" src="https://github.com/user-attachments/assets/24aa48d2-b492-4e69-9771-74ab9ebc13c0" />

- Profile Screen – User inputs (age, gender, goal).
  <img width="1000" height="600" alt="image" src="https://github.com/user-attachments/assets/d719ec36-ff68-4b78-87e8-90cb1c21d60c" />

- Dashboard – Sidebar navigation + mood tracker.
  <img width="1000" height="600" alt="image" src="https://github.com/user-attachments/assets/22a75402-16ae-4507-ad0f-acfa13eebb60" />
  <img width="1000" height="600" alt="image" src="https://github.com/user-attachments/assets/dc8210f4-e9f8-4d68-9633-d43a80652cd3" />

- Tips Screen – AI-generated cards with hover/save.
  <img width="1000" height="600" alt="image" src="https://github.com/user-attachments/assets/0b3160de-d2d3-416f-bfd6-53ab309084ce" />

- Tip Detail – Expanded explanation + steps.
  <img width="1000" height="600" alt="image" src="https://github.com/user-attachments/assets/e49c5d7a-7f5e-4a2e-89fa-d82e1b82c902" />

- Saved Tips – Persisted local list of saved recommendations.
 <img width="1000" height="600" alt="image" src="https://github.com/user-attachments/assets/f8f99a02-762b-454c-adeb-82791d9a3ec3" />

 - ChatBot
  <img width="1000" height="600" alt="image" src="https://github.com/user-attachments/assets/c7f82920-2ae8-4dd7-aaae-a32055d9953a" />


  
### **Screen Recording Video:**

[https://drive.google.com/file/d/12z1YJ83Q0pkM8GWpdbc5oE3f5YkYyW9o/view?usp=sharing](url)

---

## Known Issues / Improvements

**Known Issues:**
- AI sometimes formats text with unexpected bold/markdown.
- Dark Mode toggle not yet working across all pages.
- Backend must be manually started (node server.js).

**Planned Improvements:**
- Full Dark Mode support.
- Deploy backend to Railway/Render for hosted API.
- Use Firebase/MongoDB for persistent saved tips.

---

## Tech Stack

- Frontend: React (Vite) + TailwindCSS
- Backend: Node.js + Express + CORS
- AI: Google Gemini API
- Storage: LocalStorage
  
