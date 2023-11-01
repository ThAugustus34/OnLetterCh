import React, { useState } from 'react';
import '../../../App.css';

import Header from '../../PageModul/Header/Header.tsx';
import MainContent from '../../PageModul/MainContent/MainContent.tsx';


function HomePage() {
    return (
        <div className="App">
            <Header />
            <MainContent />
        </div>
    );
}

export default HomePage;

