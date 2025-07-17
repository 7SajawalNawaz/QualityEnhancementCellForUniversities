import React from 'react';
import { motion } from 'framer-motion';

const InstitutionalPerformanceEvaluation = () => {
  const downloadLinks = [
    { title: "TORs for Reviewers - 2021", url: "/forms/TORs_for_Reviewers_2021.pdf" },
    { title: "Compliance Implementation Plan Committee Template", url: "/forms/Compliance_Implementation_Plan_Committee_Template.pdf" },
    { title: "Data Checklist for IPE Review - 2021", url: "/forms/Data_Checklist_for_IPE_Review_2021.pdf" },
    { title: "Expectations and Outcome Indicators - EOI 2.0", url: "/forms/Expectations_and_Outcome_Indicators_EOI_2.0.pdf" },
    { title: "Format and Sample IPE Report 4.0", url: "/forms/Format_and_Sample_IPE_Report_4.0.docx" },
    { title: "IPE Activity Schedule", url: "/forms/IPE_Activity_Schedule.pdf" },
    { title: "IPE Manual for Universities 11", url: "/forms/IPE_Manual_for_Universities_11.pdf" },
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
              Institutional Performance Evaluation
            </motion.h1>
          </div>

          <motion.p
            className="text-gray-700 text-lg mb-6 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            The Higher Education Commission is systematically implementing the five-year (2002 - 2007) agenda for reforms outlined in the HEC Medium Term Development Framework (MTDF). The key components identified in the MTDF are Access, Quality, and Relevance.
          </motion.p>
          <motion.p className="text-gray-700 text-lg mb-6 leading-relaxed">
            To address these challenges, a comprehensive strategy was outlined that identified the core strategic aims for reform as: Faculty Development, Improving Access, Excellence in Learning and Research, and Relevance to National Priorities.
          </motion.p>

          <h2 className="text-3xl font-semibold text-purple-800 mb-4">Evaluation Standards</h2>
          <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
            <li>Standard 1: Mission Statement and Goals</li>
            <li>Standard 2: Planning and Evaluation</li>
            <li>Standard 3: Organization and Governance</li>
            <li>Standard 4: Integrity</li>
            <li>Standard 5: Faculty</li>
            <li>Standard 6: Students</li>
            <li>Standard 7: Institutional Resources</li>
            <li>Standard 8: Academic Programs and Curricula</li>
            <li>Standard 9: Public Disclosure and Transparency</li>
            <li>Standard 10: Assessment & Quality Assurance</li>
            <li>Standard 11: Student Support Services</li>
          </ul>

          <div className="mt-10 text-center flex flex-col">
            {downloadLinks.map((link, index) => (
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

export default InstitutionalPerformanceEvaluation;
