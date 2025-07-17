import React from 'react';
import { motion } from 'framer-motion';

const YPR = () => {
  const yprLinks = [
    {
      title: "Yearly Progress Report Proformas",
      url: "/forms/YPR-parameter-5.9.xlsx"
    },
    {
      title: "DB. No. - Uni. Name- 2023-24-YPR",
      url: "/forms/2023-24-YPR.xlsx"
    },
    {
      title: "Main or Sub Campus YPR Checklist",
      url: "/forms/YPR-Checklist.xlsx"
    },
    {
      title : "FYP Evaluation Report",
      url : "/forms/YPR-Checklist.xlsx"
    }
    // Add more links as needed
  ];

  return (
    <>
      <div className="pt-14 mr-4 bg-gradient-to-b from-purple-100 to-purple-300 min-h-screen p-8 rounded-xl">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-10 relative"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-t-lg"></div>
          <div className="flex items-center justify-center mb-8">
            <motion.h1
              className="text-2xl sm:text-4xl font-bold text-purple-900 tracking-wide"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              Yearly Progress Report (YPR)
            </motion.h1>
          </div>

          <motion.p
            className="text-gray-700 text-lg mb-6 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            The Yearly Progress Report (YPR) provides insights into the achievements and challenges faced by the institution throughout the year. It plays a crucial role in the evaluation of the effectiveness of implemented strategies.
          </motion.p>

          <h2 className="text-3xl font-semibold text-purple-800 mb-4">Components of YPR</h2>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li>Overview of yearly performance against set targets.</li>
            <li>Highlighting major accomplishments and initiatives.</li>
            <li>Identification of areas needing improvement and corrective actions.</li>
          </ul>

          <div className="mt-10 text-center">
            {yprLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                download
                className="bg-gradient-to-r from-purple-700 to-pink-600 text-white py-3 px-8 rounded-lg hover:shadow-lg transition duration-300 transform hover:scale-105 mb-4 inline-block"
                whileHover={{ scale: 1.05 }}
              >
                Download {link.title}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <footer className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-4 mt-8 rounded-xl">
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

export default YPR;
