import React, { useState } from "react";
import { motion } from "framer-motion";

const ResearchPaper = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    paper: null,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      paper: e.target.files[0],
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // You can add logic to handle the form submission, such as sending data to a server
  };

  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-purple-100 to-purple-200 rounded-xl pt-10 mr-4">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
        <motion.h1
          className="text-2xl font-semibold text-center text-purple-900 mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Submit Your Research Paper
        </motion.h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <label htmlFor="name" className="text-purple-900 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-900 focus:outline-none"
              placeholder="Enter your name"
              required
            />
          </motion.div>

          {/* ID Input */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <label htmlFor="id" className="text-purple-900 font-semibold">
              ID
            </label>
            <input
              type="text"
              id="id"
              name="id"
              value={formData.id}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-900 focus:outline-none"
              placeholder="Enter your ID"
              required
            />
          </motion.div>

          {/* Research Paper Upload */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <label htmlFor="paper" className="text-purple-900 font-semibold">
              Upload Research Paper
            </label>
            <input
              type="file"
              id="paper"
              name="paper"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-900 focus:outline-none"
              required
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full py-2 bg-purple-900 text-white font-semibold rounded-lg hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-900"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Submit
          </motion.button>
        </form>
      </div>

      
    </div>
    <div className="flex flex-col ">
      <div className="flex-grow">
        {/* Your main content here */}
      </div>

      <footer className="bg-gray-800 text-white py-6 mt-4 mr-6 rounded-xl bg-gradient-to-r from-purple-700 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
           Abbottabad University of Science and Technology
          </p>
          <ul className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4 mt-4">
            <li>
              <a
                href="/privacy-policy"
                className="text-white hover:underline"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/terms-of-service"
                className="text-white hover:underline"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/contact-us" className="text-white hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
    </>
  );
};

export default ResearchPaper;
