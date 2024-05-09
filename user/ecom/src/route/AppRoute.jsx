import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
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
      </Routes>
    </Router>

  )
}

export default AppRoute