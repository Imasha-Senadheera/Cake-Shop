import React, { useState } from "react";
import "../styles/AccountPage.css";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Account = ({ onLogin, onRegister }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div className="account-container">
      <h1 className="account-header">My Account</h1>
      <div className="account-section not-signed-in">
        <h2>Not signed in?</h2>
        <p>Please sign in or register to access your account.</p>
        <div className="auth-buttons">
          <button className="auth-button" onClick={() => setIsLoginOpen(true)}>
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

      {isLoginOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsLoginOpen(false)}>
              &times;
            </span>
            <LoginForm onLogin={onLogin} />
          </div>
        </div>
      )}

      {isRegisterOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsRegisterOpen(false)}>
              &times;
            </span>
            <RegisterForm onRegister={onRegister} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
