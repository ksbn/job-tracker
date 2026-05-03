# 🗂️ Job Tracker

A clean and simple React app to track your job applications — built as a portfolio project.

## ✨ Features

- ➕ Add job applications with company, role and status
- 🗑️ Delete applications you no longer need
- 🔍 Filter by status: Applied, Interview, Offer, Rejected
- 💾 Data saved in localStorage — persists after refresh

## 🛠️ Tech Stack

- React (Vite)
- JavaScript
- CSS
- localStorage

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/ksbn/job-tracker.git

# Install dependencies
cd job-tracker
npm install

# Run locally
npm run dev
```

## 📁 Project Structure

```
src/
├── components/
│   ├── JobForm.jsx     # Form to add new jobs
│   ├── JobList.jsx     # Renders list of job cards
│   ├── JobCard.jsx     # Single job card with delete
│   └── Filters.jsx     # Filter buttons by status
├── App.jsx             # Main app logic and state
├── main.jsx            # Entry point
└── styles.css          # Global styles
```

## 🎯 What I Learned

- Managing state with `useState` and `useEffect`
- Passing props between components
- Persisting data with localStorage
- Component-based architecture in React