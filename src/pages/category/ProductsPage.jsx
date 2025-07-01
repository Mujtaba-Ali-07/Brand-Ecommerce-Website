import React, { useState } from "react";
import FilterSidebar from "./filter-sidebar/FilterSidebar";
import ActiveFiltersBar from "./active-filters-bar/ActiveFiltersBar";
import ProductCard from "./product-card/ProductCard";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Images
import Product1 from "../../assets/products-page/1.png";
import Product2 from "../../assets/products-page/2.png";
import Product3 from "../../assets/products-page/3.png";
import Product4 from "../../assets/products-page/10.png";
import Product5 from "../../assets/products-page/5.png";
import Product6 from "../../assets/products-page/6.png";
import Product7 from "../../assets/products-page/7.png";
import Product8 from "../../assets/products-page/8.png";
import Product9 from "../../assets/products-page/9.png";
import Subscribe from "../../components/subscribe/Subscribe";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  // State for active filters
  const [activeFilters, setActiveFilters] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [selectedCondition, setSelectedCondition] = useState("any");
  const [isVerifiedOnly, setIsVerifiedOnly] = useState(true);

  // View state for grid/flex layout
  const [view, setView] = useState("grid");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  const ProductsInfo = [
    {
      id: 1,
      title: "Xiaomi Pad 5 Pro 12",
      image: Product1,
      originalPrice: 470,
      salePrice: 440,
      rating: 4.5,
      reviewCount: 30.8,
      hasDiscount: true,
    },
    {
      id: 2,
      title: "iPhone 13 Pro",
      image: Product2,
      originalPrice: 600,
      salePrice: 550,
      rating: 5,
      reviewCount: 100,
      hasDiscount: true,
    },
    {
      id: 3,
      title: "Xiaomi Mi 9 Android",
      image: Product3,
      originalPrice: 390,
      salePrice: 360,
      rating: 4.0,
      reviewCount: 20.8,
      hasDiscount: false,
    },
    {
      id: 4,
      title: "Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle",
      image: Product4,
      originalPrice: 34,
      salePrice: 30,
      rating: 3.5,
      reviewCount: 10.2,
      hasDiscount: false,
    },
    {
      id: 5,
      title: "Coffee Maker",
      image: Product5,
      originalPrice: 99,
      salePrice: 89,
      rating: 4.0,
      reviewCount: 5.6,
      hasDiscount: true,
    },
    {
      id: 6,
      title: "Canon camera black, 100x zoom",
      image: Product6,
      originalPrice: 89.99,
      salePrice: 79.99,
      rating: 3.8,
      reviewCount: 4.9,
      hasDiscount: false,
    },
    {
      id: 7,
      title: "Headset for gaming with mic",
      image: Product7,
      originalPrice: 8.99,
      salePrice: 7,
      rating: 4.0,
      reviewCount: 8,
      hasDiscount: true,
    },
    {
      id: 8,
      title: "Blue Coat for men",
      image: Product8,
      originalPrice: 10.3,
      salePrice: 9.0,
      rating: 3.0,
      reviewCount: 2.6,
      hasDiscount: true,
    },
    {
      id: 9,
      title: "Laptops & PC",
      image: Product9,
      originalPrice: 500,
      salePrice: 400,
      rating: 4.5,
      reviewCount: 47.8,
      hasDiscount: false,
    },
  ];

  // Add a new filter
  const addFilter = (filter) => {
    // Check if filter already exists
    if (!activeFilters.some((f) => f.id === filter.id)) {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  // Remove a filter
  const removeFilter = (id) => {
    setActiveFilters(activeFilters.filter((filter) => filter.id !== id));
  };

  // Pagination calculations
  const totalPages = Math.ceil(ProductsInfo.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = ProductsInfo.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Handle items per page change
  const handleItemsPerPageChange = (e) => {
    const newItemsPerPage = Number(e.target.value);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to first page
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filter Sidebar */}
          <div className="w-full md:block hidden md:w-80">
            <FilterSidebar
              activeFilters={activeFilters}
              onAddFilter={addFilter}
              onRemoveFilter={removeFilter}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedCondition={selectedCondition}
              setSelectedCondition={setSelectedCondition}
            />
          </div>

          {/* Product Grid Area */}
          <div className="flex-1">
            {/* Active Filters Bar */}
            <ActiveFiltersBar
              activeFilters={activeFilters}
              removeFilter={removeFilter}
              clearAllFilters={() => setActiveFilters([])}
              isVerifiedOnly={isVerifiedOnly}
              setIsVerifiedOnly={setIsVerifiedOnly}
              onAddFilter={addFilter}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedCondition={selectedCondition}
              setSelectedCondition={setSelectedCondition}
              view={view}
              setView={setView}
            />

            {/* Product Grid */}
            <div
              className={
                view === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  : "flex flex-col gap-8"
              }
            >
              {currentProducts.map((product) => (
                <Link to="/products-page/product">
                  <ProductCard
                    key={product.id}
                    productId={product.id}
                    title={product.title}
                    originalPrice={product.originalPrice}
                    salePrice={product.salePrice}
                    rating={product.rating}
                    reviewCount={product.reviewCount}
                    hasDiscount={product.hasDiscount}
                    image={product.image}
                    view={view}
                  />
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between border-t border-gray-200 pt-6">
              {/* Items per page dropdown */}
              <div className="flex items-center mb-4 sm:mb-0">
                <span className="text-sm text-gray-700 mr-2">Show</span>
                <select
                  value={itemsPerPage}
                  onChange={handleItemsPerPageChange}
                  className="border border-gray-300 rounded-md py-1 px-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value={6}>6</option>
                  <option value={9}>9</option>
                  <option value={12}>10</option>
                  <option value={15}>12</option>
                </select>
              </div>

              {/* Page numbers */}
              <div className="flex items-center">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-md ${
                    currentPage === 1
                      ? "text-gray-300 cursor-not-allowed"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <FiChevronLeft size={18} />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-8 h-8 rounded-md mx-1 text-sm ${
                        currentPage === page
                          ? "bg-blue-600 text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-md ${
                    currentPage === totalPages
                      ? "text-gray-300 cursor-not-allowed"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <FiChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
    </div>
  );
};

export default ProductsPage;
