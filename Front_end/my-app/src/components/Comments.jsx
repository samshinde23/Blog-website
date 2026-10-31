import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useBlogs } from "../context/BlogContext";
import { useAuth } from "../context/AuthContext";
import Footer from "./Footer";

function Comments() {
  const { blogs } = useBlogs();
  const { currentUser, openAuthModal } = useAuth();

  // Community guestbook comments in localStorage
  const [communityComments, setCommunityComments] = useState(() => {
    try {
      const stored = localStorage.getItem("horizon_community_comments");
      return stored
        ? JSON.parse(stored)
        : [
            {
              id: 1,
              name: "Elena Vance",
              avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
              message: "Welcome to Blog Horizon everyone! Excited to read all your wonderful posts.",
              date: "Today"
            },
            {
              id: 2,
              name: "Chef Marco Rossi",
              avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
              message: "Feel free to check out the Food section for lots of culinary inspiration!",
              date: "Yesterday"
            }
          ];
    } catch (e) {
      return [];
    }
  });

  const [name, setName] = useState(currentUser ? currentUser.name : "");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    const author = currentUser ? currentUser.name : (name.trim() || "Guest Explorer");
    const avatar = currentUser
      ? currentUser.avatar
      : `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(author)}`;

    const newComment = {
      id: Date.now(),
      name: author,
      avatar,
      message: message.trim(),
      date: "Just now"
    };

    const updated = [newComment, ...communityComments];
    setCommunityComments(updated);
    try {
      localStorage.setItem("horizon_community_comments", JSON.stringify(updated));
    } catch (err) {}

    setMessage("");
    if (!currentUser) setName("");
  };

  // Collect recent blog comments
  const recentBlogComments = [];
  blogs.forEach((b) => {
    if (b.comments && b.comments.length > 0) {
      b.comments.forEach((c) => {
        recentBlogComments.push({
          ...c,
          blogId: b.id,
          blogTitle: b.title,
          blogCategory: b.category
        });
      });
    }
  });

  return (
    <>
      <div className="container py-5 animate-fade-in" style={{ maxWidth: "860px" }}>
        <div className="text-center mb-5">
          <div className="d-inline-flex p-3 bg-light rounded-circle text-primary fs-3 mb-2 shadow-sm">
            <i className="fa-regular fa-comments"></i>
          </div>
          <h2 className="fw-bold font-display text-dark">Community Discussions</h2>
          <p className="text-muted">
            Connect with readers, share feedback, and join discussions happening across all blog stories.
          </p>
        </div>

        {/* Post a message box */}
        <div className="card border-0 shadow-sm rounded-4 p-4 mb-5 bg-white">
          <h5 className="fw-bold text-dark mb-3">
            <i className="fa-solid fa-pen text-primary me-2"></i> Leave a Community Message
          </h5>
          <form onSubmit={handleSubmit}>
            {!currentUser && (
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control form-control-custom"
                  placeholder="Your Name (e.g. Maya)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            )}
            <div className="mb-3">
              <textarea
                className="form-control form-control-custom"
                rows="3"
                placeholder="What's on your mind? Share your message with the community..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              {!currentUser && (
                <button
                  type="button"
                  className="btn btn-link btn-sm p-0 text-primary text-decoration-none fw-bold"
                  onClick={() => openAuthModal("login")}
                >
                  Sign In for instant avatar
                </button>
              )}
              <button type="submit" className="btn btn-brand-primary btn-sm px-4 ms-auto">
                <i className="fa-solid fa-paper-plane me-2"></i> Post Message
              </button>
            </div>
          </form>
        </div>

        {/* Community Messages Stream */}
        <div className="mb-5">
          <h5 className="fw-bold text-dark mb-3">Community Wall</h5>
          <div className="d-flex flex-column gap-3">
            {communityComments.map((c) => (
              <div key={c.id} className="card border-0 shadow-sm rounded-3 p-3 bg-white">
                <div className="d-flex gap-3">
                  <img
                    src={c.avatar}
                    alt={c.name}
                    className="rounded-circle"
                    style={{ width: "42px", height: "42px", objectFit: "cover" }}
                  />
                  <div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="fw-bold text-dark small">{c.name}</span>
                      <span className="text-muted small" style={{ fontSize: "0.75rem" }}>• {c.date}</span>
                    </div>
                    <p className="m-0 mt-1 text-secondary" style={{ fontSize: "0.95rem" }}>
                      {c.message}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Discussions on Articles */}
        {recentBlogComments.length > 0 && (
          <div>
            <h5 className="fw-bold text-dark mb-3">Active Story Discussions</h5>
            <div className="d-flex flex-column gap-3">
              {recentBlogComments.map((item, idx) => (
                <div key={idx} className="card border-0 shadow-sm rounded-3 p-3 bg-white">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <Link
                      to={`/blog/${item.blogId}`}
                      className="fw-bold text-primary text-decoration-none small"
                    >
                      On: "{item.blogTitle}"
                    </Link>
                    <span className={`badge-category badge-${item.blogCategory} py-0`}>
                      {item.blogCategory}
                    </span>
                  </div>
                  <div className="d-flex gap-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="rounded-circle"
                      style={{ width: "36px", height: "36px", objectFit: "cover" }}
                    />
                    <div>
                      <div className="fw-bold text-dark small">{item.name}</div>
                      <p className="m-0 text-muted small">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Comments;
