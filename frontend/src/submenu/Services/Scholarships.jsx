import React from 'react';
import { motion } from 'framer-motion';

const Scholarships = () => {
  const handleRedirect = () => {
    window.location.href = 'https://www.hec.gov.pk/english/scholarshipsgrants/Pages/default.aspx';
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
            <motion.img
              src="/Images/hec.svg"
              alt="HEC"
              className="w-16 h-16 mr-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
            <motion.h1
              className="text-2xl sm:text-4xl font-bold text-purple-900 tracking-wide"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              HEC Scholarships 2024
            </motion.h1>
            <motion.img
              src="/Images/aust.png"
              alt="Abbottabad University Logo"
              className="w-16 h-16 ml-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </div>

          <motion.p
            className="text-gray-700 text-lg mb-6 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            The Higher Education Commission (HEC) of Pakistan offers a variety of scholarships for students in 2024, promoting higher education and research opportunities both domestically and internationally. These scholarships support diverse academic fields and help students achieve their educational dreams.
          </motion.p>

          <div className="bg-gradient-to-r from-purple-700 to-pink-500 h-1 rounded mb-8"></div>

          <h2 className="text-3xl font-semibold text-purple-800 mb-4">Types of Scholarships</h2>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li><strong>Undergraduate Scholarships:</strong> Financial aid for bachelor's degrees, covering tuition, books, and living expenses.</li>
            <li><strong>Postgraduate Scholarships:</strong> Scholarships for master’s or doctoral studies, including research grants and living stipends.</li>
            <li><strong>International Scholarships:</strong> Study-abroad opportunities for Pakistani students under HEC-supported exchange programs.</li>
            <li><strong>Need-Based Scholarships:</strong> Financial support for students from underprivileged backgrounds.</li>
          </ul>

          <div className="bg-gradient-to-r from-purple-700 to-pink-500 h-1 rounded mb-8"></div>

          <h2 className="text-3xl font-semibold text-purple-800 mb-4">Scholarship Programs</h2>
          <p className="text-gray-700 mb-4">
            HEC’s scholarship programs for 2024 include:
          </p>
          <ol className="list-decimal list-inside text-gray-700 mb-8 space-y-2">
            <li><strong>HEC Overseas Scholarships:</strong> For postgraduate studies at top international universities.</li>
            <li><strong>Indigenous Ph.D. Fellowships:</strong> Supporting Ph.D. research within Pakistan.</li>
            <li><strong>Ehsaas Undergraduate Scholarships:</strong> Need-based scholarships for Pakistani undergraduates.</li>
            <li><strong>Commonwealth Scholarships:</strong> HEC collaborates with Commonwealth nations to offer scholarships.</li>
            <li><strong>HEC-USAID Merit and Need-Based Scholarships:</strong> Jointly funded by HEC and USAID to support students from disadvantaged backgrounds.</li>
          </ol>

          <div className="bg-gradient-to-r from-purple-700 to-pink-500 h-1 rounded mb-8"></div>

          <h2 className="text-3xl font-semibold text-purple-800 mb-4">Eligibility Requirements</h2>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li>Must be a Pakistani national or AJK resident.</li>
            <li>Minimum academic qualifications as specified for each scholarship.</li>
            <li>Commitment to return to Pakistan after studies for certain scholarships.</li>
            <li>Additional criteria as per each program’s requirements.</li>
          </ul>

          <div className="bg-gradient-to-r from-purple-700 to-pink-500 h-1 rounded mb-8"></div>

          <h2 className="text-3xl font-semibold text-purple-800 mb-4">How to Apply</h2>
          <p className="text-gray-700 mb-4">
            Follow these steps to apply for HEC scholarships:
          </p>
          <ol className="list-decimal list-inside text-gray-700 mb-8 space-y-2">
            <li>Visit the HEC website and access the Scholarships section.</li>
            <li>Select a relevant scholarship program and review requirements.</li>
            <li>Create an account or log in to the HEC portal.</li>
            <li>Fill out the application and upload the required documents.</li>
            <li>Submit your application before the deadline.</li>
          </ol>

          <div className="mt-10 text-center">
            <motion.button
              onClick={handleRedirect}
              className="bg-gradient-to-r from-purple-700 to-pink-600 text-white py-3 px-8 rounded-lg hover:shadow-lg transition duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              View All HEC Scholarships 2024
            </motion.button>
          </div>
        </motion.div>
      </div>

      <footer className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-6 mt-12 rounded-xl">
        <div className="container mx-auto text-center">
          <motion.p
            className="text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
           Abbottabad University of Science and Technology
          </motion.p>
          <ul className="flex justify-center space-x-4 mt-2">
            <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 0.5 }}>
              <a href="/privacy-policy" className="text-white hover:underline">Privacy Policy</a>
            </motion.li>
            <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7, duration: 0.5 }}>
              <a href="/terms-of-service" className="text-white hover:underline">Terms of Service</a>
            </motion.li>
            <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 0.5 }}>
              <a href="/contact-us" className="text-white hover:underline">Contact Us</a>
            </motion.li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Scholarships;
