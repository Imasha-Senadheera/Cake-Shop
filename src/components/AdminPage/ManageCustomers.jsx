import React, { useState } from "react";
import ViewCustomers from "./ViewCustomers";
import Modal from "react-modal";

const ManageCustomers = () => {
  // State to control the modal visibility
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setModalIsOpen(true);

  // Function to close the modal
  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      {/* Button to open the modal */}
      <button style={{ margin: "0 10px 10px 0" }} onClick={openModal}>
        View Customers
      </button>

      {/* Modal component to display customer details */}
      <Modal
        isOpen={modalIsOpen} // Control the visibility of the modal
        onRequestClose={closeModal} // Function to call when the user attempts to close the modal
        contentLabel="Customer Details" // Accessibility label for the modal
        className="modal" // Custom class for styling the modal
        overlayClassName="overlay" // Custom class for styling the modal overlay
      >
        {/* Button to close the modal */}
        <button onClick={closeModal} className="close-button">
          Close
        </button>
        {/* Component to display customer details */}
        <ViewCustomers />
      </Modal>
    </div>
  );
};

export default ManageCustomers;
