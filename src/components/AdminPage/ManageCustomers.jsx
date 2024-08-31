import React, { useState } from "react";
import ViewCustomers from "./ViewCustomers"; // Correct import path
import Modal from "react-modal";

const ManageCustomers = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      <button
        style={{ margin: "0 10px 10px 0" }}
        onClick={openModal}
      >
        View Customers
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Customer Details"
        className="modal"
        overlayClassName="overlay"
      >
        <button onClick={closeModal} className="close-button">Close</button>
        <ViewCustomers />
      </Modal>
    </div>
  );
};

export default ManageCustomers;
