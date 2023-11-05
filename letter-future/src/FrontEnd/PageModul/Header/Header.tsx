import React from 'react';
import { Link } from 'react-router-dom';
import { requestAccounts } from '../../WalletProc/Connection';

const Header: React.FC = () => {
    
    const connectWallet = async () => {
        if (window.mina) {
          try {
            const accounts = await requestAccounts();
            const account = accounts[0];
            console.log(`Connected with account: ${account}`);
          } catch (error) {
            console.error('There was an error connecting to the wallet', error);
          }
        } else {
          console.log('Please install the Mina wallet extension.');
        }
      };
    return (
        <header className="App-header">
            <ul className='Header-Menu'>
                <li><Link to="/about" className="Header-Menu-menu-item">About</Link></li>
                <li><Link to="/about" className="Header-Menu-menu-item">FAQ</Link></li>
            </ul>
            <h1 className='main-header'>Future Letter</h1>
            <button onClick={connectWallet} className="connect-wallet-btn">Connect Wallet</button>
        </header>
    );
}

export default Header;
