import React, { useEffect, useState } from 'react';
import './RecentTrans.css';
import Transaction from '../Transaction/Transaction';

const RecentTrans = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let newData = localStorage.getItem('expanses');
    let currentData = JSON.parse(newData);
    setData(currentData);
  }, []);

  return (
    <div className="recent_container">
      <p className="recent_title">Recent Transactions</p>
      {data.length &&
        data.map((item) => (
          <Transaction
            key={`${item.date}+${item.title}`}
            title={item.title}
            category={item.category}
            date={item.date}
            price={item.price}
          />
        ))}
    </div>
  );
};

export default RecentTrans;
