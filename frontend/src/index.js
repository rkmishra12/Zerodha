import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./landing_page/home/HomePage";
import Aboutpage from "./landing_page/about/Aboutpage";
import ProductPage from "./landing_page/products/ProductPage";
import SupportPage from "./landing_page/support/SupportPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import Notfound from "./landing_page/Notfound";
import CheckAccount from "./landing_page/signup/CheckAccount";
import Signup from "./landing_page/signup/Signup";
import Login from "./landing_page/signup/Login";
import ScrollToTop from "./ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <ScrollToTop />
  <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/checkaccount" element={<CheckAccount />} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
