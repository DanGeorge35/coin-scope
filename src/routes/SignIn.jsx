import React, { useState } from "react";
import { AiFillLock, AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SignIn = () => {
  const { signIn } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/account");
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <div className="min-h-[80vh] p-3">
      <div className="max-w-[500px] mx-auto min-h-[500px] auth-div px-4 py-10  rounded-xl shadow-lg animate__animated animate__fadeInLeft animate__faster">
        <div className="mb-4 flex items-center">
          <Link to="/" className="flex items-center text-accent">
            <AiOutlineArrowLeft className="text-xl mr-2" />
            <span>Go Back Home</span>
          </Link>
        </div>

        <h1 className="text-2xl font-bold mb-16 text-center">Sign In</h1>

        {error && (
          <p className="border-b border-red-500 p-2 my-2 text-red-500 text-center animate__animated animate__shakeX">
            {error}
          </p>
        )}

        <form action="" onSubmit={handleSubmit}>
          <div className="my-4">
            <label className="pl-4" htmlFor="email">
              Email
            </label>
            <div className="my-2 w-full relative rounded-2xl  ">
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
                placeholder="Your Passsword"
              />
            </div>
          </div>
          {/* --color-bg-input) */}
          <button className="w-full my-8 p-3 bg-button text-buttonText rounded-2xl shadow-cl">
            Sign In
          </button>
        </form>

        <p className="my-4 text-center">
          Don't Have an Account?{" "}
          <Link className="text-accent" to="/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
