import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "../../utilis/baseUrl";
import { useNavigate, useParams } from "react-router-dom";


const initialFormData = {
  name: "",
  degree_title: "",
  doa: "",
  doc: "",
  thesis_title: "",
  supervisor: "",
};

const initialFormErr = {
  name: "",
  degree_title: "",
  doa: "",
  doc: "",
  thesis_title: "",
  supervisor: "",
};

const PhdPassoutUpdate = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formErr, setFormErr] = useState(initialFormErr);
  const [loading, setLoading] = useState(false);
  const { id } = useParams(); // Get the PhD passout ID from the URL
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch existing data for update
    const fetchData = async () => {
      try {
        const token = JSON.parse(window.localStorage.getItem("loginData"))?.token;
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const response = await axios.get(`/phd/get_phdpassout/${id}`, {
          headers,
        });

        setFormData(response.data);
      } catch (error) {
        toast.error("Failed to load PhD passout data.");
      }
    };

    if (id) fetchData();
  }, [id]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form (you can use a validator like ResumeValidator)
    const error = {}; // Assuming no validation for now. Add validation logic here.

    if (Object.values(error).some((err) => err)) {
      setFormErr(error);
      return;
    }

    try {
      setLoading(true);

      const token = JSON.parse(window.localStorage.getItem("loginData"))?.token;
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      // Update request
      const response = await axios.put(`/phd/update_phdpassout/${id}`, formData, {
        headers,
      });
      toast.success(response.data.message);

      setFormData(initialFormData);
      setFormErr(initialFormErr);
      navigate("/admin/phdpassouts");
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      

      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-purple-900 px-4 py-8 mr-6 mt-6 rounded-xl">
        <div className="flex flex-col bg-purple-100 items-center justify-center mt-8 py-6 px-4 md:px-8 w-full sm:w-[50%] md:w-[680px] rounded-lg shadow-md">
          <h1 className="text-2xl md:text-4xl font-bold text-purple-900 py-2">
            {id ? "Update PhD Passout" : "PhD Passout Form"}
          </h1>
          <form onSubmit={handleSubmit} className="w-full">
            {/* Name */}
            <div className="flex flex-col py-1">
              <label className="text-purple-950 font-medium mb-1">Name</label>
              <input
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
              {formErr.name && <p className="text-xs text-red-600">{formErr.name}</p>}
            </div>

            {/* Degree Title */}
            <div className="flex flex-col py-1">
              <label className="text-purple-950 font-medium mb-1">Degree Title</label>
              <input
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                type="text"
                name="degree_title"
                placeholder="Enter degree title"
                value={formData.degree_title}
                onChange={handleChange}
              />
              {formErr.degree_title && <p className="text-xs text-red-600">{formErr.degree_title}</p>}
            </div>

            {/* Updated By
            <div className="flex flex-col py-1">
              <label className="text-purple-950 font-medium mb-1">Updated By</label>
              <input
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                type="text"
                name="updatedBy"
                placeholder="Enter updated by"
                value={formData.updatedBy}
                onChange={handleChange}
              />
              {formErr.updatedBy && <p className="text-xs text-red-600">{formErr.updatedBy}</p>}
            </div> */}

            {/* Date of Admission */}
            <div className="flex flex-col py-1">
              <label className="text-purple-950 font-medium mb-1">Date of Admission</label>
              <input
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                type="date"
                name="doa"
                value={formData.doa}
                onChange={handleChange}
              />
            </div>

            {/* Date of Completion */}
            <div className="flex flex-col py-1">
              <label className="text-purple-950 font-medium mb-1">Date of Completion</label>
              <input
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                type="date"
                name="doc"
                value={formData.doc}
                onChange={handleChange}
              />
            </div>

            {/* Thesis Title */}
            <div className="flex flex-col py-1">
              <label className="text-purple-950 font-medium mb-1">Thesis Title</label>
              <input
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                type="text"
                name="thesis_title"
                placeholder="Enter thesis title"
                value={formData.thesis_title}
                onChange={handleChange}
              />
            </div>

            {/* Supervisor */}
            <div className="flex flex-col py-1">
              <label className="text-purple-950 font-medium mb-1">Supervisor</label>
              <input
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                type="text"
                name="supervisor"
                placeholder="Enter supervisor name"
                value={formData.supervisor}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-800 text-white p-2 rounded-md mt-4 hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {loading ? "Updating..." : "Update"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PhdPassoutUpdate;
