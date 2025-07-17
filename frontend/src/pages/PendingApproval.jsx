import React, { useEffect, useState } from "react";
import axios from "../utilis/baseUrl"; // Adjust the import according to your project structure
import { toast } from "react-toastify";

const PendingApproval = () => {
  const [status, setStatus] = useState("Pending"); // Initial status is "Pending"
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const token = JSON.parse(localStorage.getItem("loginData"))?.token;
        if (!token) {
          toast.error("You are not authenticated. Please log in.");
          return;
        }

        // Fetch status from /file/status
        const response = await axios.get("/file/status", {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log("File status response:", response.data); // Log response

        if (response.data.status) {
          setStatus(response.data.status); // Update the status
        } else {
          toast.error("File status not available.");
        }
      } catch (error) {
        console.error("Error fetching file status:", error); // Improved error logging
        toast.error("Failed to fetch file status.");
      } finally {
        setLoading(false); // Stop loading after the attempt
      }
    };

    fetchStatus();
  }, []); // Empty dependency array, so this runs only once on mount

  // Render loading spinner or status UI
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-purple-900 px-4 py-8">
        <p className="text-lg text-white">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-purple-900 rounded-2xl mt-4 mr-6 px-4 py-8">
      <div className="bg-purple-100 w-full sm:w-[50%] md:w-[680px] rounded-lg shadow-md py-6 px-8">
      {status === "verified" ? (
  <>
    <h1 className="text-3xl font-bold text-green-900">
      Your File is Verified
    </h1>
    <p className="text-lg text-green-600 mt-4">
      Congratulations! Your file has been approved by the admin.
    </p>
    <p className="text-lg text-gray-700 mt-8">
      You can now proceed with the next steps.
    </p>
  </>
) : (
  <>
    <h1 className="text-3xl font-bold text-purple-900">
      Your File is Pending
    </h1>
    <p className="text-lg text-yellow-600 mt-4">
      Your file is currently pending approval by the admin. Please wait
      for confirmation.
    </p>
    <p className="text-lg text-gray-700 mt-8">
      Thank you for submitting your file. You will be notified once it
      has been reviewed and approved.
    </p>
  </>
)}
      </div>
    </div>
  );
};

export default PendingApproval;
