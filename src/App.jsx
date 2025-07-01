import React from "react";
// import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/category/ProductsPage";
import Product from "./pages/product/Product";

const App = () => {
  return (
    <div className="bg-blue-100/30 lg:bg-[#f7fafc] min-h-screen">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products-page" element={<ProductsPage />} />
          <Route path="/products-page/product" element={<Product />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
