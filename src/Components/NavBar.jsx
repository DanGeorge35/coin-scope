import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { UserAuth } from "../context/AuthContext";
import {
  HiOutlineLogin,
  HiUser,
  HiOutlineLogout,
  HiUserAdd,
  HiHome,
} from "react-icons/hi";

const NavBar = () => {
  const { user, logOut } = UserAuth();

  const navigate = useNavigate();

  const [showNav, setShowNav] = useState(false);
  const handleNav = () => {
    setShowNav(!showNav);
  };

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="top-nav flex items-center justify-between h-20 font-semibold  mb-16 mx-20 overflow-hidden">
      <Link to="/">
        {" "}
        <h1 className="text-xl font-bold ml-6">
          <span className="inline-block align-middle text-white">
            SEARCH.COIN
          </span>
        </h1>
      </Link>

      <div className="flex items-center space-x-5 mr-5">
        {user?.email ? (
          <>
            <Link
              className="bg-green-600 hidden sm:inline-block text-black py-2 px-3 rounded-full shadow-md hover:bg-green-700 transition-all duration-300"
              to="/account"
            >
              <HiUser className="text-white text-2xl  inline-block align-top" />
              <span className=" ml-3 text-white text-sm">Account</span>
            </Link>
            <button
              className="bg-gray-800 text-white py-2 px-3 hidden sm:inline-block rounded-full shadow-md hover:bg-gray-600 transition-all duration-300"
              onClick={handleSignOut}
            >
              <HiOutlineLogout className="text-red-800 text-2xl  inline-block" />

              <span className=" ml-3 text-white text-sm">Sign Out</span>
            </button>
          </>
        ) : (
          <>
            <Link
              className="bg-gray-200  items-center text-black  hidden sm:inline-block py-2 px-3 rounded-full shadow-md hover:bg-gray-300 transition-all duration-300"
              to="/signIn"
            >
              <HiOutlineLogin className="text-gray-700 text-2xl inline-block align-top" />
              <span className="ml-3 text-gray-800 text-sm">Sign In</span>
            </Link>

            <Link
              className="bg-gray-200  items-center text-black  hidden sm:inline-block py-2 px-3 rounded-full shadow-md hover:bg-gray-300 transition-all duration-300 mt-4 md:mt-0 md:ml-4"
              to="/signUp"
            >
              <HiUserAdd className="text-gray-700 text-2xl inline-block align-top" />
              <span className="ml-3 text-gray-800 text-sm">Sign Up</span>
            </Link>
          </>
        )}
        <ThemeToggle />
      </div>
      {/*mobile menu icon */}
      <div
        className="flex md:hidden cursor-pointer z-10 mr-8"
        onClick={handleNav}
      >
        {showNav ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35} />}
      </div>

      {/*mobile menu*/}
      <div
        className={
          showNav
            ? "flex flex-col md:hidden fixed left-0 top-20 items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10 "
            : "fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in"
        }
      >
        <ul className="w-full p-4">
          <li className="border-b py-6">
            {" "}
            <Link onClick={handleNav} to="/">
              <HiHome className="text-gray-600 text-2xl  inline-block align-top mr-7" />
              Home
            </Link>{" "}
          </li>
          <li className="border-b py-6">
            {" "}
            <Link onClick={handleNav} to="/account">
              <HiUser className="text-gray-600 text-2xl  inline-block align-top mr-7" />
              Account
            </Link>{" "}
          </li>
        </ul>
        <div className="flex flex-col w-full p-4 ">
          {user?.email ? (
            <button
              className="bg-gray-800 w-full text-white py-2 px-3  rounded-full shadow-md hover:bg-gray-600 transition-all duration-300"
              onClick={handleSignOut}
            >
              <HiOutlineLogout className="text-red-800 text-2xl  inline-block" />

              <span className=" ml-3 text-white text-sm">Sign Out</span>
            </button>
          ) : (
            <>
              <Link onClick={handleNav} to="/signIn">
                {" "}
                <button className="w-full my-2 p-3 bg-primary border border-secondary rounded-2xl shadow-2xl">
                  Sign In
                </button>{" "}
              </Link>
              <Link onClick={handleNav} to="/signUp">
                {" "}
                <button className="w-full my-2 p-3 bg-button text-buttonText border border-secondary rounded-2xl shadow-2xl">
                  Sign Up
                </button>{" "}
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
