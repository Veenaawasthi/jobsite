import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    console.log("User signed up:", { email, password });
    setIsAuthenticated(true);
    navigate("/profile");
  };

  return (
    <div className="max-w-md mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
      <input
        type="email"
        placeholder="Email"
        className="w-full mb-4 px-4 py-2 border rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full mb-4 px-4 py-2 border rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleSignUp}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
