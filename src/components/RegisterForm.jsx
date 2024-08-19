import React, { useState } from "react";
import "../styles/RegisterForm.css";

const RegisterForm = ({ onRegister, onClose }) => {
  const [name, setName] = useState(""); // State for name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null); // State for success message

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    setSuccess(null); // Clear previous success message

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }), // Include name in the request body
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.message || "Registration failed. Please try again.");
        return;
      }

      const data = await response.json();
      console.log("Registration successful:", data);
      setSuccess("Registration successful!"); // Set success message
      onRegister(data.user); // Pass the user data to the parent component
      setName(""); // Clear the name field
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      onClose(); // Close the modal after successful registration
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="register-form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
        <div className="form-group">
          <label htmlFor="registerName">Name:</label>
          <input
            type="text"
            id="registerName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="registerEmail">Email:</label>
          <input
            type="email"
            id="registerEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="registerPassword">Password:</label>
          <input
            type="password"
            id="registerPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="registerConfirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="registerConfirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
