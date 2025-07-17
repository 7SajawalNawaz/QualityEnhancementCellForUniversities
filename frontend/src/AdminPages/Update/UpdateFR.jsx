import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "../../utilis/baseUrl";
import ResumeValidator from "../../Validators/ResumeValidator";
import { useNavigate, useParams } from "react-router-dom";


const initialFormData = {
  name: "",
  personal: "",
  experience: "",
  honor_awards: "",
  memberships: "",
  honor_students: "",
  service: "",
  brief_statement_of_research: "",
  publications: "",
  research_grants: "",
  other_research: "",
  selected_professional_presentation: "",
};

const initialFormErr = {
  name: "",
  personal: "",
  experience: "",
  honor_awards: "",
  memberships: "",
  honor_students: "",
  service: "",
  brief_statement_of_research: "",
  publications: "",
  research_grants: "",
  other_research: "",
  selected_professional_presentation: "",
};

const FacultyResume = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formErr, setFormErr] = useState(initialFormErr);
  const [loading, setLoading] = useState(false);
  const { id } = useParams(); // Get the resume ID from the URL
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch existing data for update
    const fetchData = async () => {
      try {
        const token = JSON.parse(window.localStorage.getItem("loginData"))?.token;
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const response = await axios.get(`/form/list/of/faculty/resume/${id}`, {
          headers,
        });

        setFormData(response.data);
      } catch (error) {
        toast.error("Failed to load faculty resume data.");
      }
    };

    if (id) fetchData();
  }, [id]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = ResumeValidator(formData);

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

      if (id) {
        // Update request
        const response = await axios.put(`/form/update/faculty/resume/${id}`, formData, {
          headers,
        });
        toast.success(response.data.message);
      } else {
        // Create request
        const response = await axios.post("/form/faculty_resume", formData, {
          headers,
        });
        toast.success(response.data.message);
      }

      setFormData(initialFormData);
      setFormErr(initialFormErr);
      navigate("/admin/facultyresumes");
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
            {id ? "Update Faculty Resume" : "Faculty Resume Form"}
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

            {/* Personal Information */}
            <div className="flex flex-col py-1">
              <label className="text-purple-950 font-medium mb-1">Personal</label>
              <textarea
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                name="personal"
                placeholder="Enter your personal information"
                value={formData.personal}
                onChange={handleChange}
              />
              {formErr.personal && <p className="text-xs text-red-600">{formErr.personal}</p>}
            </div>

            {/* Experience */}
            <div className="flex flex-col py-1">
              <label className="text-purple-950 font-medium mb-1">Experience</label>
              <textarea
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                name="experience"
                placeholder="Enter your experience"
                value={formData.experience}
                onChange={handleChange}
              />
              {formErr.experience && <p className="text-xs text-red-600">{formErr.experience}</p>}
            </div>

            {/* Honor & Awards */}
            <div className="flex flex-col py-1">
              <label className="text-purple-950 font-medium mb-1">Honor & Awards</label>
              <textarea
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                name="honor_awards"
                placeholder="Honor & awards"
                value={formData.honor_awards}
                onChange={handleChange}
              />
              {formErr.honor_awards && <p className="text-xs text-red-600">{formErr.honor_awards}</p>}
            </div>

            {/* Memberships */}
            <div className="flex flex-col py-1">
              <label className="text-purple-950 font-medium mb-1">Memberships</label>
              <textarea
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                name="memberships"
                placeholder="Enter memberships details"
                value={formData.memberships}
                onChange={handleChange}
              />
              {formErr.memberships && <p className="text-xs text-red-600">{formErr.memberships}</p>}
            </div>

            {/* Honor Students */}
            <div className="flex flex-col py-1">
              <label className="text-purple-950 font-medium mb-1">Honor Students</label>
              <textarea
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                name="honor_students"
                placeholder="Enter honor students details"
                value={formData.honor_students}
                onChange={handleChange}
              />
              {formErr.honor_students && <p className="text-xs text-red-600">{formErr.honor_students}</p>}
            </div>

            {/* Service */}
            <div className="flex flex-col py-1">
              <label className="text-purple-950 font-medium mb-1">Service</label>
              <textarea
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                name="service"
                placeholder="Enter service details"
                value={formData.service}
                onChange={handleChange}
              />
              {formErr.service && <p className="text-xs text-red-600">{formErr.service}</p>}
            </div>

            {/* Brief Statement of Research */}
            <div className="flex flex-col py-1">
              <label className="text-purple-950 font-medium mb-1">Brief Statement of Research</label>
              <textarea
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                name="brief_statement_of_research"
                placeholder="Enter research details"
                value={formData.brief_statement_of_research}
                onChange={handleChange}
              />
              {formErr.brief_statement_of_research && <p className="text-xs text-red-600">{formErr.brief_statement_of_research}</p>}
            </div>

            {/* Publications */}
            <div className="flex flex-col py-1">
              <label className="text-purple-950 font-medium mb-1">Publications</label>
              <textarea
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                name="publications"
                placeholder="Enter publications details"
                value={formData.publications}
                onChange={handleChange}
              />
              {formErr.publications && <p className="text-xs text-red-600">{formErr.publications}</p>}
            </div>

            {/* Research Grants */}
            <div className="flex flex-col py-1">
              <label className="text-purple-950 font-medium mb-1">Research Grants</label>
              <textarea
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                name="research_grants"
                placeholder="Enter research grants details"
                value={formData.research_grants}
                onChange={handleChange}
              />
              {formErr.research_grants && <p className="text-xs text-red-600">{formErr.research_grants}</p>}
            </div>

            {/* Other Research */}
            <div className="flex flex-col py-1">
              <label className="text-purple-950 font-medium mb-1">Other Research</label>
              <textarea
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                name="other_research"
                placeholder="Other research details"
                value={formData.other_research}
                onChange={handleChange}
              />
              {formErr.other_research && <p className="text-xs text-red-600">{formErr.other_research}</p>}
            </div>

            {/* Professional Presentation */}
            <div className="flex flex-col py-1">
              <label className="text-purple-950 font-medium mb-1">Professional Presentation</label>
              <textarea
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                name="selected_professional_presentation"
                placeholder="Enter professional presentation details"
                value={formData.selected_professional_presentation}
                onChange={handleChange}
              />
              {formErr.selected_professional_presentation && <p className="text-xs text-red-600">{formErr.selected_professional_presentation}</p>}
            </div>

            <button
              type="Update"
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

export default FacultyResume;
