import React, { useEffect, useState } from 'react';
import './Modal.css';
const Modal = ({
  isOpen,
  handleModal,
  hasCalledFrom,
  handleBalance,
  handleExpanses,
  handleLocal,
  expanses
}) => {
  const [userBalance, setUserBalance] = useState(0);

  return (
    <div className={isOpen ? 'modal active' : 'modal'}>
      <div className={hasCalledFrom === 'Wallet' ? 'modal_container expanse' : 'modal_container'}>
        <div className="modal_wrapper">
          {(hasCalledFrom === 'Expanse' || hasCalledFrom === 'Transaction') && (
            <div className="modal_wallet_container">
              <p className="title"></p>
              <p className="title">
                {hasCalledFrom === 'Transaction' ? 'Edit Expanses' : 'Add Expanses'}
              </p>
              <div className="modal_wallet_wrapper">
                <div className="modal_input">
                  <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={expanses?.title}
                    onChange={(e) => handleExpanses(e)}
                  />
                  <input
                    type="text"
                    placeholder="Price"
                    name="price"
                    value={expanses?.price}
                    onChange={(e) => handleExpanses(e)}
                  />
                </div>
                <div className="modal_input">
                  <input
                    type="text"
                    placeholder="Category"
                    name="category"
                    value={expanses?.category}
                    onChange={(e) => handleExpanses(e)}
                  />
                  <input
                    type="date"
                    placeholder="dd/mm/yyyy"
                    name="date"
                    value={expanses?.date}
                    onChange={(e) => handleExpanses(e)}
                  />
                </div>
                <div className="modal_btn">
                  <button className="add_btn" onClick={handleLocal}>
                    Add Expanse
                  </button>
                  <button className="close_btn" onClick={handleModal}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
          {hasCalledFrom === 'Wallet' && (
            <div className="modal_wallet_container">
              <p className="title">Add Balance</p>
              <div className="modal_wallet_wrapper expanse_wrapper">
                <div className="modal_input">
                  <input
                    type="number"
                    placeholder="Income Amount"
                    value={userBalance}
                    onChange={(e) => setUserBalance(e.target.value)}
                  />
                </div>
                <div className="modal_btn">
                  <button className="add_btn" onClick={() => handleBalance(userBalance)}>
                    Add Balance
                  </button>
                  <button className="close_btn" onClick={handleModal}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
