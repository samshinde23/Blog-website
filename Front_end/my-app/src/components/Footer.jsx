import React from "react";
import "./Footer.css";

function Footer() {
  return (
    
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>About This Blog</h3>
          <p>
            Sharing ideas, tips, and stories from the world of technology,
            design, and lifestyle. Stay inspired, stay informed.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>Email: bloghorizon@blogsite.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 BlogHorizon. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

