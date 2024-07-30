import React from 'react';
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
        <h2>View Site Analytics</h2>
        <p>Access detailed site analytics and performance reports.</p>
        <button>View Analytics</button>
      </div>
      <div className="admin-section">
        <h2>Oversee Store Manager Activities</h2>
        <p>Monitor and manage the activities of store managers.</p>
        <button>Oversee Managers</button>
      </div>
    </div>
  );
};

export default AdminPage;
