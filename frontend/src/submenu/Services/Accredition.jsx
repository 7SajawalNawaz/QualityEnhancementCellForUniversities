import React from 'react';
import { motion } from 'framer-motion';

const AccreditationCouncil = () => {
  const handleRedirect = () => {
    window.location.href = 'https://www.hec.gov.pk/english/universities/Pages/Accreditation.aspx';
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
              HEC Accredition Council
            </motion.h1>
          </div>

          <motion.p 
            className="text-gray-700 text-lg mb-6 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            The Higher Education Commission (HEC) of Pakistan oversees the accreditation of universities and degree-awarding institutions across Pakistan. Accreditation ensures that institutions meet the standards required for providing quality education and are recognized both nationally and internationally.
          </motion.p>

          <div className="bg-gradient-to-r from-purple-700 to-pink-500 h-1 rounded mb-8"></div>

          <h2 className="text-3xl font-semibold text-purple-800 mb-4">Accreditation Process</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The HEC accreditation process involves evaluating institutions based on various academic, administrative, and quality standards, including:
          </p>
          <ol className="list-decimal list-inside text-gray-700 mb-8 space-y-2">
            <li>Application submission and initial screening by HEC.</li>
            <li>Document verification and review by accreditation committees.</li>
            <li>On-site inspections by HEC representatives to evaluate quality standards.</li>
            <li>Final decision on accreditation status and certification issuance.</li>
          </ol>

          <div className="bg-gradient-to-r from-purple-700 to-pink-500 h-1 rounded mb-8"></div>

          <h2 className="text-3xl font-semibold text-purple-800 mb-4">Quality Standards</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            HEC has established rigorous quality standards to ensure that accredited institutions provide students with a reliable and world-class education. These standards address faculty qualifications, research output, infrastructure, and student satisfaction.
          </p>

          <div className="bg-gradient-to-r from-purple-700 to-pink-500 h-1 rounded mb-8"></div>

          <h2 className="text-3xl font-semibold text-purple-800 mb-4">Accreditation Councils</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            HEC collaborates with various accreditation councils to monitor and enhance educational standards in specialized fields such as engineering, medicine, and business. These councils work independently but are guided by HEC’s overarching quality benchmarks.
          </p>

          <div className="mt-10 text-center">
            <motion.button
              onClick={handleRedirect}
              className="bg-gradient-to-r from-purple-700 to-pink-600 text-white py-3 px-8 rounded-lg hover:shadow-lg transition duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              Visit HEC Accreditation Page
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

export default AccreditationCouncil;
