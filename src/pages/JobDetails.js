import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const demoJobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Solutions",
      location: "San Francisco, CA",
      jobType: "Full-time",
      salary: "$80,000 - $100,000",
      description:
        "As a Frontend Developer, you will be responsible for building responsive web interfaces using modern frameworks like React. You will collaborate closely with the design and backend teams to deliver high-quality user experiences.",
      requirements: [
        "Strong proficiency in HTML, CSS, and JavaScript",
        "Experience with React and Redux",
        "Familiarity with responsive design principles",
        "Ability to collaborate in a team environment",
      ],
      perks: ["Health insurance", "401(k) plan", "Flexible working hours"],
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "CodeWorks",
      location: "New York, NY",
      jobType: "Contract",
      salary: "$90,000 - $110,000",
      description:
        "Join our team as a Backend Developer and help build scalable APIs and services. You'll work with cutting-edge technologies to ensure seamless integration with our frontend systems.",
      requirements: [
        "Experience with Node.js and Express",
        "Knowledge of database design and optimization",
        "Familiarity with RESTful APIs",
        "Experience with cloud platforms like AWS or Azure",
      ],
      perks: ["Remote work options", "Professional development support"],
    },
  ];

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
  });

  useEffect(() => {
    const selectedJob = demoJobs.find((job) => job.id === parseInt(id, 10));
    setJob(selectedJob);
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Application Submitted: ", formData);
    alert("Your application has been submitted successfully!");
    setShowModal(false);
    setFormData({ name: "", email: "", resume: null });
  };

  if (!job) return <p className="text-center">Loading job details...</p>;

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{job.title}</h1>
      <p className="text-gray-600 mb-4">
        <span className="font-medium">Company:</span> {job.company}
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-medium">Location:</span> {job.location}
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-medium">Type:</span> {job.jobType}
      </p>
      <p className="text-gray-600 mb-4">
        <span className="font-medium">Salary:</span> {job.salary}
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
        Job Description
      </h2>
      <p className="text-gray-700 mb-6">{job.description}</p>

      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Apply Now
      </button>

      <Link
        to="/jobs"
        className="inline-block ml-4 text-blue-500 hover:underline"
      >
        Back to Job Listings
      </Link>

      {/* Modal for Apply Now */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Apply for {job.title}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="resume">
                  Upload Resume
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
                  className="w-full"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="mr-4 px-4 py-2 text-gray-600 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDetail;

