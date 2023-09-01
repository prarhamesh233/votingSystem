import React, { useState } from 'react';
// import axios from 'axios';
import '../css/PositionCreation.css';
import Modal from './Modal';


function PositionCreation() {
  const [positionName, setPositionName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);


//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Send a POST request to create a new position
//     axios.post('https://your-backend-api-url/positions', { name: positionName })
//       .then(response => {
//         // Handle success or update UI if needed
//       })
//       .catch(error => {
//         console.error('Error creating position:', error);
//       });
//   };

return (
  <div className="form-container">
    <h2>Position Creation</h2>
    <button className="open-modal-button" onClick={() => setIsModalOpen(true)}>
     + add Position
    </button>
    
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <form>
      {/* <form onSubmit={handleSubmit}> */}
        <div className="form-group">
          <label>Position Name:</label>
          <input
            type="text"
            value={positionName}
            onChange={(e) => setPositionName(e.target.value)}
          />

          <button type="submit" className="submit-button">
            Create Position
          </button>
        </div>
      </form>
    </Modal>
  </div>
);
}

export default PositionCreation;





