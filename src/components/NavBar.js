import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css'; 

function NavBar() {
  return (
    <div className='navbar'>
      
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
