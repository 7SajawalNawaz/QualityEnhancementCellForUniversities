import React from 'react';
import { motion } from 'framer-motion';

// Data for institutions
const publicSectorInstitutions = [
  { sNo: 1, institution: 'GGPGC, No.1 Abbottabad', disciplines: 'BS: English, Political Science, Urdu', remarks: 'Principal seats available for Chemistry, Economics, Maths, Pak Study, Physics, GIS. Creation of the disciplines of Botany, Health & Physical Education and Urdu is in process.' },
  { sNo: 2, institution: 'GPGC No.1, Abbottabad', disciplines: 'MA: Islamiyat', remarks: 'Principal seats available for Chemistry, Computer Science, Economics, Maths, Physics, Psychology. Creation of the Botany and Urdu is in process.' },
  { sNo: 3, institution: 'GPGC, Mandian Abbottabad', disciplines: 'BS: Maths, Physics, English, Urdu, Chemistry', remarks: 'Principal seats available for Chemistry, Information Technology, Microbiology.' },
  { sNo: 4, institution: 'GGPGC, Mandian, Abbottabad', disciplines: 'BS: Chemistry, Botany, History, Maths, Physics, Political Science, Psychology, Statistics', remarks: 'Principal seats available for Chemistry, Maths, Physics, Psychology. Creation of Biology is in process.' },
  { sNo: 5, institution: 'GCMS, Abbottabad', disciplines: 'MBA', remarks: 'Principal seat exists for Management Sciences.' },
  { sNo: 6, institution: 'G. H. Economics College', disciplines: 'BS Home Economics', remarks: 'Principal seat exists for Economics.' },
  { sNo: 7, institution: 'GGDC, Nawanshahr, Abbottabad', disciplines: 'BS: Botany, English, Computer Science, Political Science', remarks: 'Principal seat exists for English; Political Science relevant to Pak Study.' },
  { sNo: 8, institution: 'GDC, Havellian', disciplines: 'BS: Botany, Physics, Maths, English, Urdu, Political Science', remarks: 'Principal seats exist for English, Maths, Physics. Creation of Botany and Urdu in process.' },
  { sNo: 9, institution: 'GGDC, Havellian', disciplines: 'BS: Botany, Political Science', remarks: 'Principal seats available for Computer Science, English, Maths, Physics.' },
  { sNo: 10, institution: 'GCMS (Women), Abbottabad', disciplines: 'B. Com', remarks: 'Principal seats available for BBA; well-qualified faculty for BS-Commerce at Management Sciences Dept.' },
  { sNo: 11, institution: 'GGDC, Qalandar Abad', disciplines: 'BS: Political Science, Urdu', remarks: 'Political Science relevant to Pak Study.' },
  { sNo: 12, institution: 'GGDC, MalakPura', disciplines: 'BS: Political Science, Maths', remarks: 'Principal seat exists for Maths; Political Science relevant to Pak Study.' },
  { sNo: 13, institution: 'GDC, NathiaGali', disciplines: 'N/A', remarks: 'N/A' },
  { sNo: 14, institution: 'GDC, Boi', disciplines: 'BA/BSC', remarks: 'N/A' },
  { sNo: 15, institution: 'Regional Institute of Teacher Education', disciplines: 'ADE', remarks: 'N/A' },
  { sNo: 16, institution: 'GGDC, NelorSaidan', disciplines: 'BA/BSC', remarks: 'N/A' },
  { sNo: 17, institution: 'GDC, Sherwan', disciplines: 'BA/BSC', remarks: 'N/A' },
];

const privateSectorInstitutions = [
  { sNo: 1, institution: 'Abbottabad College of Commerce', disciplines: 'BBA, B.Com', remarks: 'Management Sciences' },
  { sNo: 2, institution: 'FIMS Abbottabad', disciplines: 'MLISc, MSc Psychology, MSc MLT, MPH, BSc MLT, DPT', remarks: 'Principal seat exists for Psychology; MPH relevant to Micro-Biology.' },
  { sNo: 3, institution: 'Frontier College of Commerce', disciplines: 'B. Ed, M.Ed, B.Com, M. Com', remarks: 'Education Dept approved; will launch after space availability.' },
  { sNo: 4, institution: 'IQRA Degree College', disciplines: 'B.A, B.Sc., B. Ed', remarks: 'Education Dept approved; will launch after space availability.' },
  { sNo: 5, institution: 'LIMS', disciplines: 'B.A, B. Ed, M.Ed, B.Com, DPT', remarks: 'Education Dept approved; will launch after space availability.' },
  { sNo: 6, institution: 'Muslim College Abbottabad', disciplines: 'BBS, BBA (Honors), B.Com, M. Com', remarks: 'Principal seat is available at AUST (Management Sciences).' },
  { sNo: 7, institution: 'PINE HILLS, Abbottabad', disciplines: 'BBA, BBS, B.Com, B.Ed, M.Ed', remarks: 'Principal seat is available at AUST Management Sciences.' },
  { sNo: 8, institution: 'QUAID DEGREE COLLEGE, Abbottabad', disciplines: 'B.A, B.Ed, M.Ed', remarks: 'Education Dept approved; will launch after space availability.' },
  { sNo: 9, institution: 'VERTEX COLLEGE, Abbottabad', disciplines: 'BSC MLT', remarks: 'Disciplines of DPT, MPH, BHMS relevant to Micro-Biology.' },
  { sNo: 10, institution: 'Aman Medical College, Islamabad', disciplines: 'DPT, BS MLT', remarks: 'MLT, DPT relevant to Microbiology.' },
  { sNo: 11, institution: 'Jinnah Degree College of Commerce, Havelian', disciplines: 'B.Com', remarks: 'N/A' },
  { sNo: 12, institution: 'Abbottabad Homeopathic Medical College', disciplines: 'BHMS', remarks: 'N/A' },
  { sNo: 13, institution: 'Islamia Modern Degree College', disciplines: 'BA/B.Ed', remarks: 'N/A' },
  { sNo: 14, institution: 'Banat Degree College', disciplines: 'BA, BSC', remarks: 'N/A' },
  { sNo: 15, institution: 'Emerson College of Business & Commerce', disciplines: 'B.Com, M.Com, B.Ed', remarks: 'N/A' },
  { sNo: 16, institution: 'Justice Post Graduate College', disciplines: 'Msc (Statistics, Maths, Pakistan Studies)', remarks: 'N/A' },
  { sNo: 17, institution: 'The Creator College of Science & Commerce', disciplines: 'B.Com', remarks: 'N/A' },
  { sNo: 18, institution: 'Global Post Graduate College', disciplines: 'BA, B.Ed, M.Ed, MA (English)', remarks: 'N/A' },
  { sNo: 19, institution: 'Vertex Institute of Science & Technology, Islamabad', disciplines: 'BHMS, DPT, BS MLT, MPH', remarks: 'N/A' },
  { sNo: 20, institution: 'Pakistan Institute of Medical Technologies', disciplines: 'BSC MLT', remarks: 'N/A' },
  { sNo: 21, institution: 'Pakistan Institute of Professional Studies, Abbottabad', disciplines: 'Pharm-D', remarks: 'N/A' },
];

// Animation variants
const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// Main component
const AffiliatedCollege = () => {
  return (
    <>
    <div className="bg-gradient-to-r from-purple-500 to-purple-900 rounded-2xl p-4 sm:p-8 min-h-screen overflow-x-auto mr-6 mt-10">
      <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 md:p-8 max-w-5xl mx-auto overflow-hidden">
        <motion.h1 
          className="text-xl sm:text-2xl font-bold text-purple-900 mb-6 text-center" 
          variants={headingVariants}
          initial="hidden"
          animate="visible"
        >
          Affiliated Colleges
        </motion.h1>
        <Section title="Public Sector Institutions" data={publicSectorInstitutions} />
        <Section title="Private Sector Institutions" data={privateSectorInstitutions} />
      </div>
    </div>
    <div className="flex flex-col ">
    <div className="flex-grow">
      {/* Your main content here */}
    </div>
    
    <footer className="bg-gray-800 text-white py-6 mt-4 rounded-xl bg-gradient-to-r from-purple-700 to-purple-900 mr-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
         Abbottabad University of Science and Technology
        </p>
        <ul className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4 mt-4">
          <li>
            <a
              href="/privacy-policy"
              className="text-white hover:underline"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/terms-of-service"
              className="text-white hover:underline"
            >
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

const Section = ({ title, data }) => (

  <section className="mb-6">
    <motion.h2 
      className="text-lg sm:text-xl text-gray-800 font-bold mb-4 text-center" 
      variants={headingVariants}
      initial="hidden"
      animate="visible"
    >
      {title}
    </motion.h2>
    {/* Make the wrapper responsive */}
    <div className="w-full overflow-x-auto">
      {/* Flexbox for mobile responsiveness */}
      <div className="block sm:hidden">
        {data.map(item => (
          <div key={item.sNo} className="bg-white p-4 mb-4 border border-gray-300 rounded-md shadow-sm">
            <p className="font-semibold text-purple-800">S.No: <span className="font-normal">{item.sNo}</span></p>
            <p className="font-semibold text-purple-800">Institution: <span className="font-normal">{item.institution}</span></p>
            <p className="font-semibold text-purple-800">Disciplines: <span className="font-normal">{item.disciplines}</span></p>
            <p className="font-semibold text-purple-800">Remarks: <span className="font-normal">{item.remarks}</span></p>
          </div>
        ))}
      </div>

      {/* Table for larger screens */}
      <div className="hidden sm:block">
        <table className="w-full min-w-[320px] table-auto bg-white border border-gray-300 rounded-md shadow-sm text-xs sm:text-sm md:text-base">
          <thead>
            <tr className="bg-purple-900 text-white text-left">
              <th className="p-2 sm:p-3 text-center w-[50px]">S.No</th>
              <th className="p-2 sm:p-3 w-[200px] break-words">Institution</th>
              <th className="p-2 sm:p-3 w-[250px] break-words">Disciplines</th>
              <th className="p-2 sm:p-3 w-[300px] break-words">Remarks</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.sNo} className="border-b hover:bg-purple-50 text-center sm:text-left">
                <td className="p-2 sm:p-3">{item.sNo}</td>
                <td className="p-2 sm:p-3">{item.institution}</td>
                <td className="p-2 sm:p-3">{item.disciplines}</td>
                <td className="p-2 sm:p-3">{item.remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
  




);


export default AffiliatedCollege;
