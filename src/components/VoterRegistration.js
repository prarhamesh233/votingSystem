import React, { useState } from 'react';
import Modal from './Modal';
import '../css/VoterRegistration.css';

function VoterRegistration() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [voterId, setVoterId] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const generateVoterId = () => {
    const randomId = Math.floor(Math.random() * 100000); // Generate a random ID
    setVoterId(`${firstName.toLowerCase()}${randomId}`); // Combine first name with random ID
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Send a POST request to register a new voter
  //   axios
  //     .post('https://your-backend-api-url/voters', { firstName, lastName, password, voterId })
  //     .then((response) => {
  //       // Handle success or update UI if needed
  //     })
  //     .catch((error) => {
  //       console.error('Error registering voter:', error);
  //     });
  // };

  return (
    <div className="form-container">
      <h2>Voter Registration</h2>
      <button className="open-modal-button" onClick={() => setIsModalOpen(true)}>
      + add voter
    </button>
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <form>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            className="form-input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            className="form-input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="voterId">Voter ID:</label>
          <input
            type="text"
            id="voterId"
            className="form-input"
            value={voterId}
            readOnly
          />
          <button
            type="button"
            className="generate-button"
            onClick={generateVoterId}
          >
            Generate Voter ID
          </button>
        </div>

        <button type="submit" className="submit-button">
          Register Voter
        </button>
      </form>
      </Modal>
    </div>
  );
}

export default VoterRegistration;
