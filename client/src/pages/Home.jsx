import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-700 text-white">
      <div className="text-center p-10 bg-white bg-opacity-20 rounded-lg shadow-lg backdrop-blur-sm">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
        <p className="text-lg mb-6">
          Join us by logging in or registering below.
        </p>
        <div className="flex justify-center gap-6">
          <Link
            to="/login"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition duration-200"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow transition duration-200"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
