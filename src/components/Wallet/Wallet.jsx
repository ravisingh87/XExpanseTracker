import React, { useEffect, useState } from 'react';
import './Wallet.css';
import Modal from '../Modal/Modal';

const Wallet = () => {
  const [showModal, setShowModal] = useState(false);
  const [balance, setBalance] = useState(0);

  const handleModal = () => {
    setShowModal(false);
  };

  const handleBalance = (val) => {
    setBalance(val);
    localStorage.setItem('wallet', val);
    setShowModal(false);
  };

  useEffect(() => {
    let localcurrentBal = localStorage.getItem('wallet');
    let currentBal = JSON.parse(localcurrentBal);
    setBalance(currentBal);
  }, []);

  return (
    <div className="wallet_container">
      <div className="wallet_title">
        Wallet Balance: <span>&#8377;{balance}</span>
      </div>
      <button onClick={() => setShowModal(true)}>+Add Income</button>
      <Modal
        isOpen={showModal}
        handleModal={handleModal}
        hasCalledFrom="Wallet"
        handleBalance={handleBalance}
      />
    </div>
  );
};

export default Wallet;
