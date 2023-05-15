import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Dashboard from './components/common/header';
import PublishAd from './components/DonationAdmin/PublishAd';
import Ads from './components/DonationAdmin/ShowAllAds';
import AddEvent from './components/Event/Admin/AddEvent';
import AllEvent from './components/Event/Admin/AllEvent';
import UpdateEvent from './components/Event/Admin/UpdateEvent';
import DetailsPrint from './components/Event/Admin/DetailsPrint'
import Showvacancies from './components/JobFind/Show_Vacancies';
import JobApply from './components/JobFind/JobApply';
import AppliedJobs from './components/JobFind/AppliedJobs';
import Home from './pages/Home/Home';
import MakeDonations from './components/DoDonations/MakeDonations';
import Register from './components/Register/Register';
import ShowDonations from './components/DoDonations/ShowDonations';
import DisplayEvent from './components/Event/User/DisplayEvent'
import EditDonations from './components/DoDonations/EditDonations';
import JobPost from './components/JobPortal/JobPost';
import JobList from './components/JobPortal/JobList';
import UserDashboard from './pages/UserDashboard/UserDashboard';
import AllParticipants from './components/Event/Admin/AllParticipants '
import CardDetails from './components/DoDonations/CardDetails';
import Login from './components/User/Login';
import ProtectedRoute from './components/common/ProtectedRoute';
import PaymentPortal from './components/DoDonations/PaymentPortal';
import Financial from './components/Financial/Financial';
import { useAuth0 } from "@auth0/auth0-react";
import { Skeleton } from "antd";


function App() {
  const { getAccessTokenSilently, isAuthenticated, isLoading } = useAuth0();

  return (

    

    <Routes>
      <Route path="/dashboard" element={<ProtectedRoute child={<Financial />} />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <Navigate to={"/dashboard"} />
          ) : (
            <Navigate to={"/login"} />
          )
        }
      />
      
    </Routes>


  );
}

export default App;
