// components/ManageCustomers.jsx
import React, { useState, useEffect } from "react";

const ManageCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [showCustomers, setShowCustomers] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (showCustomers) {
      const fetchCustomers = async () => {
        try {
          const response = await fetch("/api/users");

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          const text = await response.text(); // Get the response as text
          console.log("Response text:", text); // Log the response text

          const data = JSON.parse(text); // Try to parse JSON
          console.log("Parsed data:", data); // Log the parsed data

          setCustomers(data.filter((user) => user.role === "customer"));
        } catch (error) {
          console.error("Error fetching customers:", error);
          setError("Failed to fetch customers. Please try again later.");
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
      {error && <p>{error}</p>}
      {showCustomers && (
        <div>
          <h3>Customer List</h3>
          {customers.length === 0 ? (
            <p>No customers found.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer._id}>
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
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
