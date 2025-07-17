import React from "react";
import { motion } from "framer-motion";

const HecPortal = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen pt-16 pb-10 px-6 text-center bg-gradient-to-r from-purple-300 via-purple-200 to-purple-300 mt-10 mr-4 rounded-xl">
        <motion.div
          className="w-full max-w-5xl p-10 bg-white shadow-2xl rounded-3xl hover:shadow-3xl border border-purple-200 transition-shadow duration-500"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Heading with HEC Logo */}
          <motion.div className="flex items-center justify-center mb-8" variants={textVariants}>
            <img
              src="/Images/hec.svg"
              alt="HEC Logo"
              className="w-20 h-20 sm:h-24 sm:w-24 mr-4"
            />
            <h2 className="text-2xl sm:text-4xl font-bold text-purple-800 tracking-wider">
              Higher Education Commission (HEC) E-Portal
            </h2>
          </motion.div>

          {/* Introduction */}
          <motion.p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed" variants={textVariants}>
            The HEC E-Portal is a centralized platform developed by the Higher Education Commission of Pakistan to simplify access to various academic and research services. Whether you are a student, a faculty member, or an institution, the portal offers a streamlined way to manage educational processes efficiently and securely.
          </motion.p>

          {/* Section 1: Services Offered */}
          <motion.div variants={textVariants}>
            <h3 className="text-2xl font-bold text-purple-900 mb-4 bg-purple-300 p-3 rounded-md">
              Services Offered
            </h3>
            <p className="text-gray-700 mb-6">
              The HEC E-Portal provides a broad range of services, designed to assist students, researchers, and educators in their academic journey. Key services include:
            </p>
            <ul className="text-gray-700 text-left list-disc pl-10 mb-8">
              <li>Scholarship applications for national and international programs.</li>
              <li>Degree attestation and verification for Pakistani graduates.</li>
              <li>Research grant applications for innovative projects.</li>
              <li>Student data management for institutions.</li>
              <li>Faculty appointments and professional development resources.</li>
            </ul>
          </motion.div>

          {/* Section 2: How to Register */}
          <motion.div variants={textVariants}>
            <h3 className="text-2xl font-bold text-purple-900 mb-4 bg-purple-300 p-3 rounded-md">
              How to Register
            </h3>
            <p className="text-gray-700 mb-6">
              To access the full range of services on the HEC E-Portal, users need to create an account:
            </p>
            <ol className="text-gray-700 text-left list-decimal pl-10 mb-8">
              <li>Visit the official <span className="font-semibold">HEC E-Portal</span> page.</li>
              <li>Click on "Register" and fill out the required details.</li>
              <li>Verify your email to activate your account.</li>
              <li>Log in to access various academic and administrative services.</li>
            </ol>
          </motion.div>

          {/* Section 3: Benefits of Using the HEC E-Portal */}
          <motion.div variants={textVariants}>
            <h3 className="text-2xl font-bold text-purple-900 mb-4 bg-purple-300 p-3 rounded-md">
              Benefits of Using the HEC E-Portal
            </h3>
            <p className="text-gray-700 mb-6">
              The portal offers numerous advantages to its users:
            </p>
            <ul className="text-gray-700 text-left list-disc pl-10 mb-8">
              <li><span className="font-semibold">Efficiency:</span> Reduces processing time by offering online services.</li>
              <li><span className="font-semibold">Convenience:</span> Access services anytime, from any location.</li>
              <li><span className="font-semibold">Transparency:</span> Track the status of your applications in real-time.</li>
              <li><span className="font-semibold">Security:</span> Protects personal data with secure login and verification processes.</li>
            </ul>
          </motion.div>

          {/* Visit Portal Link */}
          <motion.a
            href="https://eservices.hec.gov.pk/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 px-8 py-4 bg-purple-800 text-white font-bold rounded-lg hover:bg-purple-700 transition-colors duration-300"
            variants={textVariants}
          >
            Visit HEC E-Portal
          </motion.a>
        </motion.div>
      </div>

      <footer className="bg-gradient-to-r from-purple-800 to-purple-900 text-white py-6 mt-10 rounded-xl">
        <div className="container mx-auto text-center">
          <p className="text-sm">
          Abbottabad University of Science and Technology
          </p>
          <ul className="flex justify-center space-x-6 mt-3">
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

export default HecPortal;
