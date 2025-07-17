import React from "react";
import { motion } from "framer-motion";
import { MdMarkEmailRead } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";

const AboutUs = () => {
  return (
    <div className="mt-10">
      <motion.div 
        className="min-h-screen flex flex-col items-center justify-center p-6 mr-6 overflow-hidden rounded-2xl"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
        style={{ background: "linear-gradient(90deg, #6a11cb, #CBC3E3, #6a11cb)", backgroundSize: "200% 200%" }}
      >
        <motion.div 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="p-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-700 rounded-2xl"
        >
          <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg text-center">
            <motion.div 
              className="w-36 h-36 rounded-full mx-auto mb-4 p-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-700"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/Images/sajawal.jpg"
                alt="Sajawal Nawaz"
                className="w-full h-full rounded-full border-4 border-white"
              />
            </motion.div>
            <motion.h1 className="text-2xl font-bold text-purple-800" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>Sajawal Nawaz</motion.h1>
            <p className="text-gray-600 font-medium text-sm sm:text-base">Software Engineer</p>
            
            <p className="text-gray-500 mt-4">
              I developed the QEC Portal for Abbottabad University of Science and Technology (AUST), 
              ensuring an efficient and seamless experience for users.
            </p>
            <div className="mt-4 space-y-2">
            <p className="text-base sm:text-lg text-purple-900">Website developed with MERN Stack</p>
            <div className="mt-6 space-y-2 text-gray-700 text-xs sm:text-base flex flex-col items-center">
              <p className="flex items-center gap-2"><MdMarkEmailRead className="text-lg " /><strong>Email </strong> 7sajawalnawaz@gmail.com</p>
              <p className="flex items-center gap-2"><IoLogoLinkedin className="text-lg " /><strong>Linkedin </strong> Sajawal Nawaz</p>
            </div>
              <motion.footer 
          className="mt-6 text-purple-600 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          &copy; {new Date().getFullYear()} Sajawal Nawaz. All rights reserved.
        </motion.footer>
            </div>
          </div>
        </motion.div>

{/* Bilal Card */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="p-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-700 rounded-2xl mt-10"
        >
          <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg text-center">
            <motion.div 
              className="w-36 h-36 rounded-full mx-auto mb-4 p-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-700"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/Images/bilal.png"
                alt="Bilal Iqbal"
                className="w-full h-full rounded-full border-4 border-white"
              />
            </motion.div>
            <motion.h1 className="text-2xl font-bold text-purple-800" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>Bilal Iqbal</motion.h1>
            <p className="text-gray-600 font-medium text-sm sm:text-base">Software Engineer</p>
            
            <p className="text-gray-500 mt-4">
            I Contributed to the development of the QEC Portal for Abbottabad University of Science and Technology (AUST), ensuring an efficient and seamless experience for users.
            </p>
            <div className="mt-4 space-y-2">
            {/* <p className="text-base sm:text-lg text-purple-900">Website developed with MERN Stack</p> */}
            <div className="mt-6 space-y-2 text-gray-700 text-xs sm:text-base flex flex-col items-center">
              <p className="flex items-center gap-2"><MdMarkEmailRead className="text-lg " /><strong>Email </strong>01bilaliqbal@gmail.com</p>
              <p className="flex items-center gap-2"><IoLogoLinkedin className="text-lg " /><strong>Linkedin </strong>Bilaliqbal01</p>
            </div>
              <motion.footer 
          className="mt-6 text-purple-600 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          
        </motion.footer>
            </div>
          </div>
        </motion.div>
        
      </motion.div>
    </div>
  );
};

export default AboutUs;
