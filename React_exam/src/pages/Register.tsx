import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://100.10.10.243:9191/api/auth/register",
        {
          username,
          password,
        }
      );
      console.log(response.data);
      alert(response.data.message);
      navigate("/login");
    } catch (error) {
      console.error("Register failed", error);
      alert("Register failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col max-w-md mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-4">Create an account</h1>
      <input
        type="text"
        className="border border-gray-300 p-2 rounded mb-4 w-full"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="border border-gray-300 p-2 rounded mb-4 w-full"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleRegister}
        disabled={loading}
        className={`bg-blue-500 text-white p-2 rounded w-full ${
          loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
        }`}
      >
        {loading ? "loading..." : "Register"}
      </button>
    </div>
  );
};

export default Register;
