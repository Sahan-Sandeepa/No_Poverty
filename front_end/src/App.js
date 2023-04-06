import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import './App.css';
import Dashboard from './components/common/header';
import PublishAd from './components/DonationAdmin/PublishAd';
import Ads from './components/DonationAdmin/ShowAllAds';
import AddEvent from './components/Event/Admin/AddEvent';
import AllEvent from './components/Event/Admin/AllEvent';
import UpdateEvent from './components/Event/Admin/UpdateEvent';
import Financial from './components/Financial/Financial';
import JobList from './components/jobPortal/JobList';
import JobPost from './components/jobPortal/JobPost';
import Home from './pages/Home/Home';
import MakeDonations from './components/DoDonations/MakeDonations';
import Register from './components/Register/Register';
import ShowDonations from './components/DoDonations/ShowDonations';

function App() {
  return (
    <BrowserRouter>
      <body>
        <main>
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/Register" element={<Register/>}/>


            <Route path="/add" element={<JobPost />} />
            <Route path="/joblist" element={<JobList />} />

            {/* Leo's Routes Begin here */}
            <Route  path="/pdonation" element={<PublishAd/>}/> {/*Ad creation form*/}
            <Route path="/showAds" element={<Ads/>} /> {/*Ad display*/}

            <Route path="/donate" element={<MakeDonations/>} /> {/*Donating form*/}
            <Route path="/showDonation" element={<ShowDonations/>}/> {/*Donation display*/}

            {/*Leo's Routes Ends here*/}


            
            <Route  path="/addevent" element={<AddEvent/>}/>
            <Route  path="/allEvent" element={<AllEvent/>}/>
            <Route  path="/updateEvent" element={<UpdateEvent/>}/>


            <Route />

          </Routes>
        </main>
      </body>

    </BrowserRouter>
  );
}

export default App;
