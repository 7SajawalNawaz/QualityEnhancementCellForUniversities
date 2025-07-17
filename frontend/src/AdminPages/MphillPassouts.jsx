import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../utilis/baseUrl";
import moment from "moment";
import { debounce } from "lodash";
import Logout from "../pages/Logout";
import { FaUserCircle } from "react-icons/fa"; // Profile icon

const MPhilPassout = () => {
  const [loading, setLoading] = useState(false);
  
 const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mphilPassouts, setMPhilPassouts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 10;

  const navigate = useNavigate();
  const searchInputRef = useRef(null);

  // Debounced search function
  const debouncedSearch = debounce((query) => {
    setSearchQuery(query);
  }, 500);

  
const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };
  // Effect to fetch data
  useEffect(() => {
    const fetchMPhilPassouts = async () => {
      try {
        setLoading(true);

        const token = JSON.parse(localStorage.getItem("loginData"))?.token;
        if (!token) {
          toast.error("You are not authenticated. Please log in.", {
            position: "top-right",
            autoClose: true,
          });
          navigate("/login");
          return;
        }

        const response = await axios.get("/msmphil/get/ms/mphil/passout/:id", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            page: currentPage,
            size: itemsPerPage,
            q: searchQuery,
          },
        });

        const { MSMPHILLpassoutstudent, total, pages } = response.data.data;

        setMPhilPassouts(MSMPHILLpassoutstudent || []);
        setTotalPages(pages);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        const response = error.response;
        const data = response?.data;
        toast.error(data?.message || "Failed to fetch data.", {
          position: "top-right",
          autoClose: true,
        });
      }
    };

    fetchMPhilPassouts();
  }, [navigate, currentPage, searchQuery]);

  // Handle search query change
  const handleSearchChange = (event) => {
    debouncedSearch(event.target.value);
  };

  // Trigger search when button is clicked
  const handleSearchClick = (event) => {
    event.preventDefault();
    setCurrentPage(1);
    setSearchQuery(searchQuery);
  };

  const handlePagination = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

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

    <div className="mr-6 py-2">
      <div className="bg-gradient-to-r from-purple-600 to-purple-900 rounded-2xl mt-2 w-full max-w-screen-xl mx-auto py-10 px-5 sm:px-10">
        <div className="mb-6 flex justify-end">
          <button
            onClick={() => {
              navigate("/admin/new/msmphillpassout");
            }}
            className=" bg-gradient-to-r from-orange-400 to-purple-700 hover:from-purple-900 hover:to-orange-700 shadow-2xl text-white px-4 py-2 rounded-lg  text-sm sm:text-base"
          >
            Add New MPhil Passout
          </button>
        </div>

        <h1 className="text-2xl  text-white sm:text-3xl font-bold text-purple-950 mb-8 text-center">
          MPhil Passout List
        </h1>

        <div className="mb-6 flex justify-center sm:justify-start w-full">
          <div className="border border-purple-500 p-0 rounded-lg bg-purple-100">
            <input
              ref={searchInputRef}
              type="text"
              name="search"
              placeholder="Search here"
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full sm:w-64 md:w-80 lg:w-96 px-4 py-2 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          {/* <button
            onClick={handleSearchClick}
            className="bg-purple-900 text-white px-4 py-2 rounded-lg hover:bg-purple-700 ml-4"
          >
            Search
          </button> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mphilPassouts.length > 0 ? (
            mphilPassouts.map((passout) => (
              <div
                key={passout._id}
                className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">
                  <h3 className="font-bold text-lg text-purple-700">{passout.name}</h3>
                  <p className="text-sm text-gray-500"><div className="text-base font-medium text-black">Degree Title </div>{passout.degree_title}</p>
                  <p className="text-sm text-gray-500"><div className="text-base font-medium text-black">Thesis Title </div>{passout.thesis_title || "N/A"}</p>
                  <p className="text-sm text-gray-500"><div className="text-base font-medium text-black">Supervisor Name </div>{passout.supervisor || "N/A"}</p>
                </div>

                <div className="flex justify-between items-center">
                  <p className="text-xs text-gray-400">
                    {moment(passout.createdAt).format("YYYY-MM-DD HH:mm:ss")}
                  </p>
                  <p className="text-xs text-gray-400">
                    {moment(passout.updatedAt).format("YYYY-MM-DD HH:mm:ss")}
                  </p>
                </div>

                <div className="flex justify-end space-x-2 mt-4">
                  <button
                    onClick={() => navigate(`/admin/update/msmphillpassout/${passout._id}`)}
                    className="px-4 py-2 text-white bg-purple-500 rounded-lg hover:bg-purple-700"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => 
                      navigate(`/admin/delete/msmphillpassout/${passout._id}`)}
                    className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500">
              No data available.
            </div>
          )}
        </div>

        
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center mt-6">
          <button
            onClick={() => handlePagination(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gradient-to-r from-orange-600 to-purple-700 shadow-2xl  hover:from-purple-900 hover:to-orange-700 text-white rounded-lg hover:bg-purple-700 cursor-pointer mr-2"
          >
            Previous
          </button>
          <button
            onClick={() => handlePagination(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gradient-to-r from-orange-600 to-purple-700 shadow-2xl  hover:from-purple-900 hover:to-orange-700 text-white rounded-lg cursor-pointer hover:bg-purple-700"
          >
            Next
          </button>
        </div>
    </div>
    </>
  );
};

export default MPhilPassout;
