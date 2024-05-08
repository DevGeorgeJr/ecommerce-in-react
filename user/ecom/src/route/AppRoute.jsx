import React from 'react'
import HomePage from '../pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoute = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>

  )
}

export default AppRoute