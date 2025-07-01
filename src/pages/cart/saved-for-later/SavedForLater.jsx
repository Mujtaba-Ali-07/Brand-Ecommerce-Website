import React from "react";
import { FaShoppingCart, FaRegBookmark, FaTrash } from "react-icons/fa";

import Pic1 from "../../../assets/recommended-items/4.png";
import Pic2 from "../../../assets/recommended-items/6.png";
import Pic3 from "../../../assets/recommended-items/7.png";
import Pic4 from "../../../assets/recommended-items/8.png";

const SavedForLater = () => {
  const savedItems = [
    {
      id: 1,
      name: "Regular Fit Resort Shirt",
      price: 57.7,
      image: Pic1,
    },
    {
      id: 2,
      name: "Regular Fit Resort Shirt",
      price: 57.7,
      image: Pic2,
    },
    {
      id: 3,
      name: "Regular Fit Resort Shirt",
      price: 57.7,
      image: Pic3,
    },
    {
      id: 4,
      name: "Regular Fit Resort Shirt",
      price: 57.7,
      image: Pic4,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 bg-white">
      {/* Header */}
      <div className="flex items-center mb-6">
        <FaRegBookmark className="text-2xl text-blue-600 mr-3" />
        <h2 className="text-2xl font-bold text-gray-900">Saved for later</h2>
      </div>

      {/* Desktop Grid View */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {savedItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg"
          >
            {/* Product Image Placeholder */}
            <div className="flex items-center justify-center w-full">
              <img src={item.image} className="rounded-xl h-30 my-5 " />
            </div>

            <div className="p-4">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  ${item.price.toFixed(2)}
                </h3>
                <button className="text-gray-400 hover:text-red-500 transition-colors">
                  <FaTrash />
                </button>
              </div>

              <p className="text-gray-700 mb-4 line-clamp-2">{item.name}</p>

              <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg transition-colors duration-300">
                <FaShoppingCart />
                <span>Move to cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile List View */}
      <div className="md:hidden flex flex-col divide-y divide-gray-100">
        {savedItems.map((item) => (
          <div key={item.id} className="py-4">
            <div className="flex justify-between items-start">
              <div className="w-40 flex justify-center items-center">
                <img src={item.image} alt="" className="h-20" />{" "}
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 mb-1">{item.name}</h3>
                <div className="text-lg font-bold text-gray-900">
                  ${item.price.toFixed(2)}
                </div>
              </div>
            </div>

            <div className="mt-3 flex gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-blue-50 transition-colors">
                <FaShoppingCart className="text-blue-600" />
                <span>Move to cart</span>
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-red-50 transition-colors">
                <FaTrash className="text-lg text-red-600" />
                <span> Remove</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedForLater;
