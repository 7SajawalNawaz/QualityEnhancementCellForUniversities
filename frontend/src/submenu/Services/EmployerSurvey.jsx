import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const EmployerSurvey = () => {
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
    <div className="pt-14 mr-4 bg-gradient-to-b from-purple-100 to-purple-300 min-h-screen p-8 rounded-xl">
      <motion.div
        className="w-full max-w-7xl p-10 bg-white shadow-lg rounded-3xl border border-purple-200 relative mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Top Gradient Border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-t-lg"></div>
        
        {/* Heading */}
        <motion.div className="mb-8 flex items-center justify-center" variants={textVariants}>
          <motion.img
            src="/Images/aust.png"
            alt="Abbottabad University Logo"
            className="w-16 h-16 mr-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
          <h1 className="text-4xl font-bold text-purple-900 tracking-wider">
            Employer Survey
          </h1>
        </motion.div>

        {/* Introduction */}
        <motion.p className="text-lg text-gray-700 mb-8 leading-relaxed" variants={textVariants}>
          The Employer Survey by the Quality Enhancement Cell (QEC) helps gather valuable insights from employers on the performance, skills, and job readiness of Abbottabad University graduates. This feedback assists us in continuously improving our academic programs to match industry standards.
        </motion.p>

        {/* Divider Line */}
        <div className="bg-gradient-to-r from-purple-700 to-pink-500 h-1 rounded mb-8"></div>

        {/* Purpose Section */}
        <motion.div variants={textVariants}>
          <h3 className="text-2xl font-bold text-purple-800 mb-4 bg-purple-300 p-3 rounded-md">
            Purpose of the Employer Survey
          </h3>
          <p className="text-gray-700 mb-6">
            The survey seeks to bridge the gap between academia and industry by assessing the strengths and areas for improvement in our graduates' skills. Your feedback directly impacts the quality of education and the employability of future graduates.
          </p>
        </motion.div>

        {/* How to Contribute Section */}
        <motion.div variants={textVariants}>
          <h3 className="text-2xl font-bold text-purple-800 mb-4 bg-purple-300 p-3 rounded-md">
            How Your Feedback Contributes
          </h3>
          <ul className="text-gray-700 text-left list-disc pl-10 mb-8 space-y-2">
            <li>Identifies strengths and skill gaps in graduates' professional capabilities.</li>
            <li>Helps in aligning the curriculum with evolving industry needs.</li>
            <li>Contributes to the overall improvement of educational quality.</li>
          </ul>
        </motion.div>

        {/* Call-to-Action Button */}
        <div className="mt-10 text-center">
          <motion.a
            href="https://forms.gle/rcxNxWRhr2c2ET9J8" // Replace with your actual Google Form link
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Security measure when opening a new tab
            className="bg-gradient-to-r from-purple-700 to-pink-600 text-white py-3 px-8 rounded-lg hover:shadow-lg transition duration-300 transform hover:scale-105"
            variants={textVariants}
            whileHover={{ scale: 1.05 }}
          >
            Take the Survey
          </motion.a>
        </div>
      </motion.div>

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
    </div>
  );
};

export default EmployerSurvey;
