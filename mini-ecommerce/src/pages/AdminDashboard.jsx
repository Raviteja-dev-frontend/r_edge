import React, { useContext, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import '../styles/AdminDashboard.css'; // Assuming you have styles for this page

const AdminDashboard = () => {
  const { logoutUser } = useContext(ProductContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <div className="dashboard-body">
      {/* Hamburger button - visible only on mobile */}
      <div className="hamburger" onClick={() => setMenuOpen(true)}>
        ☰
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${menuOpen ? 'active' : ''}`}>
        {/* Close button for mobile */}
        <div className="close-btn" onClick={() => setMenuOpen(false)}>
          ✖
        </div>

        <div className="user-profile">
          <h3>👤 Admin User</h3>
        </div>

        <div className="nav-links">
          <Link to="/admin" onClick={() => setMenuOpen(false)}>🏠 Dashboard</Link>
          <Link to="/admin/products" onClick={() => setMenuOpen(false)}>📦 Products</Link>
          <Link to="/admin/orders" onClick={() => setMenuOpen(false)}>🧾 Orders</Link>
          <Link to="/admin/reviews" onClick={() => setMenuOpen(false)}>⭐ Reviews</Link>
          <Link to="/admin/customers" onClick={() => setMenuOpen(false)}>👥 Customers</Link>
          <Link to="/admin/analytics" onClick={() => setMenuOpen(false)}>📈 Analytics</Link>
          <button
            onClick={() => {
              handleLogout();
              setMenuOpen(false);
            }}
            className="btn btn-danger mt-3 w-100"
          >
            🚪 Logout
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
