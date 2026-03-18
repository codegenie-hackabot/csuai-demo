import React, { useState } from 'react';
import './ContactModal.css';

function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>Contact Us</h2>
        <p>Email: <a href="mailto:info@csuai-demo.com">info@csuai-demo.com</a></p>
        <p>Phone: +1 (323) 301‑1834</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ContactModal;
