import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useBlogs } from "../context/BlogContext";
import BlogCard from "./BlogCard";
import Footer from "./Footer";

const CATEGORY_META = {
  Food: {
    icon: "fa-solid fa-utensils",
    title: "Culinary Stories & Recipes",
    description: "Savor the world's most vibrant gastronomic adventures, artisanal recipes, and delicious cultural traditions.",
    accentColor: "#ea580c"
  },
  Travel: {
    icon: "fa-solid fa-plane-departure",
    title: "Travel & Wanderlust Chronicles",
    description: "Pack your curiosity and journey across scenic mountain peaks, serene coastlines, and historic hidden gems.",
    accentColor: "#16a34a"
  },
  Relationship: {
    icon: "fa-solid fa-heart",
    title: "Heart & Connections",
    description: "Nurturing deep emotional bonds, family harmony, mindful parenting, and lifelong companionship.",
    accentColor: "#e11d48"
  },
  Pets: {
    icon: "fa-solid fa-paw",
    title: "Pets & Paws",
    description: "Heartwarming adoption tales, pet care wisdom, and celebrating the unconditional love of our furry best friends.",
    accentColor: "#7c3aed"
  },
  Home: {
    icon: "fa-solid fa-house",
    title: "Home & Mindful Living",
    description: "Cozy spaces, creative arts, mindfulness, and the comforting rituals that make everyday living special.",
    accentColor: "#2563eb"
  }
};

function CategoryPage({ categoryName }) {
  const { blogs } = useBlogs();
  const [sortOption, setSortOption] = useState("newest"); // "newest" | "likes" | "comments"

  const meta = CATEGORY_META[categoryName] || {
    icon: "fa-solid fa-layer-group",
    title: `${categoryName} Stories`,
    description: `Explore thoughtful articles and stories in ${categoryName}.`,
    accentColor: "#4f46e5"
  };

  const categoryBlogs = useMemo(() => {
    let list = blogs.filter(
      (b) => b.category && b.category.toLowerCase() === categoryName.toLowerCase()
    );

    if (sortOption === "likes") {
      list = [...list].sort((a, b) => (b.likes || 0) - (a.likes || 0));
    } else if (sortOption === "comments") {
      list = [...list].sort((a, b) => ((b.comments || []).length) - ((a.comments || []).length));
    }

    return list;
  }, [blogs, categoryName, sortOption]);

  return (
    <>
      <div className="category-page animate-fade-in">
        {/* Category Hero */}
        <section
          className="py-5 text-center"
          style={{
            background: `linear-gradient(180deg, #f8fafc 0%, #edf2f7 100%)`,
            borderBottom: "1px solid var(--color-border)"
          }}
        >
          <div className="container py-4">
            <div
              className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 shadow-sm"
              style={{
                width: "64px",
                height: "64px",
                backgroundColor: "#ffffff",
                color: meta.accentColor,
                fontSize: "1.75rem"
              }}
            >
              <i className={meta.icon}></i>
            </div>

            <h1 className="fw-bold text-dark font-display mb-2">{meta.title}</h1>
            <p className="text-muted mx-auto" style={{ maxWidth: "620px", fontSize: "1.05rem" }}>
              {meta.description}
            </p>

            <div className="d-flex align-items-center justify-content-center gap-3 mt-4">
              <Link to="/BlogWrite" className="btn btn-brand-primary btn-sm px-4">
                <i className="fa-solid fa-pen-nib me-2"></i> Write in {categoryName}
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Collection */}
        <div className="container py-5">
          {/* Controls Bar */}
          <div className="d-flex align-items-center justify-content-between mb-4 pb-2 border-bottom flex-wrap gap-2">
            <div>
              <span className="fw-bold text-dark fs-5">{categoryBlogs.length} Stories</span>
              <span className="text-muted small ms-2">in {categoryName}</span>
            </div>

            <div className="d-flex align-items-center gap-2">
              <span className="text-muted small">Sort by:</span>
              <select
                className="form-select form-select-sm"
                style={{ width: "auto" }}
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="newest">Featured / Newest</option>
                <option value="likes">Most Liked</option>
                <option value="comments">Most Discussed</option>
              </select>
            </div>
          </div>

          {/* Cards Grid */}
          {categoryBlogs.length === 0 ? (
            <div className="text-center py-5 bg-white rounded-4 border p-5">
              <i className="fa-solid fa-feather fs-1 text-muted mb-3"></i>
              <h4 className="fw-bold">No {categoryName} stories yet</h4>
              <p className="text-muted">Be the pioneer and publish the first story in this category!</p>
              <Link to="/BlogWrite" className="btn btn-brand-primary mt-2">
                Write a Story Now
              </Link>
            </div>
          ) : (
            <div className="blog-grid">
              {categoryBlogs.map((blog) => (
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

export default CategoryPage;
