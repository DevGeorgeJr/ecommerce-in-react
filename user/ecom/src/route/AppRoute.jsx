import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from '../pages/ContactPage';
import FavouritePage from '../pages/FavouritePage';
import HomePage from '../pages/HomePage';
import NotificationPage from '../pages/NotificationPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import PrivacyPage from '../pages/PrivacyPage';
import PurchasePage from '../pages/PurchasePage';
import RefundPage from '../pages/RefundPage';
import UserLoginPage from '../pages/UserLoginPage';

const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<UserLoginPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/purchase" element={<PurchasePage />} />
        <Route exact path="/privacy" element={<PrivacyPage />} />
        <Route exact path="/refund" element={<RefundPage />} />
        <Route exact path="/productdetails" element={<ProductDetailsPage />} />
        <Route exact path="/notification" element={<NotificationPage />} />
        <Route exact path="/favourite" element={<FavouritePage />} />
      </Routes>
    </Router>

  )
}

export default AppRoute