import React, { useContext } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="p-2 align-middle">
      {theme === "dark" ? (
        <div
          className="flex items-center cursor-pointer  bg-gray-200 text-black py-2 px-3 rounded-full hover:bg-gray-300 transition-all duration-300"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <HiSun className="text-sky text-2xl" />
          <span className="hidden sm:inline-block ml-3 text-sm">
            Light Mode
          </span>
        </div>
      ) : (
        <div
          className="flex items-center cursor-pointer  bg-gray-800 text-white py-2 px-3 rounded-full hover:bg-gray-600 transition-all duration-300"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <HiMoon className="text-sky text-2xl" />
          <span className="hidden sm:inline-block ml-3 text-sm">Dark Mode</span>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
