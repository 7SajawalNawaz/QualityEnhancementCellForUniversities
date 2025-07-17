import React from 'react';
import { motion } from 'framer-motion';

const rules = [
  { 
    id: 1, 
    title: 'Eligibility for Undergraduate Programs', 
    description: 'Students must have completed intermediate education with at least 60% marks. Specific requirements may vary based on the program and institution.', 
    link: '#' 
  },
  { 
    id: 2, 
    title: 'Scholarship Guidelines', 
    description: 'HEC provides scholarships based on merit and need. Applicants must meet academic performance criteria and submit relevant financial documents.', 
    link: '#' 
  },
  { 
    id: 3, 
    title: 'Research Funding Rules', 
    description: 'HEC offers research grants to students and faculty members. Applications should include a detailed research proposal and budget breakdown.', 
    link: '#' 
  },
  { 
    id: 4, 
    title: 'Postgraduate Admission Criteria', 
    description: 'Candidates for postgraduate programs should hold a bachelor’s degree with a minimum GPA of 3.0 or equivalent. Additional entry tests may apply.', 
    link: '#' 
  },
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

const HecRule = () => {
  return (
    <div className="bg-gray-100 pt-10 mr-4 rounded-xl bg-gradient-to-r from-purple-100 to-purple-300 min-h-screen p-4 sm:p-8 lg:p-12">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <motion.h1 
          className="text-2xl sm:text-3xl font-bold text-center text-purple-900 mb-6" 
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          HEC Rules & Guidelines
        </motion.h1>
        
        <div className="space-y-4">
          {rules.map((rule) => (
            <motion.div 
              key={rule.id} 
              className="flex justify-between items-center bg-purple-50 p-4 rounded-lg shadow-sm border border-purple-200" 
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <div>
                <h2 className="text-lg font-semibold text-purple-800">{rule.title}</h2>
                <p className="text-sm text-purple-600">{rule.description}</p>
              </div>
              {rule.link && (
                <a 
                  href={rule.link} 
                  className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition duration-300"
                >
                  Learn More
                </a>
              )}
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

export default HecRule;
