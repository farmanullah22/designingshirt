import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Order from './pages/Order';
import Contact from './Pages/Contact';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<Order />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
