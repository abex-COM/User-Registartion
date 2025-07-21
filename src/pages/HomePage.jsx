import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome!</h1>
        <p className="text-gray-700 mb-2">
          This is the Home Page of your application.
        </p>
        <p className="text-gray-700 mb-2">Feel free to explore the features.</p>
        <p className="text-gray-700 mb-4">
          For account creation, please go to the Signup page.
        </p>

        <div className="space-x-4">
          <Link
            to="/signup"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Signup
          </Link>
          <Link
            to="/users"
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
          >
            View Users
          </Link>
        </div>

        <p className="text-gray-500 mt-4 text-sm">
          For any issues, contact support.
        </p>
      </div>
    </div>
  );
}
