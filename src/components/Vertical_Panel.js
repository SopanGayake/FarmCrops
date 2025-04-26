import React from 'react';
import PropTypes from 'prop-types';

export default function VerticalPanel({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: '60px', // Adjusted to appear below the Navbar
        left: '0',
        width: '250px',
        height: '100%',
        backgroundColor: '#f8f9fa',
        boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
        zIndex: '1050',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
      }}
    >
      <button
        style={{
          alignSelf: 'flex-end',
          background: 'none',
          border: 'none',
          fontSize: '20px',
          cursor: 'pointer',
        }}
        onClick={onClose}
      >
        &times;
      </button>
      <a href="/settings" style={{ textDecoration: 'none', color: '#000' }}>Settings</a>
      <a href="/account" style={{ textDecoration: 'none', color: '#000' }}>Account</a>
      <a href="/cart" style={{ textDecoration: 'none', color: '#000' }}>Cart</a>
      <a href="/payments" style={{ textDecoration: 'none', color: '#000' }}>Payments</a>
      <a href="/policies" style={{ textDecoration: 'none', color: '#000' }}>Policies</a>
    </div>
  );
}

VerticalPanel.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
