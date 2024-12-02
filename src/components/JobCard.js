import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 mb-6 hover:shadow-xl transition duration-300 ease-in-out">
    {/* Job Title and Company */}
    <h2 className="text-2xl font-semibold text-blue-600 mb-2">{job.title}</h2>
    <p className="text-gray-600 text-lg">{job.company} - {job.location}</p>

    {/* Job Type */}
    <div className="mt-2">
      <span className="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
        {job.jobType}
      </span>
    </div>

    {/* Job Salary */}
    {job.salary && (
      <p className="text-gray-800 mt-2 font-semibold">
        <span className="text-gray-500">Salary:</span> {job.salary}
      </p>
    )}

    {/* Job Posting Date */}
    <p className="text-sm text-gray-500 mt-2">
      Posted on: {new Date(job.postedAt).toLocaleDateString()}
    </p>

    {/* View Details Link */}
    <Link
      to={`/jobs/${job.id}`}
      className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300"
    >
      View Details
    </Link>
  </div>
);

export default JobCard;

