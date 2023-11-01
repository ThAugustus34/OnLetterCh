import React from 'react';

const Header: React.FC = () => {
    const connectWallet = () => {
        console.log("Wallet connecting...");
    };

    return (
        <header className="App-header">
            <ul className='Header-Menu'>
                <li><button onClick={connectWallet} className="Header-Menu-menu-item">About</button></li>
                <li><button onClick={connectWallet} className="Header-Menu-menu-item">FAQ</button></li>
            </ul>
            <h1 className='main-header'>Future Letter</h1>
            <button onClick={connectWallet} className="connect-wallet-btn">Connect Wallet</button>
        </header>
    );
}

export default Header;
