import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ManageProducts from "./ManageProducts";
import ManageOrders from "./ManageOrders";
import ManageCustomers from "./ManageCustomers";
import "../../styles/AdminPage.css";

const AdminPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/"); // Redirect to home or login page if not authenticated
    }
  }, [navigate]);

  const handleSignOut = () => {
    localStorage.removeItem("user");
    navigate("/"); // Navigate to home or login page
  };

  return (
    <div className="account-container">
      <h1 className="account-header">Admin Dashboard</h1>

      <div className="admin-section">
        <h2>Manage Customers</h2>
        <ManageCustomers />
      </div>

      <div className="admin-section">
        <h2>Manage Products</h2>
        <ManageProducts />
      </div>

      <div className="admin-section">
        <h2>Manage Orders</h2>
        <ManageOrders />
      </div>

      <div className="button-container">
        <button className="signout-button" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default AdminPage;
