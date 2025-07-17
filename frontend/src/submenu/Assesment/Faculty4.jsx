import React, { useState } from 'react';
import { motion } from 'framer-motion';

const faculties = [
  {
    name: "Faculty of Health and Biomedical Sciences",
    departments: [
      "Microbiology",
      "Food Science and Technology",
      "Medical Lab Technology",
      "Pharmacy D",
      "Biochemistry",
    ],
    image: "/public/Images/health.jpg", // Replace with actual image URL
  },
  {
    name: "Faculty of Science",
    departments: [
      "Mathematics",
      "Chemistry",
      "Computer Science",
      "Physics",
      "Earth and Environmental Science",
      "Zoology",
    ],
    image: "/public/Images/sci.jpg", // Replace with actual image URL
  },
  {
    name: "Faculty of Engineering",
    departments: ["Materials, Minerals, and Mining", "Engineering"],
    image: "/public/Images/eng.jpg", // Replace with actual image URL
  },
  {
    name: "Faculty of Humanities and Social Sciences",
    departments: [
      "Economics",
      "English",
      "Pakistan Studies",
      "Management Sciences",
      "Psychology",
    ],
    image: "/public/Images/hum.jpg", // Replace with actual image URL
  },
];

const Faculty = () => {
  const [showDepartments, setShowDepartments] = useState({});

  const toggleDepartments = (index) => {
    setShowDepartments((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <>
    
    <div className="flex flex-wrap gap-2   mr-4 rounded-2xl mt-10 px-4 py-2 sm:py-4 sm:px-20 bg-gradient-to-r from-purple-600 to-purple-900 min-h-screen">
      
      {faculties.map((faculty, index) => (
        <div className='justify-center items-center'>
        <motion.div
          key={index}
          className="w-full md:w-1/4 lg:w-1/6 xl:w-96 p-4  bg-white shadow-lg rounded-lg border border-purple-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={faculty.image}
            alt={faculty.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h2 className="text-xl font-semibold text-purple-700 mt-4">
            {faculty.name}
          </h2>

          <motion.ul
            initial={false}
            animate={{ height: showDepartments[index] ? 'auto' : '0' }}
            className={`overflow-hidden transition-all duration-300 ${showDepartments[index] ? 'mt-4' : 'mt-0'}`}
          >
            {faculty.departments.map((department, idx) => (
              <li key={idx} className="text-gray-700 list-disc list-inside text-base">
                Department of {department}
              </li>
            ))}
          </motion.ul>

          <button
            className={`mt-4 px-4 py-2 rounded-lg transition duration-300 focus:outline-none focus:ring-2 ${
              showDepartments[index]
                ? 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-400'
                : 'bg-purple-500 text-white hover:bg-purple-600 focus:ring-purple-400'
            }`}
            onClick={() => toggleDepartments(index)}
          >
            {showDepartments[index] ? 'Show Less' : 'Read More'}
          </button>
        </motion.div>
        </div>
      ))}
      
    </div>
    
    <footer className="bg-gray-800 text-white py-4 mt-4 mr-6  rounded-xl bg-gradient-to-r from-purple-700 to-purple-900">
      <div className="container mx-auto text-center">
        <p className="text-sm">
        Abbottabad University of Science and Technology
        </p>
        <ul className="flex justify-center space-x-4 mt-2">
          <li>
            <a href="/privacy-policy" className="text-white hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms-of-service" className="text-white hover:underline">
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
    </>
  );
};

export default Faculty;