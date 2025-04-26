import React from 'react';

export function StartShoppingButton({ onClick }) {
  return (
    <button className="start-shopping-button" onClick={onClick}>
      Start Shopping
    </button>
  );
}

export function LoginButton({ onClick }) {
  return (
    <button className="login-button" onClick={onClick}>
      Login to Site
    </button>
  );
}
