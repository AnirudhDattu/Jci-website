import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F8F5F0] flex flex-col justify-center items-center px-4">
      <div className="max-w-xl w-full text-center">
        <h1 className="text-7xl md:text-9xl font-extrabold text-yellow-400 mb-8">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-700 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Link
            to="/"
            className="px-6 py-3 rounded-full bg-purple-600 text-white font-semibold shadow-md hover:bg-purple-700 transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/team"
            className="px-6 py-3 rounded-full bg-white text-purple-700 border border-purple-200 font-semibold shadow-md hover:bg-purple-50 transition-all duration-300"
          >
            Team
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 rounded-full bg-white text-purple-700 border border-purple-200 font-semibold shadow-md hover:bg-purple-50 transition-all duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 rounded-full bg-white text-purple-700 border border-purple-200 font-semibold shadow-md hover:bg-purple-50 transition-all duration-300"
          >
            Contact
          </Link>
        </div>
        <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} JCI Website. All rights reserved.</p>
      </div>
    </div>
  );
}
