import React, { useEffect, useState } from 'react';
import './TopExp.css';
import { Bar, BarChart, ResponsiveContainer, YAxis } from 'recharts';
const data = [
  {
    name: 'Entertainment',
    amt: 100
  },
  {
    name: 'Food',
    amt: 200
  },
  {
    name: 'Travel',
    amt: 500
  }
];

const TopExp = () => {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    let data = localStorage.getItem('expanses');
    let currentData = JSON.parse(data);
    if (currentData?.length > 0) {
      let ObjTotal = {};
      currentData.forEach((item) => {
        if (ObjTotal.hasOwnProperty(item.category)) {
          ObjTotal[item.category] = ObjTotal[item.category] + parseInt(item.price);
        } else {
          ObjTotal[item.category] = parseInt(item.price);
        }
      });
      let ObjArr = [];
      for (let prop in ObjTotal) {
        ObjArr.push({ name: prop, value: ObjTotal[prop] });
      }
      setChartData(ObjArr);
    }
  }, []);

  return (
    <div className="expanse_container">
      <p className="recent_title">Top Expenses</p>
      {chartData.length > 0 ? (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={750}
            height={250}
            data={chartData}
            layout="vertical"
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}>
            <YAxis dataKey="name" width={100} type={'category'} axisLine={false} tickLine={false} />
            <Bar dataKey="value" width={100} fill="#8884d8" radius={[0, 10, 10, 0]} barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p className="top_noData">No Data</p>
      )}
    </div>
  );
};

export default TopExp;
