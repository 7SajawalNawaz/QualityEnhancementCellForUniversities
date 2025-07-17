import React from 'react';
import { motion } from 'framer-motion';

const departmentsData = [
  {
    name: "Microbiology",
    contact: {
      office: "Management Sciences Block – AUST",
      phone: "+92 992 811744",
      email: "hodmicrobiology@aust.edu.pk",
      hours: "Mon – Fri 9:00A.M. – 4:00P.M.",
    },
    chairman: {
      name: "Prof Dr Mujaddad Ur Rehman",
      message: "Welcome to the Department of Microbiology. We aim to foster an environment that promotes research and academic excellence.",
      image: "/Images/HOD/Micro.png", // Replace with actual image URL
    },
    links: [
      { label: "Department Website", url: "https://aust.edu/microbiology" },
      { label: "Research Publications", url: "https://aust.edu/microbiology/research" },
      { label: "Student Resources", url: "https://aust.edu/microbiology/resources" },
    ],
  },
  
  {
    name: "Medical Lab Technology",
    contact: {
      office: "Medical Block – AUST",
      phone: "+92 992 811746",
      email: "hodmedicallab@aust.edu.pk",
      hours: "Mon – Fri 9:00A.M. – 4:00P.M.",
    },
    chairman: {
      name: "Dr Azam Hayat",
      message: "Explore the vital role of medical lab technologies in healthcare.",
      image: "/Images/HOD/mlt.png", // Replace with actual image URL
    },
    links: [
      { label: "Department Website", url: "https://aust.edu/medicallab" },
      { label: "Research Publications", url: "https://aust.edu/medicallab/research" },
      { label: "Student Resources", url: "https://aust.edu/medicallab/resources" },
    ],
  },
  {
    name: "Pharmacy D",
    contact: {
      office: "Pharmacy Block – AUST",
      phone: "+92 992 811747",
      email: "hodpharmacy@aust.edu.pk",
      hours: "Mon – Fri 9:00A.M. – 4:00P.M.",
    },
    chairman: {
      name: "Dr Khalid Mehmood",
      message: "Join us to delve into the world of pharmaceuticals and healthcare.",
      image: "/Images/HOD/pharmacy.png", // Replace with actual image URL
    },
    links: [
      { label: "Department Website", url: "https://aust.edu/pharmacy" },
      { label: "Research Publications", url: "https://aust.edu/pharmacy/research" },
      { label: "Student Resources", url: "https://aust.edu/pharmacy/resources" },
    ],
  },
  {
    name: "Biochemistry",
    contact: {
      office: "Biochemistry Block – AUST",
      phone: "+92 992 811748",
      email: "hodbiochemistry@aust.edu.pk",
      hours: "Mon – Fri 9:00A.M. – 4:00P.M.",
    },
    chairman: {
      name: "Dr Nusrat Shaheen",
      message: "Discover the biochemical processes that govern life.",
      image: "/Images/HOD/biochem.png", // Replace with actual image URL
    },
    links: [
      { label: "Department Website", url: "https://aust.edu/biochemistry" },
      { label: "Research Publications", url: "https://aust.edu/biochemistry/research" },
      { label: "Student Resources", url: "https://aust.edu/biochemistry/resources" },
    ],
  },
  {
    name: "Mathematics",
    contact: {
      office: "Math Block – AUST",
      phone: "+92 992 811749",
      email: "hodmathematics@aust.edu.pk",
      hours: "Mon – Fri 9:00A.M. – 4:00P.M.",
    },
    chairman: {
      name: "Dr Waseem Ul Haq",
      message: "Engage with the beauty and logic of mathematics with us.",
      image: "/Images/HOD/math.png", // Replace with actual image URL
    },
    links: [
      { label: "Department Website", url: "https://aust.edu/mathematics" },
      { label: "Research Publications", url: "https://aust.edu/mathematics/research" },
      { label: "Student Resources", url: "https://aust.edu/mathematics/resources" },
    ],
  },
  {
    name: "Chemistry",
    contact: {
      office: "Chemistry Block – AUST",
      phone: "+92 992 811750",
      email: "hodchemistry@aust.edu.pk",
      hours: "Mon – Fri 9:00A.M. – 4:00P.M.",
    },
    chairman: {
      name: "Dr Khurram Shoaib",
      message: "Join us to explore the fascinating world of chemistry and its applications.",
      image: "/Images/HOD/chemistry.png", // Replace with actual image URL
    },
    links: [
      { label: "Department Website", url: "https://aust.edu/chemistry" },
      { label: "Research Publications", url: "https://aust.edu/chemistry/research" },
      { label: "Student Resources", url: "https://aust.edu/chemistry/resources" },
    ],
  },
  {
    name: "Computer Science",
    contact: {
      office: "CS Block – AUST",
      phone: "+92 992 811751",
      email: "hodcs@aust.edu.pk",
      hours: "Mon – Fri 9:00A.M. – 4:00P.M.",
    },
    chairman: {
      name: "Dr Muhammad Naeem",
      message: "Delve into the world of technology and computer science with our innovative programs.",
      image: "/Images/HOD/cs.png", // Replace with actual image URL
    },
    links: [
      { label: "Department Website", url: "https://aust.edu/computer-science" },
      { label: "Research Publications", url: "https://aust.edu/computer-science/research" },
      { label: "Student Resources", url: "https://aust.edu/computer-science/resources" },
    ],
  },
  {
    name: "Physics",
    contact: {
      office: "Physics Block – AUST",
      phone: "+92 992 811752",
      email: "hodphysics@aust.edu.pk",
      hours: "Mon – Fri 9:00A.M. – 4:00P.M.",
    },
    chairman: {
      name: "Dr Bin Amin",
      message: "Explore the fundamental principles that govern the universe.",
      image: "/Images/HOD/phy.jpg", // Replace with actual image URL
    },
    links: [
      { label: "Department Website", url: "https://aust.edu/physics" },
      { label: "Research Publications", url: "https://aust.edu/physics/research" },
      { label: "Student Resources", url: "https://aust.edu/physics/resources" },
    ],
  },
  {
    name: "Earth and Environmental Science",
    contact: {
      office: "Earth Science Block – AUST",
      phone: "+92 992 811753",
      email: "hodearthscience@aust.edu.pk",
      hours: "Mon – Fri 9:00A.M. – 4:00P.M.",
    },
    chairman: {
      name: "Dr Zahid Bhatti",
      message: "Join us in exploring our planet's processes and resources.",
      image: "/Images/HOD/earth.png", // Replace with actual image URL
    },
    links: [
      { label: "Department Website", url: "https://aust.edu/earth-science" },
      { label: "Research Publications", url: "https://aust.edu/earth-science/research" },
      { label: "Student Resources", url: "https://aust.edu/earth-science/resources" },
    ],
  },
  {
    name: "Food Science and Technology",
    contact: {
      office: "Food Science Block – AUST",
      phone: "+92 992 811745",
      email: "hodfoodscience@aust.edu.pk",
      hours: "Mon – Fri 9:00A.M. – 4:00P.M.",
    },
    chairman: {
      name: "Prof Dr Mujaddad Ur Rehman",
      message: "Welcome to the Department of Microbiology. We aim to foster an environment that promotes research and academic excellence.",
      image: "/Images/HOD/Micro.png", // Replace with actual image URL
    },
    links: [
      { label: "Department Website", url: "https://aust.edu/foodscience" },
      { label: "Research Publications", url: "https://aust.edu/foodscience/research" },
      { label: "Student Resources", url: "https://aust.edu/foodscience/resources" },
    ],
  },
  {
    name: "Zoology",
    contact: {
      office: "Zoology Block – AUST",
      phone: "+92 992 811754",
      email: "hodzoology@aust.edu.pk",
      hours: "Mon – Fri 9:00A.M. – 4:00P.M.",
    },
    chairman: {
      name: "Dr Siraj",
      message: "Discover the diversity of animal life with us.",
      image: "/Images/HOD/zoology.png", // Replace with actual image URL
    },
    links: [
      { label: "Department Website", url: "https://aust.edu/zoology" },
      { label: "Research Publications", url: "https://aust.edu/zoology/research" },
      { label: "Student Resources", url: "https://aust.edu/zoology/resources" },
    ],
  },
 
  
  {
    name: "Economics",
    contact: {
      office: "Economics Block – AUST",
      phone: "+92 992 811757",
      email: "hodeconomics@aust.edu.pk",
      hours: "Mon – Fri 9:00A.M. – 4:00P.M.",
    },
    chairman: {
      name: "Mr  Sardar Fawad Saleem  ",
      message: "Explore economic theories and their applications.",
      image: "/Images/HOD/ecnomics.png", // Replace with actual image URL
    },
    links: [
      { label: "Department Website", url: "https://aust.edu/economics" },
      { label: "Research Publications", url: "https://aust.edu/economics/research" },
      { label: "Student Resources", url: "https://aust.edu/economics/resources" },
    ],
  },
  {
    name: "Management Sciences",
    contact: {
      office: "Management Sciences Block – AUST",
      phone: "+92 992 811758",
      email: "hodmanagement@aust.edu.pk",
      hours: "Mon – Fri 9:00A.M. – 4:00P.M.",
    },
    chairman: {
      name: "Dr Muhammad Mudassar",
      message: "Our department focuses on developing managerial skills and business acumen in our students.",
      image: "/Images/HOD/managment.png", // Replace with actual image URL
    },
    links: [
      { label: "Department Website", url: "https://aust.edu/management" },
      { label: "Research Publications", url: "https://aust.edu/management/research" },
      { label: "Student Resources", url: "https://aust.edu/management/resources" },
    ],
  },
];

const Departments = () => {
  return (
    <>
    <div className="flex flex-col pt-14 items-center justify-center bg-gradient-to-r from-purple-500 to-purple-900 min-h-screen p-8 mr-6 mt-10 rounded-2xl">
      {departmentsData.map((department, index) => (
        <motion.div
          key={index}
          className="w-full max-w-3xl p-6 mb-6 bg-white rounded-lg shadow-lg border border-purple-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-purple-700 text-center mb-6">
            Department of {department.name}
          </h1>

          <div className="bg-purple-50 p-4 rounded-lg shadow-md mb-4">
            <h2 className="text-2xl font-semibold text-purple-600">Contact Info</h2>
            <p><strong>Office:</strong> {department.contact.office}</p>
            <p><strong>Phone:</strong> {department.contact.phone}</p>
            <p>
              <strong>Email:</strong> 
              <a href={`mailto:${department.contact.email}`} className="text-purple-500 hover:underline">
                {department.contact.email}
              </a>
            </p>
            <p><strong>Hours:</strong> {department.contact.hours}</p>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg shadow-md mb-4 flex items-center">
            <img
              src={department.chairman.image}
              alt={department.chairman.name}
              className="w-24 h-24 object-cover rounded-full border-2 border-purple-600 mr-4"
            />
            <div>
              <h2 className="text-2xl font-semibold text-purple-600">{department.chairman.name}</h2>
              <p><strong>Message:</strong> "{department.chairman.message}"</p>
            </div>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-purple-600">Important Links</h2>
            <ul className="list-disc pl-5 space-y-2">
              {department.links.map((link, idx) => (
                <li key={idx}>
                  <a href={link.url} className="text-purple-500 hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
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
    </>
  );
};

export default Departments;