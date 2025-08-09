
// src/pages/LoginPage.jsx
import React, { useEffect, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import '../styles/LoginPage.css'; // Assuming you have styles for this page

function LoginPage() {
  const containerRef = useRef(null);
  const adminBtnRef = useRef(null);
  const userBtnRef = useRef(null);
  const navigate = useNavigate();
  const { loginUser, toggleAdmin } = useContext(ProductContext);

  useEffect(() => {
    const container = containerRef.current;
    const adminBtn = adminBtnRef.current;
    const userBtn = userBtnRef.current;

    const activateAdmin = () => container.classList.add('active');
    const activateUser = () => container.classList.remove('active');

    adminBtn.addEventListener('click', activateAdmin);
    userBtn.addEventListener('click', activateUser);

    return () => {
      adminBtn.removeEventListener('click', activateAdmin);
      userBtn.removeEventListener('click', activateUser);
    };
  }, []);

  const handleAdminLogin = (e) => {
    e.preventDefault();
    toggleAdmin();
    loginUser();
    navigate('/admin');
  };

  const handleUserLogin = (e) => {
    e.preventDefault();
    loginUser();
    navigate('/products');
  };

  return (
    <div className='login-page'>
      <div className="container" ref={containerRef}>

        <div className="form-container sign-up">
          <form onSubmit={handleAdminLogin}>
            <h2>Admin Login</h2>
            <input type="email" placeholder="Admin Email" />
            <input type="password" placeholder="Admin Password" />
            <button type="submit">Login as Admin</button>
          </form>
        </div>

        <div className="form-container sign-in">
          <form onSubmit={handleUserLogin}>
            <h2>User Login</h2>
            <input type="email" placeholder="User Email" />
            <input type="password" placeholder="User Password" />
            <button type="submit">Login as User</button>
            <a href="#forgot-password">Forgot Password?</a>
          </form>
        </div>

        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Admin</h1>
              <p>Login to manage the platform</p>
              <button className="hidden" ref={userBtnRef}>User Login</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello User!</h1>
              <p>Login to access your dashboard</p>
              <button className="hidden" ref={adminBtnRef}>Admin Login</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LoginPage;
