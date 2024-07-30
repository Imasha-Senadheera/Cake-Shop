import React from 'react';
import ManageProducts from './ManageProducts';
import ManageOrders from './ManageOrders';
import ManageCustomers from './ManageCustomers';
import '../styles/AdminPage.css';

const AdminPage = () => {
  return (
    <div className="admin-container">
      <h1 className="admin-header">Admin Dashboard</h1>
      <div className="admin-section">
        <h2>Manage User Accounts</h2>
        <p>Oversee all user accounts and manage their roles and permissions.</p>
        <button>Manage Users</button>
      </div>
      <div className="admin-section">
        <h2>Manage Products</h2>
        <ManageProducts />
      </div>
      <div className="admin-section">
        <h2>Manage Orders</h2>
        <ManageOrders />
      </div>
      <div className="admin-section">
        <h2>Manage Customers</h2>
        <ManageCustomers />
      </div>
    </div>
  );
};

export default AdminPage;
