import React from "react";

const ManageOrders = () => {
  return (
    <div>
      {/* Description or instructions for the user */}
      <p>View and update customer orders effectively.</p>

      {/* Button to view orders */}
      <button style={{ margin: "0 10px 10px 0" }}>View Orders</button>

      {/* Button to update an order */}
      <button style={{ margin: "0 0 10px 0" }}>Update Order</button>
    </div>
  );
};

export default ManageOrders;
