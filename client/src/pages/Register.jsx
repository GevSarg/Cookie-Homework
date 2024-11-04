import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "image" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });

    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        body: form,
      });
      const data = await response.json();

      if (response.ok) {
        alert("Registration successful!");
        navigate("/login");
      } else {
        alert(`Error: ${data.message || "Registration failed"}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-indigo-700 text-white">
      <div className="w-full max-w-lg p-8 bg-white bg-opacity-20 rounded-lg shadow-lg backdrop-blur-sm">
        <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-80 text-gray-700 outline-none"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-80 text-gray-700 outline-none"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-80 text-gray-700 outline-none"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-80 text-gray-700 outline-none"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          {/* Image */}
          <div>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-80 text-gray-700 outline-none"
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-purple-600 text-white font-semibold rounded-lg"
          >
            Register
          </button>
          <div className="mt-6 text-center">
            <Link
              to="/login"
              className="inline-block bg-purple-600 text-white font-semibold rounded-lg px-4 py-2"
            >
              Login here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
