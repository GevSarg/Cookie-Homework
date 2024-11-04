import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/login", {
        email,
        password,
      })
      .then((response) => {
        const data = response.data;

        const { _id } = data;
        navigate(`/user/${_id}`);
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        alert("Failed to login. Please check your credentials.");
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-500 to-blue-700 text-white">
      <div className="w-full max-w-md p-8 bg-white bg-opacity-20 rounded-lg shadow-lg backdrop-blur-sm">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-80 text-gray-700 outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-80 text-gray-700 outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition duration-200"
          >
            Login
          </button>
          <div className="mt-6 text-center">
            <p className="text-gray-300 mb-2">Need an account?</p>
            <Link
              to="/register"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg px-4 py-2 transition duration-200"
            >
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
