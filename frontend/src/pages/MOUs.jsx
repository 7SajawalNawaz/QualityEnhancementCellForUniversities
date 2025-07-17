import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MOUs = () => {
  const [notifications, setNotifications] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    const fetchNotifications = () => {
      const data = [
        {
          id: 1,
          title: 'MOU with XYZ University',
          date: '2024-09-01',
          description: 'An agreement has been signed with XYZ University for collaborative research and development in the field of artificial intelligence. This MOU marks a significant milestone in our research initiatives.',
          image: 'https://via.placeholder.com/150',
          details: {
            overview: 'Overview of the MOU with XYZ University. It covers various aspects of collaborative research and academic exchanges.',
            contactInfo: {
              office: 'Research Block',
              phone: '0992 811712',
              email: 'research@xyz.edu',
              hours: 'Mon – Fri 9:00A.M. – 4:00P.M.',
            }
          }
        },
        {
          id: 2,
          title: 'Partnership with ABC Institute',
          date: '2024-09-15',
          description: 'A new partnership with ABC Institute has been established to enhance educational opportunities and joint research initiatives. The collaboration aims to foster academic excellence and innovation.',
          image: 'https://via.placeholder.com/150',
          details: {
            overview: 'Overview of the partnership with ABC Institute. The focus is on mutual research interests and student exchange programs.',
            contactInfo: {
              office: 'Innovation Center',
              phone: '0992 811713',
              email: 'contact@abc.edu',
              hours: 'Mon – Fri 9:00A.M. – 4:00P.M.',
            }
          }
        },
        {
          id: 3,
          title: 'Agreement with DEF College',
          date: '2024-09-22',
          description: 'DEF College has entered into an MOU with our university to promote academic exchange programs and joint conferences. This agreement is expected to benefit both institutions and their communities.',
          image: 'https://via.placeholder.com/150',
          details: {
            overview: 'Overview of the agreement with DEF College. It includes provisions for academic collaborations and joint research activities.',
            contactInfo: {
              office: 'Academic Exchange Office',
              phone: '0992 811714',
              email: 'exchange@def.edu',
              hours: 'Mon – Fri 9:00A.M. – 4:00P.M.',
            }
          }
        },
        {
          id: 4,
          title: 'MOU with Seraph Pharmaceutical',
          date: '2024-09-30',
          description: 'This MOU is established with Seraph Pharmaceutical to enhance pharmaceutical research and development. It includes collaboration on academic programs, professional training, and evaluation mechanisms.',
          image: 'http://seraphpharmaceutical.com/images/seraph.jpg',
          details: {
            overview: 'Academic Programs, Overview, Pharmacy Program Description & Learning Outcomes, Scheme of Studies, Professional Training, Standard Programs upon which the Program is Designed, Theoretical and Practical Evaluation Mechanism.',
            contactInfo: {
              office: 'Pharmacy Block',
              phone: '0992 811712',
              email: 'chairmanpharmacy@aust.edu.pk',
              hours: 'Mon – Fri 9:00A.M. – 4:00P.M.',
            }
          }
        },
        {
          id: 5,
          title: 'MOU with DHQ Haripur Hospital',
          date: '2024-10-05',
          description: 'An MOU with DHQ Haripur Hospital has been signed to foster healthcare research and improve patient care services.',
          image: 'https://aust.edu.pk/wp-content/uploads/2024/08/MoU-Haripur-Pharm-AUST_page-0001.jpg',
          details: {
            overview: 'Details of the MOU with DHQ Haripur Hospital, focusing on healthcare research and patient care improvements.',
            contactInfo: {
              office: 'Hospital Administration',
              phone: '0992 811715',
              email: 'contact@dhqharipur.edu.pk',
              hours: 'Mon – Fri 9:00A.M. – 4:00P.M.',
            }
          }
        }
      ];
      setNotifications(data);
    };

    fetchNotifications();
  }, []);

  const handleReadMore = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen pt-16  px-8 text-center p-4 rounded-2xl mr-6  bg-gradient-to-r from-purple-500 to-purple-900">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-white">MOU Notifications</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto">
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            className="p-6 border rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 border-purple-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={notification.image}
              alt={notification.title}
              className="w-full h-48 object-cover rounded-md mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <h2 className="text-xl font-semibold text-purple-800 mb-2">{notification.title}</h2>
            <p className="text-purple-600 text-sm mb-2">{notification.date}</p>
            <p className="text-gray-700">
              {expandedId === notification.id
                ? notification.description
                : `${notification.description.substring(0, 100)}...`}
            </p>
            <button
              onClick={() => handleReadMore(notification.id)}
              className={`mt-4 py-2 px-4 font-semibold rounded-lg text-white transition-all duration-300 
                ${expandedId === notification.id ? 'bg-red-500 hover:bg-red-600' : 'bg-purple-600 hover:bg-purple-700'}`}
            >
              {expandedId === notification.id ? 'Read Less' : 'Read More'}
            </button>
            {expandedId === notification.id && (
              <div className="mt-4 text-left">
                <h3 className="text-lg font-semibold text-purple-800">Details:</h3>
                <p className="text-gray-700 mt-1">{notification.details.overview}</p>
                <div className="mt-4 text-gray-700">
                  <h4 className="font-semibold text-purple-800">Contact Information:</h4>
                  <p>Office: {notification.details.contactInfo.office}</p>
                  <p>Phone: {notification.details.contactInfo.phone}</p>
                  <p>Email: <a href={`mailto:${notification.details.contactInfo.email}`} className="text-purple-600 hover:underline">{notification.details.contactInfo.email}</a></p>
                  <p>Hours: {notification.details.contactInfo.hours}</p>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
      
    </div>
   
    <div className="flex flex-col ">
      <div className="flex-grow">
        {/* Your main content here */}
      </div>

      <footer className="bg-gray-800 text-white py-6 mt-4 mr-6 rounded-xl bg-gradient-to-r from-purple-700 to-purple-900">
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

export default MOUs;
