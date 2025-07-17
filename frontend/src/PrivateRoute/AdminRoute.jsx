import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const AdminRoute = () => {
  const { user, isAuthChecked } = useAuth();

  if (!isAuthChecked) {
    // Optionally, show a loader while authentication is being checked
    return <div>Loading...</div>;
  }

  if (!user) {
    // Redirect to home if no user is logged in
    return <Navigate to="/" replace />;
  }

  if (user.role !== 1 && user.role !== 2) {
    // Redirect to home if user is not admin
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default AdminRoute;
