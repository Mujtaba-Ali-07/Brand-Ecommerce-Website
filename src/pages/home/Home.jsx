import React from "react";
import Hero from "./hero/Hero";
import DealOffer from "./deal-offer/DealOffer";
import HomeOutdoor from "./home-outdoor/HomeOutdoor";
import ConsumerGadget from "./consumer-gedget/ConsumerGadget";
import QuoteForm from "./quote-form/QuoteForm";
import RecommendedItems from "./recommended-items/RecommendedItems";
import ExtraServices from "./extra-services/ExtraServices";
import SuppliersByRegion from "./suppliers-by-region/SuppliersByRegion";
import Subscribe from "../../components/subscribe/Subscribe";
import Navbar from "../../components/navbar/Navbar";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <DealOffer />
      <HomeOutdoor />
      <ConsumerGadget />
      <QuoteForm />
      <RecommendedItems />
      <ExtraServices />
      <SuppliersByRegion />
      <Subscribe />
    </>
  );
};

export default Home;
