// src/Components/Modal.js
import React from 'react';
import './Modal.css'; // Make sure this path is correct

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
