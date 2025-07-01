// src/components/RecommendedItems.jsx
import React from "react";

import Pic1 from "../../../assets/recommended-items/1.png";
import Pic2 from "../../../assets/recommended-items/2.png";
import Pic3 from "../../../assets/recommended-items/3.jpg";
import Pic4 from "../../../assets/recommended-items/4.png";
import Pic5 from "../../../assets/recommended-items/5.png";
import Pic6 from "../../../assets/recommended-items/6.png";
import Pic7 from "../../../assets/recommended-items/7.png";
import Pic8 from "../../../assets/recommended-items/8.png";
import Pic9 from "../../../assets/recommended-items/9.png";
import Pic10 from "../../../assets/recommended-items/10.png";
import { Link } from "react-router-dom";

const RecommendedItems = () => {
  const products = [
    {
      id: 1,
      name: "T-shirts with multiple colors, for men",
      image: Pic1,
      price: 10.3,
    },
    {
      id: 2,
      name: "Jeans shorts for men blue color",
      image: Pic2,
      price: 12.3,
    },
    { id: 3, name: "Brown winter coat medium size", image: Pic3, price: 14.5 },
    { id: 4, name: "Jeans bag for travel for men", image: Pic4, price: 34.0 },
    { id: 5, name: "Coffee Maker", image: Pic5, price: 99.0 },
    { id: 6, name: "Canon camera black, 100x zoom", image: Pic6, price: 80.99 },
    { id: 7, name: "Headset for gaming with mic", image: Pic7, price: 8.99 },
    { id: 8, name: "Blue Coat for men", image: Pic8, price: 20.99 },
    { id: 9, name: "Blue wallet for men leather", image: Pic9, price: 10.3 },
    { id: 10, name: "Black coffee Mug", image: Pic10, price: 10.95 },
  ];

  return (
    <div className=" container lg:mt-6 mt-3">
      <div className=" mb-8">
        <h2 className="lg:text-4xl text-2xl font-bold text-gray-800">
          Recommended items
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <Link to="/products-page/product">
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <div className="  rounded-xl w-full h-48 flex items-center justify-center ">
                <img src={product.image} className="h-48 py-4" />
              </div>

              <div className="p-4">
                <div className="text-lg font-bold text-gray-800 mb-1">
                  ${product.price.toFixed(2)}
                </div>
                <p className="text-gray-600 text-sm h-10 overflow-hidden">
                  {product.name}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecommendedItems;
