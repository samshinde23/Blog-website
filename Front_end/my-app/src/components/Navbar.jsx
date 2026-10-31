import React, { useState } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useBlogs } from "../context/BlogContext";

function Navbar() {
  const { currentUser, logout, openAuthModal } = useAuth();
  const { searchQuery, setSearchQuery } = useBlogs();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
    }
  };

  const handleWriteClick = () => {
    navigate("/BlogWrite");
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
      <div className="container">
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand navbar-brand-logo">
          <div className="logo-badge">
            <i className="fa-solid fa-feather-pointed"></i>
          </div>
          <span>Blog Horizon</span>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          onClick={() => setIsNavOpen(!isNavOpen)}
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars fs-4 text-dark"></i>
        </button>

        {/* Navigation Content */}
        <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-3">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link nav-link-custom ${isActive ? "active" : ""}`
                }
                onClick={() => setIsNavOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Food"
                className={({ isActive }) =>
                  `nav-link nav-link-custom ${isActive ? "active" : ""}`
                }
                onClick={() => setIsNavOpen(false)}
              >
                Food
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Travel"
                className={({ isActive }) =>
                  `nav-link nav-link-custom ${isActive ? "active" : ""}`
                }
                onClick={() => setIsNavOpen(false)}
              >
                Travel
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Relationship"
                className={({ isActive }) =>
                  `nav-link nav-link-custom ${isActive ? "active" : ""}`
                }
                onClick={() => setIsNavOpen(false)}
              >
                Relationship
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Pets"
                className={({ isActive }) =>
                  `nav-link nav-link-custom ${isActive ? "active" : ""}`
                }
                onClick={() => setIsNavOpen(false)}
              >
                Pets
              </NavLink>
            </li>
          </ul>

          {/* Search bar */}
          <form className="d-flex me-lg-3 my-2 my-lg-0" onSubmit={handleSearchSubmit}>
            <div className="nav-search-container">
              <i className="fa-solid fa-magnifying-glass nav-search-icon"></i>
              <input
                type="text"
                className="nav-search-input"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (location.pathname !== "/" && e.target.value.length > 0) {
                    navigate("/");
                  }
                }}
              />
              {searchQuery && (
                <button
                  type="button"
                  className="btn btn-sm text-muted position-absolute end-0 top-50 translate-middle-y border-0 bg-transparent pe-2"
                  onClick={() => setSearchQuery("")}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              )}
            </div>
          </form>

          {/* Right Action Buttons */}
          <div className="d-flex align-items-center gap-2 mt-2 mt-lg-0">
            {/* Write Blog CTA */}
            <button
              onClick={handleWriteClick}
              className="btn btn-brand-primary btn-sm px-3"
              title="Create a new blog story"
            >
              <i className="fa-solid fa-pen-nib"></i>
              <span className="d-none d-sm-inline">Write Blog</span>
            </button>

            {/* Auth Buttons / User Profile */}
            {currentUser ? (
              <div className="position-relative">
                <div
                  className="user-avatar-pill"
                  onClick={() => setShowUserMenu(!showUserMenu)}
                >
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="user-avatar-img"
                  />
                  <span className="small fw-bold text-dark d-none d-md-inline">
                    {currentUser.name.split(" ")[0]}
                  </span>
                  <i className="fa-solid fa-angle-down text-muted small"></i>
                </div>

                {showUserMenu && (
                  <div
                    className="position-absolute end-0 mt-2 bg-white rounded-3 shadow-lg border p-2 animate-fade-in"
                    style={{ minWidth: "210px", zIndex: 1040 }}
                  >
                    <div className="px-3 py-2 border-bottom">
                      <div className="fw-bold text-dark small">{currentUser.name}</div>
                      <div className="text-muted small" style={{ fontSize: "0.75rem" }}>
                        {currentUser.email}
                      </div>
                    </div>
                    <button
                      className="dropdown-item py-2 px-3 small rounded d-flex align-items-center gap-2 text-dark"
                      onClick={() => {
                        setShowUserMenu(false);
                        navigate("/BlogWrite");
                      }}
                    >
                      <i className="fa-solid fa-pen-to-square text-primary"></i> Create Blog
                    </button>
                    <button
                      className="dropdown-item py-2 px-3 small rounded d-flex align-items-center gap-2 text-danger"
                      onClick={() => {
                        setShowUserMenu(false);
                        logout();
                      }}
                    >
                      <i className="fa-solid fa-arrow-right-from-bracket"></i> Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="d-flex align-items-center gap-2">
                <button
                  className="btn btn-sm btn-link text-dark text-decoration-none fw-bold px-2"
                  onClick={() => openAuthModal("login")}
                >
                  Sign In
                </button>
                <button
                  className="btn btn-sm btn-dark rounded-pill px-3 fw-bold"
                  onClick={() => openAuthModal("register")}
                >
                  Register
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
