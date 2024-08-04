import React from "react";
import ManageProducts from "./ManageProducts";
import ManageOrders from "./ManageOrders";

const StoreManagerPage = () => {
  return (
    <div>
      <h1>Store Manager Dashboard</h1>
      <p>
        Manage product listings, view sales reports, manage orders, and handle
        customer inquiries.
      </p>
      <ManageProducts />
      <ManageOrders />
      {/* Add more store manager-specific functionalities here */}
    </div>
  );
};

export default StoreManagerPage;
