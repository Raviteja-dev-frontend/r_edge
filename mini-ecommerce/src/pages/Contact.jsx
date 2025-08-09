import React from "react";
import "../styles/Contact.css"; // Assuming you have styles for this page

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Page Heading */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Fill out the form or reach us directly.</p>
      </div>

      {/* Contact Content */}
      <div className="contact-content">
        {/* Left - Form */}
        <div className="contact-form">
          <h2>Send a Message</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Right - Info & Map */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p><strong>Email:</strong> support@buybuddy.com</p>
          <p><strong>Phone:</strong> +91 98765 43210</p>
          <p><strong>Address:</strong> 123, BuyBuddy Street, Hyderabad, India</p>

          <div className="map-container">
            <iframe
              title="BuyBuddy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.425064836768!2d78.48667191487653!3d17.385044088077205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99c6c8b0e8cd%3A0xdda45e1f1a5c8d44!2sHyderabad!5e0!3m2!1sen!2sin!4v1675600000000!5m2!1sen!2sin"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
