import React from 'react';
import '../styles/AccountPage.css';

const AccountPage = () => {
  return (
    <div className="account-container">
      <h1 className="account-header">My Account</h1>
      <div className="account-section">
        <h2>Profile Information</h2>
        <p>View and update your profile information.</p>
        <button>Update Profile</button>
      </div>
      <div className="account-section">
        <h2>Order History</h2>
        <p>View your past orders and track current orders.</p>
        <button>View Orders</button>
      </div>
      <div className="account-section">
        <h2>Account Settings</h2>
        <p>Manage your account settings and preferences.</p>
        <button>Account Settings</button>
      </div>
    </div>
  );
};

export default AccountPage;
