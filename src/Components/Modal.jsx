import React from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai"; // Import icons

const Modal = ({ alat, onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-xl shadow-lg w-4/5 max-w-md h-72 flex flex-col justify-between items-center text-center
        animate__animated animate__fadeInDown animate__faster"
      >
        {/* Icon and Message */}
        <div className="flex flex-col items-center flex-grow justify-center">
          {alat.type === "success" ? (
            <AiOutlineCheckCircle className="text-green-500 text-6xl mb-4" />
          ) : alat.type === "error" ? (
            <AiOutlineCloseCircle className="text-red-500 text-6xl mb-4" />
          ) : null}
          <p className="text-lg font-medium text-gray-800">{alat.message}</p>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="px-16 text-white py-2 rounded-full text-lg font-semibold focus:outline-none bg-button text-buttonText
          hover:shadow-lg hover:bg-buttonHover transition-all duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
