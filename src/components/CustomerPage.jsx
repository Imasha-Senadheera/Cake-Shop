import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AccountPage.css";

const CustomerPage = ({ user, onSignOut }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("user");
    onSignOut();
    navigate("/");
  };

  return (
    <div className="account-container">
      <h1 className="account-header">My Account</h1>

      <div className="welcome-container">
        <h2>Welcome, {user.name || user.email}!</h2>
        <div className="button-container">
          <button className="signout-button" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </div>

      <div className="welcome-details">
        <div className="profile-section">
          <h3>Profile</h3>
          <p>Manage your personal information here.</p>
          <button className="profile-button">Edit Profile</button>
        </div>

        <div className="orders-section">
          <h3>My Orders</h3>
          <p>View your order history and track current orders.</p>
          <button className="orders-button">View Orders</button>
        </div>
      </div>
    </div>
  );
};

export default CustomerPage;
