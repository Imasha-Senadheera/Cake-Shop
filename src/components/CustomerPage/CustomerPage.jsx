import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/AccountPage.css";

const CustomerPage = ({ user, onSignOut }) => {
  // Hook for programmatic navigation
  const navigate = useNavigate();

  // Function to handle user sign-out
  const handleSignOut = () => {
    localStorage.removeItem("user"); // Remove user info from local storage
    onSignOut(); // Call parent callback to update authentication state
    navigate("/"); // Redirect to the home page
  };

  return (
    <div className="account-container">
      {/* Main heading for the account page */}
      <h1 className="account-header">My Account</h1>

      {/* Container for welcome message and sign-out button */}
      <div className="welcome-container">
        {/* Display welcome message with user's name or email */}
        <h2>Welcome, {user.name || user.email}!</h2>
        <div className="button-container">
          {/* Button to sign out and navigate to home */}
          <button className="signout-button" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </div>

      {/* Sections for user profile and orders */}
      <div className="welcome-details">
        {/* Profile management section */}
        <div className="profile-section">
          <h3>Profile</h3>
          <p>Manage your personal information here.</p>
          <button className="profile-button">Edit Profile</button>
        </div>

        {/* Orders section */}
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
