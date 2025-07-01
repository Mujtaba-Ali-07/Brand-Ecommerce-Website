// src/components/HomeOutdoor.jsx
import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import HomeOutdoorBanner from "../../../assets/banners/home-outdoor.jpg"; // Adjust the path as necessary
import { Link } from "react-router-dom";

import { FaLongArrowAltRight } from "react-icons/fa";

// image paths
import Pic1 from "../../../assets/home-outdoor/1.png";
import Pic2 from "../../../assets/home-outdoor/2.png";
import Pic3 from "../../../assets/home-outdoor/3.png";
import Pic4 from "../../../assets/home-outdoor/4.png";
import Pic5 from "../../../assets/home-outdoor/5.png";
import Pic6 from "../../../assets/home-outdoor/6.png";
import Pic7 from "../../../assets/home-outdoor/7.jpg";
import Pic8 from "../../../assets/home-outdoor/8.png";

const HomeOutdoor = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const products = [
    { name: "Soft chairs", image: Pic1, price: "From USD 19" },
    { name: "Kitchen mixer", image: Pic2, price: "From USD 100" },
    { name: "Sofa & chair", image: Pic3, price: "From USD 19" },
    { name: "Blenders", image: Pic4, price: "From USD 39" },
    { name: "Kitchen dishes", image: Pic5, price: "From USD 19" },
    { name: "Smart watches", image: Pic6, price: "From USD 19" },
    { name: "Home appliance", image: Pic7, price: "From USD 19" },
    { name: "Coffee maker", image: Pic8, price: "From USD 10" },
  ];

  // Slider navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  return (
    <div className="container lg:mt-6 mt-3">
      <div className="max-w-7xl mx-auto px-4 py-6 bg-white rounded-xl lg:shadow-lg">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Section - Banner */}
          <div className="w-full lg:w-1/3 relative rounded-xl overflow-hidden  min-h-[300px] hidden lg:block">
            <div
              style={{
                backgroundImage: `url(${HomeOutdoorBanner})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transform: "scaleX(-1)",
              }}
              className="absolute inset-0 flex flex-col  p-8 items-end"
            >
              <div className="relative z-10 text-black flex flex-col items-end">
                <h2
                  style={{
                    transform: "scaleX(-1)",
                  }}
                  className="text-3xl font-bold mb-3 w-40"
                >
                  Home and outdoor
                </h2>
                <Link to="/products-page">
                  <button
                    style={{
                      transform: "scaleX(-1)",
                    }}
                    className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    Source now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:hidden border-b-2 border-gray-200 pb-2">
            <h2 className="text-xl font-semibold mb-2">Home and outdoor</h2>
          </div>

          {/* Right Section - Products */}
          <div className="w-full lg:w-2/3">
            {/* Desktop Grid */}
            <div className="hidden lg:grid grid-cols-4 gap-4">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="p-4 flex flex-col items-center">
                    <img
                      src={product.image}
                      className=" rounded-xl w-16 h-16 mb-3"
                    />
                    <h3 className="text-sm font-semibold text-gray-800 text-center">
                      {product.name}
                    </h3>
                    <p className="text-gray-500 text-xs mt-1">
                      {product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Slider */}
            <div className="lg:hidden relative border-b-2 border-gray-200 pb-2">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {products.map((product, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-2">
                      <div className="bg-white rounded-xl shadow-md overflow-hidden ">
                        <div className="p-4 flex flex-col items-center">
                          <img
                            src={product.image}
                            className=" rounded-xl w-50 h-50 mb-3"
                          />
                          <h3 className="font-semibold text-gray-800 text-center text-sm">
                            {product.name}
                          </h3>
                          <p className="text-gray-500 text-xs mt-1">
                            {product.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10"
              >
                <FiChevronLeft className="text-gray-700 text-xl" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10"
              >
                <FiChevronRight className="text-gray-700 text-xl" />
              </button>

              {/* Pagination Dots */}
              <div className="flex justify-center mt-4 space-x-2">
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full ${
                      index === currentSlide ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
            {/* Mobile Button */}

            <div className="lg:hidden mt-4 ">
              {" "}
              <Link to="/products-page">
                <button className="bg-white text-blue-500 px-6 py-3 rounded-lg font-medium hover:bg-blue-100 transition-colors flex gap-3 items-center">
                  Source now <FaLongArrowAltRight className="text-xl" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeOutdoor;
