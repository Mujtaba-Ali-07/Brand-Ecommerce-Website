import React from "react";
import Navbar from "../../components/navbar/Navbar";
import ProductInfo from "./product-Info/ProductInfo";
import PromotionalBanner from "../../components/promotional-banner/PromotionalBanner";
import RelatedProducts from "./related-products/RelatedProducts";
import ProductDetails from "./product-details/ProductDetails";

const Product = () => {
  return (
    <div>
      <div className="hidden md:block">
        <Navbar />
      </div>

      <ProductInfo />
      <div className="hidden md:block">
        <ProductDetails />
      </div>

      <RelatedProducts />
      <PromotionalBanner />
    </div>
  );
};

export default Product;
