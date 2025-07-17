import React from 'react';
import { motion } from 'framer-motion';

// Define programs data
const programs = [
  {
    degree: "BS",
    title: "4 Years Programs",
    courses: [
      "Biochemistry",
      "Business Administration (BBA)",
      "Chemistry",
      "Computer Science",
      "Economics",
      "English",
      "Food Sciences & Technology",
      "Geology",
      "International Relations",
      "Mathematics",
      "Maths with Computer Science",
      "Medical Lab Technology",
      "Microbiology",
      "Nano Sciences & Technology",
      "Pakistan Studies",
      "Physics",
      "Psychology",
      "Software Engineering",
      "Zoology",
    ],
  },
  {
    degree: "MBA, MS/M.Phil",
    title: "Programs",
    courses: [
      "Chemistry",
      "Computer Science",
      "Mathematics",
      "Microbiology",
      "Management Sciences",
      "Material Engineering",
      "Physics",
      "Pharmacy",
      "Pakistan Studies",
    ],
  },
  {
    degree: "Ph.D",
    title: "Programs",
    courses: [
      "Chemistry",
      "Microbiology",
      "Management Sciences",
      "Pharmacy",
      "Mathematics",
      "Physics",
    ],
  },
];


const Program = () => {
  return (
    <>
    <div className="flex flex-col items-center pt-14 mr-4 bg-gradient-to-r from-purple-600 to-purple-900 min-h-screen p-8 rounded-xl">
      {/* Main Heading Section */}
      <h1 className="text-5xl font-bold text-white mb-8">
        Number Of Programs
      </h1>

      {/* Programs List */}
      <div className="flex flex-col space-y-6 w-full max-w-4xl">
        {programs.map((program, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-lg rounded-lg border border-purple-300 transition-transform transform hover:scale-105"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-purple-600 mb-2">{program.degree}</h2>
            <h3 className="text-lg font-medium text-gray-700 mb-4">{program.title}</h3>
            <ul className="list-disc pl-5 space-y-2">
              {program.courses.map((course, idx) => (
                <li key={idx} className="text-gray-600 hover:text-purple-500 transition-colors duration-300">
                  {course}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
        
      </div>
    </div>

<footer className="bg-gray-800 text-white py-4 mt-4 mr-6 rounded-xl bg-gradient-to-r from-purple-700 to-purple-900">
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

export default Program;

