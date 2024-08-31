// src/components/ManageCustomers.js

import React, { useState } from "react";
import ViewCustomers from "./ViewCustomers"; // Import the new component

const ManageCustomers = () => {
  const [showCustomers, setShowCustomers] = useState(false);

  return (
    <div>
      <button
        style={{ margin: "0 10px 10px 0" }}
        onClick={() => setShowCustomers(!showCustomers)} // Toggle customer view
      >
        {showCustomers ? "Hide Customers" : "View Customers"}
      </button>
      {showCustomers && <ViewCustomers />}{" "}
      {/* Conditionally render ViewCustomers */}
    </div>
  );
};

export default ManageCustomers;
