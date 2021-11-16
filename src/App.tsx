import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs/AboutUs';
import Home from './pages/Home/Home';
import Subscribe from './pages/Subscribe/Subscribe';
import Header from './components/Header/Header';
import AppContainer from './components/AppContainer/AppContainer';
import { WindowResizeProvider } from './context/WindowResizeContext';
import './styles/index.scss';

function App() {
  return (
    <WindowResizeProvider>
      <AppContainer>
        <Header />
        <Routes>
          <Route path="about" element={<AboutUs />} />
          <Route path="subscribe" element={<Subscribe />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </AppContainer>
    </WindowResizeProvider>
  );
}

export default App;
