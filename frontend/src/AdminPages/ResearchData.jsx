import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../utilis/baseUrl";
import ConfirmDeleteModal from "./Delete/ConfirmDelete";
import moment from "moment";
import Logout from "../pages/Logout";
import { FaUserCircle } from "react-icons/fa"; // Profile icon

const AdminFileManagement = () => {
  // State Variables
  const [files, setFiles] = useState([]);
  
 const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFileKey, setSelectedFileKey] = useState(null);

  const navigate = useNavigate();
  const searchInputRef = useRef(null);

  
const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  // Fetch Files
  useEffect(() => {
    const fetchFiles = async () => {
      setLoading(true);
      try {
        const token = JSON.parse(localStorage.getItem("loginData"))?.token;
        if (!token) {
          toast.error("You are not authenticated. Please log in.");
          navigate("/login");
          return;
        }

        const response = await axios.get("/file/files", {
          headers: { Authorization: `Bearer ${token}` },
          params: { q: searchQuery },
        });

        setFiles(response.data.data || []);
      } catch (error) {
        toast.error("Failed to fetch files.");
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, [searchQuery, navigate]);

  // Handle Search
  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  // Modal Functions
  const openModal = (fileKey) => {
    setSelectedFileKey(fileKey);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFileKey(null);
  };

  // File Actions
  const handleDeleteAction = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("loginData"))?.token;
      if (!token) {
        toast.error("You are not authenticated. Please log in.");
        navigate("/login");
        return;
      }

      await axios.delete("/file/delete", {
        headers: { Authorization: `Bearer ${token}` },
        params: { key: selectedFileKey },
      });

      toast.success("File deleted successfully.");
      setFiles((prev) => prev.filter((file) => file.key !== selectedFileKey));
      closeModal();
    } catch (error) {
      toast.error("Failed to delete the file.");
      closeModal();
    }
  };

  const handleViewAction = async (fileKey) => {
    try {
      const token = JSON.parse(localStorage.getItem("loginData"))?.token;
      if (!token) {
        toast.error("You are not authenticated. Please log in.");
        navigate("/login");
        return;
      }

      const response = await axios.get("/file/signed-url", {
        headers: { Authorization: `Bearer ${token}` },
        params: { key: fileKey },
      });

      const { url } = response.data.data;
      window.open(url, "_blank");
    } catch (error) {
      toast.error("Failed to fetch the signed URL.");
    }
  };

  const handleVerifyAction = async (fileKey) => {
    try {
      const token = JSON.parse(localStorage.getItem("loginData"))?.token;
      if (!token) {
        toast.error("You are not authenticated. Please log in.");
        navigate("/login");
        return;
      }

      await axios.put(
        "/file/verify",
        { key: fileKey },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success("File verified successfully.");
      setFiles((prev) =>
        prev.map((file) =>
          file.key === fileKey ? { ...file, status: "verified" } : file
        )
      );
    } catch (error) {
      toast.error("Failed to verify the file.");
    }
  };

  // Format Dates
  const formatDate = (dateString) => {
    return moment(dateString).isValid()
      ? moment(dateString).format("LLL")
      : "N/A";
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

    <div className="mr-6 mt-10">
      <div className="bg-gradient-to-r from-purple-600 to-purple-900 rounded-2xl mt-2 w-full max-w-screen-xl mx-auto py-10 px-5 sm:px-10">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">
          File Management
        </h1>

        {/* Search Bar */}
        <div className="mb-6 flex justify-center sm:justify-start">
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search for a file"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full sm:w-64 md:w-80 lg:w-96 px-4 py-2 border border-purple-500 rounded-lg bg-purple-100 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center text-white">Loading...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {files.length > 0 ? (
              files.map((file) => (
                <div
                  key={file._id}
                  className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="font-bold text-sm text-purple-700 py-2">{file.key}</h3>
                  <p className="text-sm py-1 text-black">Size: {file.size} KB</p>
                  <p className="text-sm py-1 text-black">
                    Link:{" "}
                    {file.link ? (
                      <a
                        href={file.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline text-xs"
                      >
                        {file.link}
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </p>
                  <p className="text-sm text-black">
                    MIME Type: {file.mimetype || "N/A"}
                  </p>
                  <p className="text-sm">
                    Status:{" "}
                    <span
                      className={`font-bold ${
                        file.status === "verified"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {file.status}
                    </span>
                  </p>
                  <p className="text-xs text-gray-400">
                    Created: {formatDate(file.createdAt)}
                  </p>
                  <p className="text-xs text-gray-400">
                    Updated: {formatDate(file.updatedAt)}
                  </p>
                  <div className="flex space-x-2 mt-4">
                    <button
                      onClick={() => handleViewAction(file.key)}
                      className="px-2 py-1 bg-purple-500 text-white rounded-lg hover:bg-purple-700"
                    >
                      View
                    </button>
                    <button
                      onClick={() => openModal(file.key)}
                      className="px-2 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleVerifyAction(file.key)}
                      disabled={file.status === "verified"}
                      className={`px-2 py-1 rounded-lg text-white ${
                        file.status === "verified"
                          ? "bg-gray-400"
                          : "bg-green-500 hover:bg-green-700"
                      }`}
                    >
                      {file.status === "verified" ? "Verified" : "Verify"}
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500">
                No files available.
              </div>
            )}
          </div>
        )}

        {/* Confirmation Modal */}
        <ConfirmDeleteModal
          isOpen={isModalOpen}
          onConfirm={handleDeleteAction}
          onCancel={closeModal}
        />
      </div>
    </div>
    </>
  );
};

export default AdminFileManagement;