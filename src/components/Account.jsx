import React, { useState } from "react";
import "../styles/AccountPage.css";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Account = ({ onLogin, onRegister }) => {
  // State to manage the visibility of the login modal
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // State to manage the visibility of the register modal
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div className="account-container">
      <h1 className="account-header">My Account</h1>
      <div className="account-section not-signed-in">
        <h2>Not signed in?</h2>
        <p>Please sign in or register to access your account.</p>
        <div className="auth-buttons">
          {/* Button to open the login modal */}
          <button className="auth-button" onClick={() => setIsLoginOpen(true)}>
            Sign In
          </button>
          {/* Button to open the register modal */}
          <button
            className="auth-button"
            onClick={() => setIsRegisterOpen(true)}
          >
            Register
          </button>
        </div>
      </div>

      {/* Conditional rendering for the login modal */}
      {isLoginOpen && (
        <div className="modal">
          <div className="modal-content">
            {/* Close button for the login modal */}
            <span className="close" onClick={() => setIsLoginOpen(false)}>
              &times;
            </span>
            {/* Login form component */}
            <LoginForm onLogin={onLogin} />
          </div>
        </div>
      )}

      {/* Conditional rendering for the register modal */}
      {isRegisterOpen && (
        <div className="modal">
          <div className="modal-content">
            {/* Close button for the register modal */}
            <span className="close" onClick={() => setIsRegisterOpen(false)}>
              &times;
            </span>
            {/* Register form component */}
            <RegisterForm onRegister={onRegister} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
