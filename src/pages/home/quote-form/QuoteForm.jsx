// src/components/QuoteForm.jsx
import React, { useState } from "react";
import { FiSend, FiX } from "react-icons/fi";

import QuoteFormBanner from "../../../assets/banners/quote-form.png"; // Adjust the path as necessary

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    item: "",
    details: "",
    quantity: "",
  });
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Quote request sent successfully!");
    setFormData({ item: "", details: "", quantity: "" });
    setIsPopupOpen(false);
  };

  return (
    <div id="enquiry" className="container lg:mt-6 mt-3">
      <div
        className="lg:rounded-2xl"
        style={{
          backgroundImage: `url(${QuoteFormBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <section
          className="py-16 px-4 lg:rounded-2xl"
          style={{
            background:
              "linear-gradient(94.99deg, #2C7CF1 7.19%, rgba(0, 209, 255, 0.5) 89.49%)",
          }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Left Content */}
              <div className="lg:w-1/2 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  An easy way to send requests to all suppliers
                </h2>
                <p className="text-lg mb-8 max-w-lg">
                  Reach trusted suppliers instantly — no need to contact them
                  one by one.
                </p>

                <div className="hidden lg:block mt-12">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 max-w-md">
                    <h3 className="text-xl font-bold mb-3">
                      Why use our service?
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <div className="bg-blue-500 rounded-full p-1 mt-1 mr-3">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span>Connect with verified suppliers</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-500 rounded-full p-1 mt-1 mr-3">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span>Get competitive quotes quickly</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-500 rounded-full p-1 mt-1 mr-3">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span>No hidden fees or charges</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Mobile Button - Triggers Popup */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsPopupOpen(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center transition-colors"
                >
                  <FiSend className="mr-2" />
                  Send inquiry
                </button>
              </div>

              {/* Form Section - Desktop */}
              <div className="lg:w-1/2 w-full hidden lg:block">
                <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Send quote to suppliers
                  </h3>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                      <input
                        type="text"
                        name="item"
                        value={formData.item}
                        onChange={handleChange}
                        placeholder="What item you need?"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div className="mb-6">
                      <textarea
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        placeholder="Type more details"
                        rows="2"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      ></textarea>
                    </div>

                    <div className="mb-8">
                      <div className="flex">
                        <input
                          type="number"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          placeholder="Quantity"
                          min="1"
                          className="w-full px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                        <div className="bg-gray-100 px-4 py-3 border-t border-b border-r border-gray-300 rounded-r-lg flex items-center">
                          <span className="text-gray-700">Pcs</span>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <FiSend className="mr-2" />
                      Send inquiry
                    </button>
                  </form>

                  <div className="mt-6 text-center text-gray-600 text-sm">
                    <p>
                      We'll connect you with verified suppliers within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Mobile Popup Form */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsPopupOpen(false)}
          ></div>

          <div className="relative z-10 bg-white rounded-xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            {/* Popup Header */}
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-800">
                Send quote to suppliers
              </h3>
              <button
                onClick={() => setIsPopupOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <FiX className="text-xl" />
              </button>
            </div>

            {/* Form Content */}
            <div className="p-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="item"
                    value={formData.item}
                    onChange={handleChange}
                    placeholder="What item you need?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Type more details"
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>

                <div className="mb-6">
                  <div className="flex">
                    <input
                      type="number"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="Quantity"
                      min="1"
                      className="w-full px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <div className="bg-gray-100 px-4 py-3 border-t border-b border-r border-gray-300 rounded-r-lg flex items-center">
                      <span className="text-gray-700">Pcs</span>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center transition-colors"
                >
                  <FiSend className="mr-2" />
                  Send inquiry
                </button>
              </form>

              <div className="mt-4 text-center text-gray-600 text-sm">
                <p>We'll connect you with verified suppliers within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuoteForm;
