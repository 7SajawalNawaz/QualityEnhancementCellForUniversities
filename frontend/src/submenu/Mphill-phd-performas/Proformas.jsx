import React from "react";
import { motion } from "framer-motion";

const DownloadForms = () => {
  const forms = [
    {
      name: "Form 1: Program Summary",
      path: "/forms/PS.docx",
      description: "This form summarizes the entire program structure and curriculum."
    },
    {
      name: "Form 2: Program Detailed Information",
      path: "/forms/PD-information.docx",
      description: "This form contains detailed information about the program offerings."
    },
    {
      name: "Form 3: Program Faculty Information (For MS)",
      path: "/forms/PF-information(M-Phill).docx",
      description: "This form provides information on faculty qualifications for MS programs."
    },
    {
      name: "Form 4: Program Faculty Information (For PhD)",
      path: "/forms/PF-information.docx",
      description: "This form outlines faculty qualifications for PhD programs."
    },
    {
      name: "Form 5: Student Information (MS equivalent)",
      path: "/forms/SI(MS-Mphill).docx",
      description: "This form collects information about students in the MS program."
    },
    {
      name: "Form 6: Student Information (PhD)",
      path: "/forms/StudentInformation(PhD).docx",
      description: "This form gathers data on PhD students."
    },
    {
      name: "Form 6A: Graduated Student Information (MS)",
      path: "/forms/PGPR-6-A.docx",
      description: "This form is for collecting information about graduated MS students."
    },
    {
      name: "Form 6B: Graduated Student Information (PhD)",
      path: "/forms/PGPR-6-B.docx",
      description: "This form provides details about graduated PhD students."
    },
  ];

  const additionalForms = [
    { name: "Form 1", path: "/forms/Form1.docx", description: "General information form." },
    { name: "Form 2", path: "/forms/Form2.docx", description: "Another general information form." },
    { name: "Form 2.0", path: "/forms/Form3.docx", description: "An updated general information form." },
    { name: "Form 2.1", path: "/forms/Form4.docx", description: "Version 2.1 of the information form." },
    { name: "Form 2.2", path: "/forms/Form5.docx", description: "Additional information form." },
    { name: "Form 2.3", path: "/forms/Form6.docx", description: "Extra details form." },
    { name: "Form 2.4", path: "/forms/Form7.docx", description: "Further information form." },
    { name: "Form 2.5", path: "/forms/Form8.docx", description: "Supplementary information form." },
    { name: "Form 2.6", path: "/forms/Form9.docx", description: "Last version of the information form." },
  ];

  // Animation variants for motion.div
  const listVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="mr-4">
      <div className="container mx-auto py-8 px-4 bg-gradient-to-r from-purple-500 to-purple-900 min-h-screen rounded-2xl mt-10 mr-6 pt-20">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">
          MS/MPhil & PhD Programs Review
        </h1>

        <p className="mb-6 text-white text-base text-center max-w-3xl mx-auto">
          The quality of Masters and PhD programs is peer-reviewed according to
          HEC criteria. Below, you can find downloadable forms for the program
          review.
        </p>

        {/* First List of Forms */}
        <h2 className="text-2xl font-semibold text-white mb-4 text-center">
          Downloadable Forms
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
          {forms.map((form, index) => (
            <motion.div
              key={index}
              className="border p-6 rounded-md bg-purple-100 hover:bg-purple-200 shadow-md flex flex-col"
              variants={listVariants}
              initial="hidden"
              animate="visible"
            >
              <h3 className="text-lg font-semibold text-purple-700">{form.name}</h3>
              <p className="text-black text-sm mb-4">{form.description}</p>
              <a
                href={form.path}
                download
                className="mt-auto px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-800 transition-all duration-300 font-semibold text-center"
              >
                Download
              </a>
            </motion.div>
          ))}
        </div>

        {/* Second List of Additional Forms */}
        <h2 className="text-2xl font-semibold text-white mb-4 text-center">
          Individual Forms in Document Format
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {additionalForms.map((form, index) => (
            <motion.div
              key={index}
              className="border p-6 rounded-md bg-purple-100 hover:bg-purple-200 shadow-md flex flex-col"
              variants={listVariants}
              initial="hidden"
              animate="visible"
            >
              <h3 className="text-lg font-semibold text-purple-700">{form.name}</h3>
              <p className="text-black text-sm mb-4">{form.description}</p>
              <a
                href={form.path}
                download
                className="mt-auto px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-800 transition-all duration-300 font-semibold text-center"
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

export default DownloadForms;
