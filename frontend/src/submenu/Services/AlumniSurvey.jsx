import React from 'react';
import { motion } from 'framer-motion';

const AlumniSurvey = () => {
  const handleRedirect = () => {
    window.location.href = 'https://forms.gle/Htdo1W41iQtC2A767'; // Change URL as needed
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
          {/* Top Gradient Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-t-lg"></div>
          
          <div className="flex items-center justify-center mb-8">
            <motion.h1
              className="text-2xl sm:text-4xl font-bold text-purple-900 tracking-wide"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              Alumni Survey 2024
            </motion.h1>
          </div>

          <motion.p
            className="text-gray-700 text-lg mb-6 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            The Alumni Survey collects essential feedback from AUST graduates about their experiences and career progress. Your responses help the Quality Enhancement Cell (QEC) enhance AUST's academic standards, ensuring continuous improvement.
          </motion.p>

          {/* Gradient Divider */}
          <div className="bg-gradient-to-r from-purple-700 to-pink-500 h-1 rounded mb-8"></div>

          {/* Importance Section */}
          <h2 className="text-3xl font-semibold text-purple-800 mb-4">Why Your Feedback Matters</h2>
          <p className="text-gray-700 mb-8">
            Your insights help the QEC in evaluating AUST's impact on your career, guiding curriculum improvements, and aligning academic goals with industry needs.
          </p>

          {/* Gradient Divider */}
          <div className="bg-gradient-to-r from-purple-700 to-pink-500 h-1 rounded mb-8"></div>

          {/* How to Contribute Section */}
          <h2 className="text-3xl font-semibold text-purple-800 mb-4">How Alumni Feedback Contributes</h2>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li>Identifies program strengths through real-world feedback.</li>
            <li>Guides updates to align with current industry standards.</li>
            <li>Helps enhance the overall educational experience at AUST.</li>
          </ul>

          {/* Bottom Call-to-Action Button */}
          <div className="mt-10 text-center">
            <motion.button
              onClick={handleRedirect}
              className="bg-gradient-to-r from-purple-700 to-pink-600 text-white py-3 px-8 rounded-lg hover:shadow-lg transition duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              Participate in the Alumni Survey
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
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

export default AlumniSurvey;
