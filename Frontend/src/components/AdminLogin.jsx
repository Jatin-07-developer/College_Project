import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ChefHat } from "lucide-react";

const API_URL = "http://localhost:5000";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // already logged in as admin? go straight to the dashboard
  if (localStorage.getItem("adminToken")) {
    return <Navigate to="/admin" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!username.trim() || !password) {
      setError("Please enter your username and password.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username.trim(), password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");

      localStorage.setItem("adminToken", data.token);
      localStorage.setItem("adminName", data.username);
      navigate("/admin");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#1A1A19] min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm border border-dashed border-[#6a4c2b] rounded-2xl p-6 flex flex-col gap-4 text-white">

        {/* Welcome */}
        <div className="flex flex-col items-center text-center gap-2">
          <ChefHat size={44} color="#ffcb3d" />
          <h1 className="text-2xl font-semibold">Campus Bites</h1>
          <p className="text-gray-400 text-sm">Fresh food between your lectures</p>
        </div>

        {/* Customer entry */}
        <Link
          to="/home"
          className="w-full text-center bg-[#ffcb3d] text-black py-2 rounded-xl font-medium hover:bg-white transition-colors duration-300"
        >
          Continue as customer
        </Link>

        {/* Divider */}
        <div className="flex items-center gap-3 text-gray-500 text-sm">
          <div className="flex-1 h-px bg-[#444444]" />
          <span>or admin login</span>
          <div className="flex-1 h-px bg-[#444444]" />
        </div>

        {/* Admin form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            className="bg-transparent border border-[#444444] rounded-xl px-3 py-2 outline-none placeholder:text-gray-400 focus:border-[#ffcb3d]"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              className="w-full bg-transparent border border-[#444444] rounded-xl px-3 py-2 pr-16 outline-none placeholder:text-gray-400 focus:border-[#ffcb3d]"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400 hover:text-[#ffcb3d] hover:cursor-pointer"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black py-2 rounded-xl font-medium hover:bg-[#ffcb3d] transition-colors duration-300 hover:cursor-pointer disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Admin login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;