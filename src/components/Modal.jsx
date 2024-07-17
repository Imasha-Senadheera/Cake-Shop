import React from "react";
import "./Modal.css";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm"; // Import the RegisterForm component

const Modal = ({ isOpen, onClose, type, onLogin, onRegister }) => {
  const modalClass = isOpen ? "modal display-block" : "modal display-none";

  return (
    <div className={modalClass}>
      <section className="modal-main">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {/* Render different forms based on type prop */}
        {type === "login" && <LoginForm onLogin={onLogin} />}
        {type === "register" && <RegisterForm onRegister={onRegister} onClose={onClose} />}
      </section>
    </div>
  );
};

export default Modal;
