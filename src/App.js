
import Home from './components/Home';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PositionCreation from './components/PositionCreation';
import VoterRegistration from './components/VoterRegistration';
import CandidateRegistration from './components/CandidateRegistration';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Navigation Bar */}
        <NavBar />

        {/* Main Layout */}
        <div className="main-content">
          <Sidebar /> {/* Render the Sidebar component */}
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/CandidateRegistration" element={<CandidateRegistration />} />
            <Route path="/PositionCreation" element={<PositionCreation />} />
            <Route path="/VoterRegistration" element={<VoterRegistration />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
