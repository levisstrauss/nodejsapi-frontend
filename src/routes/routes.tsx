import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
// import PatientDetail from './pages/PatientDetail';

const RoutesConfig = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      {/* <Route path="/patient/:id" element={<PatientDetail />} /> */}
    </Routes>
  </Router>
);

export default RoutesConfig;
