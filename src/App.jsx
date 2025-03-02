import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import CarDetails from './components/CarDetails/CarDetails';
import Favorite from './components/Shared/Favorite/Favorite';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<CarDetails />} />
        <Route path="/favorites" element={<Favorite />} />
      </Routes>
    </Router>
  );
}

export default App;