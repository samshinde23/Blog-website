import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useBlogs } from "../context/BlogContext";
import { useAuth } from "../context/AuthContext";
import BlogCard from "./BlogCard";

function BlogView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getBlogById, addComment, toggleLike, blogs } = useBlogs();
  const { currentUser, openAuthModal } = useAuth();

  const blog = getBlogById(id);

  // Comment form state
  const [guestName, setGuestName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [showShareToast, setShowShareToast] = useState(false);

  useEffect(() => {
    // Scroll to top on id change
    window.scrollTo(0, 0);

    // If URL has #comments hash, scroll down to comment section
    if (window.location.hash === "#comments") {
      setTimeout(() => {
        const el = document.getElementById("comments");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  }, [id]);

  if (!blog) {
    return (
      <div className="container py-5 text-center" style={{ minHeight: "60vh" }}>
        <div className="py-5">
          <i className="fa-solid fa-file-circle-question fs-1 text-muted mb-3"></i>
          <h2 className="fw-bold">Blog Story Not Found</h2>
          <p className="text-muted">The article you are looking for might have been moved or removed.</p>
          <Link to="/" className="btn btn-brand-primary mt-3">
            <i className="fa-solid fa-arrow-left me-2"></i> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  // Safe image resolver
  const getImageSrc = (img) => {
    if (!img) return "/home1.jpg";
    if (img.startsWith("http://") || img.startsWith("https://") || img.startsWith("data:")) {
      return img;
    }
    return img.startsWith("/") ? img : `/${img}`;
  };

  const handleLike = () => {
    const userIdentifier = currentUser ? currentUser.email : "guest";
    toggleLike(blog.id, userIdentifier);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowShareToast(true);
    setTimeout(() => setShowShareToast(false), 2500);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const authorName = currentUser ? currentUser.name : (guestName.trim() || "Guest Reader");
    const avatar = currentUser
      ? currentUser.avatar
      : `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(authorName)}`;

    addComment(blog.id, {
      name: authorName,
      avatar,
      text: commentText
    });

    setCommentText("");
    if (!currentUser) setGuestName("");
  };

  const isLiked = currentUser && blog.likedBy && blog.likedBy.includes(currentUser.email);
  const comments = blog.comments || [];

  // Related blogs (same category or recent)
  const relatedBlogs = blogs
    .filter((b) => b.id !== blog.id && (b.category === blog.category || !blog.category))
    .slice(0, 3);

  return (
    <div className="blog-view-container animate-fade-in">
      {/* Toast Notification */}
      {showShareToast && (
        <div
          className="position-fixed top-0 end-0 p-3"
          style={{ zIndex: 1060, marginTop: "80px" }}
        >
          <div className="alert alert-success shadow d-flex align-items-center gap-2 mb-0">
            <i className="fa-solid fa-circle-check"></i>
            <span>Article link copied to clipboard!</span>
          </div>
        </div>
      )}

      {/* Breadcrumb / Back button */}
      <div className="d-flex align-items-center justify-content-between mb-4">
        <button
          onClick={() => navigate(-1)}
          className="btn btn-sm btn-brand-secondary"
        >
          <i className="fa-solid fa-arrow-left"></i> Back
        </button>
        <span className={`badge-category badge-${blog.category}`}>
          {blog.category}
        </span>
      </div>

      {/* Article Header */}
      <header className="blog-view-header">
        <h1 className="blog-view-title">{blog.title}</h1>
        <div className="blog-view-meta">
          <div className="d-flex align-items-center gap-2">
            <img
              src={
                blog.authorAvatar ||
                `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(blog.author || "User")}`
              }
              alt={blog.author}
              className="rounded-circle"
              style={{ width: "36px", height: "36px", objectFit: "cover" }}
            />
            <span className="fw-bold text-dark">{blog.author || "Contributor"}</span>
          </div>
          <span>•</span>
          <span>
            <i className="fa-regular fa-calendar me-1"></i> {blog.date}
          </span>
          <span>•</span>
          <span>
            <i className="fa-regular fa-clock me-1"></i> {blog.readTime || "4 min read"}
          </span>
        </div>
      </header>

      {/* Hero Image */}
      <div className="blog-view-hero-img-wrap">
        <img
          src={getImageSrc(blog.image)}
          alt={blog.title}
          className="blog-view-hero-img"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&auto=format&fit=crop&q=80";
          }}
        />
      </div>

      {/* Actions Bar (Likes, Share, Jump to Comments) */}
      <div className="blog-view-actions-bar">
        <div className="d-flex align-items-center gap-3">
          <button
            type="button"
            className={`btn-like-interactive ${isLiked ? "liked" : ""}`}
            onClick={handleLike}
          >
            <i className={isLiked ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
            <span>{blog.likes || 0} Likes</span>
          </button>

          <a href="#comments" className="btn btn-brand-secondary btn-sm py-2 px-3">
            <i className="fa-regular fa-comment"></i>
            <span>{comments.length} Comments</span>
          </a>
        </div>

        <div>
          <button
            type="button"
            className="btn btn-brand-secondary btn-sm py-2 px-3"
            onClick={handleShare}
            title="Share article link"
          >
            <i className="fa-solid fa-share-nodes me-2"></i> Share
          </button>
        </div>
      </div>

      {/* Article Content */}
      <article className="blog-view-content">
        {blog.content.split("\n\n").map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </article>

      {/* COMMENTS SECTION */}
      <section id="comments" className="comments-section">
        <div className="comments-header">
          <h4 className="fw-bold m-0 text-dark">
            <i className="fa-regular fa-comments text-primary me-2"></i>
            Discussions ({comments.length})
          </h4>
          <span className="text-muted small">Share your thoughts on this story</span>
        </div>

        {/* Comment Submission Form */}
        <div className="comment-form">
          <form onSubmit={handleCommentSubmit}>
            {currentUser ? (
              <div className="d-flex align-items-center gap-2 mb-3">
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="rounded-circle"
                  style={{ width: "32px", height: "32px", objectFit: "cover" }}
                />
                <span className="small text-muted">
                  Commenting as <strong className="text-dark">{currentUser.name}</strong>
                </span>
              </div>
            ) : (
              <div className="row g-2 mb-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control form-control-custom"
                    placeholder="Your Name (e.g. Maya)"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6 d-flex align-items-center">
                  <span className="small text-muted">
                    Have an account?{" "}
                    <button
                      type="button"
                      className="btn btn-link p-0 text-primary small text-decoration-none fw-bold"
                      onClick={() => openAuthModal("login")}
                    >
                      Sign In
                    </button>
                  </span>
                </div>
              </div>
            )}

            <div className="mb-3">
              <textarea
                className="form-control form-control-custom"
                rows="3"
                placeholder="What are your thoughts on this article?"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-brand-primary btn-sm px-4">
                <i className="fa-solid fa-paper-plane me-2"></i> Post Comment
              </button>
            </div>
          </form>
        </div>

        {/* Comments List */}
        <div className="comments-list">
          {comments.length === 0 ? (
            <div className="text-center py-4 text-muted">
              <i className="fa-regular fa-comment-dots fs-2 mb-2"></i>
              <p className="m-0">No comments yet. Be the first to share your thoughts!</p>
            </div>
          ) : (
            comments.map((c) => (
              <div key={c.id || Math.random()} className="comment-card animate-fade-in">
                <img
                  src={
                    c.avatar ||
                    `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(c.name || "Reader")}`
                  }
                  alt={c.name}
                  className="comment-avatar"
                />
                <div className="comment-body">
                  <div className="comment-header-row">
                    <span className="comment-author-name">{c.name}</span>
                    <span className="comment-date">{c.date || "Just now"}</span>
                  </div>
                  <p className="comment-text">{c.text}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Related Articles */}
      {relatedBlogs.length > 0 && (
        <section className="mt-5 pt-4">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h4 className="fw-bold text-dark m-0">Related Stories</h4>
            <Link to="/" className="text-primary small text-decoration-none fw-bold">
              View All <i className="fa-solid fa-arrow-right ms-1"></i>
            </Link>
          </div>
          <div className="blog-grid" style={{ marginTop: "10px" }}>
            {relatedBlogs.map((item) => (
              <BlogCard key={item.id} blog={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default BlogView;
