import React from "react";
import "../styles/Footer.css"; // Link your external CSS
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer text-white">
      <div className="container py-4">
        <div className="row">
          {/* About */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">BuyBuddy</h5>
            <p>
              At <strong>BuyBuddy</strong>, we believe that every gift tells a
              story, and every story deserves to be shared with love. Our
              journey began with a simple idea — to make gifting more
              meaningful, memorable, and full of joy.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-3">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/products" className="footer-link">Shop Now</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
              <li><a href="/policy" className="footer-link">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-3">
            <h5 className="fw-bold">Contact Us</h5>
            <p>Email: support@buybuddy.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Address: Hyderabad, Telangana, India</p>
          </div>

          {/* Social Media */}
          <div className="col-md-2 mb-3">
            <h5 className="fw-bold">Follow Us</h5>
            <div className="social-icons d-flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer-social-link">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-social-link">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer-social-link">
                <FaTwitter />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="footer-social-link">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center pt-3 border-top">
          <small>© {new Date().getFullYear()} BuyBuddy. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
