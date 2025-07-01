// src/components/Hero.jsx
import React from "react";

import Profile from "../../../assets/user/profile.jpg";

const allHeroCategoryItems = [
  { name: "Automobiles", href: "#" },
  { name: "Clothes and wear", href: "#" },
  { name: "Home interiors", href: "#" },
  { name: "Computer and tech", href: "#" },
  { name: "Tools, equipments", href: "#" },
  { name: "Sports and outdoor", href: "#" },
  { name: "Animal and pets", href: "#" },
  { name: "Machinery tools", href: "#" },
  { name: "More category", href: "#" },
];

import HeroBanner from "../../../assets/banners/hero-banner.png";

const Hero = () => {
  return (
    <div className="container lg:mt-6 mt-3 pb-2">
      <div className="flex flex-col lg:flex-row gap-6 bg-white lg:py-5 lg:px-7  rounded-lg lg:shadow-md">
        {/* Category Sidebar - Hidden on mobile */}
        <div className="hidden lg:block w-full lg:w-1/5 bg-white rounded-lg p-5 ">
          <ul className="space-y-3">
            {allHeroCategoryItems.map((item) => (
              <li
                key={item.name}
                className="text-gray-700 hover:text-black hover:font-semibold hover:bg-blue-50 transition-colors cursor-pointer py-1 px-2 rounded-md  border-gray-100 last:border-0"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Hero Banner */}
        <div className="w-full lg:w-3/5 relative  overflow-hidden">
          <div
            className="h-64 md:h-80 lg:h-96 w-full bg-cover bg-center flex py-5 px-3"
            style={{ backgroundImage: `url(${HeroBanner})` }}
          >
            <div className="absolute"></div>
            <div className="relative z-10 text-black p-6 max-w-md">
              <h3 className="text-xl md:text-xl font-[400] mb-1">
                Latest trending
              </h3>
              <h2 className="text-2xl md:text-2xl font-bold mb-4">
                Electronic items
              </h2>
              <button className="bg-white text-gray-900 px-5 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors">
                Learn more
              </button>
            </div>
          </div>
        </div>

        {/* User Cards - Hidden on mobile */}
        <div className="hidden lg:block w-full lg:w-1/5 space-y-4">
          {/* User Card */}
          <div className="bg-blue-100 rounded-lg p-5 ">
            <div className="flex items-center mb-4">
              <img
                src={Profile}
                className="bg-gray-200  rounded-full w-12 h-12"
              />
              <div className="ml-4">
                <p className="font-medium text-gray-800">Hi, user</p>
                <p className="text-gray-600 text-sm">let's get started</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium flex-1 hover:bg-blue-700 transition-colors">
                Join now
              </button>
              <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md font-medium flex-1 hover:bg-gray-300 transition-colors">
                Log in
              </button>
            </div>
          </div>

          {/* Discount Card */}
          <div className="bg-orange-400 text-white rounded-lg p-5">
            <p className="font-medium  mb-1">
              Get US $10 off with a new supplier
            </p>
          </div>

          {/* Additional Card */}
          <div className="bg-[#55bdc3] text-white rounded-lg p-5">
            <p className="font-medium  mb-1">
              Send quotes with supplier preferences
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Only - User Cards */}
    </div>
  );
};

export default Hero;
