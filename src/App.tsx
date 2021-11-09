import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Subscribe from './pages/Subscribe';
import Header from './components/Header/Header';
import './styles/index.scss';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="about" element={<AboutUs />} />
        <Route path="subscribe" element={<Subscribe />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
