import React from 'react'
import '../css/Modal.css';

function Modal({ isOpen, onClose, children }) {
    return (
      isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={onClose}>
              &times;
            </button>
            {children}
          </div>
        </div>
      )
    );
  }

export default Modal
