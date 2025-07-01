// src/components/ActiveFiltersBar.jsx
import React from "react";
import { useState } from "react";
import { FiX, FiMenu, FiFilter } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { BsFillGridFill } from "react-icons/bs";
import FilterSidebar from "../filter-sidebar/FilterSidebar";

const ActiveFiltersBar = ({
  activeFilters = [],
  removeFilter = () => {},
  clearAllFilters = () => {},
  isVerifiedOnly = false,
  setIsVerifiedOnly = () => {},
  onAddFilter = () => {},
  priceRange = { min: 0, max: 1000 },
  setPriceRange = () => {},
  selectedCondition = "any",
  setSelectedCondition = () => {},
  view,
  setView,
}) => {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto">
        {/* Top Section - Item Count and Verified Filter */}
        <div className="flex  items-center justify-between gap-4 py-3 px-4 border-1 rounded-lg bg-white border-gray-200">
          <div className=" items-center md:w-full hidden md:flex">
            <span className="font-medium text-gray-900">12,911</span>
            <span className="text-gray-600 ml-1">items in</span>
            <span className="font-medium text-gray-900 ml-1">
              Mobile accessory
            </span>
          </div>

          <div className="flex items-center w-full justify-between md:justify-normal gap-3 flex-wrap">
            {/* Verified Only Toggle */}
            <label className="md:flex hidden items-center cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={isVerifiedOnly}
                  onChange={() => setIsVerifiedOnly(!isVerifiedOnly)}
                />
                <div
                  className={`block w-10 h-5 rounded-full transition-colors ${
                    isVerifiedOnly ? "bg-blue-500" : "bg-gray-300"
                  }`}
                ></div>
                <div
                  className={`absolute left-0.5 top-0.5 bg-white w-4 h-4 rounded-full transition-transform ${
                    isVerifiedOnly ? "transform translate-x-5" : ""
                  }`}
                ></div>
              </div>
              <span className="ml-2 text-gray-700 flex items-center">
                Verified only
              </span>
            </label>

            {/* Sort Dropdown */}
            <div className="flex items-center">
              <div className="relative border border-gray-200">
                <select className="appearance-none bg-transparent border-0 py-1 pl-1 pr-8 text-gray-900  cursor-pointer focus:outline-none focus:ring-0">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                  <option>Most Popular</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div
              onClick={() => setShowMobileFilters(true)}
              className="md:hidden flex items-center gap-3 border border-gray-200 p-2 rounded-md cursor-pointer"
            >
              <div className="flex gap-2 items-center">
                <FiFilter />
                <span>Filter</span>
                {activeFilters.length > 0 && (
                  <span className="bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {activeFilters.length}
                  </span>
                )}
              </div>
            </div>

            <div className="flex bg-gray-100 p-1 rounded-xl w-fit border border-gray-300 ">
              <button
                onClick={() => setView("grid")}
                className={`p-3 rounded-lg transition-all duration-200 ${
                  view === "grid"
                    ? "bg-white shadow text-black"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                <BsFillGridFill size={20} />
              </button>
              <button
                onClick={() => setView("flex")} // Changed from "list" to "flex"
                className={`p-3 rounded-lg transition-all duration-200 ${
                  view === "flex"
                    ? "bg-white shadow text-black"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                <FiMenu size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Active Filters Section */}
        <div className="py-3 px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Left side - Active filters */}
            <div className="flex-1">
              {/* Desktop view - Row of filters */}
              <div className="hidden md:flex flex-wrap gap-2">
                {activeFilters.map((filter) => (
                  <div
                    key={filter.id}
                    className="flex items-center bg-white border-1 border-blue-500 rounded-full px-3 py-1 text-sm"
                  >
                    {filter.icon && <span className="mr-1">{filter.icon}</span>}
                    <span className="text-gray-800">{filter.name}</span>
                    <button
                      onClick={() => removeFilter(filter.id)}
                      className="ml-1 text-gray-500 hover:text-red-500 transition-colors"
                    >
                      <FiX size={16} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Mobile view - Swipeable filters */}
              <div className="md:hidden">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm text-gray-600">Active filters:</div>

                  <div className="flex space-x-1">
                    <button className="swiper-button-prev-custom text-gray-400 hover:text-gray-600 disabled:opacity-30">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <button className="swiper-button-next-custom text-gray-400 hover:text-gray-600 disabled:opacity-30">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <Swiper
                  modules={[Navigation]}
                  spaceBetween={8}
                  slidesPerView={"auto"}
                  freeMode={true}
                  navigation={{
                    prevEl: ".swiper-button-prev-custom",
                    nextEl: ".swiper-button-next-custom",
                  }}
                >
                  {activeFilters.map((filter) => (
                    <SwiperSlide key={filter.id} className="!w-auto">
                      <div className="flex items-center bg-white border border-blue-600 rounded-full px-3 py-1.5">
                        {filter.icon && (
                          <span className="mr-1">{filter.icon}</span>
                        )}
                        <span className="text-gray-800">{filter.name}</span>
                        <button
                          onClick={() => removeFilter(filter.id)}
                          className="ml-1 text-gray-500 hover:text-red-500 transition-colors"
                        >
                          <FiX size={16} />
                        </button>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            {/* Right side - Clear all button */}
            <button
              onClick={clearAllFilters}
              className="flex items-center text-blue-600 font-medium whitespace-nowrap hover:text-blue-800 transition-colors"
            >
              <FiX className="mr-1" />
              Clear all filter
            </button>
          </div>
        </div>

        {/* Mobile Filter Sidebar - Fixed implementation */}
        {showMobileFilters && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex md:hidden">
            <div className="ml-auto h-full w-full max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-lg font-bold">Filters</h2>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <FiX size={24} />
                </button>
              </div>
              <div className="h-[calc(100vh-56px)] overflow-y-auto">
                <FilterSidebar
                  activeFilters={activeFilters}
                  onAddFilter={onAddFilter}
                  onRemoveFilter={removeFilter}
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  selectedCondition={selectedCondition}
                  setSelectedCondition={setSelectedCondition}
                  onClose={() => setShowMobileFilters(false)}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActiveFiltersBar;
