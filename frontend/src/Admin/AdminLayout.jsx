import Sidebar from "../Admin/index"
import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="flex flex-col h-screen">
      {/* Main Content Area */}
      <div className="flex gap-5">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="max-w-5xl flex-1 mx-auto py-4">
          <Outlet /> {/* This renders nested routes */}
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
