import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users/getAllUsers")
      .then((res) => setUsers(res.data))
      .catch((err) =>
        setError(err.response?.data?.message || "Failed to load users.")
      );
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-green-100 to-green-300 p-6">
      <h1 className="text-2xl font-bold text-green-700 mb-6">
        All Registered Users
      </h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="bg-white shadow-md rounded-lg w-full max-w-md p-4">
        {users.length === 0 ? (
          <p className="text-gray-500 text-center">No users found.</p>
        ) : (
          <ul className="space-y-2">
            {users.map((user) => (
              <li
                key={user.id}
                className="p-3 border rounded-lg flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
                <span className="text-gray-500 text-sm">{user.phone}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
