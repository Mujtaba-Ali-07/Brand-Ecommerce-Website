// src/components/CartSection.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiTrash2,
  FiHeart,
  FiArrowLeft,
  FiTag,
  FiShoppingCart,
} from "react-icons/fi";

import Pic1 from "../../../assets/recommended-items/1.png";
import Pic2 from "../../../assets/recommended-items/2.png";
import Pic3 from "../../../assets/recommended-items/3.jpg";
import { FaCartShopping, FaChevronDown, FaUser } from "react-icons/fa6";

const CartSection = () => {
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(false);

  const cartItems = [
    {
      id: 1,
      title: "T-shirts with multiple colors, for men and lady",
      image: Pic1,
      attributes: {
        size: "medium",
        color: "blue",
        material: "Plastic",
      },
      seller: "Artel Market",
      price: 78.99,
      quantity: 9,
    },
    {
      id: 2,
      title: "Blue Short Pant",
      image: Pic2,
      attributes: {
        size: "medium",
        color: "blue",
        material: "Plastic",
      },
      seller: "Best factory LLC",
      price: 39.0,
      quantity: 3,
    },
    {
      id: 3,
      title: "Medium Brown Jacket",
      image: Pic3,
      attributes: {
        size: "medium",
        color: "brown",
        material: "Plastic",
      },
      seller: "Artel Market",
      price: 170.5,
      quantity: 1,
    },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = 60.0;
  const tax = 14.0;
  const total = subtotal - discount + tax;
  const navigate = useNavigate();

  const handleApplyCoupon = () => {
    if (couponCode.trim() !== "") {
      setAppliedCoupon(true);
    }
  };

  return (
    <div className="max-w-7xl mx-auto md:px-4 md:py-8 p-0  lg:pb-8">
      {/* Mobile Header */}
      <div className="md:hidden sticky top-0 bg-white shadow-sm z-10 p-4 flex items-center justify-start gap-5">
        <button onClick={() => navigate(-1)} className="text-gray-600">
          <FaChevronDown className="transform rotate-90" />
        </button>
        <div className="text-center">
          <h1 className="font-medium text-gray-900 truncate sm:max-w-sm max-w-xs mx-auto">
            Shopping Cart
          </h1>
        </div>
      </div>
      {/* Desktop Header */}
      <h1 className="hidden lg:block text-3xl font-bold mb-8">
        Your Shopping Cart
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="border-b border-gray-100 p-4 sm:p-6"
              >
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    className="  rounded-lg w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 mb-1 truncate">
                      {item.title}
                    </h3>

                    <div className="text-sm text-gray-600 mb-1">
                      <span>Size: {item.attributes.size}, </span>
                      <span>Color: {item.attributes.color}</span>
                    </div>

                    <div className="text-sm mb-2">
                      <span className="text-gray-600">Seller: </span>
                      <span className="font-medium text-blue-600 truncate">
                        {item.seller}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="text-sm font-bold">
                        ${item.price.toFixed(2)}
                      </div>
                      <div className="text-sm text-gray-600">
                        Qty: {item.quantity}
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-4">
                      <button className="flex items-center text-red-500 hover:text-red-700 transition-colors">
                        <FiTrash2 className="mr-1" />
                        <span>Remove</span>
                      </button>
                      <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                        <FiHeart className="mr-1" />
                        <span>Save for later</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="p-4 sm:p-6">
              <button
                onClick={() => navigate(-1)}
                className="hidden lg:flex text-blue-600 font-medium items-center"
              >
                <FiArrowLeft className="mr-2" />
                Back to shop
              </button>
            </div>
          </div>
        </div>

        {/* Order Summary - Desktop */}
        <div className="hidden lg:block lg:w-1/3">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            {/* Coupon Section */}
            <div className="mb-6">
              <h3 className="font-medium text-gray-900 mb-3">Have a coupon?</h3>
              <div className="flex">
                <div className="relative flex-1">
                  <FiTag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Add coupon"
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                </div>
                <button
                  onClick={handleApplyCoupon}
                  className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors"
                >
                  Apply
                </button>
              </div>
              {appliedCoupon && (
                <div className="mt-2 text-green-600 text-sm">
                  Coupon applied successfully!
                </div>
              )}
            </div>

            {/* Order Total */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Discount:</span>
                <span className="text-green-600 font-medium">
                  -${discount.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Tax:</span>
                <span className="font-medium">+${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-4 mb-6">
                <span className="text-lg font-bold">Total:</span>
                <span className="text-lg font-bold">${total.toFixed(2)}</span>
              </div>

              <button className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
                Checkout
              </button>

              <div className="mt-6 flex justify-center">
                <div className="bg-gray-100 px-4 py-2 rounded-md flex items-center">
                  <span className="text-gray-700 mr-2">VISA</span>
                  <span className="font-medium">4 Pay</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Order Summary */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg">
        <div className="flex justify-between items-center mb-2">
          <div>
            <div className="text-sm text-gray-600">
              Items ({cartItems.length}):
            </div>
            <div className="font-bold text-lg">${total.toFixed(2)}</div>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium flex items-center">
            <FiShoppingCart className="mr-2" />
            Checkout
          </button>
        </div>
        <div className="text-xs text-gray-500 mt-1">
          Shipping: $32.00 · Tax: $10.00
        </div>
      </div>
    </div>
  );
};

export default CartSection;
