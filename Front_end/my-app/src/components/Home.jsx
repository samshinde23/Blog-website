import React, { useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useBlogs } from "../context/BlogContext";
import BlogCard from "./BlogCard";
import Footer from "./Footer";

function Home() {
  const {
    blogs,
    categories,
    selectedCategory,
    setSelectedCategory,
    searchQuery,
    setSearchQuery
  } = useBlogs();

  const navigate = useNavigate();

  // Filter blogs by search and category
  const filteredBlogs = useMemo(() => {
    return blogs.filter((b) => {
      const matchesCategory =
        selectedCategory === "All" || b.category.toLowerCase() === selectedCategory.toLowerCase();
      
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        b.title.toLowerCase().includes(q) ||
        (b.summary && b.summary.toLowerCase().includes(q)) ||
        (b.author && b.author.toLowerCase().includes(q)) ||
        (b.category && b.category.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [blogs, selectedCategory, searchQuery]);

  // Featured blog (e.g. first high-rated blog or top article)
  const featuredBlog = blogs[0];

  return (
    <>
      <div className="home-page animate-fade-in">
        {/* HERO BANNER */}
        <section className="hero-banner">
          <div className="container">
            <div className="hero-pill-badge">
              <i className="fa-solid fa-sparkles text-warning"></i>
              <span>Discover, Create & Connect</span>
            </div>

            <h1 className="hero-title">
              Blog <span className="hero-gradient-text">Horizon</span>
            </h1>

            <p className="hero-subtitle">
              Expanding the limits of storytelling. Dive into rich perspectives on culinary wonders,
              scenic travels, family bonds, and playful pets — or publish your own story.
            </p>

            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Link to="/BlogWrite" className="btn btn-brand-primary">
                <i className="fa-solid fa-pen-nib"></i> Write Your Story
              </Link>
              <a href="#explore-posts" className="btn btn-brand-secondary">
                <i className="fa-solid fa-compass"></i> Explore Articles
              </a>
            </div>

            {/* Category Filter Pills */}
            <div className="category-filter-bar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`cat-filter-btn ${selectedCategory === cat ? "active" : ""}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat === "All" && <i className="fa-solid fa-border-all me-1"></i>}
                  {cat === "Food" && <i className="fa-solid fa-utensils me-1"></i>}
                  {cat === "Travel" && <i className="fa-solid fa-plane-departure me-1"></i>}
                  {cat === "Relationship" && <i className="fa-solid fa-heart me-1"></i>}
                  {cat === "Pets" && <i className="fa-solid fa-paw me-1"></i>}
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* MAIN CONTENT AREA */}
        <div id="explore-posts" className="container py-5">
          {/* Active Search & Filter Indicator */}
          {(searchQuery || selectedCategory !== "All") && (
            <div className="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom">
              <div>
                <h5 className="fw-bold m-0 text-dark">
                  {searchQuery ? `Search results for "${searchQuery}"` : `${selectedCategory} Articles`}
                </h5>
                <span className="text-muted small">
                  Showing {filteredBlogs.length} {filteredBlogs.length === 1 ? "story" : "stories"}
                </span>
              </div>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary rounded-pill"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Featured Spotlight (only on All and no search) */}
          {selectedCategory === "All" && !searchQuery && featuredBlog && (
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden mb-5 bg-white">
              <div className="row g-0 align-items-center">
                <div className="col-lg-7">
                  <div style={{ height: "360px", overflow: "hidden" }}>
                    <img
                      src={featuredBlog.image.startsWith("/") ? featuredBlog.image : `/${featuredBlog.image}`}
                      alt={featuredBlog.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                </div>
                <div className="col-lg-5 p-4 p-md-5">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <span className="badge bg-warning text-dark fw-bold px-3 py-1 rounded-pill">
                      ⭐ Featured Story
                    </span>
                    <span className={`badge-category badge-${featuredBlog.category}`}>
                      {featuredBlog.category}
                    </span>
                  </div>
                  <h2
                    className="fw-bold mb-3 cursor-pointer text-dark font-display"
                    style={{ cursor: "pointer", lineHeight: 1.25 }}
                    onClick={() => navigate(`/blog/${featuredBlog.id}`)}
                  >
                    {featuredBlog.title}
                  </h2>
                  <p className="text-muted mb-4" style={{ lineHeight: 1.6 }}>
                    {featuredBlog.summary}
                  </p>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-2">
                      <img
                        src={featuredBlog.authorAvatar}
                        alt={featuredBlog.author}
                        className="rounded-circle"
                        style={{ width: "36px", height: "36px", objectFit: "cover" }}
                      />
                      <div>
                        <div className="fw-bold text-dark small">{featuredBlog.author}</div>
                        <div className="text-muted small" style={{ fontSize: "0.75rem" }}>
                          {featuredBlog.date} • {featuredBlog.readTime}
                        </div>
                      </div>
                    </div>
                    <button
                      className="btn btn-brand-primary btn-sm px-3"
                      onClick={() => navigate(`/blog/${featuredBlog.id}`)}
                    >
                      Read Story
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Section Header */}
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h3 className="fw-bold text-dark m-0">
              {selectedCategory === "All" ? "Latest Publications" : `${selectedCategory} Collection`}
            </h3>
            <span className="badge bg-light text-dark border px-3 py-2 rounded-pill small">
              {filteredBlogs.length} Articles
            </span>
          </div>

          {/* Blog Grid */}
          {filteredBlogs.length === 0 ? (
            <div className="text-center py-5 bg-white rounded-4 border p-5 my-4">
              <i className="fa-solid fa-magnifying-glass fs-1 text-muted mb-3"></i>
              <h4 className="fw-bold">No articles found</h4>
              <p className="text-muted">
                We couldn't find any stories matching your criteria. Try adjusting your search query or category filter.
              </p>
              <button
                className="btn btn-brand-primary btn-sm mt-2"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
              >
                Show All Stories
              </button>
            </div>
          ) : (
            <div className="blog-grid">
              {filteredBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
