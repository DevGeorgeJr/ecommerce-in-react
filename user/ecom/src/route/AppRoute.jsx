import React from 'react'
import HomePage from '../pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLoginPage from '../pages/UserLoginPage';

const AppRoute = () => {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/login" element={ <UserLoginPage/> } />
        </Routes>
      </Router>

  )
}

export default AppRoute