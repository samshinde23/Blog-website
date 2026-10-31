import React from "react";
import { useNavigate } from "react-router-dom";
import { useBlogs } from "../context/BlogContext";
import { useAuth } from "../context/AuthContext";

function BlogCard({ blog }) {
  const navigate = useNavigate();
  const { toggleLike } = useBlogs();
  const { currentUser } = useAuth();

  const handleCardClick = () => {
    navigate(`/blog/${blog.id}`);
  };

  const handleCommentClick = (e) => {
    e.stopPropagation();
    navigate(`/blog/${blog.id}#comments`);
  };

  const handleLikeClick = (e) => {
    e.stopPropagation();
    const userIdentifier = currentUser ? currentUser.email : "guest";
    toggleLike(blog.id, userIdentifier);
  };

  // Safe image path resolution
  const getImageSrc = (img) => {
    if (!img) return "home1.jpg";
    if (img.startsWith("http://") || img.startsWith("https://") || img.startsWith("data:")) {
      return img;
    }
    // Check if filename has leading slash
    return img.startsWith("/") ? img : `/${img}`;
  };

  const commentsCount = blog.comments ? blog.comments.length : 0;
  const isLiked = currentUser && blog.likedBy && blog.likedBy.includes(currentUser.email);

  return (
    <div className="blog-card" onClick={handleCardClick} style={{ cursor: "pointer" }}>
      {/* Media Image Wrap */}
      <div className="blog-card-media-wrap">
        <span className={`badge-category badge-${blog.category} blog-card-category-tag`}>
          {blog.category}
        </span>
        <img
          src={getImageSrc(blog.image)}
          alt={blog.title}
          className="blog-card-img"
          onError={(e) => {
            // fallback image
            e.target.onerror = null;
            e.target.src = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&fit=crop&q=80";
          }}
        />
        <span className="blog-card-readtime">
          <i className="fa-regular fa-clock me-1"></i>
          {blog.readTime || "4 min"}
        </span>
      </div>

      {/* Body */}
      <div className="blog-card-body">
        <h3 className="blog-card-title">{blog.title}</h3>
        <p className="blog-card-excerpt">
          {blog.summary || (blog.content ? blog.content.slice(0, 140) + "..." : "")}
        </p>

        {/* Author row & footer */}
        <div className="blog-card-author-row">
          <div className="blog-card-author-info">
            <img
              src={
                blog.authorAvatar ||
                `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(blog.author || "User")}`
              }
              alt={blog.author}
              className="author-mini-avatar"
            />
            <div>
              <div className="author-name-text">{blog.author || "Contributor"}</div>
              <div className="post-date-text">{blog.date}</div>
            </div>
          </div>

          <div className="blog-card-actions">
            <button
              type="button"
              className={`btn-card-action ${isLiked ? "text-danger border-danger" : ""}`}
              onClick={handleLikeClick}
              title="Like this blog"
            >
              <i className={isLiked ? "fa-solid fa-heart text-danger" : "fa-regular fa-heart"}></i>
              <span>{blog.likes || 0}</span>
            </button>

            <button
              type="button"
              className="btn-card-action"
              onClick={handleCommentClick}
              title="View or add comments"
            >
              <i className="fa-regular fa-comment"></i>
              <span>{commentsCount}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
