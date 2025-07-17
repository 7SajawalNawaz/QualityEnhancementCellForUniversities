import React from "react";

const policies = [
  {
    title: "HEC ODL Guide",
    description:
      "The HEC Open and Distance Learning (ODL) Guide provides faculty and students with structured methodologies for remote education.",
    link: "https://chatgpt.com/g/g-6786cd87e6e881918c13495a484dc175-hec-odl-guide",
  },
  {
    title: "GEP 2023",
    description:
      "The General Education Policy 2023 outlines the fundamental principles and frameworks for higher education in Pakistan.",
    link: "https://chatgpt.com/g/g-6786ca06f3648191ab2b07665dde43f5-gep-2023",
  },
  {
    title: "HEC Anti-Plagiarism Policy",
    description:
      "This policy sets guidelines and standards for academic integrity and plagiarism prevention in higher education.",
    link: "https://chatgpt.com/g/g-6789181d8a848191a63f1ae25ae2055f-hec-anti-plagiarism-policy",
  },
];

const Card = ({ title, description, link }) => (
  <div className="p-4 shadow-lg bg-white rounded-2xl border border-purple-300">
    <h2 className="text-xl font-semibold text-purple-800 mb-2">{title}</h2>
    <p className="text-gray-600 mb-4">{description}</p>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 inline-block"
    >
      Read More
    </a>
  </div>
);

export default function HECPoliciesPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-purple-600 to-purple-900 p-6 flex flex-col items-center mt-10 mr-6 rounded-2xl">
        <h1 className="text-3xl font-bold text-white mb-4">HEC Guidelines</h1>
        <p className="text-white mb-6 text-center max-w-2xl">
          These policies have been developed to facilitate faculty, students,
          and other stakeholders. You may ask any query related to these
          policies.
        </p>
        <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl">
          {policies.map((policy, index) => (
            <Card key={index} {...policy} />
          ))}
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-4 mt-4 mr-6 rounded-xl bg-gradient-to-r from-purple-700 to-purple-900">
        <div className="container mx-auto text-center">
          <p className="text-sm">
             Abbottabad University of Science and
            Technology
          </p>
          <ul className="flex justify-center space-x-4 mt-2">
            <li>
              <a href="/privacy-policy" className="text-white hover:underline">
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
    </>
  );
}
