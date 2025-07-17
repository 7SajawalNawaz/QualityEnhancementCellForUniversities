import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect after 3 seconds
    const timer = setTimeout(() => {
      navigate("/home"); // Redirect to the home page after the splash screen time
    }, 3000); // Adjust the duration for your desired splash screen time

    return () => clearTimeout(timer); // Clean up the timer
  }, [navigate]);

  return (
    <motion.div 
      className="min-h-screen flex flex-col items-center justify-center p-6 "
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
      style={{ background: "linear-gradient(90deg, #6a11cb, #CBC3E3, #6a11cb)", backgroundSize: "200% 200%" }}
    >
      {/* Logo Animation */}
      <motion.img
        src="/Images/qecSplash.png"
        alt="qec"
        className="w-24 sm:w-32 h-auto"
        initial={{ opacity: 0, scale: 0.5, y: -50 }} // Start with opacity 0, smaller scale, and position slightly above
        animate={{
          opacity: 1,  // Final opacity
          scale: 1,    // Final scale (normal size)
          y: 0,        // Final position (centered vertically)
        }}
        transition={{
          duration: 1,  // Animation duration for logo
          ease: "easeOut",  // Animation easing for logo
        }}
      />
    </motion.div>
  );
};

export default SplashScreen;
