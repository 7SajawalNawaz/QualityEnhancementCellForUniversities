import React from 'react';
import { motion } from 'framer-motion';

const manuals = [
  { id: 1, title: 'HEC Undergraduate Manual 2023', downloadLink: 'https://www.hec.gov.pk/english/services/students/DAS/Documents/User-Manual.pdf', size: '2MB' },
  { id: 2, title: 'HEC Postgraduate Manual 2023', downloadLink: 'https://www.hec.gov.pk/english/services/students/DAS/Documents/User-Manual.pdf', size: '2.5MB' },
  { id: 3, title: 'HEC Research Guidelines', downloadLink: 'https://www.hec.gov.pk/english/services/students/DAS/Documents/User-Manual.pdf', size: '1.8MB' },
  { id: 4, title: 'HEC Scholarships Handbook', downloadLink: 'https://www.hec.gov.pk/english/services/students/DAS/Documents/User-Manual.pdf', size: '3MB' },
];

// Animation Variants for Framer Motion
const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Mannual = () => {
  return (
    <div className="pt-10 mr-4 rounded-xl min-h-screen p-4 sm:p-8 lg:p-12 bg-gradient-to-r from-purple-100 to-purple-300">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <motion.h1 
          className="text-2xl sm:text-3xl font-bold text-center text-purple-900 mb-6" 
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          HEC Manual Downloads
        </motion.h1>
        
        <div className="space-y-4">
          {manuals.map((manual) => (
            <motion.div 
              key={manual.id} 
              className="flex justify-between items-center bg-purple-50 p-4 rounded-lg shadow-sm border border-purple-200" 
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <div>
                <h2 className="text-lg font-semibold text-purple-800">{manual.title}</h2>
                <p className="text-sm text-purple-600">Size: {manual.size}</p>
              </div>
              <a 
                href={manual.downloadLink} 
                className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300"
              >
                Download
              </a>
            </motion.div>
          ))}
        </div>

        
      </div>
      <footer className="bg-gray-800 text-white py-4 mt-8 rounded-xl bg-gradient-to-r from-purple-700 to-purple-900">
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
    </div>
  );
};

export default Mannual;
