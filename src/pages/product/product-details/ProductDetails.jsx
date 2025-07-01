import React, { useState } from "react";
import { FaCheck, FaStar } from "react-icons/fa";

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "reviews", label: "Reviews" },
    { id: "shipping", label: "Shipping" },
    { id: "about", label: "About seller" },
  ];

  const features = [
    "Faded Ocean Blue with subtle horizontal texture",
    "Cotton-polyester blend for softness and shape retention",
    "Lightweight and breathable material ideal for summer wear",
    " Regular Fit – relaxed through the chest and sleeves",
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="lg:w-2/3">
          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-4 py-3 font-medium ${
                  activeTab === tab.id
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="prose max-w-none">
            {activeTab === "description" && (
              <div>
                <p className="text-gray-700 mb-4">
                  Stay effortlessly cool and comfortable with our Ocean Mist
                  Textured Polo Shirt. Designed with a subtle horizontal pattern
                  and crafted from a soft, breathable fabric blend, this polo
                  adds a refined touch to casual and smart-casual outfits. The
                  lightweight construction makes it ideal for warm days, while
                  the muted ocean-blue hue pairs well with jeans, chinos, or
                  shorts.
                </p>
                <p className="text-gray-700 mb-8">
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Model</h3>

                {/* Specifications Table */}
                <div className="border border-gray-200 rounded-lg overflow-hidden mb-8">
                  <table className="w-full">
                    <tbody>
                      <tr className="bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-700 border-b border-gray-200">
                          Style
                        </td>
                        <td className="py-3 px-4 text-gray-600 border-b border-gray-200">
                          Classic style
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-gray-700 border-b border-gray-200">
                          Certificate
                        </td>
                        <td className="py-3 px-4 text-gray-600 border-b border-gray-200">
                          ISO-898921212
                        </td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-700 border-b border-gray-200">
                          Size
                        </td>
                        <td className="py-3 px-4 text-gray-600 border-b border-gray-200">
                          34mm x 450mm x 19mm
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-gray-700 border-b border-gray-200">
                          Memory
                        </td>
                        <td className="py-3 px-4 text-gray-600 border-b border-gray-200">
                          36GB RAM
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <FaCheck className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Customer Reviews
                </h3>
                <p className="text-gray-700">
                  Reviews content will be displayed here.
                </p>
              </div>
            )}

            {activeTab === "shipping" && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Shipping Information
                </h3>
                <p className="text-gray-700">
                  Shipping details will be displayed here.
                </p>
              </div>
            )}

            {activeTab === "about" && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  About the Seller
                </h3>
                <p className="text-gray-700">
                  Seller information will be displayed here.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
