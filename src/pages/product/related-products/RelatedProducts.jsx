import React, { useState, useRef } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Pic1 from "../../../assets/recommended-items/11.jpg";
import Pic2 from "../../../assets/recommended-items/2.png";
import Pic3 from "../../../assets/recommended-items/3.jpg";
import Pic4 from "../../../assets/recommended-items/4.png";
import Pic5 from "../../../assets/recommended-items/8.png";

const RelatedProducts = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef(null);

  const products = [
    {
      id: 1,
      name: "Dark Gray T-shirts for men",
      tag: "New",
      price: 10.3,
      image: Pic1,
      rating: 4.5,
      reviews: 128,
    },
    {
      id: 2,
      name: "Jeans shorts for men blue color",
      tag: "Popular",
      price: 12.3,
      image: Pic2,
      rating: 4.2,
      reviews: 98,
    },
    {
      id: 3,
      name: "Brown winter coat medium size",
      tag: "Original",
      price: 14.5,
      image: Pic3,
      rating: 4.8,
      reviews: 215,
    },
    {
      id: 4,
      name: "Urban Cool Polo – Sky Blue",
      tag: "Original",
      price: 15.0,
      image: Pic4,
      rating: 3.9,
      reviews: 76,
    },
    {
      id: 5,
      name: "Blue Coat for men in multiple color",
      tag: "New",
      price: 20.99,
      image: Pic5,
      rating: 4.7,
      reviews: 189,
    },
  ];

  // Handle touch events for swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      handleNext();
    } else if (touchEnd - touchStart > 50) {
      // Swipe right
      handlePrev();
    }
  };

  // Navigation functions
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  // Auto-rotate products

  // Calculate visible products based on screen size
  const getVisibleProducts = () => {
    let visibleCount;

    const startIndex = activeIndex % products.length;
    const endIndex = (startIndex + visibleCount) % products.length;

    if (endIndex > startIndex) {
      return products.slice(startIndex, endIndex);
    }

    return [...products.slice(startIndex), ...products.slice(0, endIndex)];
  };

  const visibleProducts = getVisibleProducts();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
          Related products
        </h2>
      </div>

      {/* Mobile Carousel Indicators */}
      <div className="md:hidden flex justify-center mb-4 space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === activeIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
            aria-label={`Go to product ${index + 1}`}
          />
        ))}
      </div>

      {/* Products Container - Mobile Swipeable */}
      <div
        className="md:hidden relative overflow-hidden rounded-lg"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        ref={containerRef}
      >
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {products.map((product) => (
            <div key={product.id} className="w-full flex-shrink-0">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md mx-2">
                <div className="relative flex items-center justify-center p-4">
                  <img
                    src={product.image}
                    className="h-52 object-contain"
                    alt={product.name}
                  />
                  {product.tag && (
                    <div className="absolute top-3 left-3 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {product.tag}
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          } w-4 h-4`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm ml-2">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="font-bold text-lg text-gray-900">
                      ${product.price.toFixed(2)}
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 shadow-md flex items-center justify-center hover:bg-white transition-colors"
          aria-label="Previous product"
        >
          <FaChevronLeft className="h-4 w-4 text-gray-700" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 shadow-md flex items-center justify-center hover:bg-white transition-colors"
          aria-label="Next product"
        >
          <FaChevronRight className="h-4 w-4 text-gray-700" />
        </button>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {visibleProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md"
          >
            <div className="relative flex items-center justify-center p-4">
              <img
                src={product.image}
                className="h-40 object-contain"
                alt={product.name}
              />
              {product.tag && (
                <div className="absolute top-3 left-3 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {product.tag}
                </div>
              )}
            </div>

            <div className="p-3">
              <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
                {product.name}
              </h3>

              <div className="flex justify-between items-center">
                <div className="font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm font-medium transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
