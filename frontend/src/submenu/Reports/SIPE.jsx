import React from 'react';
import { motion } from 'framer-motion';

const QECs = () => {
  const handleDownload = (fileName) => {
    // Assuming all files are located in /public/forms/
    const filePath = `/forms/${fileName}`;
    window.open(filePath, '_blank');
  };

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
              Quality Enhancement Cells (QECs)
            </motion.h1>
          </div>

          <motion.p
            className="text-gray-700 text-lg mb-6 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Quality Enhancement Cells (QECs) play a vital role in ensuring the continuous improvement and assurance of quality in higher education institutions. These cells are tasked with evaluating and enhancing various aspects of academic programs, administrative processes, and overall institutional effectiveness. They work to ensure compliance with national and international standards, thereby improving educational outcomes and student satisfaction.
          </motion.p>

          <h2 className="text-3xl font-semibold text-purple-800 mb-4">List of QECs</h2>
          <motion.p
            className="text-gray-700 mb-6 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            A list of established Quality Enhancement Cells across various universities, detailing their roles and contributions to enhancing the quality of education.
          </motion.p>
          <button 
            onClick={() => handleDownload('ListofQECs.pdf')} 
            className="text-blue-600 hover:underline mb-4"
          >
            Download List of QECs
          </button>

          <h2 className="text-3xl font-semibold text-purple-800 mb-4">Downloads</h2>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li>
              <button onClick={() => handleDownload('Revised-Criteria-for-Assessment-of-QECs.pdf')} className="text-blue-600 hover:underline">
                Revised Criteria for Assessment of QECs
              </button>
            </li>
            <li>
              <button onClick={() => handleDownload('TargetsforQECsfortheassessment.docx')} className="text-blue-600 hover:underline">
                Targets for QECs for the Assessment Year 2023-24
              </button>
            </li>
          </ul>

          <h2 className="text-3xl font-semibold text-purple-800 mb-4">Assessment Criteria for QECs</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            The assessment criteria for Quality Enhancement Cells (QECs) focus on evaluating their effectiveness in maintaining and improving the quality of education within their respective institutions. Key criteria include:
            <ul className="list-disc list-inside">
              <li>Quality of Teaching and Learning</li>
              <li>Curriculum Development and Enhancement</li>
              <li>Faculty Development and Training</li>
              <li>Research and Development Activities</li>
              <li>Engagement with Stakeholders and Community</li>
            </ul>
          </p>

          <div className="mt-10 text-center">
            <motion.button
              onClick={() => handleDownload('TargetsforQECsfortheassessment.docx')}
              className="bg-gradient-to-r from-purple-700 to-pink-600 text-white py-3 px-8 rounded-lg hover:shadow-lg transition duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              Download QEC Report
            </motion.button>
          </div>
        </motion.div>
      </div>
      <footer className="bg-gray-800 text-white py-4 mt-8 rounded-xl bg-gradient-to-r from-purple-700 to-purple-900">
            <div className="container mx-auto text-center">
              <p className="text-sm">
               Abbottabad University of Science and Technology
              </p>
              <ul className="flex justify-center space-x-4 mt-2">
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
    </>
  );
};

export default QECs;
