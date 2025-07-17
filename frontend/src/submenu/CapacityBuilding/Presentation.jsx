import React from "react";

const Presentation = () => {
  return (
    <>
      <div className="mr-4 mt-10 rounded-2xl min-h-screen bg-gradient-to-r from-purple-700 to-purple-800 text-gray-900 py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <h1 className="text-5xl text-white font-bold text-center mb-8">Presentation on University Training Programs</h1>
          <p className="text-xl text-center text-white mb-12">
            Explore our diverse training programs designed to enhance your skills and prepare you for the future.
          </p>

          {/* Slide Section */}
          <div className="flex flex-col md:flex-row justify-center items-center mb-12 gap-6">
            <div className="relative w-full md:w-1/2 lg:w-2/5 mb-4">
              <img
                src="/Images/training3.jpg"
                alt="Training Image"
                className="rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-125 hover:opacity-100 opacity-70" // Changed opacity styles
              />
            </div>
            <div className="relative w-full md:w-1/2 lg:w-2/5 mb-4">
              <img
                src="/Images/training2.jpg"
                alt="Training Image"
                className="rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-125 hover:opacity-100 opacity-70" // Changed opacity styles
              />
            </div>
          </div>

          {/* Additional Description */}
          <div className="bg-white shadow-lg rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Our Training Programs?</h2>
            <ul className="list-disc list-inside mb-4">
              <li>Expert instructors with industry experience.</li>
              <li>Hands-on training and real-world projects.</li>
              <li>Networking opportunities with professionals.</li>
              <li>Flexible schedules to accommodate your needs.</li>
            </ul>
            <p className="text-lg">
              Join us to elevate your skills and make meaningful connections in your field of interest.
            </p>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <button className="bg-purple-600 text-white font-medium py-3 px-6 rounded-lg transition-all hover:bg-purple-700">
              Enroll Now
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-4 mt-8 rounded-xl">
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

export default Presentation;
