import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import FAQ from './FrontEnd/Pages/About/Faq/Faq.tsx';
import About from './FrontEnd/Pages/About/About.tsx';
import Home from './FrontEnd/Pages/About/Home/Home.tsx';


function App() {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;

