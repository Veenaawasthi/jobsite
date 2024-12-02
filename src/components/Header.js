import React from "react";
import { Link } from "react-router-dom";

const Header = ({ isAuthenticated }) => (
  <header className="bg-blue-600 text-white shadow">
    <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link to="/">Job Portal</Link>
      </h1>
      <nav className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/jobs" className="hover:underline">Jobs</Link>
        {isAuthenticated ? (
          <>
            <Link to="/profile" className="hover:underline">Profile</Link>
            <Link to="/logout" className="hover:underline">Logout</Link>
          </>
        ) : (
          <>
            <Link to="/signup" className="hover:underline">Sign Up</Link>
            <Link to="/login" className="hover:underline">Login</Link>
          </>
        )}
      </nav>
    </div>
  </header>
);

export default Header;
