import React, { useState } from 'react';
import Header from './FrontEnd/PageModul/Header/Header.tsx'; 
import MainContent from './FrontEnd/PageModul/MainContent/MainContent.tsx'; 
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <MainContent />
        </div>
    );
}

export default App;
