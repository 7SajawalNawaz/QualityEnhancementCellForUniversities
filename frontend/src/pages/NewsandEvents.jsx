import React from 'react';
import { motion } from 'framer-motion';
import festival from '../Assets/festival.jpg';
import RC from '../Assets/RC.png';
import Nstd from '../Assets/Nstd.png';

// Sample data for news and events
const newsData = [
  {
    id: 1,
    title: 'University Welcomes New Students',
    date: 'September 10, 2024',
    description: 'Our university welcomes a new batch of students for the upcoming academic year.',
    imageUrl: Nstd,
  },
  {
    id: 2,
    title: 'Research Conference 2024',
    date: 'October 15, 2024',
    description: 'The annual research conference will bring together scholars from around the world.',
    imageUrl: RC,
  },
  {
    id: 3,
    title: 'Sports Festival 2024',
    date: 'November 5, 2024',
    description: 'Join us for the sports festival, where students showcase their athletic talents.',
    imageUrl: festival,
  },
];

function NewsandEvents() {
  return (
    <>
    <div className="bg-gradient-to-r from-purple-500 to-purple-900 rounded-2xl mr-6 mt-10 sm:p-8 lg:p-12 min-h-screen">
    <div className="min-h-screen py-10 mr-6  rounded-xl">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.h1
          className="text-3xl md:text-5xl font-extrabold text-white text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Latest News and Events
        </motion.h1>

        {/* News Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {newsData.map((news) => (
            <motion.div
              key={news.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border border-purple-200"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: news.id * 0.2 }}
            >
              {/* Image */}
              <img
                src={news.imageUrl}
                alt={news.title}
                className="h-60 w-full object-cover"
              />
              <div className="p-8">
                <h2 className="text-xl md:text-2xl font-semibold text-purple-800 mb-2">{news.title}</h2>
                <p className="text-purple-600 text-sm mb-4">{news.date}</p>
                <p className="text-gray-700 mb-6">{news.description}</p>
                <a href="#" className="text-purple-500 hover:underline font-semibold">
                  Read More
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action */}
        <div className="mt-16 text-center">
          <a
            href="/events"
            className="inline-block bg-purple-600 text-white py-3 px-10 rounded-full font-semibold hover:bg-purple-500 transition duration-300"
          >
            View All Events
          </a>
        </div>
      </div>
      </div>
      </div>
      {/* Footer */}
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
}

export default NewsandEvents;
