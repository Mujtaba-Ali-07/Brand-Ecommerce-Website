import React from "react";
import { FaLock, FaHeadset, FaTruck } from "react-icons/fa";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaLock className="w-8 h-8" />,
      title: "Secure payment",
      description: "Have you ever finally just",
    },
    {
      icon: <FaHeadset className="w-8 h-8" />,
      title: "Customer support",
      description: "Have you ever finally just",
    },
    {
      icon: <FaTruck className="w-8 h-8" />,
      title: "Free delivery",
      description: "Have you ever finally just",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">
      <div className="flex flex-wrap md:gap-10 ">
        {features.map((feature, index) => (
          <div
            key={index}
            className=" rounded-2xl  px-8 py-4 transition-all duration-300  hover:-translate-y-2 flex mx-auto  justify-between cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
              {feature.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wider">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
