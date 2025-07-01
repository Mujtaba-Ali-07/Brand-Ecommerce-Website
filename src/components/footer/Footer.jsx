// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaApple,
  FaGooglePlay,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaCopyright,
} from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { FaBagShopping } from "react-icons/fa6"; // Adjust the import path as necessary

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800   ">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 hidden lg:block">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link to="/">
              <div className="flex items-center gap-2 mb-4">
                <FaBagShopping className="text-blue-600 text-3xl drop-shadow-[6px_0_1px_rgba(96,165,250,0.7)]" />
                <span className="text-2xl text-blue-400/80 font-bold">
                  Brand
                </span>
              </div>
            </Link>
            <p className="text-gray-500 mb-4 max-w-md">
              Brand offers high-quality products at competitive prices. Shop
              smart with secure checkout, fast shipping, and reliable customer
              support.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-6">
              <Link
                to="/"
                className="bg-gray-100 p-2 rounded-full hover:bg-blue-100 transition-colors"
              >
                <FaFacebookF className="text-gray-600 hover:text-blue-600" />
              </Link>
              <Link
                to="/"
                className="bg-gray-100 p-2 rounded-full hover:bg-blue-100 transition-colors"
              >
                <FaTwitter className="text-gray-600 hover:text-blue-400" />
              </Link>
              <Link
                to="/"
                className="bg-gray-100 p-2 rounded-full hover:bg-pink-100 transition-colors"
              >
                <FaInstagram className="text-gray-600 hover:text-pink-600" />
              </Link>
              <Link
                to="/"
                className="bg-gray-100 p-2 rounded-full hover:bg-blue-100 transition-colors"
              >
                <FaLinkedinIn className="text-gray-600 hover:text-blue-700" />
              </Link>
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-gray-900">About</h4>
            <ul className="space-y-2 text-gray-500">
              <li>
                <Link to="/" className="hover:text-blue-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-600 transition-colors">
                  Find store
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-600 transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-600 transition-colors">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-gray-900">
              Information
            </h4>
            <ul className="space-y-2 text-gray-500">
              <li>
                <Link to="/" className="hover:text-blue-600 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-600 transition-colors">
                  Money Refund
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-600 transition-colors">
                  Shipping
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-600 transition-colors">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* For users */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-gray-900">For users</h4>
            <ul className="space-y-2 text-gray-500">
              <li>
                <Link to="/" className="hover:text-blue-600 transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-600 transition-colors">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-600 transition-colors">
                  Settings
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-600 transition-colors">
                  My Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Get app */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-gray-900">Get app</h4>
            <div className="flex flex-col gap-3">
              <button className="flex items-center gap-3 bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                <FaApple className="text-xl" />
                <div className="text-left">
                  <p className="text-xs">Download on the</p>
                  <p className="font-medium">App Store</p>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                <FaGooglePlay className="text-xl" />
                <div className="text-left">
                  <p className="text-xs">GET IT ON</p>
                  <p className="font-medium">Google Play</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#eff2f4] border-t-2 border-gray-200 lg:border-t-0">
        <div className="max-w-7xl mx-auto px-4 flex flex-row justify-between items-center">
          <div className="ext-center text-sm text-gray-500 py-4">
            © {new Date().getFullYear()} Brand. All rights reserved.
          </div>
          <div className="flex items-center">
            <div className="flex items-center text-sm bg-white px-4 py-2 rounded-lg border border-gray-300">
              <span>English</span>
              <FiChevronDown className="ml-2 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
