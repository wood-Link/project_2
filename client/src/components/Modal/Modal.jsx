// Modal.jsx
import React from "react";
import "./Modal.css";

const Modal = ({ isModalOpen, toggleModal, children }) => {
  if (!isModalOpen) return null;

  return (
    <div className="modal-overlay" onClick={toggleModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={toggleModal}>
          X
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
