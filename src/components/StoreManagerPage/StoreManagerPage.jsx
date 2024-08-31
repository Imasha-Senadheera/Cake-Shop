import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ManageProducts from "../AdminPage/ManageProducts";
import ManageOrders from "../AdminPage/ManageOrders";
import "../../styles/StoreManagerPage.css";

const StoreManagerPage = () => {
  // Hook for programmatic navigation
  const navigate = useNavigate();

  // Check if the user is authenticated
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/"); // Redirect to home or login page if not authenticated
    }
  }, [navigate]);

  // Function to handle user sign-out
  const handleSignOut = () => {
    localStorage.removeItem("user"); // Remove user info from local storage
    navigate("/"); // Navigate to home or login page
  };

  return (
    <div className="account-container">
      {/* Main heading for the store manager dashboard */}
      <h1 className="account-header">Store Manager Dashboard</h1>

      {/* Section for managing products */}
      <div className="manager-section">
        <h2>Manage Products</h2>
        <ManageProducts /> {/* Component to handle product management */}
      </div>

      {/* Section for managing orders */}
      <div className="manager-section">
        <h2>Manage Orders</h2>
        <ManageOrders /> {/* Component to handle order management */}
      </div>

      {/* Container for sign-out button */}
      <div className="button-container">
        <button className="signout-button" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default StoreManagerPage;
