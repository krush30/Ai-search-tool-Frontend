"use client"; // Use client-side rendering

import { useState } from "react";
import axios from "axios";

export default function Dashboard() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault(); // Prevent page reload
        if (!query) return alert("Please enter a search query.");

        setLoading(true);
        setError(null);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/search?query=${query}`);
            setResults(res.data.results || []);
        } catch (err) {
            console.error("Search Error:", err);
            setError("Failed to fetch results.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat text-white">
            <div className="w-full max-w-3xl bg-white bg-opacity-10 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-cyan-500 mt-26 mb-30">
                <h2 className="text-3xl font-bold mb-4 text-center text-cyan-400 drop-shadow-md">AI-Powered Search Dashboard</h2>

                <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 mb-6">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Enter search query..."
                        className="w-full p-3 border border-cyan-400 bg-black bg-opacity-40 text-white rounded-lg focus:ring-2 focus:ring-cyan-300 focus:outline-none placeholder-gray-400"
                    />
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:from-cyan-600 hover:to-blue-700 transition-all"
                    >
                        Search
                    </button>
                </form>

                {loading && <p className="text-center text-cyan-300 animate-pulse">Loading...</p>}
                {error && <p className="text-center text-red-500">{error}</p>}

                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
                    {results.map((result, index) => (
                        <li
                            key={index}
                            className="relative bg-black bg-opacity-30 backdrop-blur-xl border border-cyan-500 p-6 rounded-xl shadow-lg transform transition-all hover:scale-[1.05] hover:shadow-2xl"
                        >
                            <div className="space-y-2">
                                <p className="text-lg font-semibold text-cyan-400">{result.title}</p>
                                <p className="text-sm text-gray-300">{result.source}</p>
                            </div>
                            <div className="mt-4">
                                <a
                                    href={result.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium py-3 rounded-lg shadow-md hover:from-purple-600 hover:to-indigo-700 transition-all"
                                >
                                    Go 🚀
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
