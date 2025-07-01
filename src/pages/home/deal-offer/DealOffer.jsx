// src/components/DealOffer.jsx
import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import Deal1 from "../../../assets/deals/1.png";
import Deal2 from "../../../assets/deals/2.png";
import Deal3 from "../../../assets/deals/3.png";
import Deal4 from "../../../assets/deals/4.png";
import Deal5 from "../../../assets/deals/5.png";

const DealOffer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 13,
    minutes: 34,
    seconds: 56,
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const allDealOfferItems = [
    {
      name: "Smart Watches",
      discount: "-25%",
      image: Deal1,
      href: "#",
    },
    {
      name: "Laptops",
      discount: "-15%",
      image: Deal2,
      href: "#",
    },
    {
      name: "GoPro Cameras",
      discount: "-40%",
      image: Deal3,
      href: "#",
    },
    {
      name: "Headphones",
      discount: "-25%",
      image: Deal4,
      href: "#",
    },
    {
      name: "Canon Cameras",
      discount: "-25%",
      image: Deal5,
      href: "#",
    },
  ];

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const { days, hours, minutes, seconds } = prev;
        let newSeconds = seconds - 1;
        let newMinutes = minutes;
        let newHours = hours;
        let newDays = days;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes = minutes - 1;

          if (newMinutes < 0) {
            newMinutes = 59;
            newHours = hours - 1;

            if (newHours < 0) {
              newHours = 23;
              newDays = days - 1;

              if (newDays < 0) {
                // Reset timer if all time runs out
                return { days: 4, hours: 13, minutes: 34, seconds: 56 };
              }
            }
          }
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Slider navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === allDealOfferItems.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? allDealOfferItems.length - 1 : prev - 1
    );
  };

  return (
    <div id="offer" className="container lg:mt-6 mt-3">
      <div className=" max-w-7xl ">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 lg:rounded-xl lg:shadow-lg  overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left Section - Countdown */}
            <div className="w-full lg:w-2/7 p-6 bg-gradient-to-b from-blue-800 to-blue-900 text-white">
              <h2 className="text-lg md:text-xl font-bold mb-2">
                Deals and offers
              </h2>
              <p className="text-blue-200 mb-6">Hygiene equipments</p>

              <div className="">
                <p className="text-blue-300 text-sm mb-2">Offer ends in:</p>
                <div className="flex gap-2">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1 flex flex-col items-center w-full">
                    <span className="text-lg font-bold">{timeLeft.days}</span>
                    <span className="text-xs text-blue-200">Days</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1 flex flex-col items-center w-full">
                    <span className="text-lg font-bold">{timeLeft.hours}</span>
                    <span className="text-xs text-blue-200">Hours</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1 flex flex-col items-center w-full">
                    <span className="text-lg font-bold">
                      {timeLeft.minutes}
                    </span>
                    <span className="text-xs text-blue-200">Minutes</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-1 flex flex-col items-center w-full">
                    <span className="text-lg font-bold">
                      {timeLeft.seconds}
                    </span>
                    <span className="text-xs text-blue-200">Seconds</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Offers */}
            <div className="w-full lg:w-5/7 bg-white p-6">
              {/* Desktop Grid */}
              <div className="hidden lg:grid grid-cols-5 gap-4">
                {allDealOfferItems.map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4 flex flex-col items-center shadow-md hover:shadow-lg transition-all"
                  >
                    <div className=" rounded-lg w-full h-32 mb-4 flex items-center justify-center">
                      <img
                        src={item.image}
                        className="bg-gray-200 rounded-xl "
                      />
                    </div>
                    <h3 className="font-semibold text-center">{item.name}</h3>
                    <div className="mt-2 px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-bold">
                      {item.discount}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Slider */}
              <div className="lg:hidden relative">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {allDealOfferItems.map((item, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-2">
                        <div className=" rounded-lg p-4 flex flex-col items-center ">
                          <div className=" rounded-lg w-full h-40 mb-4 flex items-center justify-center">
                            <img
                              src={item.image}
                              className="  rounded-xl w-36 h-36"
                            />
                          </div>
                          <h3 className="font-semibold text-center">
                            {item.name}
                          </h3>
                          <div className="mt-2 px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-bold">
                            {item.discount}
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
                  {allDealOfferItems.map((_, index) => (
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealOffer;
