import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Catalog from './components/Catalog/Catalog';
import CarDetails from './components/CarDetails/CarDetails';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<CarDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;