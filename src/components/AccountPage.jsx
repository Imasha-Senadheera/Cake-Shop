import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AccountPage.css';

const AccountPage = () => {
  const navigate = useNavigate();

  // const handleSignInClick = () => {
  //   navigate('/login');
  // };

  // const handleRegisterClick = () => {
  //   navigate('/register');
  // };

  return (
    <div className="account-container">
      <h1 className="account-header">My Account</h1>
      <div className="account-section not-signed-in">
        <h2>Not signed in?</h2>
        <div className="auth-buttons">
          <button>Sign In</button>
          <button>Register</button>
        </div>
        {/* <button onClick={handleSignInClick}>Sign In</button> */}
        {/* <button onClick={handleRegisterClick}>Register</button> */}
      </div>
      <div className="account-section">
        <h2>Profile Information</h2>
        <p>View and update your profile information.</p>
        <div className="button-container">
          <button>Update Profile</button>
        </div>
      </div>
      <div className="account-section">
        <h2>Order History</h2>
        <p>View your past orders and track current orders.</p>
        <div className="button-container">
          <button>View Orders</button>
        </div>
      </div>
      <div className="account-section">
        <h2>Account Settings</h2>
        <p>Manage your account settings and preferences.</p>
        <div className="button-container">
          <button>Account Settings</button>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
