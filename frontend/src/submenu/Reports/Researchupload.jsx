import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "../../utilis/baseUrl"; // Ensure this axios instance is correctly configured
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import { Link } from "react-router-dom"; // Import Link to navigate to the PendingApproval page

const initialFormData = {
  file: null,
  link: "",
};

const initialFormErr = {
  file: "",
  link: "",
};

const ResearchUpload = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formErr, setFormErr] = useState(initialFormErr);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook for redirection

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, file }));
      setFormErr((prev) => ({ ...prev, file: "" })); // Clear error when file is selected
    }
  };

  // Handle link input change
  const handleLinkChange = (e) => {
    const link = e.target.value;
    setFormData((prev) => ({ ...prev, link }));
    setFormErr((prev) => ({ ...prev, link: "" })); // Clear error when link is entered
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if either file or link is provided
    if (!formData.file && !formData.link) {
      setFormErr({ file: "Please select a file or enter a link", link: "Please select a file or enter a link" });
      return;
    }

    try {
      setLoading(true);

      // Retrieve token from localStorage
      const token = JSON.parse(window.localStorage.getItem("loginData"))?.token;

      if (!token) {
        toast.error("No valid token found.", { position: "top-right", autoClose: 5000 });
        setLoading(false);
        return;
      }

      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data", // Ensure correct content type
      };

      // Create FormData instance and append the file and link
      const formDataToSend = new FormData();
      if (formData.file) {
        formDataToSend.append("file", formData.file); // Update field name to "file" (matching backend)
      }
      if (formData.link) {
        formDataToSend.append("link", formData.link);
      }

      // Send the POST request with FormData
      const response = await axios.post("/file/upload", formDataToSend, { headers });

      toast.success(response.data.message, {
        position: "top-right",
        autoClose: 3000,
      });

      setFormData(initialFormData); // Reset form data
      setFormErr(initialFormErr); // Clear errors
      setLoading(false);

      // Redirect to the PendingApproval page after successful upload
      navigate("/pending-approval"); // Navigate to PendingApproval page
    } catch (error) {
      setLoading(false);
      console.error("Upload error:", error);

      if (error.response) {
        // Axios error
        toast.error(error.response.data?.message || "Something went wrong", {
          position: "top-right",
          autoClose: 5000,
        });
      } else {
        // Network error or no response
        toast.error("Network error, please try again later.", {
          position: "top-right",
          autoClose: 5000,
        });
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-purple-900 px-4 py-8 mr-6 mt-10 rounded-xl">
      <div className="flex flex-col bg-purple-100 items-center justify-center py-6 px-4 md:px-8 w-full sm:w-[50%] md:w-[680px] rounded-lg shadow-md">
        <h1 className="text-2xl md:text-4xl font-bold text-purple-900 py-2">
          Research File Upload
        </h1>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col py-1">
            <label className="text-purple-950 font-medium mb-1">Select File</label>
            <input
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              type="file"
              name="file"
              onChange={handleFileChange}
            />
            {formErr.file && (
              <p className="text-xs text-red-600">{formErr.file}</p>
            )}
          </div>

          <div className="flex flex-col py-1">
            <label className="text-purple-950 font-medium mb-1">Enter Research Link</label>
            <input
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              type="text"
              name="link"
              placeholder="Enter your research link"
              value={formData.link}
              onChange={handleLinkChange}
            />
            {formErr.link && (
              <p className="text-xs text-red-600">{formErr.link}</p>
            )}
          </div>

          <div className="py-4">
            <input
              className="w-full p-2 border border-l-fuchsia-800 rounded-md cursor-pointer text-white font-bold bg-purple-900 hover:bg-slate-800 transition-colors"
              type="submit"
              value={`${loading ? "Uploading..." : "Upload"}`}
            />
          </div>
        </form>

        {/* Link to check status */}
        <div className="mt-4 text-center">
          <p className="text-lg text-gray-700">
            If you have already submitted the file,{" "}
            <Link to="/pending-approval" className="text-blue-500 hover:underline">
              please check the status.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResearchUpload;