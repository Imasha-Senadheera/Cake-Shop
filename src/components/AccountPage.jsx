import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AccountPage.css";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const AccountPage = () => {
  const navigate = useNavigate();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if the user is logged in when the component mounts
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogin = (userData) => {
    // Save user data to local storage and state
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    setIsLoginOpen(false);
  };

  const handleRegister = (userData) => {
    // Save user data to local storage and state
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    setIsRegisterOpen(false);
  };

  const handleSignOut = () => {
    // Clear user data from local storage and state
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <div className="account-container">
      <h1 className="account-header">My Account</h1>

      {user ? (
        <>
          <div className="welcome-container">
            <h2>Welcome, {user.name || user.email}!</h2> <br></br>
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
        </>
      ) : (
        <div className="account-section not-signed-in">
          <h2>Not signed in?</h2>
          <p>Please sign in or register to access your account.</p>
          <div className="auth-buttons">
            <button
              className="auth-button"
              onClick={() => setIsLoginOpen(true)}
            >
              Sign In
            </button>
            <button
              className="auth-button"
              onClick={() => setIsRegisterOpen(true)}
            >
              Register
            </button>
          </div>
        </div>
      )}

      {isLoginOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsLoginOpen(false)}>
              &times;
            </span>
            <LoginForm onLogin={handleLogin} />
          </div>
        </div>
      )}

      {isRegisterOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsRegisterOpen(false)}>
              &times;
            </span>
            <RegisterForm onRegister={handleRegister} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountPage;
