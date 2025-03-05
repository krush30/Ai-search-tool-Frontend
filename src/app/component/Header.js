"use client";

export default function Header() {
    return (
        <header className="bg-black bg-opacity-80 text-white p-4 shadow-md fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* App Title */}
                <h1 className="text-2xl font-bold tracking-wide neon-text">
                    AI Search Tool
                </h1>

                {/* Navigation */}
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <a href="#" className="hover:text-gray-300 transition">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300 transition">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-300 transition">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
