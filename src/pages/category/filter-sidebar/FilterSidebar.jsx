// src/components/FilterSidebar.jsx
import React, { useRef, useEffect } from "react";
import { FiChevronDown, FiStar, FiFilter, FiX } from "react-icons/fi";

const FilterSidebar = ({
  activeFilters = [],
  onAddFilter = () => {},
  onRemoveFilter = () => {},
  priceRange = { min: 0, max: 1000 },
  setPriceRange = () => {},
  selectedCondition = "any",
  setSelectedCondition = () => {},
}) => {
  // Use safe price range values directly
  const safePriceRange = priceRange || { min: 0, max: 1000 };

  // State for open/closed sections
  const [openSections, setOpenSections] = React.useState({
    category: true,
    branch: true,
    features: true,
    price: true,
    condition: true,
    ratings: true,
  });

  // Refs for slider
  const minSliderRef = useRef(null);
  const maxSliderRef = useRef(null);
  const progressRef = useRef(null);

  // Initialize slider positions
  useEffect(() => {
    updateProgress();
  }, []);

  // Update progress bar when sliders change
  const updateProgress = () => {
    if (minSliderRef.current && maxSliderRef.current && progressRef.current) {
      const minVal = parseInt(minSliderRef.current.value);
      const maxVal = parseInt(maxSliderRef.current.value);
      progressRef.current.style.left = (minVal / 1000) * 100 + "%";
      progressRef.current.style.right = 100 - (maxVal / 1000) * 100 + "%";
    }
  };

  // Handle min slider change
  const handleMinChange = (e) => {
    const minVal = parseInt(e.target.value);
    const maxVal = maxSliderRef.current
      ? parseInt(maxSliderRef.current.value)
      : safePriceRange.max;

    if (minVal > maxVal) {
      setPriceRange({ min: maxVal, max: maxVal });
      if (minSliderRef.current) minSliderRef.current.value = maxVal;
    } else {
      setPriceRange({ min: minVal, max: maxVal });
    }
    updateProgress();
  };

  // Handle max slider change
  const handleMaxChange = (e) => {
    const maxVal = parseInt(e.target.value);
    const minVal = minSliderRef.current
      ? parseInt(minSliderRef.current.value)
      : safePriceRange.min;

    if (maxVal < minVal) {
      setPriceRange({ min: minVal, max: minVal });
      if (maxSliderRef.current) maxSliderRef.current.value = minVal;
    } else {
      setPriceRange({ min: minVal, max: maxVal });
    }

    updateProgress();
  };

  // Toggle section visibility
  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Handle filter selection
  const handleFilterToggle = (type, value, id) => {
    const filterId = `${type}-${id}`;

    if (activeFilters.some((f) => f.id === filterId)) {
      onRemoveFilter(filterId);
    } else {
      onAddFilter({
        id: filterId,
        name: value,
        type,
      });
    }
  };

  // Handle rating selection
  const handleRatingToggle = (rating) => {
    const filterId = `rating-${rating}`;
    const name = `${rating} star`;
    const icon = (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <FiStar
            key={i}
            className={`${
              i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
            } mr-0.5`}
            size={16}
          />
        ))}
      </div>
    );

    if (activeFilters.some((f) => f.id === filterId)) {
      onRemoveFilter(filterId);
    } else {
      onAddFilter({
        id: filterId,
        name,
        type: "rating",
        icon,
      });
    }
  };

  // Apply price filter
  const applyPriceFilter = () => {
    const filterId = `price-${safePriceRange.min}-${safePriceRange.max}`;
    const name = `$${safePriceRange.min} - $${safePriceRange.max}`;

    // Remove existing price filter
    const existingPriceFilter = activeFilters.find((f) => f.type === "price");
    if (existingPriceFilter) {
      onRemoveFilter(existingPriceFilter.id);
    }

    // Add new price filter
    onAddFilter({
      id: filterId,
      name,
      type: "price",
    });
  };

  // Render star ratings
  const renderStars = (rating) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <FiStar
            key={i}
            className={`${
              i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
            } mr-0.5`}
            size={16}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="w-full max-w-xs rounded-lg p-6">
      {/* Mobile header */}

      {/* Category Section */}
      <div className="border-b border-gray-200 pb-4 mb-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("category")}
        >
          <h3 className="text-lg font-semibold text-gray-900">Category</h3>
          <FiChevronDown
            className={`transform ${
              openSections.category ? "rotate-180" : ""
            } transition-transform`}
          />
        </div>

        {openSections.category && (
          <div className="mt-3 space-y-2">
            {[
              "Mobile accessory",
              "Electronics",
              "Smartphones",
              "Modem tech",
            ].map((category, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`category-${index}`}
                  className="h-4 w-4 text-blue-600 rounded"
                  checked={activeFilters.some(
                    (f) => f.id === `category-${index}`
                  )}
                  onChange={() =>
                    handleFilterToggle("category", category, index)
                  }
                />
                <label
                  htmlFor={`category-${index}`}
                  className="ml-2 text-gray-700"
                >
                  {category}
                </label>
              </div>
            ))}
            <button className="mt-2 text-blue-600 font-medium flex items-center">
              See all
              <FiChevronDown className="ml-1" />
            </button>
          </div>
        )}
      </div>

      {/* Branch Section */}
      <div className="border-b border-gray-200 pb-4 mb-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("branch")}
        >
          <h3 className="text-lg font-semibold text-gray-900">Branch</h3>
          <FiChevronDown
            className={`transform ${
              openSections.branch ? "rotate-180" : ""
            } transition-transform`}
          />
        </div>

        {openSections.branch && (
          <div className="mt-3 space-y-2">
            {["Samsung", "Apple", "Huawei", "Pocco", "Letomo"].map(
              (brand, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`brand-${index}`}
                    className="h-4 w-4 text-blue-600 rounded"
                    checked={activeFilters.some(
                      (f) => f.id === `brand-${index}`
                    )}
                    onChange={() => handleFilterToggle("brand", brand, index)}
                  />
                  <label
                    htmlFor={`brand-${index}`}
                    className="ml-2 text-gray-700"
                  >
                    {brand}
                  </label>
                </div>
              )
            )}
            <button className="mt-2 text-blue-600 font-medium flex items-center">
              See all
              <FiChevronDown className="ml-1" />
            </button>
          </div>
        )}
      </div>

      {/* Features Section */}
      <div className="border-b border-gray-200 pb-4 mb-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("features")}
        >
          <h3 className="text-lg font-semibold text-gray-900">Features</h3>
          <FiChevronDown
            className={`transform ${
              openSections.features ? "rotate-180" : ""
            } transition-transform`}
          />
        </div>

        {openSections.features && (
          <div className="mt-3 space-y-2">
            {[
              "Metallic",
              "Plastic cover",
              "8GB RAM",
              "Super power",
              "Large Memory",
            ].map((feature, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`feature-${index}`}
                  className="h-4 w-4 text-blue-600 rounded"
                  checked={activeFilters.some(
                    (f) => f.id === `feature-${index}`
                  )}
                  onChange={() => handleFilterToggle("feature", feature, index)}
                />
                <label
                  htmlFor={`feature-${index}`}
                  className="ml-2 text-gray-700"
                >
                  {feature}
                </label>
              </div>
            ))}
            <button className="mt-2 text-blue-600 font-medium flex items-center">
              See all
              <FiChevronDown className="ml-1" />
            </button>
          </div>
        )}
      </div>

      {/* Price Range Section */}
      <div className="border-b border-gray-200 pb-4 mb-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("price")}
        >
          <h3 className="text-lg font-semibold text-gray-900">Price range</h3>
          <FiChevronDown
            className={`transform ${
              openSections.price ? "rotate-180" : ""
            } transition-transform`}
          />
        </div>

        {openSections.price && (
          <div className="mt-4">
            <div className="flex justify-between mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Min
                </label>
                <input
                  type="number"
                  className="w-24 px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  value={safePriceRange.min}
                  onChange={(e) => {
                    const value = parseInt(e.target.value) || 0;
                    if (value <= safePriceRange.max) {
                      setPriceRange({ min: value, max: safePriceRange.max });
                      if (minSliderRef.current)
                        minSliderRef.current.value = value;
                      updateProgress();
                    }
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Max
                </label>
                <input
                  type="number"
                  className="w-24 px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                  value={safePriceRange.max}
                  onChange={(e) => {
                    const value = parseInt(e.target.value) || 0;
                    if (value >= safePriceRange.min) {
                      setPriceRange({ min: safePriceRange.min, max: value });
                      if (maxSliderRef.current)
                        maxSliderRef.current.value = value;
                      updateProgress();
                    }
                  }}
                />
              </div>
            </div>

            <div className="relative mb-8">
              <div className="slider relative h-1 rounded-md bg-gray-200">
                <div
                  ref={progressRef}
                  className="progress absolute h-1 rounded-md bg-blue-500"
                ></div>
              </div>

              <div className="relative">
                <input
                  ref={minSliderRef}
                  type="range"
                  min="0"
                  max="1000"
                  defaultValue="0"
                  className="range-min absolute w-full top-[-4px] h-1 bg-transparent appearance-none pointer-events-none"
                  onChange={handleMinChange}
                />
                <input
                  ref={maxSliderRef}
                  type="range"
                  min="0"
                  max="1000"
                  defaultValue="1000"
                  className="range-max absolute w-full top-[-4px] h-1 bg-transparent appearance-none pointer-events-none"
                  onChange={handleMaxChange}
                />
              </div>
            </div>

            <button
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
              onClick={applyPriceFilter}
            >
              Apply
            </button>
          </div>
        )}
      </div>

      {/* Condition Section */}
      <div className="border-b border-gray-200 pb-4 mb-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("condition")}
        >
          <h3 className="text-lg font-semibold text-gray-900">Condition</h3>
          <FiChevronDown
            className={`transform ${
              openSections.condition ? "rotate-180" : ""
            } transition-transform`}
          />
        </div>

        {openSections.condition && (
          <div className="mt-3 space-y-2">
            {["Any", "Refurbished", "Brand new", "Old items"].map(
              (condition, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="radio"
                    id={`condition-${index}`}
                    name="condition"
                    className="h-4 w-4 text-blue-600"
                    checked={
                      selectedCondition ===
                      condition.toLowerCase().replace(" ", "-")
                    }
                    onChange={() =>
                      setSelectedCondition(
                        condition.toLowerCase().replace(" ", "-")
                      )
                    }
                  />
                  <label
                    htmlFor={`condition-${index}`}
                    className="ml-2 text-gray-700"
                  >
                    {condition}
                  </label>
                </div>
              )
            )}
          </div>
        )}
      </div>

      {/* Ratings Section */}
      <div className="pb-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleSection("ratings")}
        >
          <h3 className="text-lg font-semibold text-gray-900">Ratings</h3>
          <FiChevronDown
            className={`transform ${
              openSections.ratings ? "rotate-180" : ""
            } transition-transform`}
          />
        </div>

        {openSections.ratings && (
          <div className="mt-3 space-y-2">
            {[5, 4, 3].map((rating, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`rating-${index}`}
                  className="h-4 w-4 text-blue-600 rounded"
                  checked={activeFilters.some(
                    (f) => f.id === `rating-${rating}`
                  )}
                  onChange={() => handleRatingToggle(rating)}
                />
                <label htmlFor={`rating-${index}`} className="ml-2">
                  {renderStars(rating)}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx="true">{`
        input[type="range"] {
          -webkit-appearance: none;
          pointer-events: none;
        }

        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          pointer-events: auto;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        input[type="range"]::-moz-range-thumb {
          pointer-events: auto;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default FilterSidebar;
