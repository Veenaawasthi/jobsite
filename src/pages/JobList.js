import React, { useState } from "react";
import JobCard from "../components/JobCard";

const JobList = () => {
  // Static demo job list
  const demoJobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Solutions",
      location: "San Francisco, CA",
      jobType: "Full-time",
      salary: "$80,000 - $100,000",
      postedAt: "2023-11-30T12:00:00Z",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "CodeWorks",
      location: "New York, NY",
      jobType: "Contract",
      salary: "$90,000 - $110,000",
      postedAt: "2023-11-28T15:30:00Z",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "DesignPro",
      location: "Austin, TX",
      jobType: "Part-time",
      salary: "$50,000 - $70,000",
      postedAt: "2023-11-25T08:45:00Z",
    },
    {
      id: 4,
      title: "DevOps Engineer",
      company: "CloudOps",
      location: "Seattle, WA",
      jobType: "Full-time",
      salary: "$100,000 - $120,000",
      postedAt: "2023-11-20T10:15:00Z",
    },
  ];

  // State for the job list and search query
  const [jobs, setJobs] = useState(demoJobs);
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle search
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter jobs based on the search query
    const filteredJobs = demoJobs.filter(
      (job) =>
        job.title.toLowerCase().includes(query) ||
        job.company.toLowerCase().includes(query) ||
        job.location.toLowerCase().includes(query)
    );
    setJobs(filteredJobs);
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-extrabold text-blue-600 mb-6 text-center">
        Available Jobs
      </h1>

      {/* Search bar for filtering jobs */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search by job title, company, or location..."
          value={searchQuery}
          onChange={handleSearch}
          className="px-6 py-2 w-full max-w-lg rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Jobs list section */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {jobs.length > 0 ? (
          jobs.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <div className="col-span-4 text-center text-gray-600">
            No jobs available that match your search. Try a different query.
          </div>
        )}
      </div>
    </div>
  );
};

export default JobList;
