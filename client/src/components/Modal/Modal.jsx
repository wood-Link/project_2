// Modal.jsx
import React from "react";
import styles from "./Modal.module.css"; // CSS 모듈을 가져옵니다.

const Modal = ({ isModalOpen, toggleModal, children }) => {
  if (!isModalOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={toggleModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modalClose} onClick={toggleModal}>
          X
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
