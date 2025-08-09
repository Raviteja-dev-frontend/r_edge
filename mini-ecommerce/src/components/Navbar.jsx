
// src/components/Navbar.jsx
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import "../styles/Navbar.css"; // Assuming you have styles for this component

const Navbar = () => {
  const {
    isAdmin,
    isLoggedIn,
    logoutUser,
    wishlist = [],
    cart = [],
  } = useContext(ProductContext);

  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <nav className="navbar custom-navbar shadow-sm sticky-top">
        <div className="container-fluid ">

          <div className="container d-flex justify-content-between align-items-center">
          <Link to="/" className="navbar-brand text-white fw-bold fs-4">
            🛍 BuyBuddy
          </Link>

          <button
            className="menu-toggle btn d-md-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Desktop Menu */}
          <div className="nav-menu-desk d-none d-md-flex gap-5 align-items-center navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/products" className="nav-link">Products</Link>
            <Link to="/contact" className="nav-link">Contact</Link>

            {isLoggedIn && <Link to="/orders" className="nav-link">Orders</Link>}
            {isLoggedIn && <Link to="/cart" className="nav-link">Cart ({cartCount})</Link>}
            {isLoggedIn && <Link to="/wishlist" className="nav-link">Wishlist ({wishlist.length})</Link>}
            {!isLoggedIn && <Link to="/login" className="nav-link">Login</Link>}
            {isAdmin && <Link to="/admin" className="nav-link">Admin</Link>}
            {isLoggedIn && (
              <button onClick={logoutUser} className="btn btn-outline-light btn-sm">
                Logout
              </button>
            )}
          </div>

        </div>

        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu d-md-none">
          <Link to="/" onClick={() => setMenuOpen(false)} className="nav-link">Home</Link>
          <Link to="/products" onClick={() => setMenuOpen(false)} className="nav-link">Products</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="nav-link">Contact</Link>

          {isLoggedIn && (
            <>
              <Link to="/cart" onClick={() => setMenuOpen(false)} className="nav-link">
                🛒 Cart ({cartCount})
              </Link>
              <Link to="/orders" onClick={() => setMenuOpen(false)} className="nav-link">
                Orders
              </Link>
              <Link to="/wishlist" onClick={() => setMenuOpen(false)} className="nav-link">
                Wishlist ({wishlist.length})
              </Link>
            </>
          )}
          {!isLoggedIn && (
            <>
              <Link to="/login" onClick={() => setMenuOpen(false)} className="nav-link">
                Login
              </Link>
              <Link to="/register" onClick={() => setMenuOpen(false)} className="nav-link">
                Register
              </Link>
            </>
          )}
          {isAdmin && (
            <Link to="/admin" onClick={() => setMenuOpen(false)} className="nav-link">
              Admin
            </Link>
          )}
          {isLoggedIn && (
            <button
              onClick={() => {
                logoutUser();
                setMenuOpen(false);
              }}
              className="btn btn-outline-light btn-sm mt-3"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
