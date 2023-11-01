import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './FrontEnd/Pages/Home/HomePage.tsx';
import FaqPage from './FrontEnd/Pages/Faq/FaqPage.tsx';
import AboutPage from './FrontEnd/Pages/About/AboutPage.tsx';


function App() {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/about" element={<AboutPage />} />
            </Routes>
        </Router>
    );
}

export default App;

