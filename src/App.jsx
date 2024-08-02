import React, { createContext } from 'react';
import './App.css';
import Wallet from './components/Wallet/Wallet';
import Chart from './components/Chart/Chart';
import RecentTrans from './components/RecentTrans/RecentTrans';
import Expanse from './components/Expanse/Expanse';
import TopExp from './components/TopExp/TopExp';

const UserContext = createContext();

const App = () => {
  localStorage.setItem('wallet', 5000);

  return (
    <div className="app">
      <header>
        <h2>Expanse Tracker</h2>
      </header>
      <div className="header_container">
        <div className="header_wrapper">
          <Wallet />
          <Expanse />
        </div>
        <Chart />
      </div>
      <div className="footer_container">
        <RecentTrans />
        <TopExp />
      </div>
    </div>
  );
};

export default App;
