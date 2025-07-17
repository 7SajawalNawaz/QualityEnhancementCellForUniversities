import React from 'react';
import { motion } from 'framer-motion';

const GEPPolicy = () => {
  const downloadPDF = () => {
    // Replace with the actual PDF file URL
    const pdfUrl = '/forms/GEP.pdf'; // Update with the correct path
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.download = 'GEP-2023.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
            className="text-2xl sm:text-4xl font-bold text-purple-900 tracking-wide text-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            Graduate Education Policy (GEP2023)
          </motion.h1>
        </div>

        <motion.p
          className="text-gray-700 text-lg mb-6 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          The Higher Education Commission (HEC) released its Graduate Education Policy (GEP2023) on July 10, 2023 (effective from Fall 2023), with the aim to provide a common framework for disseminating Level 7 and 8 qualifications all across the country. However, it has been noticed that the policy's features are still not well known amongst academics and graduate students, thus necessitating an awareness campaign.
        </motion.p>

        <div className="bg-gradient-to-r from-purple-700 to-pink-500 h-1 rounded mb-8"></div>

        <motion.p
          className="text-gray-700 text-lg mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          The main feature of this well-thought-out policy is to respect the university's autonomy through a principle of flexibility without compromising on quality and global standards. Thus, it provides broader guidelines with MINIMUM standards for regulating doctoral supervision, giving freedom to HEIs to set their own standards preferably above the requirements of HEC. The policy aims to gradually reduce the practice of issuing NOCs for graduate programs by the HEC, introducing a classification-based NOC plan that encourages HEIs to attain the highest classification for self-accreditation status.
        </motion.p>

        <div className="bg-gradient-to-r from-purple-700 to-pink-500 h-1 rounded mb-8"></div>

        <motion.h2 className="text-3xl font-semibold text-purple-800 mb-4">Key Features of GEP2023:</motion.h2>
        <motion.ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li>
            HEIs now have the discretion to decide on faculty/supervisor's subject relevance, conduct admission tests, and resolve issues like CGPA, degree duration, and comprehensive exams, while following policy guidelines.
          </li>
          <li>
            The framework requires HEIs to formulate their own policies to regulate the process of doctoral supervision and approve PhD supervisors independently, practicing academic ethics and managing grievances.
          </li>
          <li>
            The policy adopts a liberal approach by allowing intra-disciplinary admissions for MSA/MPhil and PhD programs.
          </li>
          <li>
            It provides flexibility with multiple options regarding provisional admissions, credit hour and publication requirements, external evaluation of PhD dissertation, inter-university transfer of credit hours and research, and exit paths.
          </li>
        </motion.ul>

        <div className="bg-gradient-to-r from-purple-700 to-pink-500 h-1 rounded mb-8"></div>

        <motion.p
          className="text-gray-700 text-lg mb-6 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          In view of the foregoing, you are kindly requested to take advantage of the policy's liberal approach and make decisions through statutory bodies contextualizing the principles and broader guidelines to the ground situations. Kindly also help us in this campaign by ensuring that faculty, especially the PhD supervisors, all graduate students (M.Phil/PhD), and the relevant administrative staff including the BASR/equivalent bodies, Quality Assurance/Enhancement Cells/Departments, and Officers of the Controller of Examination, and the Registrar have read and understood the policy.
        </motion.p>

        <div className="mt-10 text-center">
          <motion.h2 className="text-2xl font-bold text-purple-900 mb-4">
            Important Links:
          </motion.h2>
          <motion.a
            href="https://tinyurl.com/CEP-2023"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 hover:underline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Graduate Education Policy 2023 (GEP-2023)
          </motion.a>
          <br />
          <motion.a
            href="https://tinyurl.com/FAOs-GEP-2023"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-700 hover:underline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            FAQs on GEP-2023
          </motion.a>
        </div>

        <button
          onClick={downloadPDF}
          className="mt-6 bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-300"
        >
          Download GEP-2023 PDF
        </button>
      </motion.div>

    </div>
    <footer className="bg-gray-800 text-white py-4 mt-8 mr-4 rounded-xl bg-gradient-to-r from-purple-700 to-purple-900">
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

export default GEPPolicy;
