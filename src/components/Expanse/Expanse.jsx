import React, { useEffect, useState } from 'react';
import './Expanse.css';
import Modal from '../Modal/Modal';
import { useSnackbar } from 'notistack';

const Expanse = () => {
  const [showModal, setShowModal] = useState(false);
  const [expanseArr, setExpanseArr] = useState([]);
  const [total, setTotal] = useState(0);
  const [expanses, setExpanses] = useState({
    title: '',
    price: '',
    category: '',
    date: ''
  });
  const { enqueueSnackbar } = useSnackbar();
  const handleModal = () => {
    setShowModal(false);
  };
  const handleExpanses = (e) => {
    const { name, value } = e.target;
    setExpanses({ ...expanses, [name]: value });
  };

  const handleLocal = () => {
    let newData = [...expanseArr, expanses];
    setExpanseArr(newData);
    localStorage.setItem('expanses', JSON.stringify(newData));
    let newTotal = 0;
    if (newData.length > 0) {
      newData.forEach((item) => {
        newTotal += parseInt(item.price);
      });
      if (newTotal < total) {
        setTotal(newTotal);
      } else {
        enqueueSnackbar("You don't have enough balance to expanse.", { variant: 'warning' });
      }
    }
    setExpanses({ title: '', price: '', category: '', date: '' });
  };

  useEffect(() => {
    let data = localStorage.getItem('expanses');
    let currentData = JSON.parse(data);
    if (currentData?.length > 0) {
      let newTotal = 0;
      currentData.forEach((item) => {
        newTotal += parseInt(item.price);
      });
      setTotal(newTotal);
      setExpanseArr(currentData);
    }
  }, []);
  return (
    <div className="exp_container">
      <div className="exp_title">
        Expanses: <span>&#8377;{total}</span>
      </div>
      <button className="btn" onClick={() => setShowModal(true)}>
        +Add Expanse
      </button>
      <Modal
        isOpen={showModal}
        handleModal={handleModal}
        hasCalledFrom="Expanse"
        handleExpanses={handleExpanses}
        handleLocal={handleLocal}
        expanses={expanses}
      />
    </div>
  );
};

export default Expanse;
