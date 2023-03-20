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

function App() {
  return (
    <BrowserRouter>
      <body>
        <main>
          <Routes>
            <Route path="/add" element={<JobPost />} />
            <Route path="/joblist" element={<JobList />} />


            <Route  path="/pdonation" element={<PublishAd/>}/>
            <Route path="/showdonation" element={<Ads/>} />


            
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
