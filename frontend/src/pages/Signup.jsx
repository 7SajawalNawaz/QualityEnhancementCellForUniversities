import React, { useState } from "react";
import { toast } from "react-toastify";
import SignupValidator from "../Validators/SignupValidator";
import axios from "../utilis/baseUrl";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const initialFormData = {
  name: "",
  email: "",
  password: "",
  confirmpassword: "",
};
const intialFormErr = {
  name: "",
  email: "",
  password: "",
  confirmpassword: "",
};

const Signup = () => {
  const [formData, setFormdata] = useState(initialFormData);
  const [formErr, setFormErr] = useState(intialFormErr);
  const [loading, setLoading] = useState(false);
  const Navigate = useNavigate();

  const handleChange = (e) => {
    setFormdata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = SignupValidator({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      confirmpassword: formData.confirmpassword,
    });

    if (error.name || error.email || error.password || error.confirmpassword) {
      setFormErr(error);
    } else {
      try {
        setLoading(true);

        // api request

        const requestBody = {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        };

        const response = await axios.post("/auth/signup", requestBody);
        const data = response.data;

        toast.success(data.message, {
          position: "top-right",
          autoClose: true,
        });

        setFormdata(initialFormData);

        setFormErr(intialFormErr);

        setLoading(false);

        Navigate("/signup");
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
    <div className="mt-10">
    <motion.div 
             className="min-h-screen flex flex-col items-center justify-center p-6  overflow-hidden mr-6 rounded-2xl "
             initial={{ backgroundPosition: "0% 50%" }}
             animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
             transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
             style={{ background: "linear-gradient(90deg, #6a11cb, #CBC3E3, #6a11cb)", backgroundSize: "200% 200%" }}
           >
      <div className="flex flex-col bg-purple-100 items-center justify-center py-6 px-4 md:px-8 w-full sm:w-[50%] md:w-[400px] rounded-lg shadow-md">
        <h1 className="text-2xl md:text-4xl font-bold text-purple-900 py-2">
          Sign Up
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

          <div className="flex flex-col py-1">
            <label className="text-purple-950 font-medium mb-1">Password</label>
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

          <div className="flex flex-col py-1">
            <label className="text-purple-950 font-medium mb-1">
              Confirm Password
            </label>
            <input
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              type="password"
              name="confirmpassword"
              placeholder="********"
              value={formData.confirmpassword}
              onChange={handleChange}
            />
            {formErr.confirmpassword && (
              <p className="text-xs text-red-600">{formErr.confirmpassword}</p>
            )}
          </div>

          <div>
            <p className="text-sm text-slate-600">
              If you already have an account ?{" "}
              <NavLink className="text-sm text-purple-500" to="/login">
                Login
              </NavLink>
            </p>
          </div>

          <div className="py-4">
            <input
              className="w-full p-2 border border-l-fuchsia-800 rounded-md cursor-pointer text-white font-bold bg-purple-900 hover:bg-slate-800 transition-colors"
              type="submit"
              value={`${loading ? "Saving..." : "SignUp"}`}
            />
          </div>
        </form>
      </div>
      </motion.div>
    </div>
    
  );
};

export default Signup;