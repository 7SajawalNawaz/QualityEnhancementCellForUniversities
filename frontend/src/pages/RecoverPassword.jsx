import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "../utilis/baseUrl";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const initialFormData = {
  email: "",
  code: "",
  password: "",
};

const initialFormErr = {
  email: "",
  code: "",
  password: "",
};

const RecoverPassword = () => {
  const [formData, setFormdata] = useState(initialFormData);
  const [formErr, setFormErr] = useState(initialFormErr);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormdata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.code || !formData.password) {
      setFormErr({
        email: !formData.email ? "Email is required" : "",
        code: !formData.code ? "Code is required" : "",
        password: !formData.password ? "Password is required" : "",
      });
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post("/auth/recover-password", formData);
      const data = response.data;

      toast.success(data.message, {
        position: "top-right",
        autoClose: true,
      });

      setFormdata(initialFormData);
      setFormErr(initialFormErr);
      setLoading(false);

      navigate("/login");
    } catch (error) {
      setLoading(false);
      const message = error.response?.data?.message || "An error occurred";
      toast.error(message, {
        position: "top-right",
        autoClose: true,
      });
    }
  };

  return (
    <motion.div 
        className="min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden "
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
        style={{ background: "linear-gradient(90deg, #6a11cb, #CBC3E3, #6a11cb)", backgroundSize: "200% 200%" }}
      >
      <div className="flex flex-col bg-purple-100 items-center justify-center py-6 px-4 md:px-8 w-full sm:w-[50%] md:w-[400px] rounded-lg shadow-md">
        <h1 className="text-2xl md:text-4xl font-bold text-purple-900 py-2">
          Recover Password
        </h1>
        <form onSubmit={handleSubmit} className="w-full">
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
            <label className="text-purple-950 font-medium mb-1">Code</label>
            <input
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              type="text"
              name="code"
              placeholder="Enter the code"
              value={formData.code}
              onChange={handleChange}
            />
            {formErr.code && (
              <p className="text-xs text-red-600">{formErr.code}</p>
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

          <div className="py-4">
            <input
              className="w-full p-2 border border-l-purple-900 rounded-md cursor-pointer text-white font-bold bg-purple-900 hover:bg-slate-800 transition-colors"
              type="submit"
              value={`${loading ? "Recovering..." : "Recover Password"}`}
            />
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default RecoverPassword;