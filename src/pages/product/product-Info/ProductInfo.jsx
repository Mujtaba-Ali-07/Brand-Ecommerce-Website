// src/components/ProductInfo.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Pic1 from "../../../assets/recommended-items/1.png";
import Flag from "../../../assets/flags/pk.png";
import {
  FaStar,
  FaRegBookmark,
  FaTruck,
  FaCheckCircle,
  FaHeart,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { FaCartShopping, FaRegStar, FaUser } from "react-icons/fa6";
import { MdOutlineMessage, MdOutlineShoppingBasket } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductInfo = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setActive(!active);
  };

  const Pricing = [
    {
      price: 98.0,
      quantity: "50-100 pcs",
    },
    {
      price: 90.0,
      quantity: "100-700 pcs",
    },
    {
      price: 78.0,
      quantity: "700+ pcs",
    },
  ];

  const productDescription = `Stay effortlessly cool and comfortable with our Ocean Mist Textured Polo Shirt. Designed with a subtle horizontal pattern and crafted from a soft, breathable fabric blend, this polo adds a refined touch to casual and smart-casual outfits. The lightweight construction makes it ideal for warm days, while the muted ocean-blue hue pairs well with jeans, chinos, or shorts.`;

  return (
    <div className="max-w-6xl mx-auto p-0 md:p-4">
      {/* Mobile Top Bar */}
      <div className="md:hidden sticky top-0 bg-white shadow-sm z-10 p-4 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="text-gray-600">
          <FaChevronDown className="transform rotate-90" />
        </button>
        <div className="text-center">
          <h1 className="font-medium text-gray-900 truncate sm:max-w-sm max-w-xs mx-auto">
            Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/cart">
            <FaCartShopping />
          </Link>
          <FaUser />
        </div>
      </div>

      {/* Product Content */}
      <div className="bg-white md:rounded-xl md:shadow-lg overflow-hidden">
        {/* Product Header */}
        <div className="flex flex-col md:flex-row">
          {/* Product Image */}
          <div className="md:w-1/2 p-0 md:p-6 flex justify-center items-center  mt-3">
            <div className="relative w-full max-w-md h-80 md:rounded-xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={Pic1}
                  className="object-cover"
                  alt="Mens Long Sleeve T-shirt"
                />
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="md:w-1/2 p-4 md:p-6">
            <div className="mb-4 md:mb-6">
              <div className="hidden md:inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-3">
                <FaCheckCircle className="mr-1.5" />
                In stock
              </div>
              <h1 className="text-xl md:text-3xl font-bold text-gray-900 mb-2 hidden md:block">
                Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
              </h1>
              <div className="hidden md:flex items-center text-gray-600 mb-4 gap-3">
                <div className="flex">
                  <FaStar className="text-[#ff9017]" />
                  <FaStar className="text-[#ff9017]" />
                  <FaStar className="text-[#ff9017]" />
                  <FaStar className="text-[#ff9017]" />
                  <FaRegStar className="text-[#ff9017]" />
                </div>

                <span className="">9.3</span>
                <span className="">|</span>
                <MdOutlineMessage className="" />
                <span>32 Reviews</span>
                <span className="">|</span>
                <MdOutlineShoppingBasket />
                <span>130 Sold</span>
              </div>
            </div>

            {/* Mobile Price */}
            <div className="md:hidden mb-4">
              <div className="text-2xl font-bold text-red-600">
                $98.00{" "}
                <span className="text-gray-400 text-base">(50-100 pcs)</span>
              </div>
            </div>

            {/* Action Buttons for Mobile */}
            <div className="md:hidden flex flex-wrap gap-3 mb-6">
              <button className="flex-12 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                <FaCartShopping className="text-lg" />
                <span>Add to Crt</span>
              </button>
              <button
                onClick={handleClick}
                className="flex-1 bg-white  text-gray-700 border  py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                {active ? (
                  <FaHeart className="text-2xl text-blue-500" />
                ) : (
                  <FaHeart className="text-2xl text-gray-500  " />
                )}
              </button>
            </div>

            {/* Tiered Pricing (Desktop Only) */}
            <div className="hidden md:block mb-8">
              <div className="flex items-center justify-center p-3 bg-[#fff0df]">
                {Pricing.map((tier, index) => (
                  <div className="flex" key={index}>
                    <div>
                      <div className="flex flex-wrap items-center justify-between">
                        <div
                          onClick={() => setSelectedIndex(index)}
                          className="flex items-baseline gap-2"
                        >
                          <span
                            className={`text-2xl font-bold ${
                              selectedIndex === index
                                ? "text-red-600"
                                : "text-gray-900"
                            }`}
                          >
                            ${tier.price.toFixed(2)}
                          </span>
                          <span className="text-sm text-gray-500">/ unit</span>
                        </div>
                        <div className="text-sm text-gray-700 px-3 py-1 rounded-full">
                          {tier.quantity}
                        </div>
                      </div>
                    </div>
                    {index !== Pricing.length - 1 && (
                      <div className="h-20 w-[1px] bg-black/40 mr-3"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons (Desktop Only) */}
            <div className="hidden md:flex flex-wrap gap-3 mb-8">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                <FaCartShopping className="text-lg" />
                <span>Add to Cart</span>
              </button>
              <button className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <FaRegBookmark />
                <span>Save for Later</span>
              </button>
            </div>
          </div>
        </div>

        {/* Product Details for Mobile */}
        <div className="md:hidden border-t border-gray-200 px-4 py-4">
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="text-gray-600 font-medium">Condition</div>
            <div className="text-gray-900">Brand new</div>

            <div className="text-gray-600 font-medium">Material</div>
            <div className="text-gray-900">Plastic</div>

            <div className="text-gray-600 font-medium">Category</div>
            <div className="text-gray-900">Electronics, gadgets</div>

            <div className="text-gray-600 font-medium">Item num</div>
            <div className="text-gray-900">23421</div>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <h3 className="font-medium text-gray-900 mb-2">Description</h3>
            <p className="text-gray-700">
              {showFullDescription
                ? productDescription
                : `${productDescription.substring(0, 100)}...`}
            </p>
            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="text-blue-600 mt-2 flex items-center"
            >
              {showFullDescription ? "Show less" : "Read more"}
              {showFullDescription ? (
                <FaChevronUp className="ml-1" />
              ) : (
                <FaChevronDown className="ml-1" />
              )}
            </button>
          </div>
        </div>

        {/* Additional Information Sections (Desktop Only) */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 p-6 border-t border-gray-100">
          {/* Product Details */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Price Details
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-32 text-gray-600 font-medium">
                  Negotiable:
                </div>
                <div className="text-gray-800">Yes</div>
              </div>
              <div className="flex items-center">
                <div className="w-32 text-gray-600 font-medium">Type:</div>
                <div className="text-gray-800">Classic shoes</div>
              </div>
              <div className="flex items-center">
                <div className="w-32 text-gray-600 font-medium">Material:</div>
                <div className="text-gray-800">Plastic material</div>
              </div>
              <div className="flex items-center">
                <div className="w-32 text-gray-600 font-medium">Design:</div>
                <div className="text-gray-800">Modern nice</div>
              </div>
            </div>
          </div>

          {/* Customization */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Customization
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>Customized logo and design custom packages</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>
                  <span className="font-medium">Protection:</span> Refund Policy
                </span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span>
                  <span className="font-medium">Warranty:</span> 2 years full
                  warranty
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Supplier Information */}
        <div className="p-4 md:p-6 border-t border-gray-100 bg-gray-50">
          <h2 className="text-xl font-bold text-gray-900 mb-4 hidden md:block">
            Supplier
          </h2>

          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 text-white w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center font-bold text-lg md:text-xl">
                R
              </div>
              <div>
                <h3 className="font-bold md:text-lg text-gray-900">
                  Guanjoi Trading LLC
                </h3>
                <div className="flex gap-2 items-center mt-1">
                  <div className="hidden md:flex gap-3">
                    <img
                      src={Flag}
                      alt="Pakistan flag"
                      className="h-5 w-10 border border-gray-300"
                    />
                    <p className="text-gray-600">Pakistan, Karachi</p>
                  </div>

                  {/* Mobile supplier info */}
                  <div className="md:hidden flex gap-2 items-center text-sm">
                    <span>Germany</span>
                    <div className="flex items-center gap-1 text-green-600">
                      <FaCheckCircle className="text-xs" />
                      <span>Verified</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <FaTruck className="text-xs" />
                      <span>Shipping</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1 rounded-full">
                <FaCheckCircle />
                <span>Verified Seller</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                <FaTruck />
                <span>Worldwide shipping</span>
              </div>
            </div>
          </div>

          <div className="mt-4 md:mt-6 flex flex-wrap gap-3">
            <button className="text-blue-600 hover:text-blue-800 font-medium px-2 py-1 md:px-4 md:py-2 text-sm md:text-base">
              View Seller's Profile
            </button>
            <button className=" inline-block text-blue-600 hover:text-blue-800 font-medium px-4 py-2">
              Send Inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
