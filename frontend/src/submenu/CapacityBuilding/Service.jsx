import React from "react";

const servicesData = [
  {
    title: "Consulting",
    description: "Expert advice and guidance on academic programs and professional development.",
    icon: "💼",
  },
  {
    title: "Training Workshops",
    description: "Hands-on workshops to enhance skills and knowledge in various domains.",
    icon: "📚",
  },
  {
    title: "Research Support",
    description: "Providing resources and guidance for research projects and studies.",
    icon: "🔍",
  },
  {
    title: "Community Outreach",
    description: "Engaging with the community through meaningful events and partnerships.",
    icon: "🌍",
  },
];

const Service = () => {
  return (
    <>
    <div className="min-h-screen mt-8 mr-4 bg-gradient-to-r from-purple-400 to-purple-500 text-white py-16 rounded-2xl">
      <div className="container mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-purple-700 hover:text-white"
            >
              <div className="text-5xl mb-4 text-purple-700 hover:text-white">{service.icon}</div>
              <h2 className="text-xl font-semibold mb-2 text-gray-800 hover:text-white">{service.title}</h2>
              <p className="text-gray-600 hover:text-gray-200">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

     
      
    </div>


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

export default Service;
