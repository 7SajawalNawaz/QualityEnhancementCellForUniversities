// // import qec from "../Assets/qec.jpg";
// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import axios from "../utilis/baseUrl";
// import LoginValidator from "../Validators/LoginValidator";
// import { NavLink, useNavigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";

// const initialFormData = {
//   email: "",
//   password: "",
// };

// const intialFormErr = {
//   email: "",
//   password: "",
// };

// const Login = () => {
//   const [formData, setFormdata] = useState(initialFormData);
//   const [formErr, setFormErr] = useState(intialFormErr);
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormdata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const error = LoginValidator({
//       email: formData.email,
//       password: formData.password,
//     });

//     if (error.email || error.password) {
//       setFormErr(error);
//     } else {
//       try {
//         setLoading(true);

//         // api request

//         const requestBody = {
//           email: formData.email,
//           password: formData.password,
//         };

//         const response = await axios.post("/auth/signin", requestBody);
//         const data = response.data;

//         window.localStorage.setItem("loginData",JSON.stringify(data.data));

//         // window.localStorage.setItem("loginData", data.token); 
//         // const decodedUser = jwtDecode(data.token);
//         // setUser(decodedUser);  // Set user state


//         toast.success(data.message, {
//           position: "top-right",
//           autoClose: true,
//         });

//         setFormdata(initialFormData);

//         setFormErr(intialFormErr);

//         setLoading(false);
        
//         // Role-based navigation
//       if (decodedUser.role === 1 || decodedUser.role === 2) {
//         navigate("/admin/dashboard");
//       } else {
//         navigate("/");
//       }

//       } catch (error) {
//         setLoading(false);

//         const response = error.response;
//         const data = response?.data;
        
//         toast.error(data.message, {
//           position: "top",
//           autoClose: true,
//         });
//         // console.log(err.message);
//       }
//     }
//     console.log(formData);
//   };

//   return (
//     <div>
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-purple-900 px-4 py-14 pb-32">
//         <div className="flex flex-col bg-purple-100 items-center justify-center py-6 px-4 md:px-8 w-full sm:w-[50%] md:w-[400px] rounded-lg shadow-md">
//           <img src="/Images/qec.jpg" alt="qec" className="w-24 mix-blend-multiply" />
//           <h1 className="text-2xl md:text-4xl font-bold text-purple-900 py-2">
//             Login
//           </h1>
//           <form onSubmit={handleSubmit} className="w-full">
//             {/* email */}
//             <div className="flex flex-col py-1">
//               <label className="text-purple-950 font-medium mb-1">Email</label>
//               <input
//                 className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
//                 type="text"
//                 name="email"
//                 placeholder="example@xyz.com"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//               {formErr.email && (
//                 <p className="text-xs text-red-600">{formErr.email}</p>
//               )}
//             </div>

//             {/* password */}
//             <div className="flex flex-col py-1">
//               <label className="text-purple-950 font-medium mb-1">
//                 Password
//               </label>
//               <input
//                 className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
//                 type="password"
//                 name="password"
//                 placeholder="********"
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//               {formErr.password && (
//                 <p className="text-xs text-red-600">{formErr.password}</p>
//               )}
//             </div>

//             <div>
//               <p className="text-sm text-slate-600">
//                 If you doesn't have an account ?{" "}
//                 <NavLink className="text-x text-purple-500" to="/signup">
//                   Sign Up
//                 </NavLink>
//               </p>
//             </div>

//             {/* login Button */}

//             <div className="py-4">
//               <input
//                 className="w-full p-2 border border-l-purple-900 rounded-md cursor-pointer text-white font-bold bg-purple-900 hover:bg-slate-800 transition-colors"
//                 type="submit"
//                 value={`${loading ? "Signing.." : "Login"}`}
//               />
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState  } from "react";
import { toast } from "react-toastify";
import axios from "../utilis/baseUrl";
import LoginValidator from "../Validators/LoginValidator";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import {jwtDecode} from "jwt-decode"; // Correct import
import { motion } from "framer-motion";

const initialFormData = {
  email: "",
  password: "",
};

const intialFormErr = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormdata] = useState(initialFormData);
  const [formErr, setFormErr] = useState(intialFormErr);
  const [loading, setLoading] = useState(false);
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormdata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = LoginValidator({
      email: formData.email,
      password: formData.password,
    });

    if (error.email || error.password) {
      setFormErr(error);
    } else {
      try {
        setLoading(true);

        // api request
        const requestBody = {
          email: formData.email,
          password: formData.password,
        };

        const response = await axios.post("/auth/signin", requestBody);
        const data = response.data;

        console.log("Response data:", data); // Add logging

        if (data.data) { // Ensure token exists in the response
          console.log("Storing token in localStorage:", data.data); 
          window.localStorage.setItem("loginData", JSON.stringify(data.data));

          const decodedUser = jwtDecode(data.data.token);
          console.log("Decoded user:", decodedUser);
          setUser(decodedUser);  // Set user state

          toast.success(data.message, {
            position: "top-right",
            autoClose: true,
          });

        setFormdata(initialFormData);
        setFormErr(intialFormErr);
        setLoading(false);

          // Role-based navigation
          if (decodedUser.role === 1 || decodedUser.role === 2) {
            navigate("/admin/dashboard");
          } else  {
            navigate("/");
          }
        } else {
          throw new Error("Invalid response structure");
        }
      } catch (error) {
        setLoading(false);

        
        const message = error.response?.data?.message;
        toast.error(message, {
          position: "top-right",
          autoClose: true,
        });
      }
    }
  };

  

  return (
    <div>
     <motion.div 
             className="min-h-screen flex flex-col items-center justify-center p-6  overflow-hidden "
             initial={{ backgroundPosition: "0% 50%" }}
             animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
             transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
             style={{ background: "linear-gradient(90deg, #6a11cb, #CBC3E3, #6a11cb)", backgroundSize: "200% 200%" }}
           >
        <div className="flex flex-col bg-purple-100 items-center justify-center py-6 px-4 md:px-8 w-full sm:w-[50%] md:w-[400px] rounded-lg shadow-md">
          <img src="/Images/qec.jpg" alt="qec" className="w-24 mix-blend-multiply" />
          <h1 className="text-2xl md:text-4xl font-bold text-purple-900 py-2">
            Login
          </h1>
          <form onSubmit={handleSubmit} className="w-full">
            {/* email */}
            <div className="flex flex-col py-1">
              <label className="text-purple-950 font-medium mb-1">Email</label>
              <input
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                type="text"
                name="email"
                placeholder="example@xyz.com"
                value={formData.email}
                onChange={handleChange}
              />
              {formErr.email && (
                <p className="text-xs text-red-600">{formErr.email}</p>
              )}
            </div>

            {/* password */}
            <div className="flex flex-col py-1">
              <label className="text-purple-950 font-medium mb-1">
                Password
              </label>
              <input
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                type="password"
                name="password"
                placeholder="********"
                value={formData.password}
                onChange={handleChange}
              />
              {formErr.password && (
                <p className="text-xs text-red-600">{formErr.password}</p>
              )}
            </div>

            <div className="text-sm py-2">
            <NavLink className="text-x text-purple-600" to="/forgot-password">
                  Forgot your password
                </NavLink>
            </div>

            <div>
              <p className="text-sm text-slate-600">
                Only admin can create new login !{" "}
                {/* <NavLink className="text-x text-purple-500" to="/signup">
                  Sign Up
                </NavLink> */}
              </p>
            </div>
            

            {/* login Button */}
            <div className="py-4">
              <input
                className="w-full p-2 border border-l-purple-900 rounded-md cursor-pointer text-white font-bold bg-purple-900 hover:bg-slate-800 transition-colors"
                type="submit"
                value={`${loading ? "Signing.." : "Login"}`}
              />
            </div>
          </form>
        </div>
        </motion.div>
      </div>
      
       

    
  );
};

export default Login;