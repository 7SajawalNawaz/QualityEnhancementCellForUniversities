import React from 'react';
import { motion } from 'framer-motion';

const DegreeAttestation = () => {
  const handleRedirect = () => {
    window.location.href = 'https://www.hec.gov.pk/english/services/students/DAS/Pages/Degree-Attestation.aspx';
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
              alt="HEC Logo" 
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
              HEC Degree Attestation
            </motion.h1>
          </div>
          
          <motion.p 
            className="text-gray-700 text-lg mb-6 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            The Higher Education Commission (HEC) of Pakistan is responsible for the attestation of degrees awarded by local and foreign institutions...
          </motion.p>

          <div className="bg-gradient-to-r from-purple-700 to-pink-500 h-1 rounded mb-8"></div>

          <motion.div className="border-t border-gray-300 pt-6 mt-4">
            <motion.h2 className="text-3xl font-semibold text-purple-800 mb-4">Attestation Process</motion.h2>
            <motion.p className="text-gray-700 text-lg mb-4">
              To get your degree attested by HEC, you must follow these steps:
            </motion.p>
            <motion.ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
              <li>Visit the HEC website and navigate to the Degree Attestation section.</li>
              <li>Create an account or log in if you already have one.</li>
              <li>Fill out the required forms and upload the necessary documents.</li>
              <li>Pay the attestation fee online.</li>
              <li>Submit your application.</li>
              <li>Track your application status through the portal.</li>
            </motion.ol>
          </motion.div>

          <div className="bg-gradient-to-r from-purple-700 to-pink-500 h-1 rounded mb-8"></div>

          <motion.div className="border-t border-gray-300 pt-6 mt-4">
            <motion.h2 className="text-3xl font-semibold text-purple-800 mb-4">Eligibility Criteria</motion.h2>
            <motion.p className="text-gray-700 text-lg mb-4">
              To be eligible for degree attestation, you must meet the following criteria:
            </motion.p>
            <motion.ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Possess a degree from a recognized institution.</li>
              <li>Have all original documents available for verification.</li>
              <li>Fulfill any additional requirements as specified by HEC.</li>
            </motion.ul>
          </motion.div>

          <div className="bg-gradient-to-r from-purple-700 to-pink-500 h-1 rounded mb-8"></div>

          <motion.div className="border-t border-gray-300 pt-6 mt-4">
            <motion.h2 className="text-3xl font-semibold text-purple-800 mb-4">Required Documents</motion.h2>
            <motion.p className="text-gray-700 text-lg mb-4">
              The following documents are generally required for degree attestation:
            </motion.p>
            <motion.ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
              <li>Original Degree Certificate</li>
              <li>Transcript of Records</li>
              <li>Copy of CNIC/NICOP</li>
              <li>Passport-sized photographs</li>
              <li>Any other relevant documents as requested by HEC</li>
            </motion.ul>
          </motion.div>

          <div className="mt-10 text-center">
            <motion.button
              onClick={handleRedirect}
              className="bg-gradient-to-r from-purple-700 to-pink-600 text-white py-3 px-8 rounded-lg hover:shadow-lg transition duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              Start HEC Attestation Process
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

export default DegreeAttestation;
