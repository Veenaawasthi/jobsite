import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center px-4">
    <h1 className="text-5xl font-extrabold text-blue-600 mb-6 text-center">
      Find Your Dream Job
    </h1>
    <p className="text-gray-600 mb-4 text-center max-w-2xl">
      Discover thousands of job opportunities worldwide. Whether you're a fresh graduate or an experienced professional, we have the perfect job for you.
    </p>
    <div className="flex flex-wrap gap-4 justify-center">
      <Link
        to="/jobs"
        className="bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
      >
        Browse Jobs
      </Link>
      <Link
        to="/post-job"
        className="bg-gray-100 text-blue-500 px-6 py-2 rounded shadow hover:bg-gray-200 border border-blue-500 transition"
      >
        Post a Job
      </Link>
    </div>
    <div className="mt-10 w-full max-w-4xl bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Popular Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {["Technology", "Healthcare", "Finance", "Education", "Marketing", "Design", "Engineering", "Sales"].map(
          (category) => (
            <div
              key={category}
              className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg hover:bg-gray-200 cursor-pointer text-center transition"
            >
              {category}
            </div>
          )
        )}
      </div>
    </div>
    <div className="mt-10">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Why Choose Us?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-blue-500 mb-2">
            Verified Jobs
          </h3>
          <p className="text-gray-600">
            All job listings are verified for authenticity, ensuring your time and effort are well spent.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-blue-500 mb-2">
            Seamless Search
          </h3>
          <p className="text-gray-600">
            Advanced search filters to help you find the perfect job match quickly and efficiently.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-blue-500 mb-2">
            Career Growth
          </h3>
          <p className="text-gray-600">
            Tools and resources to help you grow your career and achieve your professional goals.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
