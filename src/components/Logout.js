import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("User logged out");
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-4">Logging Out...</h1>
      <button
        onClick={handleLogout}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Confirm Logout
      </button>
    </div>
  );
};

export default Logout;
