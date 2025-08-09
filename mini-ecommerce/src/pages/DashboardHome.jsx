import React from 'react';
import "../styles/DashboardHome.css"; // Assuming you have styles for this page
const DashboardHome = () => {
  return (
    <>
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="dashboard-cards">
        <div className="card sales">
          <h2>₹3600</h2>
          <p>Sales today across 17 orders</p>
        </div>
        <div className="card inventory">
          <h2>98 / 100</h2>
          <p>Items in stock — 2 sold today</p>
        </div>
        <div className="card delivery">
          <h2>23 / 50</h2>
          <p>Deliveries completed today</p>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
