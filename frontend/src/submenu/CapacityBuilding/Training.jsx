import React from "react";
import Slider from "react-slick";

const trainingsData = [
  {
    title: "Capacity Building Training Program",
    date: "December 31, 2024 to January 3, 2025",
    description:
      "Abbottabad, December 31, 2024 – A week-long training program (December 30, 2024, to January 03, 2025), Capacity Building Training for University Management, is ongoing at Abbottabad University of Science and Technology (UST). Organized by the National Academy of Higher Education (NAHE) under the Higher Education Commission (HEC) and in collaboration with the Directorate of Quality Enhancement and Training, Abbottabad UST, the initiative aims to enhance university management skills. Dr. Saifullah Khan welcomed the Resource Person Dr. Yasir Hussain and informed the participants about the objectives of the training. The Resource Person, Dr. Yasir Hussain, Assistant Professor at Quaid-e-Azam University, led the second day of the training program/sessions. The second day focused on Business Communication offering practical strategies to improve professional interactions.",
    images: [
      "/Images/VC.jpg",
      "/Images/D.jpg",
      "/Images/O.jpg",
      "/Images/Q.jpg",
      "/Images/F.jpg",
      "/Images/H.jpg",
      "/Images/R.jpg",
      "/Images/S.jpg",
      "/Images/T.jpg",
      "/Images/B.jpg",
      "/Images/A.jpg",
      "/Images/C.jpg",
    ],
  },
  
];

const Training = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-purple-500 to-purple-900 text-white overflow-x-hidden mr-6 mt-8 rounded-2xl">
        <div className="container mx-auto px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-center mb-12">University Training Programs</h1>
          <div className="grid gap-8 grid-cols-1">
            {trainingsData.map((training, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg transition-all duration-300"
              >
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">{training.title}</h2>
                <p className="text-xs mb-3 text-gray-600">{training.date}</p>
                <p className="text-sm text-gray-600 mb-6">{training.description}</p>
                <Slider {...sliderSettings}>
                  {training.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt={`${training.title} ${imgIndex + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </Slider>
                <div className="py-4">
                  <button className="mt-4 w-full bg-purple-700 text-white font-medium py-2 px-3 rounded-lg">
                    Learn More
                  </button>
                </div>
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

export default Training;
