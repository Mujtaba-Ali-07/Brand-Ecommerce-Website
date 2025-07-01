import React from "react";
import Navbar from "../../components/navbar/Navbar";
import CartSection from "./cart-section/CartSection";
import FeaturesSection from "./features-section/FeaturesSection";
import SavedForLater from "./saved-for-later/SavedForLater";
import PromotionalBanner from "../../components/promotional-banner/PromotionalBanner";

const Cart = () => {
  return (
    <div>
      <div className="hidden md:block">
        <Navbar hiddenBar="md:hidden" />
      </div>
      <CartSection />
      <FeaturesSection />
      <SavedForLater />
      <PromotionalBanner />
      <div className="h-20"></div>
    </div>
  );
};

export default Cart;
