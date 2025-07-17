import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import SubMenu from "./SubMenu";
import { motion } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineAppstore } from "react-icons/ai";
import {
  HiDownload,
  HiOutlineAnnotation,
  HiOutlineBookOpen,
  HiOutlineDatabase,
} from "react-icons/hi";
import { TbFunction, TbNews, TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import { MdMenu } from "react-icons/md";

const Sidebar = () => {
  const [open, setOpen] = useState(window.innerWidth > 768);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const { pathname } = useLocation();

  // .................For handling logout ....................

  const navigate = useNavigate();

  const handleLogout = () => {
    window.localStorage.removeItem("loginData");

    toast.success("Logout Successfully", {
      position: "top-right",
      autoClose: true,
    });

    navigate("/login");
  };

  // ...............................................................Logout

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
      setOpen(width > 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) setOpen(false);
  }, [pathname, isMobile]);

  const Nav_animation = isMobile
    ? {
        open: { x: 0, width: "14rem", transition: { damping: 40 } },
        closed: { x: -250, width: 0, transition: { damping: 40, delay: 0.15 } },
      }
    : {
        open: { width: "16rem", transition: { damping: 40 } },
        closed: { width: "4rem", transition: { damping: 40 } },
      };

  const subMenusList = [
    {
      name: "QEC-Services",
      icon: HiOutlineBookOpen,
      menus: [ "Degree-Attestaion", "HEC-E-Portal" , "Accredition-Councils","Scholarships" , "Employer-Surveys" , "Alumni-Surveys" , "Student-Evaluation" , "Faculty-Surveys"],
    },
    {
      name: "Reports/Forms",
      icon: TbReportAnalytics,
      menus: ["SAR", "QECs","YPR", "RIPE" , "Faculty-Resume" , "PHDPassout" , "MphillPassout" , "ResearchUpload" ],
    },
    {
      name: "CapacityBuilding",
      icon: RiBuilding3Line,
      menus: ["Service", "Workshop", "Training", "Presentations" , "Guide"],
    },
    {
      name: "Assessments",
      icon: HiOutlineBookOpen,
      menus: ["Departments", "Programs", "Faculty", "AssessmentTeam" , "AboutUs"],
    },
    { name: "Functions", icon: TbFunction, menus: ["Faculty-Training" , "News&Events"] },
    { name: "Downloads", icon: HiDownload, menus: ["Manual", "HEC-Rules" , "GEP-Policy"] },

    
  ];

  return (
    <div className="relative">
      {/* Navbar for Mobile */}
      {isMobile && (
        <div className="fixed top-0 left-0 w-full bg-white shadow-md z-[1000] flex justify-between items-center px-4 py-2">
          <div className="text-lg font-bold text-purple-800">QEC-AUST</div>
          <MdMenu
            size={30}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
      )}

      {/* Overlay to close sidebar when clicked outside */}
      {isMobile && open && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-[999]"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.div
        variants={Nav_animation}
        initial={isMobile ? "closed" : "open"}
        animate={open ? "open" : "closed"}
        className="bg-white text-gray shadow-xl z-[9999] fixed left-0 top-0 h-screen overflow-hidden"
      >
        {/* Sidebar Header */}
        <div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300 mx-3 mt-12 md:mt-0">
          <img
            src="/Images/qec.jpg"
            width={45}
            alt="qec"
          />
          <span className="text-xl px-4 whitespace-pre text-purple-800">
            QEC-AUST
          </span>
        </div>

        {/* Sidebar Menu */}
        <div className="flex flex-col h-full">
          <ul className="whitespace-pre px-2.5 text-[0.85rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100 h-full">
            <li>
              <NavLink
                to="/"
                className="link text-sm"
                onClick={() => setOpen(false)}
              >
                <AiOutlineAppstore size={20} className="min-w-max" />
                Home
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/news-event"
                className="link text-sm"
                onClick={() => setOpen(false)}
              >
                <TbNews size={20} className="min-w-max" />
                News & Events
              </NavLink>
            </li> */}

            {/* Submenus */}
            {open && (
              <div>
                {subMenusList.map((menu) => (
                  <div key={menu.name} className="flex flex-col gap-1">
                    <SubMenu data={menu} />
                  </div>
                ))}
              </div>
            )}

            <li>
              <NavLink
                to="/pro-formas"
                className="link text-xs sm:text-sm"
                onClick={() => setOpen(false)}
              >
                <AiOutlineAppstore size={20} className="min-w-max" />
                Mphill/PHD Pro-formas
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/affiliated-colleges"
                className="link text-sm"
                onClick={() => setOpen(false)}
              >
                <HiOutlineDatabase size={20} className="min-w-max" />
                Affiliated Colleges
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/mous"
                className="link text-sm"
                onClick={() => setOpen(false)}
              >
                <HiOutlineAnnotation size={20} className="min-w-max" />
                MOUs
              </NavLink>
            </li>

            
          </ul>
        </div>

        {/* Sidebar Toggle Button */}
        <motion.div
          onClick={() => setOpen(!open)}
          animate={
            open ? { x: 0, y: 0, rotate: 0 } : { x: -10, y: -20, rotate: 180 }
          }
          transition={{ duration: 0 }}
          className="absolute right-2 bottom-3 cursor-pointer"
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>

      {/* Main content area */}
      <div
        className={`transition-all duration-300 flex-grow ${
          open ? (isMobile ? "ml-0" : "ml-[16rem]") : "ml-0"
        } ${
          isMobile ? "flex items-center justify-center w-full mt-12" : "px-4"
        }`}
        style={{ height: "calc(100vh - 64px)" }} // Adjust height to fill available space
      >
        {/* Main content goes here */}
      </div>
    </div>
  );
};

export default Sidebar;
