import React from "react";

const ManageProducts = () => {
  return (
    <div>
      {/* Description of the functionalities provided by this component */}
      <p>Handle adding, editing, and deleting products in the system.</p>

      {/* Button to add a new product */}
      <button style={{ margin: "0 10px 10px 0" }}>Add Product</button>

      {/* Button to edit an existing product */}
      <button style={{ margin: "0 10px 10px 0" }}>Edit Product</button>

      {/* Button to delete an existing product */}
      <button style={{ margin: "0 0 10px 0" }}>Delete Product</button>
    </div>
  );
};

export default ManageProducts;
