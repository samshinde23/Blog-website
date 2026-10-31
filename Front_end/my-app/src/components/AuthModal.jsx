import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

function AuthModal() {
  const {
    isAuthModalOpen,
    authModalMode,
    setAuthModalMode,
    closeAuthModal,
    login,
    register
  } = useAuth();

  // Form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  if (!isAuthModalOpen) return null;

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setError("");
    const res = login(email, password);
    if (!res.success) {
      setError(res.message);
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    const res = register({ name, email, password, bio });
    if (!res.success) {
      setError(res.message);
    } else {
      setSuccessMsg("Welcome aboard! Your account is created.");
    }
  };

  const fillDemoAccount = () => {
    setEmail("sam@horizon.blog");
    setPassword("password123");
    setError("");
  };

  return (
    <div className="modal-backdrop-custom" onClick={closeAuthModal}>
      <div className="auth-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="auth-modal-header">
          <button className="auth-modal-close" onClick={closeAuthModal}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="d-flex justify-content-center mb-2">
            <div className="logo-badge">
              <i className="fa-solid fa-feather-pointed"></i>
            </div>
          </div>
          <h4 className="fw-bold m-0 text-dark">
            {authModalMode === "login" ? "Welcome Back" : "Join Blog Horizon"}
          </h4>
          <p className="text-muted small m-0 mt-1">
            {authModalMode === "login"
              ? "Sign in to write, comment, and share your stories"
              : "Create an account to publish stories and connect with readers"}
          </p>
        </div>

        {/* Auth Mode Tabs */}
        <div className="auth-tabs">
          <button
            className={`auth-tab-btn ${authModalMode === "login" ? "active" : ""}`}
            onClick={() => {
              setAuthModalMode("login");
              setError("");
            }}
          >
            Sign In
          </button>
          <button
            className={`auth-tab-btn ${authModalMode === "register" ? "active" : ""}`}
            onClick={() => {
              setAuthModalMode("register");
              setError("");
            }}
          >
            Create Account
          </button>
        </div>

        <div className="auth-modal-body">
          {error && (
            <div className="alert alert-danger py-2 small d-flex align-items-center gap-2">
              <i className="fa-solid fa-circle-exclamation"></i>
              <span>{error}</span>
            </div>
          )}

          {successMsg && (
            <div className="alert alert-success py-2 small d-flex align-items-center gap-2">
              <i className="fa-solid fa-circle-check"></i>
              <span>{successMsg}</span>
            </div>
          )}

          {authModalMode === "login" ? (
            <>
              {/* Demo Account Quick Pill */}
              <div className="demo-pill" onClick={fillDemoAccount} title="Click to autofill demo credentials">
                <span>
                  <i className="fa-solid fa-wand-magic-sparkles me-2"></i>
                  Quick test: <strong>sam@horizon.blog</strong>
                </span>
                <span className="badge bg-primary">Auto Fill</span>
              </div>

              <form onSubmit={handleLoginSubmit}>
                <div className="mb-3">
                  <label className="form-label small fw-bold">Email Address</label>
                  <input
                    type="email"
                    className="form-control form-control-custom w-100"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label small fw-bold">Password</label>
                  <input
                    type="password"
                    className="form-control form-control-custom w-100"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-brand-primary w-100 py-2">
                  <i className="fa-solid fa-arrow-right-to-bracket me-2"></i> Sign In
                </button>
              </form>
            </>
          ) : (
            <form onSubmit={handleRegisterSubmit}>
              <div className="mb-3">
                <label className="form-label small fw-bold">Full Name</label>
                <input
                  type="text"
                  className="form-control form-control-custom w-100"
                  placeholder="e.g. Samrudh Shinde"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label small fw-bold">Email Address</label>
                <input
                  type="email"
                  className="form-control form-control-custom w-100"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label small fw-bold">Password</label>
                <input
                  type="password"
                  className="form-control form-control-custom w-100"
                  placeholder="At least 6 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={4}
                />
              </div>
              <div className="mb-4">
                <label className="form-label small fw-bold">Bio / Tagline (Optional)</label>
                <input
                  type="text"
                  className="form-control form-control-custom w-100"
                  placeholder="e.g. Foodie, Traveler, Storyteller"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-brand-primary w-100 py-2">
                <i className="fa-solid fa-user-plus me-2"></i> Register Account
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
