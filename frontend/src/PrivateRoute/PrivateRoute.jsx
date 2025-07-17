import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const PrivateRoute = () => {
  const { user } = useAuth();

  // Check if token exists in localStorage
  const token = localStorage.getItem("loginData");

  // If not authenticated, redirect to login
  if (!user && !token) {
    return <Navigate to="/login" replace />;
  }

  // Otherwise, allow access to nested routes
  return <Outlet />;
};

export default PrivateRoute;
