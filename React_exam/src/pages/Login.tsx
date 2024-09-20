import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://100.10.10.243:9191/api/auth/token",
        {
          username,
          password,
        }
      );
      const token = response.data.data.token;
      dispatch(setToken(token)); // This action will be logged
      console.log("Successful", response.data);
      alert(response.data.state);
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Log In</h1>
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
        onClick={handleLogin}
        className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
      >
        Log In
      </button>
    </div>
  );
};

export default Login;
