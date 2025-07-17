import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import NewsandEvents from "./pages/NewsandEvents";
import AffilliatedCollege from "./pages/AffilliatedCollege";
import MOUs from "./pages/MOUs";
import SAR from "./submenu/Reports/SAR";
import SIPE from "./submenu/Reports/SIPE";
import UPR from "./submenu/Reports/UPR";
import IPE from "./submenu/Reports/IPE";
import Service from "./submenu/CapacityBuilding/Service";
import Workshop from "./submenu/CapacityBuilding/Workshop";
import Presentation from "./submenu/CapacityBuilding/Presentation";
import Training from "./submenu/CapacityBuilding/Training";
import AssesmentTeam from "./submenu/Assesment/AssesmentTeam";
import Departments from "./submenu/Assesment/Departments";
import Faculty4 from "./submenu/Assesment/Faculty4";
import Program from "./submenu/Assesment/Program";
import Mannual from "./submenu/Downloads/Mannual";
import HecRule from "./submenu/Downloads/HecRule";
import Faculty from "./submenu/Functions/Faculty";
import Proformas from "./submenu/Mphill-phd-performas/Proformas";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import HecPortal from "./submenu/Services/HecPortal";
import DegreeAttestation from "./submenu/Services/DegreeAttestation";
import AccreditationCouncil from "./submenu/Services/Accredition";
import Scholarships from "./submenu/Services/Scholarships";
import Gep from "./submenu/Downloads/Gep";
import EmployerSurvey from "./submenu/Services/EmployerSurvey";
import AlumniSurvey from "./submenu/Services/AlumniSurvey";
import SCE from "./submenu/Services/SCE";
import FacultyEvaluation from "./submenu/Services/Faculty-Surveys";
import FacultyResume from "./submenu/Reports/FacultyResume";
import Logout from "./pages/Logout";
import SplashScreen from "./pages/SplashScreen";
import PHDPassout from "./submenu/Reports/PHDPassout";
import MphillPassout from "./submenu/Reports/MphillPassout";
import AdminDashboard from "./AdminPages/AdminDashboard";
import AdminRoute from "./PrivateRoute/AdminRoute";
import { AuthProvider } from "./Context/AuthContext";
import AdminLayout from "./Admin/AdminLayout";
import PHDPassouts from "./AdminPages/PHDPassouts";
import MphillPassouts from "./AdminPages/MphillPassouts";
import FacultyResumes from "./AdminPages/FacultyResumes";
import AddFacultyResume from "./AdminPages/AddNew/AddFacultyResume";
import AddMphillPassout from "./AdminPages/AddNew/AddMphillPassout";
import AddPHDPassout from "./AdminPages/AddNew/AddPHDPassout";
import UpdateFR from "./AdminPages/Update/UpdateFR";
import UpdatePHD from "./AdminPages/Update/UpdatePHD";
import UpdateMS from "./AdminPages/Update/UpdateMS";
import DeleteMS from "./AdminPages/Delete/DeleteMS";
import DeletePHD from "./AdminPages/Delete/DeletePHD";
import DeleteFR from "./AdminPages/Delete/DeleteFR";
import Evaluation from "./AdminPages/EvaluationData/Evaluation";
import Researchupload from "./submenu/Reports/Researchupload";
import PendingApproval from "./pages/PendingApproval";
import ResearchData from "./AdminPages/ResearchData";
import DeleteResearch from "./AdminPages/Delete/DeleteResearch";
import ConfirmDeleteModal from "./AdminPages/Delete/ConfirmDelete";
import ForgotPassword from "./pages/ForgotPassword";
import RecoverPassword from "./pages/RecoverPassword";
import AboutUs from "./submenu/Assesment/AboutUs";
import Guide from "./submenu/CapacityBuilding/Guide";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/recover-password" element={<RecoverPassword />} />

          <Route element={<RootLayout />}>
            <Route path="/home" element={<Home />} />

            <Route
              path="/affiliated-colleges"
              element={<AffilliatedCollege />}
            />
            <Route path="/mous" element={<MOUs />} />
            

            {/*QEC Services */}
            <Route path="/qec-services/HEC-E-Portal" element={<HecPortal />} />
            <Route
              path="/qec-services/Degree-Attestaion"
              element={<DegreeAttestation />}
            />
            <Route
              path="/qec-services/Accredition-Councils"
              element={<AccreditationCouncil />}
            />
            <Route
              path="/qec-services/Scholarships"
              element={<Scholarships />}
            />
            <Route
              path="/qec-services/Employer-Surveys"
              element={<EmployerSurvey />}
            />
            <Route
              path="/qec-services/Alumni-Surveys"
              element={<AlumniSurvey />}
            />
            <Route path="/qec-services/Student-Evaluation" element={<SCE />} />
            <Route
              path="/qec-services/Faculty-Surveys"
              element={<FacultyEvaluation />}
            />

            {/* Reports (Protected) */}

            <Route path="/reports/forms/sar" element={<SAR />} />
            <Route path="/reports/forms/qecs" element={<SIPE />} />
            {/* Research Paper (Protected) */}
            {/* <Route path="/reports/forms/ResearchPaper" element={<ResearchPaper />} /> */}
            <Route path="/reports/forms/ypr" element={<UPR />} />
            <Route path="/reports/forms/ripe" element={<IPE />} />

            <Route element={<PrivateRoute />}>
              <Route
                path="/reports/forms/Faculty-Resume"
                element={<FacultyResume />}
              />
              <Route
                path="/reports/forms/PHDPassout"
                element={<PHDPassout />}
              />
              <Route
                path="/reports/forms/MphillPassout"
                element={<MphillPassout />}
              />
              <Route path="/reports/forms/ResearchUpload" element={<Researchupload />} />
              <Route path="/pending-approval" element={<PendingApproval />} />
            </Route>

            {/* Capacity Building */}
            <Route path="/capacitybuilding/service" element={<Service />} />
            <Route path="/capacitybuilding/workshop" element={<Workshop />} />
            <Route path="/capacitybuilding/training" element={<Training />} />
            <Route
              path="/capacitybuilding/presentations"
              element={<Presentation />}
            />
            <Route path="/capacitybuilding/guide" element={<Guide />} />

            {/* Assessments */}
            <Route path="/assessments/departments" element={<Departments />} />
            <Route path="/assessments/programs" element={<Program />} />
            <Route path="/assessments/faculty" element={<Faculty4 />} />
            <Route
              path="/assessments/assessmentteam"
              element={<AssesmentTeam />} />
            <Route path="/assessments/aboutus" element={<AboutUs />} />
           

            {/* Functions */}
            <Route path="/functions/faculty-training" element={<Faculty />} />
            <Route path="/functions/News&Events" element={<NewsandEvents />} />

            {/* Downloads */}
            <Route path="/downloads/manual" element={<Mannual />} />
            <Route path="/downloads/hec-rules" element={<HecRule />} />
            <Route path="/downloads/gep-policy" element={<Gep />} />

            {/* pro-formas  */}
            <Route path="/pro-formas" element={<Proformas />} />
          </Route>

          <Route element={<AdminLayout />}>
            <Route element={<AdminRoute />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/phdpassouts" element={<PHDPassouts />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/admin/mphilpassouts" element={<MphillPassouts />} />
              <Route
                path="/admin/facultyresumes"
                element={<FacultyResumes />}
              />

              {/* Add new Component */}
              <Route
                path="/admin/new/facultyresume"
                element={<AddFacultyResume />}
              />
              <Route
                path="/admin/new/msmphillpassout"
                element={<AddMphillPassout />}
              />
              <Route path="/admin/new/phdpassout" element={<AddPHDPassout />} />

              {/* update Route  */}

              <Route
                path="/admin/update/facultyresume/:id"
                element={<UpdateFR />}
              />
              <Route
                path="/admin/update/phdpassout/:id"
                element={<UpdatePHD />}
              />
              <Route
                path="/admin/update/msmphillpassout/:id"
                element={<UpdateMS />}
              />

              {/* Delete Route  */}
              <Route
                path="/admin/delete/msmphillpassout/:id"
                element={<DeleteMS />}
              />
              <Route
                path="/admin/delete/phdpassout/:id"
                element={<DeletePHD />}
              />
              <Route
                path="/admin/delete/facultyresume/:id"
                element={<DeleteFR />}
              />

              <Route path="/admin/survey/data" element={<Evaluation />} />
              <Route path="/admin/research/data" element={<ResearchData />} />
              <Route path="/admin/research/data/delete" element={<DeleteResearch />} />
              <Route path="/admin/confirm/delete" element={<ConfirmDeleteModal />} />
              
            </Route>
          </Route>
        </Routes>

        <ToastContainer />
      </AuthProvider>
    </>
  );
};

export default App;
