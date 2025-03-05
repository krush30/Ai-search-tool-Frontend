# AI-Powered Search Dashboard (Frontend)

This is the **frontend** of the AI-powered search and aggregation tool. It allows users to search for queries and retrieve results from various sources like Google, YouTube, processed using GEMINI.

## Features

- User-friendly Search Interface
- Real-time API Integration
- Results from Google, YouTube
- AI-processed search results
- Responsive UI with modern styling

## Tech Stack

- **Frontend**: Next.js (React Framework)
- **Styling**: Tailwind CSS
- **API Requests**: Axios

## Prerequisites

Ensure you have the following installed:

- Node.js (v16+ recommended)
- An API-ready backend (Check the backend README)

## Installation

### 1. Clone the repository

```sh
git clone https://github.com/krush30/Ai-search-tool-Frontend.git
cd frontend
```

### 2. Install dependencies

```sh
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory and add:

```env
NEXT_PUBLIC_PORT=5000
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
```

### 4. Start the Development Server

```sh
npm run dev
```

The app will run at `http://localhost:3000`

## Project Structure

```
frontend/
│── components/
│   ├── Header.js         # App Header
│   ├── Footer.js         # App Footer
│── search/
│   ├── page.js
│── .env.local           # Environment Variables
│── package.json         # Dependencies
```
