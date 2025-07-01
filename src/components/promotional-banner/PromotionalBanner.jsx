import React from "react";

import { FaArrowRight } from "react-icons/fa6";

const PromotionalBanner = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-[#237CFF] to-[#005ADE] rounded-xl p-6 shadow-md">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">
              Super discount on more than 100 USD
            </h2>
            <p className="text-white/90 mt-2">
              Have you ever finally just write dummy info
            </p>
          </div>
          <button className="bg-[#FF9017] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#FF9017]/90 transition-all flex items-center gap-2">
            <span>Shop</span>
            <span>Now</span>
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanner;
