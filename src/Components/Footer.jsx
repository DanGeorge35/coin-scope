import React from "react";
import ThemeToggle from "./ThemeToggle";
import { AiFillInstagram, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer-div mt-8 pt-8 px-10 text-primary">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Support and Info Section */}
        <div className="flex justify-between w-full md:max-w-[500px] capitalize pt-6">
          {/* Support Column */}
          <div>
            <h2 className="font-bold pb-2">Support</h2>
            <ul>
              <li className="text-sm py-2 hover:text-accent cursor-pointer">
                Help Center
              </li>
              <li className="text-sm py-2 hover:text-accent cursor-pointer">
                Contact Us
              </li>
              <li className="text-sm py-2 hover:text-accent cursor-pointer">
                API Status
              </li>
              <li className="text-sm py-2 hover:text-accent cursor-pointer">
                Read Our Blog
              </li>
            </ul>
          </div>

          {/* Info Column */}
          <div>
            <h2 className="font-bold pb-2">Info</h2>
            <ul>
              <li className="text-sm py-2 hover:text-accent cursor-pointer">
                Meet The Dev
              </li>
              <li className="text-sm py-2 hover:text-accent cursor-pointer">
                About Us
              </li>
              <li className="text-sm py-2 hover:text-accent cursor-pointer">
                Invest
              </li>
              <li className="text-sm py-2 hover:text-accent cursor-pointer">
                Legal
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter and Social Links Section */}
        <div className="text-center md:text-right">
          <div className="flex justify-center md:justify-end">
            <div className="w-full md:max-w-[400px]">
              <div className=" px-6 py-2 rounded-xl mb-4">
                <p className="text-sm my-2  text-center pb-4 ">
                  <b>Subscribe to our Newsletter</b>
                </p>
                <form className="   mb-3">
                  <div className="  items-center bg-primary border border-input rounded-2xl shadow-md overflow-hidden focus-within:ring-2 focus-within:ring-accent transition-all duration-300">
                    <input
                      className="bg-primary p-3 focus:outline-none w-full  text-center outline-none"
                      type="email"
                      placeholder="Enter Your Email"
                      required
                    />
                    <button
                      className="bg-button w-full text-buttonText px-6 py-3 hover:shadow-lg hover:bg-buttonHover transition-all duration-300"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>

              <div className="flex items-center justify-center md:justify-center gap-4 pb-4 text-accent text-lg">
                <ThemeToggle />
                <AiOutlineInstagram className="text-2xl cursor-pointer hover:text-primary" />
                <FaFacebook className="text-2xl cursor-pointer hover:text-primary" />
                <FaTwitter className="text-2xl cursor-pointer hover:text-primary" />
                <FaGithub className="text-2xl cursor-pointer hover:text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-sm py-4 border-t border-gray-600">
        &copy; Dan George 2024. Powered by CoinGecko
      </div>
    </div>
  );
};

export default Footer;
