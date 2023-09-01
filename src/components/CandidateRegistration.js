import '../css/CandidateRegistration.css'; 
import Modal from './Modal';
import React, { useState } from 'react';

export default function CandidateRegistration() {
    const [name, setName] = useState('');
    const [lname, setLName]=useState('');
    const [selectedPosition, setSelectedPosition] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const positions = [
        { id: 1, description: 'Position 1' },
        { id: 2, description: 'Position 2' },
        { id: 3, description: 'Position 3' },
        // Add more positions as needed
    ];
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
      
    // //   // Send a POST request to save the candidate details
    // //   axios.post('https://your-backend-api-url/candidates', { name, lname, selectedPosition })
    // //     .then(response => {
    // //       // console.log('Data sent successfully:');
    // //     })
    // //     .catch(error => {
    // //       console.error('Error registering candidate:', error);
    // //     });
    // // };
  
    return (
        <div className="form-container">
            <h2>Candidate Registration</h2>
            <button className="open-modal-button" onClick={() => setIsModalOpen(true)}>
      + add candidate
    </button>
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lname">LastName:</label>
                    <input
                        type="text"
                        id="lname"
                        value={lname}
                        onChange={e => setLName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="selectedPosition">Position:</label>
                    <select
                        id="selectedPosition"
                        value={selectedPosition}
                        onChange={e => setSelectedPosition(e.target.value)}
                    >
                        <option value="">Select a position</option>
                        {positions.map(position => (
                            <option key={position.id} value={position.id}>
                                {position.description}
                            </option>
                        ))}
                    </select>
                </div>
                <button className="submit-button" type="submit">
                    Register Candidate
                </button>
            </form>
            </Modal>
        </div>
    );
}
