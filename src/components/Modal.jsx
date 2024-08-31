import React from "react";
import "../styles/Modal.css";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm"; // Import the RegisterForm component

const Modal = ({ isOpen, onClose, type, onLogin, onRegister }) => {
  const modalClass = isOpen ? "modal display-block" : "modal display-none";

  return (
    <div className={modalClass} aria-hidden={!isOpen}>
      <section className="modal-main" aria-label="Modal">
        <span className="close" onClick={onClose} aria-label="Close">
          &times;
        </span>
        {/* Render different forms based on type prop */}
        {type === "login" && <LoginForm onLogin={onLogin} />}
        {type === "register" && (
          <RegisterForm onRegister={onRegister} onClose={onClose} />
        )}
      </section>
    </div>
  );
};

export default Modal;