// src/components/ManageCustomers.js
import React, { useState, useEffect } from "react";

const ManageCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [showCustomers, setShowCustomers] = useState(false);

  // Fetch customer data
  useEffect(() => {
    if (showCustomers) {
      const fetchCustomers = async () => {
        try {
          const response = await fetch("/api/customers"); // Adjust the URL to your backend endpoint
          const data = await response.json();
          setCustomers(data);
        } catch (error) {
          console.error("Error fetching customers:", error);
        }
      };

      fetchCustomers();
    }
  }, [showCustomers]);

  return (
    <div>
      <button
        style={{ margin: "0 10px 10px 0" }}
        onClick={() => setShowCustomers(true)}
      >
        View Customers
      </button>
      <button style={{ margin: "0 0 10px 0" }}>
        Manage Customer Information
      </button>

      {showCustomers && (
        <div>
          <h3>Customer List</h3>
          {customers.length === 0 ? (
            <p>No customers found.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer.id}>
                    <td>{customer.id}</td>
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default ManageCustomers;
