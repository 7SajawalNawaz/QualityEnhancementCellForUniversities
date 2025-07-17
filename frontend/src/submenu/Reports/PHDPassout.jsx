import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "../../utilis/baseUrl";
import PHDValidator from "../../Validators/PHDValidator";
import { NavLink, useNavigate } from "react-router-dom";
import Logout from "../../pages/Logout";
import { FaUserCircle } from "react-icons/fa"; // Profile icon

const initialFormData = {
  name: "",
  degree_title: "",
  doa: "",
  doc: "",
  thesis_title: "",
  supervisor: "",
};

const intialFormErr = {
  name: "",
  degree_title: "",
  doa: "",
  doc: "",
  thesis_title: "",
  supervisor: "",
};

const PHDPassout = () => {
  const [formData, setFormdata] = useState(initialFormData);
 
 const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [formErr, setFormErr] = useState(intialFormErr);
  const [loading, setLoading] = useState(false);
  const Navigate = useNavigate();

  const handleChange = (e) => {
    setFormdata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = PHDValidator({
      name: formData.name,
      degree_title: formData.degree_title,
      doa: formData.doa,
      doc: formData.doc,
      thesis_title: formData.thesis_title,
      supervisor: formData.supervisor,
    });

    if (
      error.name ||
      error.degree_title ||
      error.doa ||
      error.doc ||
      error.thesis_title ||
      error.supervisor
    ) {
      setFormErr(error);
    } else {
      try {
        setLoading(true);

        // Retrieve token from localStorage
        const token = JSON.parse(
          window.localStorage.getItem("loginData")
        )?.token;

        // Add token to the request headers
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        // api request

        const requestBody = {
          name: formData.name,
          degree_title: formData.degree_title,
          doa: formData.doa,
          doc: formData.doc,
          thesis_title: formData.thesis_title,
          supervisor: formData.supervisor,
        };

        const response = await axios.post("/phd/phdpassout", requestBody, {
          headers,
        });
        const data = response.data;

        toast.success(data.message, {
          position: "top-right",
          autoClose: true,
        });

        setFormdata(initialFormData);

        setFormErr(intialFormErr);

        setLoading(false);

        Navigate("/home");
      } catch (error) {
        setLoading(false);

        const response = error.response;
        const data = response?.data;
        toast.error(data.message, {
          position: "top-right",
          autoClose: true,
        });
        // console.log(err.message);
      }
    }
    console.log(formData);
  };

  return (
    <>
      
<nav className="bg-gradient-to-r from-purple-500 to-purple-900 px-6 py-4 mt-10 shadow-lg flex justify-end mr-6 rounded-xl">
        {/* Profile Button */}
        <div className="relative">
          <button
            onClick={toggleMenu}
            className="flex items-center text-white"
          >
            <FaUserCircle size={40} />
          </button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
              <ul>
                
                <li
                  className="px-4 py-2 cursor-pointer rounded-lg hover:bg-purple-300"
                >
                  <Logout />
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-purple-900 px-4 py-8 mr-6 mt-6 rounded-xl">
        <div className="flex flex-col bg-purple-100 items-center justify-center mt-8 py-6 px-4 md:px-8 w-full sm:w-[50%] md:w-[680px] rounded-lg shadow-md">
          <h1 className="text-2xl md:text-4xl font-bold text-purple-900 py-2">
            PHD Passout Students
          </h1>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col py-1">
              <label className="text-purple-950 font-medium mb-1">Name</label>
              <input
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                type="text"
                name="name"
                placeholder="enter your name"
                value={formData.name}
                onChange={handleChange}
              />
              {formErr.name && (
                <p className="text-xs text-red-600">{formErr.name}</p>
              )}
            </div>

            {/* degree title */}

            <div className="flex flex-col py-1">
              <label className="text-purple-950 font-medium mb-1">
                Degree Title
              </label>
              <input
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                type="text"
                name="degree_title"
                placeholder="enter your degree title"
                value={formData.degree_title}
                onChange={handleChange}
              />
              {formErr.degree_title && (
                <p className="text-xs text-red-600">{formErr.degree_title}</p>
              )}
            </div>

            {/* doa */}

            <div className="flex flex-col py-1">
              <label className="text-purple-950 font-medium mb-1">
                Date Of Admission
              </label>
              <input
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                type="date"
                name="doa"
                placeholder="enter your date of admission"
                value={formData.doa}
                onChange={handleChange}
              />
              {formErr.doa && (
                <p className="text-xs text-red-600">{formErr.doa}</p>
              )}
            </div>

            {/* doc */}

            <div className="flex flex-col py-1">
              <label className="text-purple-950 font-medium mb-1">
                Date Of Completion
              </label>
              <input
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                type="date"
                name="doc"
                placeholder="date of completion"
                value={formData.doc}
                onChange={handleChange}
              />
              {formErr.doc && (
                <p className="text-xs text-red-600">{formErr.doc}</p>
              )}
            </div>

            {/* Thieses title */}

            <div className="flex flex-col py-1">
              <label className="text-purple-950 font-medium mb-1">
                Theises Title
              </label>
              <input
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                type="text"
                name="thesis_title"
                placeholder="enter your theises title"
                value={formData.thesis_title}
                onChange={handleChange}
              />
              {formErr.thesis_title && (
                <p className="text-xs text-red-600">{formErr.thesis_title}</p>
              )}
            </div>

            {/* supervisor */}

            <div className="flex flex-col py-1">
              <label className="text-purple-950 font-medium mb-1">
              Supervisor Name
              </label>
              <input
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                type="text"
                name="supervisor"
                placeholder="supervisor name"
                value={formData.supervisor}
                onChange={handleChange}
              />
              {formErr.supervisor && (
                <p className="text-xs text-red-600">{formErr.supervisor}</p>
              )}
            </div>


            {/* Submition */}

            <div className="py-4">
              <input
                className="w-full p-2 border border-l-fuchsia-800 rounded-md cursor-pointer text-white font-bold bg-purple-900 hover:bg-slate-800 transition-colors"
                type="submit"
                value={`${loading ? "Submitting..." : "Submit"}`}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PHDPassout;
