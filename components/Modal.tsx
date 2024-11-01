import React, { ReactNode } from "react";
import "./style.css";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <IoMdClose />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
