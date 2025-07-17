import React from "react";
import { motion } from "framer-motion";

// Faculty Members Data
const facultyMembers = [
  {
    id: 1,
    name: "Dr. Sarah Khan",
    position: "Professor of Data Science",
    description:
      "Dr. Sarah Khan has over 20 years of experience in academia and industry. Her research focuses on big data analytics and predictive modeling. She has published 60+ research papers and authored two books on data-driven decision-making.",
  },
  {
    id: 2,
    name: "Dr. Umar Farooq",
    position: "Associate Professor of Physics",
    description:
      "Dr. Umar Farooq specializes in quantum mechanics and renewable energy technologies. He is known for his innovative teaching methods and collaborative research projects with international institutions.",
  },
  {
    id: 3,
    name: "Dr. Ayesha Malik",
    position: "Lecturer in Economics",
    description:
      "Dr. Ayesha Malik has a passion for teaching microeconomics and international trade. She has been part of several policy-making workshops and her research focuses on global trade trends and market dynamics.",
  },
];

// Animation Variants
const heroVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
};

const Faculty = () => {
  return (
    <>
      {/* Hero Section */}
      <motion.div
        className="relative min-h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1200x600/?university,classroom')",
        }}
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <div className=" rounded-2xl absolute mr-6 mt-8 inset-0 bg-gradient-to-b from-purple-900 to-transparent opacity-80"></div>
        <h1 className="relative z-10 text-4xl sm:text-5xl font-bold text-white text-center">
          Meet Our Esteemed Faculty
        </h1>
      </motion.div>

      {/* Faculty Section */}
      <div className="py-12 px-6 bg-purple-50">
        <div className="max-w-5xl mx-auto space-y-8">
          {facultyMembers.map((faculty) => (
            <motion.div
              key={faculty.id}
              className="bg-white p-6 rounded-lg shadow-lg border border-purple-200"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-purple-800">
                {faculty.name}
              </h2>
              <p className="text-md text-purple-600">{faculty.position}</p>
              <p className="text-sm text-gray-600 mt-2">
                {faculty.description}
              </p>
            </motion.div>
          ))}
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

      

    </>
  );
};

export default Faculty;
