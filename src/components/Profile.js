import React, { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    location: "",
    skills: "",
    experience: "",
  });

  const [isEditing, setIsEditing] = useState(true); // To toggle between edit and view modes

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save the profile to localStorage or send it to the backend
    localStorage.setItem("userProfile", JSON.stringify(profile));
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-4 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-blue-600">Your Profile</h1>

      {isEditing ? (
        <div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={profile.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={profile.location}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your location"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Skills</label>
            <input
              type="text"
              name="skills"
              value={profile.skills}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your skills (e.g., React, Python)"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Experience</label>
            <input
              type="text"
              name="experience"
              value={profile.experience}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your experience in years"
            />
          </div>

          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Save Profile
          </button>
        </div>
      ) : (
        <div>
          <p className="mb-4">
            <span className="font-semibold text-gray-700">Full Name:</span> {profile.fullName}
          </p>
          <p className="mb-4">
            <span className="font-semibold text-gray-700">Email:</span> {profile.email}
          </p>
          <p className="mb-4">
            <span className="font-semibold text-gray-700">Location:</span> {profile.location}
          </p>
          <p className="mb-4">
            <span className="font-semibold text-gray-700">Skills:</span> {profile.skills}
          </p>
          <p className="mb-4">
            <span className="font-semibold text-gray-700">Experience:</span> {profile.experience} years
          </p>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700"
          >
            Edit Profile
          </button>
        </div>
      )}

      {!isEditing && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Search Jobs Based on Your Profile</h2>
          <button
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            onClick={() => {
              const { location, skills } = profile;
              alert(
                `Searching jobs for location: "${location}" and skills: "${skills}". This feature requires backend integration.`
              );
            }}
          >
            Search Jobs
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
