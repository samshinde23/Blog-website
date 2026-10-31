import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="modern-footer">
      <div className="container py-5">
        <div className="row g-4">
          {/* Brand Col */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div className="logo-badge">
                <i className="fa-solid fa-feather-pointed"></i>
              </div>
              <span className="fw-bold fs-4 text-white">Blog Horizon</span>
            </div>
            <p className="text-muted small mb-4" style={{ lineHeight: 1.7 }}>
              Expanding the limits of storytelling. A modern digital publication for curious minds, passionate writers, foodies, travelers, and pet lovers worldwide.
            </p>
            <div className="footer-social-links d-flex gap-2">
              <a href="#social" className="social-pill-btn" aria-label="Twitter">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#social" className="social-pill-btn" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#social" className="social-pill-btn" aria-label="GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#social" className="social-pill-btn" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Categories */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6 className="text-white fw-bold mb-3">Categories</h6>
            <ul className="list-unstyled footer-nav-list">
              <li><Link to="/Food">Food & Dining</Link></li>
              <li><Link to="/Travel">Travel Adventures</Link></li>
              <li><Link to="/Relationship">Relationships</Link></li>
              <li><Link to="/Pets">Pets & Paws</Link></li>
              <li><Link to="/">Home & Lifestyle</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6 className="text-white fw-bold mb-3">Quick Navigation</h6>
            <ul className="list-unstyled footer-nav-list">
              <li><Link to="/">Home Feed</Link></li>
              <li><Link to="/BlogWrite">Write Story</Link></li>
              <li><Link to="/Comments">Community Chat</Link></li>
              <li><a href="#top">Back to Top</a></li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="col-lg-4 col-md-6">
            <h6 className="text-white fw-bold mb-3">Stay Inspired</h6>
            <p className="text-muted small mb-3">
              Subscribe to get handpicked weekly stories delivered straight to your inbox.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert("Thank you for subscribing to Blog Horizon!"); }}>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control form-control-sm border-0 py-2 px-3"
                  placeholder="Enter your email"
                  required
                />
                <button className="btn btn-brand-primary btn-sm px-3" type="submit">
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="footer-copyright-row mt-5 pt-4 border-top border-secondary d-flex justify-content-between align-items-center flex-wrap gap-2 text-muted small">
          <div>
            &copy; {new Date().getFullYear()} Blog Horizon. Crafted with passion & creativity.
          </div>
          <div>
            <span>Designed for writers & readers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
