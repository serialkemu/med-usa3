import { Routes, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/nav/NavBar';
import Footer from './components/footer/Footer';
import Admin from './admin/Admin';
import Home from './pages/home/Home';
import Report from './pages/report/Report';
import Education from './pages/resources/education/Education';
import Statistics from './pages/resources/statistics/Statistics';
import Edu from './components/cards/Edu';
import EduVideo from './components/cards/EduVideo';
import CaseFiles from './admin/CaseFiles';

import About from './pages/About/About';
import Counselling from './pages/resources/counselling/Counselling';
import LiveReport from './components/forms/LiveReport';
import VictimForm from './components/forms/VictimForm';
import WitnessForm from './components/forms/WitnessForm';
import VideoRecorder from './components/Media/AudioRecorder';
import CyberbullyForm from './components/forms/Cyberbully';


const App = () => {
  return (
      <div className='bg-primary'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Report" element={<Report/>} />
          <Route path='/LiveReport' element={<LiveReport/>}/>
          <Route path='/VictimForm' element={<VictimForm/>}/>
          <Route path='/WitnessForm' element={<WitnessForm/>}/>
          <Route path="/Education" element={<Education/>} />
          <Route path='/Edu' element={<Edu/>} ></Route>
          <Route path='/EduVideo' element={<EduVideo/>} ></Route>
          <Route path="/Counselling" element={<Counselling/>} />
          <Route path="/Statistics" element={<Statistics/>} />
          <Route path='/Admin' element={<Admin/>}/>
          <Route path="/About" element={<About/>} />
          <Route path="/CyberbullyForm" element={<CyberbullyForm/>} />
          <Route path="/audio" element={<VideoRecorder/>} />
          
        </Routes>
        <Footer />
      </div>
  );
};

export default App;
