import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import UsersPage from "./pages/userspage";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
        <h1 className="font-bold text-xl">User Registration App</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/signup" className="hover:underline">
            Signup
          </Link>
          <Link to="/users" className="hover:underline">
            Users
          </Link>
        </div>
      </nav>

      <div className="p-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
