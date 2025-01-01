import React, { useState } from "react";
import { AiFillLock, AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Modal from "../Components/Modal";

const SignUp = () => {
  const { signUp } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState({
    message: "",
    type: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/account");

      setModalMessage({
        message: "Sucessfully Signed Up",
        type: "success",
      });
      setShowModal(true);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <>
      {showModal && (
        <Modal
          alat={modalMessage}
          onClose={() => setShowModal(false)} // Close the modal
        />
      )}
      <div className="min-h-[80vh] p-3">
        <div
          className="max-w-[500px] mx-auto min-h-[500px] auth-div px-4 py-10 rounded-xl shadow-lg animate__animated animate__fadeInRight animate__faster"
          // Added fadeIn animation for entry
        >
          <div className="mb-4 flex items-center">
            <Link to="/" className="flex items-center text-accent">
              <AiOutlineArrowLeft className="text-xl mr-2" />
              <span>Go Back Home</span>
            </Link>
          </div>

          <h1 className="text-2xl font-bold mb-16 text-center">Sign Up</h1>

          {error && (
            <p
              className="border-b border-red-500 p-2 my-2 text-red-500 text-center animate__animated animate__shakeX"
              // Added shakeX animation for the error message
            >
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <div className="my-4">
              <label className="pl-4" htmlFor="email">
                Email
              </label>
              <div className="my-2 w-full relative rounded-2xl ">
                <span className="absolute top-2 text-2xl mx-3 left-2 text-accent">
                  @
                </span>
                <input
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  className="w-full p-3 bg-primary shadow-xl border-2 border-input rounded-full pl-16"
                  placeholder="Your Email Address"
                />
              </div>
            </div>

            <div className="my-4">
              <label className="pl-4" htmlFor="password">
                Password
              </label>
              <div className="my-2 w-full relative rounded-2xl ">
                <AiFillLock className="absolute top-3 text-2xl mx-3 left-2 text-accent" />
                <input
                  onChange={(event) => setPassword(event.target.value)}
                  type="password"
                  className="w-full p-3 bg-primary shadow-xl border-2 border-input rounded-full pl-16"
                  placeholder="Your Password"
                />
              </div>
            </div>

            <button className="w-full my-8 p-3 bg-button text-buttonText rounded-2xl shadow-cl">
              Sign Up
            </button>
          </form>

          <p className="my-4 text-center">
            Already Have an Account?{" "}
            <Link className="text-accent" to="/signin">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
