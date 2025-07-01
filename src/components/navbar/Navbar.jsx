import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import Profile from "../../assets/user/Profile.jpg";
import {
  FaBagShopping,
  FaUser,
  FaCartShopping,
  FaHeart,
} from "react-icons/fa6";
import {
  FiAlignJustify,
  FiChevronDown,
  FiChevronUp,
  FiX,
} from "react-icons/fi";
import { MdMessage } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import {
  FaHome,
  FaStar,
  FaShoppingBag,
  FaLanguage,
  FaPhone,
  FaInfoCircle,
  FaFileContract,
  FaHandshake,
  FaShieldAlt,
} from "react-icons/fa";
import { IoIosClose } from "react-icons/io";

// Animation
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// flags
import UsFlag from "../../assets/flags/us.png";
import AeFlag from "../../assets/flags/ae.png";
import ChFlag from "../../assets/flags/ch.png";
import AuFlag from "../../assets/flags/au.png";
import DmFlag from "../../assets/flags/dm.png";
import FrFlag from "../../assets/flags/fr.png";
import RuFlag from "../../assets/flags/ru.png";
import PkFlag from "../../assets/flags/pk.png";

const allCategoryItems = [
  { name: "All Category", href: "#" },
  { name: "Electronics", href: "#" },
  { name: "Fashion", href: "#" },
  { name: "Home & Garden", href: "#" },
  { name: "Beauty", href: "#" },
  { name: "Sports", href: "#" },
];

const helpItems = [
  { name: "Contact Us", href: "#" },
  { name: "FAQs", href: "#" },
  { name: "Shipping Info", href: "#" },
  { name: "Returns Policy", href: "#" },
];

const languageOptions = [
  { code: "en", name: "English" }, // Global default
  { code: "es", name: "Español" }, // Spain, Latin America, US
  { code: "fr", name: "Français" }, // France, Canada, Africa
  { code: "de", name: "Deutsch" }, // Germany, Austria, Switzerland
  { code: "zh", name: "中文 (Chinese)" }, // Mainland China, Taiwan, Singapore
  { code: "hi", name: "हिन्दी (Hindi)" }, // India
  { code: "ar", name: "العربية (Arabic)" }, // Middle East, North Africa
  { code: "pt", name: "Português" }, // Brazil, Portugal
  { code: "ru", name: "Русский (Russian)" }, // Russia, Eastern Europe
  { code: "ja", name: "日本語 (Japanese)" }, // Japan
  { code: "ko", name: "한국어 (Korean)" }, // South Korea
  { code: "tr", name: "Türkçe" }, // Turkey
  { code: "it", name: "Italiano" }, // Italy
  { code: "bn", name: "বাংলা (Bengali)" }, // Bangladesh, India (West Bengal)
  { code: "ur", name: "اردو (Urdu)" }, // Pakistan
];

const shippingOptions = [
  { code: "us", name: "United States", flag: UsFlag },
  { code: "ae", name: "Arabic Emirates", flag: AeFlag },
  { code: "ch", name: "China", flag: ChFlag },
  { code: "au", name: "Australia", flag: AuFlag },
  { code: "dm", name: "Denmark", flag: DmFlag },
  { code: "fr", name: "France", flag: FrFlag },
  { code: "ru", name: "Russia", flag: RuFlag },
  { code: "pk", name: "Pakistan", flag: PkFlag },
];

const Navbar = ({ hiddenBar = "md:block" }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);
  const [selectedShipping, setSelectedShipping] = useState(shippingOptions[0]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(1);

  const showMobileSearch = true;

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const closeAllDropdowns = () => {
    setOpenDropdown(null);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    closeAllDropdowns();
  };

  const handleShippingChange = (option) => {
    setSelectedShipping(option);
    closeAllDropdowns();
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="bg-white ">
      {/* Top Navbar */}
      <div className="container mx-auto ">
        <div className="flex flex-wrap items-center justify-between py-4 px-4">
          {/* Brand logo and mobile menu toggle */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <div className="flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="md:hidden mr-4 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <FiAlignJustify className="text-xl" />
              </button>
              <Link to="/">
                <div className="flex items-center gap-2 cursor-pointer">
                  <FaBagShopping className="text-blue-600 text-3xl md:text-4xl drop-shadow-[6px_0_1px_rgba(96,165,250,0.7)]" />
                  <span className="text-2xl md:text-4xl text-blue-400/80 font-bold">
                    Brand
                  </span>
                </div>{" "}
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center gap-4 md:hidden">
              {/* <button onClick={() => setShowMobileSearch(!showMobileSearch)}>
                <CiSearch className="text-2xl" />
              </button> */}
              <Link to="/cart">
                <button className="relative">
                  <FaCartShopping className="text-xl" />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    3
                  </span>
                </button>
              </Link>
              <button className="relative">
                <FaUser className="text-xl" />
              </button>
            </div>
          </div>

          {/* Search bar - Hidden on mobile by default */}
          <div
            className={`${
              showMobileSearch ? "hidden" : "hidden"
            } md:flex items-center w-full md:w-1/2 lg:w-2/5 mt-4 md:mt-0 ${hiddenBar}`}
          >
            <div className="border-2 border-blue-500 flex items-center w-full rounded-lg h-12">
              <input
                type="text"
                placeholder="Search"
                className="focus:outline-none w-full py-2 px-4"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("upperCategory")}
                  className="flex items-center gap-2 h-full px-4 border-l-2 border-blue-500"
                >
                  <span>All</span>
                  <span>category</span>
                  {openDropdown === "upperCategory" ? (
                    <FiChevronUp className="text-gray-500" />
                  ) : (
                    <FiChevronDown className="text-gray-500" />
                  )}
                </button>
                {openDropdown === "upperCategory" && (
                  <Link to="/products-page">
                    <div className="absolute top-full right-0 mt-1 w-56 bg-white rounded-md shadow-lg z-20 border border-gray-200">
                      {allCategoryItems.map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          className="block px-4 py-2 text-gray-800 hover:bg-blue-50"
                          onClick={closeAllDropdowns}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </Link>
                )}
              </div>
              <div className="py-2 px-4 bg-blue-500 border-3 rounded-r-md border-blue-500 text-white flex items-center justify-center cursor-pointer">
                Search
              </div>
            </div>
          </div>

          {/* Navigation icons - Hidden on mobile */}
          <div className="hidden md:flex">
            <ul className="flex gap-6 text-lg font-semibold cursor-pointer">
              <li className="flex flex-col items-center gap-1">
                <FaUser className="text-gray-400 text-xl" />
                <span className="text-gray-400 text-xs">Profile</span>
              </li>
              <li className="flex flex-col items-center gap-1">
                <MdMessage className="text-gray-400 text-xl" />
                <span className="text-gray-400 text-xs">Message</span>
              </li>
              <li className="flex flex-col items-center gap-1">
                <FaHeart className="text-gray-400 text-xl" />
                <span className="text-gray-400 text-xs">Order</span>
              </li>
              <Link to="/cart">
                <li className="flex flex-col items-center gap-1">
                  <FaCartShopping className="text-gray-400 text-xl" />
                  <span className="text-gray-400 text-xs">Cart</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      <div className="md:border-b border-gray-200"></div>

      {/* Bottom Navbar - Desktop Only */}
      <div className={`hidden ${hiddenBar}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            {/* Navigation Links */}
            <div>
              <ul className="flex gap-6 text-base cursor-pointer">
                <li className="relative">
                  <button
                    onClick={() => toggleDropdown("category")}
                    className="flex items-center gap-2 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <FiAlignJustify />
                    <span>All Category</span>
                  </button>
                  {openDropdown === "category" && (
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg z-20 border border-gray-200">
                      {allCategoryItems.map((item, index) => (
                        <Link
                          to="/products-page"
                          key={index}
                          className="block px-4 py-2 text-gray-800 hover:bg-blue-50"
                          onClick={closeAllDropdowns}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
                <a href="#offer">
                  <li className="py-2 text-gray-700 hover:text-blue-600 transition-colors">
                    Hot Offer
                  </li>
                </a>
                <a href="#enquiry">
                  <li className="py-2 text-gray-700 hover:text-blue-600 transition-colors">
                    Enquiry
                  </li>
                </a>
                <a href="#services">
                  <li className="py-2 text-gray-700 hover:text-blue-600 transition-colors">
                    Services
                  </li>
                </a>
                <a href="#subscription">
                  <li className="py-2 text-gray-700 hover:text-blue-600 transition-colors">
                    Subscription
                  </li>
                </a>
                <li className="relative">
                  <button
                    onClick={() => toggleDropdown("help")}
                    className="flex items-center gap-1 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <span>Help</span>
                    {openDropdown === "help" ? (
                      <FiChevronUp className="text-gray-500" />
                    ) : (
                      <FiChevronDown className="text-gray-500" />
                    )}
                  </button>
                  {openDropdown === "help" && (
                    <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-20 border border-gray-200">
                      {helpItems.map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          className="block px-4 py-2 text-gray-800 hover:bg-blue-50"
                          onClick={closeAllDropdowns}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </li>
              </ul>
            </div>

            {/* Languages and shipping */}
            <div>
              <ul className="flex gap-4 text-base cursor-pointer">
                <li className="relative">
                  <button
                    onClick={() => toggleDropdown("language")}
                    className="flex items-center gap-1 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <span>{selectedLanguage.name}</span>
                    {openDropdown === "language" ? (
                      <FiChevronUp className="text-gray-500" />
                    ) : (
                      <FiChevronDown className="text-gray-500" />
                    )}
                  </button>
                  {openDropdown === "language" && (
                    <div className="absolute top-full right-0 mt-1 w-48 bg-white rounded-md shadow-lg z-20 border border-gray-200">
                      {languageOptions.map((option, index) => (
                        <button
                          key={index}
                          className={`block w-full text-left px-4 py-2 hover:bg-blue-50 ${
                            option.code === selectedLanguage.code
                              ? "text-blue-500"
                              : "text-gray-800"
                          }`}
                          onClick={() => handleLanguageChange(option)}
                        >
                          {option.name}
                        </button>
                      ))}
                    </div>
                  )}
                </li>
                <li className="relative">
                  <button
                    onClick={() => toggleDropdown("shipping")}
                    className="flex items-center gap-1 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <span>Ship to:</span>
                    <img src={selectedShipping.flag} alt="" className="h-4 " />
                    {openDropdown === "shipping" ? (
                      <FiChevronUp className="text-gray-500" />
                    ) : (
                      <FiChevronDown className="text-gray-500" />
                    )}
                  </button>
                  {openDropdown === "shipping" && (
                    <div className="absolute top-full right-0 mt-1 w-56 bg-white rounded-md shadow-lg z-20 border border-gray-200">
                      {shippingOptions.map((option, index) => (
                        <button
                          key={index}
                          className={`flex items-center w-full text-left px-4 py-2 hover:bg-blue-50 ${
                            option.code === selectedShipping.code
                              ? "text-blue-500"
                              : "text-gray-800"
                          }`}
                          onClick={() => handleShippingChange(option)}
                        >
                          <img src={option.flag} alt="" className="h-6 mr-2" />
                          <span>{option.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="md:border-b border-gray-200"></div>
      </div>

      {/* Mobile Search Bar */}
      {showMobileSearch && (
        <div className="mx-10 bg-blue-100/30 flex items-center border-2 border-gray-300 rounded-lg py-3 px-4 focus-within:border-blue-500 transition-colors md:hidden">
          <CiSearch className="text-lg text-gray-500 stroke-2" />
          <input
            type="text"
            placeholder="Search"
            className="text-lg border-0 focus:outline-none px-2 w-full "
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
          {isSearchFocused && (
            <IoIosClose className="text-2xl text-blue-700 stroke-4" />
          )}
        </div>
      )}

      {/* Mobile Category Navigation */}
      <div className="container">
        <div className="px-4 my-3 md:hidden">
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={"auto"}
            className="!pb-8"
          >
            {allCategoryItems.map((category) => (
              <SwiperSlide key={category.name} className="!w-auto">
                <Link to="./products-page">
                  <button
                    onClick={() => setActiveCategory(category.name)}
                    className={`flex flex-col items-center px-4 py-2 rounded-xl transition-all ${
                      activeCategory === category.name
                        ? "bg-blue-500 text-white shadow-lg"
                        : "bg-gray-100 hover:bg-gray-200 text-blue-500"
                    }`}
                  >
                    <span className="text-md font-medium">{category.name}</span>
                  </button>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={toggleMobileMenu}
          ></div>

          {/* Sidebar Content */}
          <div className="absolute inset-y-0 left-0 max-w-full flex">
            <div className="relative w-80 bg-white shadow-xl">
              <div className="h-full overflow-y-auto">
                {/* Close button */}
                <button
                  onClick={toggleMobileMenu}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                  <FiX className="text-xl" />
                </button>

                {/* User Profile Section */}
                <div className="pt-8 pb-6 px-6 border-b border-gray-200">
                  <div className="flex flex-col items-center">
                    <img
                      src={Profile}
                      className="bg-gray-200  rounded-xl w-16 h-16 mb-3"
                    />
                    <div className="flex gap-4 mb-2">
                      <button className="text-blue-600 font-medium hover:underline">
                        Sign In
                      </button>
                      <span className="text-gray-300">|</span>
                      <button className="text-blue-600 font-medium hover:underline">
                        Registration
                      </button>
                    </div>
                    <p className="text-sm text-gray-500">
                      Access account and manage orders
                    </p>
                  </div>
                </div>

                {/* Navigation Links */}
                <div className="py-4 border-b border-gray-200">
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        <FaHome className="text-gray-500" />
                        <span>Home</span>
                      </a>
                    </li>
                    <li>
                      <button
                        className="flex items-center justify-between w-full px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        onClick={() => setCategoryOpen(!categoryOpen)}
                      >
                        <div className="flex items-center gap-3">
                          <FiAlignJustify className="text-gray-500" />
                          <span>Category</span>
                        </div>
                        {categoryOpen ? (
                          <FiChevronUp className="text-gray-400" />
                        ) : (
                          <FiChevronDown className="text-gray-400" />
                        )}
                      </button>

                      {categoryOpen && (
                        <div className="mt-1 bg-gray-50">
                          {allCategoryItems.map((item, index) => (
                            <a
                              key={index}
                              href={item.href}
                              className="block px-14 py-2 text-sm text-gray-600 hover:bg-blue-100 hover:text-blue-600"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        <FaStar className="text-gray-500" />
                        <span>Favorites</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        <FaShoppingBag className="text-gray-500" />
                        <span>My Orders</span>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Language Selector */}
                <div className="py-4 border-b border-gray-200">
                  <button className="flex items-center gap-3 w-full px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    <FaLanguage className="text-gray-500" />
                    <span className="flex-grow text-left">Language</span>
                    <span className="text-gray-500">English</span>
                    <FiChevronDown className="text-gray-400" />
                  </button>
                </div>

                {/* Contact Links */}
                <div className="py-4 border-b border-gray-200">
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        <FaPhone className="text-gray-500" />
                        <span>Contact Us</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center gap-3 px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        <FaInfoCircle className="text-gray-500" />
                        <span>About</span>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Footer Links */}
                <div className="py-4">
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#"
                        className="flex items-center gap-3 px-6 py-2 text-sm text-gray-500 hover:text-blue-600"
                      >
                        <FaFileContract className="text-gray-400" />
                        <span>User Agreement</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center gap-3 px-6 py-2 text-sm text-gray-500 hover:text-blue-600"
                      >
                        <FaHandshake className="text-gray-400" />
                        <span>Partnership</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center gap-3 px-6 py-2 text-sm text-gray-500 hover:text-blue-600"
                      >
                        <FaShieldAlt className="text-gray-400" />
                        <span>Privacy Policy</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
