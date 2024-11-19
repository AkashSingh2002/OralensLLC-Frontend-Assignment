import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './index.css';
import Dashboard from './component/Dashboard';
import Input from './component/input';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the Input component */}
        <Route path="/" element={<Input />} />
        
        {/* Route for the Dashboard component */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
