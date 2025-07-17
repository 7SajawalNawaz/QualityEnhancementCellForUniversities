import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "../../utilis/baseUrl";
import ResumeValidator from "../../Validators/ResumeValidator";
import { NavLink, useNavigate } from "react-router-dom";


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

const intialFormErr = {
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
  const [formData, setFormdata] = useState(initialFormData);
  const [formErr, setFormErr] = useState(intialFormErr);
  const [loading, setLoading] = useState(false);
  const Navigate = useNavigate();

  const handleChange = (e) => {
    setFormdata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = ResumeValidator({
      name: formData.name,
      personal: formData.personal,
      experience: formData.experience,
      honor_awards: formData.honor_awards,
      memberships: formData.memberships,
      honor_students: formData.honor_students,
      service: formData.service,
      brief_statement_of_research: formData.brief_statement_of_research,
      publications: formData.publications,
      research_grants: formData.research_grants,
      other_research: formData.other_research,
      selected_professional_presentation:
        formData.selected_professional_presentation,
    });

    if (error.name || error.personal || error.experience  || error.honor_awards || error.memberships || error.honor_students || error.service || error.brief_statement_of_research || error.publications || error.research_grants || error.other_research  || error.selected_professional_presentation ) {
      setFormErr(error);
    } else {
      try {
        setLoading(true);

        // Retrieve token from localStorage
      const token = JSON.parse(window.localStorage.getItem("loginData"))?.token;

      // Add token to the request headers
      const headers = {
        Authorization: `Bearer ${token}`,
      };

        // api request

        const requestBody = {
          name: formData.name,
      personal: formData.personal,
      experience: formData.experience,
      honor_awards: formData.honor_awards,
      memberships: formData.memberships,
      honor_students: formData.honor_students,
      service: formData.service,
      brief_statement_of_research: formData.brief_statement_of_research,
      publications: formData.publications,
      research_grants: formData.research_grants,
      other_research: formData.other_research,
      selected_professional_presentation:
        formData.selected_professional_presentation,
        };



        const response = await axios.post("/form/faculty_resume", requestBody , {
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

        Navigate("/admin/facultyresumes");
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






    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-purple-900 px-4 py-8 mr-6 mt-6 rounded-xl">
      <div className="flex flex-col bg-purple-100 items-center justify-center mt-8 py-6 px-4 md:px-8 w-full sm:w-[50%] md:w-[680px] rounded-lg shadow-md">
        <h1 className="text-2xl md:text-4xl font-bold text-purple-900 py-2">
          Faculty Resume Form
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

          {/* personal information */}

          <div className="flex flex-col py-1">
            <label className="text-purple-950 font-medium mb-1">
              Personal
            </label>
            <textarea
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              type="text"
              name="personal"
              placeholder="enter your personal information"
              value={formData.personal}
              onChange={handleChange}
            />
            {formErr.personal && (
              <p className="text-xs text-red-600">{formErr.personal}</p>
            )}
          </div>

          {/* for experience */}

          <div className="flex flex-col py-1">
            <label className="text-purple-950 font-medium mb-1">
              Experience
            </label>
            <textarea
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              type="text"
              name="experience"
              placeholder="enter your experience"
              value={formData.experience}
              onChange={handleChange}
            />
            {formErr.experience && (
              <p className="text-xs text-red-600">{formErr.experience}</p>
            )}
          </div>

          {/* honor_awards */}

          <div className="flex flex-col py-1">
            <label className="text-purple-950 font-medium mb-1">
              Honor & Awards
            </label>
            <textarea
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              type="text"
              name="honor_awards"
              placeholder="honor & awards"
              value={formData.honor_awards}
              onChange={handleChange}
            />
            {formErr.honor_awards && (
              <p className="text-xs text-red-600">{formErr.honor_awards}</p>
            )}
          </div>

          {/* memberships */}

          <div className="flex flex-col py-1">
            <label className="text-purple-950 font-medium mb-1">
              Memberships
            </label>
            <textarea
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              type="text"
              name="memberships"
              placeholder="memberships detail"
              value={formData.memberships}
              onChange={handleChange}
            />
            {formErr.memberships && (
              <p className="text-xs text-red-600">{formErr.memberships}</p>
            )}
          </div>

          {/* honor_students */}

          <div className="flex flex-col py-1">
            <label className="text-purple-950 font-medium mb-1">
              Honor Students
            </label>
            <textarea
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              type="text"
              name="honor_students"
              placeholder="honor_students detail"
              value={formData.honor_students}
              onChange={handleChange}
            />
            {formErr.honor_students && (
              <p className="text-xs text-red-600">{formErr.honor_students}</p>
            )}
          </div>

          {/* service */}

          <div className="flex flex-col py-1">
            <label className="text-purple-950 font-medium mb-1">Service</label>
            <textarea
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              type="text"
              name="service"
              placeholder="service detail"
              value={formData.service}
              onChange={handleChange}
            />
            {formErr.service && (
              <p className="text-xs text-red-600">{formErr.service}</p>
            )}
          </div>

          {/* brief_statement_of_research */}

          <div className="flex flex-col py-1">
            <label className="text-purple-950 font-medium mb-1">Service</label>
            <textarea
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              type="text"
              name="brief_statement_of_research"
              placeholder="research details"
              value={formData.brief_statement_of_research}
              onChange={handleChange}
            />
            {formErr.brief_statement_of_research && (
              <p className="text-xs text-red-600">{formErr.brief_statement_of_research}</p>
            )}
          </div>

          {/* publications */}

          <div className="flex flex-col py-1">
            <label className="text-purple-950 font-medium mb-1">
              Publications
            </label>
            <textarea
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              type="text"
              name="publications"
              placeholder="no of publications"
              value={formData.publications}
              onChange={handleChange}
            />
            {formErr.publications && (
              <p className="text-xs text-red-600">{formErr.publications}</p>
            )}
          </div>

          {/* research_grants */}

          <div className="flex flex-col py-1">
            <label className="text-purple-950 font-medium mb-1">
              Research & Grants
            </label>
            <textarea
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              type="text"
              name="research_grants"
              placeholder="research grants details"
              value={formData.research_grants}
              onChange={handleChange}
            />
            {formErr.research_grants && (
              <p className="text-xs text-red-600">{formErr.research_grants}</p>
            )}
          </div>

          {/* other_research */}

          <div className="flex flex-col py-1">
            <label className="text-purple-950 font-medium mb-1">
              Other Research
            </label>
            <textarea
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              type="text"
              name="other_research"
              placeholder="other research details"
              value={formData.other_research}
              onChange={handleChange}
            />
            {formErr.other_research && (
              <p className="text-xs text-red-600">{formErr.other_research}</p>
            )}
          </div>

          {/* selected_professional_presentation */}

          <div className="flex flex-col py-1">
            <label className="text-purple-950 font-medium mb-1">
              Selected Professional Presentation
            </label>
            <textarea
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              type="text"
              name="selected_professional_presentation"
              placeholder="presentation details"
              value={formData.selected_professional_presentation}
              onChange={handleChange}
            />
            {formErr.selected_professional_presentation && (
              <p className="text-xs text-red-600">{formErr.selected_professional_presentation}</p>
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

export default FacultyResume;
