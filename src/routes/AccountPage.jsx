import React from "react";
import SavedCoins from "../Components/SavedCoins";
import { UserAuth } from "../context/AuthContext";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { HiOutlineLogout, HiOutlineHome } from "react-icons/hi";
import hello from "/hello.svg";

const AccountPage = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  if (user) {
    return (
      <div className="max-w-[1140px] mx-auto p-3">
        <div className="flex justify-between items-center px-8 my-12 py-8 rounded-div animate__animated animate__fadeInLeft animate__faster  ">
          <div>
            <div>
              <p>
                <img
                  src={hello}
                  alt="hello"
                  className="w-12 h-12 inline-block animate__animated animate__tada animate__slower  animate__infinite"
                />
                <span className="text-l text-white mx-2"> Hello, </span>
              </p>
              <div className="py-3 text-white text-l">
                You are welcome <b>{user?.email}</b>
              </div>
            </div>
          </div>
          <div>
            <Link
              className="border-2 text-white mx-4 py-3 px-6 rounded-full shadow-md hover:bg-green-600 transition-all duration-300"
              to="/"
            >
              <HiOutlineHome className="text-white text-2xl  inline-block " />

              <span className="hidden sm:inline-block ml-3">Go Home</span>
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center px-8 my-12 py-8 rounded-div animate__animated animate__fadeInRight animate__delay-400ms animate__faster ">
          <div className="w-full min-h-[300px]">
            <h1 className="text-xl font-bold  text-white py-4 ">WatchList</h1>
            <hr className="mb-8 border-gray-500" />
            <SavedCoins />
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/signIn" />;
  }
};

export default AccountPage;
