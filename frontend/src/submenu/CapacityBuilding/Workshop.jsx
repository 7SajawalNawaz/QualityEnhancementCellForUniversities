import React from "react";

const workshopsData = [
  {
    title: "Data Science Workshop",
    date: "November 10, 2024",
    description: "An introductory workshop on data science concepts and tools, including Python, Pandas, and Machine Learning.",
  },
  
  {
    title: "Web Development Bootcamp",
    date: "December 5, 2024",
    description: "A comprehensive workshop on building modern web applications using HTML, CSS, JavaScript, and React.",
  },
  {
    title: "Cybersecurity Basics",
    date: "January 15, 2025",
    description: "A beginner-level workshop on cybersecurity principles, covering topics like network security, encryption, and ethical hacking.",
  },
  {
    title: "Entrepreneurship 101",
    date: "February 20, 2025",
    description: "A workshop for aspiring entrepreneurs, focusing on business planning, funding, and marketing strategies.",
  },
];

const Workshop = () => {
  return (
    <>
    <div className="min-h-screen mt-10 mr-4 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-500 text-white py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">University Workshops</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {workshopsData.map((workshop, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-purple-400 hover:text-white"
            >
              <h2 className="text-2xl font-semibold mb-2 text-gray-800 hover:text-white">{workshop.title}</h2>
              <p className="text-sm mb-4 text-gray-600 hover:text-gray-200">{workshop.date}</p>
              <p className="text-gray-600 hover:text-gray-200">{workshop.description}</p>
              <button className="mt-4 inline-block bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-all hover:bg-purple-800">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>

      
    </div>

    {/* Footer */}
    <footer className="bg-gray-800 text-white py-4 mt-16 rounded-xl bg-gradient-to-r from-purple-700 to-purple-900">
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

export default Workshop;
