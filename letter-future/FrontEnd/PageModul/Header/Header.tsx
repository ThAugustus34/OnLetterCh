import React, { useState } from 'react';

const Header: React.FC = () => {
    const connectWallet = () => {
        console.log("Wallet connecting...");
    };

    return (
        <header className="App-header">
            <h1>Future Letter</h1>
            <button onClick={connectWallet} className="connect-wallet-btn">Connect Wallet</button>
            
        </header>
    );
}

export default Header;
