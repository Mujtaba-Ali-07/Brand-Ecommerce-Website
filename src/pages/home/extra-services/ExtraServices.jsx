// src/components/ExtraServices.jsx
import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import Service1 from "../../../assets/banners/oes-1.png";
import Service2 from "../../../assets/banners/oes-2.png";
import Service3 from "../../../assets/banners/oes-3.png";
import Service4 from "../../../assets/banners/oes-4.png";

const ExtraServices = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      title: "Source from Industry Hubs",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-[#2d2f31]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Service1})`,
    },
    {
      title: "Customize Your Products",

      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-[#2d2f31]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
          />
        </svg>
      ),
      background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Service2})`,
    },
    {
      title: "Fast, reliable shipping",

      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-[#2d2f31]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
          />
        </svg>
      ),
      background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Service3})`,
    },
    {
      title: "Product monitoring",

      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-[#2d2f31]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Service4})`,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  return (
    <div id="services" className="container lg:mt-6 mt-3">
      <div className=" mb-8">
        <h2 className="lg:text-4xl text-2xl font-bold text-gray-800 mb-4">
          Our extra services
        </h2>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative rounded-xl bg-white overflow-hidden shadow-md hover:shadow-lg h-80"
          >
            <div
              className="h-[60%] w-full"
              style={{
                background: service.background,
                backgroundSize: "cover",
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="bg-[#d1e7ff] p-4 rounded-full mb-6">
                  {service.icon}
                </div>
              </div>
            </div>
            <div className="relative inset-0 flex flex-col items-center justify-center text-center p-8">
              <h3 className="text-xl font-bold  mb-3">{service.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden relative">
        <div className="overflow-hidden rounded-xl">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {services.map((service, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div
                  className="relative rounded-xl overflow-hidden h-80"
                  style={{
                    background: service.background,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                    <div className="bg-[#d1e7ff] p-4 rounded-full mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-white/90">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2  z-10"
        >
          <FiChevronLeft className="text-gray-700 text-xl" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2  z-10"
        >
          <FiChevronRight className="text-gray-700 text-xl" />
        </button>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExtraServices;
