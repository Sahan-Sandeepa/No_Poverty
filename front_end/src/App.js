import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/common/header";
import PublishAd from "./components/DonationAdmin/PublishAd";
import Ads from "./components/DonationAdmin/ShowAllAds";
import AddEvent from "./components/Event/Admin/AddEvent";
import AllEvent from "./components/Event/Admin/AllEvent";
import UpdateEvent from "./components/Event/Admin/UpdateEvent";
import DetailsPrint from "./components/Event/Admin/DetailsPrint";
import Showvacancies from "./components/JobFind/Show_Vacancies";
import JobApply from "./components/JobFind/JobApply";
import AppliedJobs from "./components/JobFind/AppliedJobs";
import Home from "./pages/Home/Home";
import MakeDonations from "./components/DoDonations/MakeDonations";
import Register from "./components/Register/Register";
import ShowDonations from "./components/DoDonations/ShowDonations";
import DisplayEvent from "./components/Event/User/DisplayEvent";
import EditDonations from "./components/DoDonations/EditDonations";
import JobPost from "./components/JobPortal/JobPost";
import JobList from "./components/JobPortal/JobList";
import AppliedUsers from "./components/JobPortal/AppliedUsers";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import AllParticipants from "./components/Event/Admin/AllParticipants ";
import CardDetails from "./components/DoDonations/CardDetails";
import Login from "./components/User/Login";
import ProtectedRoute from "./components/common/ProtectedRoute";
import PaymentPortal from "./components/DoDonations/PaymentPortal";
import UserLayout from "./layouts/UserLayout";
import AdsUserView from "./components/DonationAdmin/AdsUserView";

function App() {
  // const { getAccessTokenSilently, isAuthenticated, isLoading } = useAuth0();

  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/userDash" element={<UserDashboard />} />

      {/* Sakuni's Routes Begn here */}
      <Route path="/add" element={<JobPost />} />
      <Route path="/joblist" element={<JobList />} />
      <Route
        path="/appliedUsers"
        element={
          <UserLayout>
            <AppliedUsers />
          </UserLayout>
        }
      />
      <Route
        path="/showVacancies"
        element={
          <UserLayout>
            <Showvacancies />
          </UserLayout>
        }
      />
      <Route
        path="/jobApply/:id"
        element={
          <UserLayout>
            <JobApply />
          </UserLayout>
        }
      />
      <Route
        path="/appliedjobs"
        element={
          <UserLayout>
            <AppliedJobs />
          </UserLayout>
        }
      />
      {/*SakuniF's Routes Ends here*/}


      {/* Leo's Routes Begin here */}
      <Route path="/pdonation" element={<PublishAd />} />{" "}
      {/*Ad creation form(not being used)*/}
      <Route path="/showAds" element={<Ads />} /> {/*Ad display*/}
      <Route path="/donate" element={<MakeDonations />} /> {/*Donating form*/}
      <Route path="/showDonation" element={<ShowDonations />} />{" "}
      {/*Donation display*/}
      <Route path="/editDonation/:id" element={<EditDonations />} />{" "}
      {/*Donation editing*/}
      <Route path="/cardDetails/" element={<CardDetails />} />{" "}
      {/*Card Detail Page*/}
      <Route path="/paymentDetails/" element={<PaymentPortal />} />{" "}
      {/*Card Detail Page*/}
      <Route path="/adsUserView/" element={<AdsUserView />} />
      {/*Leo's Routes Ends here*/}
      <Route path="/addevent" element={<AddEvent />} />
      <Route path="/allEvent" element={<AllEvent />} />
      <Route path="/updateEvent/:id" element={<UpdateEvent />} />
      <Route path="/printDetails/:id" element={<DetailsPrint />} />
      <Route path="/userEvent" element={<DisplayEvent />} />
      <Route path="/AllParticipants/:id" element={<AllParticipants />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
