import React, { useState } from 'react';
import './Transaction.css';

import { IoIosCloseCircleOutline } from 'react-icons/io';
import { GrEdit } from 'react-icons/gr';
import Modal from '../Modal/Modal';
import { PiPizzaThin } from 'react-icons/pi';
import { MdCardTravel, MdOutlineLocalMovies } from 'react-icons/md';
import { GiMedicines } from 'react-icons/gi';

const Transaction = ({ title, category, date, price }) => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(false);
  };
  const iconData = () => {
    if (category === 'Food') {
      return <PiPizzaThin />;
    } else if (category === 'Travel') {
      return <MdCardTravel />;
    } else if (category === 'Movie') {
      return <MdOutlineLocalMovies />;
    } else if (category === 'Medicine') {
      return <GiMedicines />;
    }
  };

  return (
    <div className="trans_container">
      <div className="trans_wrapper">
        <span className="trans_icon">{iconData()}</span>
        <div className="trans_title">
          <span className="title">{title}</span>
          <span className="sub_title">{date}</span>
        </div>
        <span className="trans_amt">&#8377;{price}</span>
        <div className="trans_btn">
          <button className="trans_close">
            <IoIosCloseCircleOutline />
          </button>
          <button className="trans_edit" onClick={() => setShowModal(true)}>
            <GrEdit />
          </button>
        </div>
      </div>
      <span className="trans_border" />
      <Modal isOpen={showModal} handleModal={handleModal} hasCalledFrom="Transaction" />
    </div>
  );
};

export default Transaction;
