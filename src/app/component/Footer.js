"use client";

export default function Footer() {
    return (
        <footer className="bg-black bg-opacity-80 text-white text-center p-4 fixed bottom-0 left-0 w-full z-50">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Copyright */}
                <p className="text-sm">© {new Date().getFullYear()} AI Search Tool. All rights reserved.</p>

                {/* Links */}
                <div className="flex space-x-4 mt-2 md:mt-0">
                    <a href="#" className="hover:text-gray-300 transition">
                        Privacy Policy
                    </a>
                    <a href="#" className="hover:text-gray-300 transition">
                        Terms of Service
                    </a>
                    <a href="#" className="hover:text-gray-300 transition">
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
}
