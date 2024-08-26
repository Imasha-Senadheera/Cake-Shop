import React, { useState } from "react";
import "../styles/RegisterForm.css";

const RegisterForm = ({ onRegister, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [inviteCode, setInviteCode] = useState(""); // For admin/store manager registration

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    let role = "customer"; // Default role

    if (inviteCode) {
      // If an invite code is provided, validate it on the server
      const response = await fetch(
        "http://localhost:5000/api/validate-invite",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ inviteCode }),
        }
      );

      if (!response.ok) {
        setError("Invalid invite code.");
        return;
      }

      const data = await response.json();
      role = data.role; // Role based on invite code (admin or store manager)
    }

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, role }),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.message || "Registration failed. Please try again.");
        return;
      }

      const data = await response.json();
      console.log("Registration successful:", data);
      setSuccess("Registration successful!");
      onRegister(data.user);
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      onClose();
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
        {/* Optional: Only visible for admin/store manager registration */}
        <div className="form-group">
          <label htmlFor="inviteCode">
            Invite Code (for Admin/Store Manager):
          </label>
          <input
            type="text"
            id="inviteCode"
            value={inviteCode}
            onChange={(e) => setInviteCode(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
