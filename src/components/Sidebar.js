import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Sidebar.css'; 
function Sidebar() {
  
  return (
    <div className="sidebar">
      <ul>
        <li id='special'>
          MANAGE
        </li>
        <li>
          <Link to="/CandidateRegistration">Candidate </Link>
        </li>
        <li>
          <Link to="/PositionCreation">Position</Link>
        </li>
        <li>
          <Link to="/VoterRegistration">Voter </Link>
        </li>
       
      </ul>
    </div>
  );
}

export default Sidebar;
