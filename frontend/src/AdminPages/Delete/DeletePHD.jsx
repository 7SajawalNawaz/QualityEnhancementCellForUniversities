import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "../../utilis/baseUrl";
import { useNavigate, useParams } from "react-router-dom";


const PhdPassoutDelete = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const { id } = useParams(); // Get the PhD passout ID from the URL
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the PhD passout data to confirm before deletion
    const fetchData = async () => {
      try {
        const token = JSON.parse(window.localStorage.getItem("loginData"))?.token;
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const response = await axios.get(`/phd/get_phdpassout/${id}`, { headers });

        // Log the full response to inspect the structure
        console.log("Fetched Full Response:", response.data);  // Check entire response
        console.log("Data path:", response.data?.data?.phdpassoutstudent);  // Check phdpassoutstudent array

        // Check if the id from the URL exists in the phdpassoutstudent array
        const passoutData = response.data?.data?.phdpassoutstudent.find(
          (student) => student._id.toString() === id
        );

        if (passoutData) {
          setData(passoutData);
        } else {
          toast.error("PhD passout data not found.");
        }
      } catch (error) {
        toast.error("Failed to load PhD passout data.");
        console.error("Error:", error);
      }
    };

    if (id) fetchData();
  }, [id]);

  const handleDelete = async () => {
    try {
      setLoading(true);

      const token = JSON.parse(window.localStorage.getItem("loginData"))?.token;
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      // Delete request
      const response = await axios.delete(`/phd/delete_phdpassout/${id}`, { headers });
      toast.success(response.data.message);

      navigate("/admin/phdpassouts"); // Navigate to the list of PhD passouts after deletion
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
            Delete PhD Passout
          </h1>

          {data ? (
            <div className="w-full">
              <div className="flex flex-col py-2">
                <h3 className="text-lg font-semibold text-purple-950 mb-2">
                  Are you sure you want to delete the following PhD Passout record?
                </h3>

                <div className="p-4 bg-white rounded-lg shadow-md">
                  <p><strong>Name:</strong> {data.name || "N/A"}</p>
                  <p><strong>Degree Title:</strong> {data.degree_title || "N/A"}</p>
                  <p><strong>Thesis Title:</strong> {data.thesis_title || "N/A"}</p>
                  <p><strong>Supervisor:</strong> {data.supervisor || "N/A"}</p>
                  <p><strong>Date of Admission:</strong> {data.doa || "N/A"}</p>
                  <p><strong>Date of Completion:</strong> {data.doc || "N/A"}</p>
                </div>

                <div className="mt-4 flex justify-between">
                  <button
                    onClick={() => navigate("/admin/phdpassouts")}
                    className="w-1/2 bg-gray-600 text-white p-2 rounded-md mr-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDelete}
                    className="w-1/2 bg-red-600 text-white p-2 rounded-md ml-2 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                    disabled={loading}
                  >
                    {loading ? "Deleting..." : "Delete"}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-lg text-gray-700">Loading...</div>
          )}
        </div>
      </div>
    </>
  );
};

export default PhdPassoutDelete;
