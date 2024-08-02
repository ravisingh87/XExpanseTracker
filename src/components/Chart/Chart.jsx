import React, { useEffect, useState } from 'react';
import './Chart.css';
import { Cell, Legend, Pie, PieChart } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
const Chart = () => {
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
    <div className="chart_container">
      <PieChart width={445} height={410}>
        <Pie
          data={chartData}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value">
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend height={36} margin={{ top: 0, left: 0, right: 0, bottom: 75 }} />
      </PieChart>
    </div>
  );
};

export default Chart;
