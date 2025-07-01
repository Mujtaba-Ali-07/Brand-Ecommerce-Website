import React from "react";
import { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { IoCartOutline, IoCartSharp } from "react-icons/io5";

const ProductCard = ({
  title = "",
  originalPrice = null,
  salePrice = null,
  rating = null,
  reviewCount = null,
  hasDiscount = false,
  image = null,
  totalOrder = null,
  view = "grid", // 'grid' or 'flex'
}) => {
  const [heartActive, setHeartActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);

  const handleHeartClick = () => {
    setHeartActive(!heartActive);
  };
  const handleCartClick = () => {
    setCartActive(!cartActive);
  };

  // Render star ratings
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;

    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return (
              <svg
                key={i}
                className="w-4 h-4 text-yellow-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            );
          } else if (i === fullStars && halfStar) {
            return (
              <svg
                key={i}
                className="w-4 h-4 text-yellow-400 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            );
          } else {
            return (
              <svg
                key={i}
                className="w-4 h-4 text-gray-300 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            );
          }
        })}
        <span className="ml-1 text-xs text-gray-500">{rating.toFixed(1)}</span>
        {view === "grid" && (
          <>
            <span className="mx-1 text-gray-300">|</span>
            <span className="text-xs text-gray-500">{reviewCount}k</span>
          </>
        )}
      </div>
    );
  };

  // Grid View Layout
  if (view === "grid") {
    return (
      <div className="w-full max-w-xs mx-auto bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
        {/* Product Image */}
        <div className="relative border-b border-gray-100">
          <img
            src={image}
            className="mx-6 my-3 rounded-t-xl w-45 h-50"
            alt={title}
          />

          {/* Action Buttons */}
          <div className="absolute top-3 right-3 flex flex-col space-y-2">
            <button
              onClick={handleHeartClick}
              className="bg-white rounded-full p-2 shadow-md hover:bg-blue-50 transition-colors"
            >
              {heartActive ? (
                <FaHeart className="text-blue-600" />
              ) : (
                <FiHeart className="text-blue-600" />
              )}
            </button>
            <button
              onClick={handleCartClick}
              className="bg-white rounded-full p-2 shadow-md hover:bg-blue-50 transition-colors"
            >
              {cartActive ? (
                <IoCartSharp className="text-blue-600" />
              ) : (
                <IoCartOutline className="text-blue-600" />
              )}
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="px-4 py-2">
          {/* Price */}
          <div className="mt-3 flex items-center">
            {hasDiscount ? (
              <>
                <span className="text-lg font-bold text-gray-900">
                  ${salePrice.toFixed(2)}
                </span>
                <span className="ml-2 text-sm text-gray-500 line-through">
                  ${originalPrice.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-gray-900">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Rating and Reviews */}
          <div className="">{renderStars(rating)}</div>

          {/* Product Title */}
          <h3 className="text-gray-900 line-clamp-2 h-12 overflow-hidden">
            {title}
          </h3>
        </div>
      </div>
    );
  }

  // Flex View Layout
  return (
    <div className="w-full bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md flex flex-col sm:flex-row h-56 sm:h-40">
      {/* Product Image */}
      <div className="relative border-b sm:border-b-0 sm:border-r border-gray-100 w-full sm:w-1/3 h-48 sm:h-full">
        <img
          src={image}
          className="w-full h-full object-contain p-4"
          alt={title}
        />

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2">
          <button
            onClick={handleHeartClick}
            className="bg-white rounded-full p-2 shadow-md hover:bg-blue-50 transition-colors"
          >
            {heartActive ? (
              <FaHeart className="text-blue-600" />
            ) : (
              <FiHeart className="text-blue-600" />
            )}
          </button>
          <button
            onClick={handleCartClick}
            className="bg-white rounded-full p-2 shadow-md hover:bg-blue-50 transition-colors"
          >
            {cartActive ? (
              <IoCartSharp className="text-blue-600" />
            ) : (
              <IoCartOutline className="text-blue-600" />
            )}
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="px-4 py-2 w-full sm:w-2/3 flex flex-col justify-between">
        <div>
          {/* Product Title */}
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>

          {/* Price */}
          <div className="mt-1 flex items-center">
            {hasDiscount ? (
              <>
                <span className="text-lg font-bold text-gray-900">
                  ${salePrice.toFixed(2)}
                </span>
                <span className="ml-2 text-sm text-gray-500 line-through">
                  ${originalPrice.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-gray-900">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Rating and Additional Info */}
          <div className="mt-2 flex flex-wrap items-center">
            {renderStars(rating)}
            <span className="mx-2 text-blue-500">●</span>
            <span className="text-xs text-gray-500">{totalOrder} orders</span>
            <span className="mx-2 text-blue-500">●</span>
            <span className="text-xs text-gray-500">Free Shipping</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
