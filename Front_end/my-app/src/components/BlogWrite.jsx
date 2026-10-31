import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBlogs } from "../context/BlogContext";
import { useAuth } from "../context/AuthContext";

const PRESET_IMAGES = [
  { name: "Food: Savory Dish", file: "food1.jpg" },
  { name: "Food: Artisanal Bakery", file: "food2.jpg" },
  { name: "Food: Fresh Bowls", file: "food4.jpg" },
  { name: "Food: Gourmet Plate", file: "food6.jpg" },
  { name: "Travel: Mountain Trek", file: "travel1.jpg" },
  { name: "Travel: Coastal Escape", file: "travel2.jpg" },
  { name: "Travel: Historic Architecture", file: "travel4.jpg" },
  { name: "Travel: Serene Lake", file: "travel7.jpg" },
  { name: "Pets: Playful Dog", file: "pets1.jpg" },
  { name: "Pets: Cozy Puppy", file: "pets2.jpg" },
  { name: "Pets: Gentle Kitten", file: "pets4.jpg" },
  { name: "Pets: Adorable Friends", file: "pets5.jpg" },
  { name: "Home: Creative Studio", file: "home1.jpg" },
  { name: "Home: Mindful Living", file: "home2.jpg" },
  { name: "Home: Cozy Interior", file: "home3.jpg" },
  { name: "Relationship: Family Moments", file: "rel1.jpg" },
  { name: "Relationship: Parent & Child", file: "rel2.jpg" },
  { name: "Relationship: Shared Journeys", file: "rel3.jpg" }
];

const PRESET_CATEGORIES = ["Food", "Travel", "Pets", "Relationship", "Home", "Lifestyle", "Technology", "Art"];

function BlogWrite() {
  const navigate = useNavigate();
  const { addBlog } = useBlogs();
  const { currentUser, openAuthModal } = useAuth();

  // Form states
  const [title, setTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Food");
  const [customCategory, setCustomCategory] = useState("");
  const [isCustomCategory, setIsCustomCategory] = useState(false);

  // Image source modes: "upload" | "preset" | "url"
  const [imageMode, setImageMode] = useState("preset");
  const [selectedPreset, setSelectedPreset] = useState("food1.jpg");
  const [imageUrl, setImageUrl] = useState("");
  const [uploadedBase64, setUploadedBase64] = useState("");

  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [authorName, setAuthorName] = useState(currentUser ? currentUser.name : "");
  const [activeTab, setActiveTab] = useState("edit"); // "edit" | "preview"
  const [errorMsg, setErrorMsg] = useState("");

  // Handle local file upload & convert to base64 DataURL
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setErrorMsg("Please upload a valid image file (PNG, JPG, WEBP).");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setUploadedBase64(reader.result);
      setErrorMsg("");
    };
    reader.readAsDataURL(file);
  };

  // Determine active image
  const getActiveImage = () => {
    if (imageMode === "upload" && uploadedBase64) return uploadedBase64;
    if (imageMode === "url" && imageUrl.trim()) return imageUrl.trim();
    return selectedPreset || "food1.jpg";
  };

  // Calculate read time
  const wordCount = content.trim() ? content.trim().split(/\s+/).length : 0;
  const calculatedReadTime = Math.max(1, Math.ceil(wordCount / 180)) + " min read";

  const activeCategory = isCustomCategory ? (customCategory.trim() || "General") : selectedCategory;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!title.trim()) {
      setErrorMsg("Please enter a title for your blog post.");
      return;
    }
    if (!content.trim()) {
      setErrorMsg("Please write some content for your story.");
      return;
    }

    const finalAuthor = currentUser ? currentUser.name : (authorName.trim() || "Guest Writer");
    const finalAvatar = currentUser
      ? currentUser.avatar
      : `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(finalAuthor)}`;

    const newBlog = addBlog({
      title: title.trim(),
      category: activeCategory,
      image: getActiveImage(),
      summary: summary.trim() || content.slice(0, 160) + "...",
      content: content.trim(),
      author: finalAuthor,
      authorAvatar: finalAvatar,
      authorEmail: currentUser ? currentUser.email : "",
      readTime: calculatedReadTime
    });

    // Navigate to the newly created blog post!
    navigate(`/blog/${newBlog.id}`);
  };

  return (
    <div className="editor-container animate-fade-in">
      <div className="editor-card">
        {/* Header */}
        <div className="d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom">
          <div>
            <h2 className="fw-bold m-0 text-dark">
              <i className="fa-solid fa-feather-pointed text-primary me-2"></i>
              Write a New Blog Story
            </h2>
            <p className="text-muted small m-0 mt-1">
              Publish your experiences, tips, and insights to the Blog Horizon community
            </p>
          </div>

          <div className="btn-group">
            <button
              type="button"
              className={`btn btn-sm ${activeTab === "edit" ? "btn-dark" : "btn-outline-secondary"}`}
              onClick={() => setActiveTab("edit")}
            >
              <i className="fa-solid fa-pen-nib me-1"></i> Editor
            </button>
            <button
              type="button"
              className={`btn btn-sm ${activeTab === "preview" ? "btn-dark" : "btn-outline-secondary"}`}
              onClick={() => setActiveTab("preview")}
            >
              <i className="fa-solid fa-eye me-1"></i> Live Preview
            </button>
          </div>
        </div>

        {/* User state alert */}
        {!currentUser && (
          <div className="alert alert-light border d-flex align-items-center justify-content-between py-2 px-3 mb-4 rounded-3">
            <div className="small">
              <i className="fa-solid fa-circle-info text-primary me-2"></i>
              Writing as a guest. Want to link this story to your profile?
            </div>
            <button
              type="button"
              className="btn btn-sm btn-outline-primary py-1 px-3 fw-bold rounded-pill"
              onClick={() => openAuthModal("login")}
            >
              Sign In / Register
            </button>
          </div>
        )}

        {errorMsg && (
          <div className="alert alert-danger py-2 small d-flex align-items-center gap-2 mb-4">
            <i className="fa-solid fa-circle-exclamation"></i>
            <span>{errorMsg}</span>
          </div>
        )}

        {activeTab === "edit" ? (
          <form onSubmit={handleSubmit}>
            {/* Title */}
            <div className="mb-4">
              <label className="form-label-custom">
                <span>Story Title <span className="text-danger">*</span></span>
                <span className="text-muted small fw-normal">{title.length}/100</span>
              </label>
              <input
                type="text"
                className="form-control form-control-custom w-100 fs-5 fw-bold"
                placeholder="Give your story a catchy title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                maxLength={120}
                required
              />
            </div>

            {/* Category Selector */}
            <div className="mb-4">
              <label className="form-label-custom">
                <span>Select Category <span className="text-danger">*</span></span>
              </label>
              <div className="d-flex flex-wrap gap-2 mb-2">
                {PRESET_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    className={`btn btn-sm rounded-pill px-3 ${
                      !isCustomCategory && selectedCategory === cat
                        ? "btn-dark fw-bold"
                        : "btn-outline-secondary"
                    }`}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setIsCustomCategory(false);
                    }}
                  >
                    {cat}
                  </button>
                ))}
                <button
                  type="button"
                  className={`btn btn-sm rounded-pill px-3 ${
                    isCustomCategory ? "btn-dark fw-bold" : "btn-outline-secondary"
                  }`}
                  onClick={() => setIsCustomCategory(true)}
                >
                  <i className="fa-solid fa-plus me-1"></i> Custom Category
                </button>
              </div>

              {isCustomCategory && (
                <div className="mt-2">
                  <input
                    type="text"
                    className="form-control form-control-custom w-100"
                    placeholder="Enter custom category name (e.g. Photography, Fitness, Music)..."
                    value={customCategory}
                    onChange={(e) => setCustomCategory(e.target.value)}
                    required
                  />
                </div>
              )}
            </div>

            {/* Cover Image Picker */}
            <div className="mb-4">
              <label className="form-label-custom">
                <span>Cover Picture <span className="text-danger">*</span></span>
                <span className="text-muted small fw-normal">Choose preset, upload photo, or paste URL</span>
              </label>

              {/* Mode Tabs */}
              <div className="btn-group btn-group-sm mb-3">
                <button
                  type="button"
                  className={`btn ${imageMode === "preset" ? "btn-primary" : "btn-outline-secondary"}`}
                  onClick={() => setImageMode("preset")}
                >
                  <i className="fa-solid fa-images me-1"></i> Gallery Presets
                </button>
                <button
                  type="button"
                  className={`btn ${imageMode === "upload" ? "btn-primary" : "btn-outline-secondary"}`}
                  onClick={() => setImageMode("upload")}
                >
                  <i className="fa-solid fa-upload me-1"></i> Upload File
                </button>
                <button
                  type="button"
                  className={`btn ${imageMode === "url" ? "btn-primary" : "btn-outline-secondary"}`}
                  onClick={() => setImageMode("url")}
                >
                  <i className="fa-solid fa-link me-1"></i> Image URL
                </button>
              </div>

              {/* Preset mode */}
              {imageMode === "preset" && (
                <div>
                  <div className="preset-gallery-grid mb-2">
                    {PRESET_IMAGES.map((img) => (
                      <div
                        key={img.file}
                        className={`text-center ${selectedPreset === img.file ? "border-primary" : ""}`}
                        onClick={() => setSelectedPreset(img.file)}
                        title={img.name}
                      >
                        <img
                          src={`/${img.file}`}
                          alt={img.name}
                          className={`preset-thumb ${selectedPreset === img.file ? "selected" : ""}`}
                        />
                      </div>
                    ))}
                  </div>
                  <small className="text-muted">Selected preset: <strong>{selectedPreset}</strong></small>
                </div>
              )}

              {/* Upload mode */}
              {imageMode === "upload" && (
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control form-control-custom w-100"
                    onChange={handleFileUpload}
                  />
                  {uploadedBase64 && (
                    <div className="mt-2 text-center p-2 bg-light rounded">
                      <img
                        src={uploadedBase64}
                        alt="Uploaded preview"
                        style={{ maxHeight: "180px", maxWidth: "100%", borderRadius: "8px" }}
                      />
                      <div className="small text-success mt-1">
                        <i className="fa-solid fa-check me-1"></i> Image loaded successfully
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* URL mode */}
              {imageMode === "url" && (
                <div>
                  <input
                    type="url"
                    className="form-control form-control-custom w-100"
                    placeholder="https://images.unsplash.com/..."
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                  {imageUrl && (
                    <div className="mt-2 text-center p-2 bg-light rounded">
                      <img
                        src={imageUrl}
                        alt="URL preview"
                        style={{ maxHeight: "180px", maxWidth: "100%", borderRadius: "8px" }}
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Author Name */}
            {!currentUser && (
              <div className="mb-4">
                <label className="form-label-custom">
                  <span>Author Name</span>
                </label>
                <input
                  type="text"
                  className="form-control form-control-custom w-100"
                  placeholder="Your Name (e.g. Samrudh)"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                />
              </div>
            )}

            {/* Short Summary */}
            <div className="mb-4">
              <label className="form-label-custom">
                <span>Short Summary / Excerpt</span>
                <span className="text-muted small fw-normal">Displayed on cards (optional)</span>
              </label>
              <input
                type="text"
                className="form-control form-control-custom w-100"
                placeholder="A quick 1-2 sentence teaser about your blog..."
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                maxLength={200}
              />
            </div>

            {/* Full Story Content */}
            <div className="mb-4">
              <label className="form-label-custom">
                <span>Story Content <span className="text-danger">*</span></span>
                <span className="text-muted small fw-normal">
                  {wordCount} words • ~{calculatedReadTime}
                </span>
              </label>
              <textarea
                className="form-control form-control-custom w-100"
                rows="10"
                placeholder="Write your story here... Separate paragraphs with double enters."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              ></textarea>
            </div>

            {/* Action Buttons */}
            <div className="d-flex align-items-center justify-content-between pt-3 border-top">
              <button
                type="button"
                className="btn btn-brand-secondary"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-brand-primary px-5 py-2">
                <i className="fa-solid fa-paper-plane me-2"></i> Publish Story
              </button>
            </div>
          </form>
        ) : (
          /* Live Preview Mode */
          <div className="preview-container animate-fade-in">
            <div className="border rounded-3 p-4 bg-light mb-4">
              <span className={`badge-category badge-${activeCategory} mb-2`}>
                {activeCategory}
              </span>
              <h1 className="fw-bold text-dark mt-2">{title || "Your Story Title Here"}</h1>
              <div className="d-flex align-items-center gap-2 text-muted small my-3">
                <span>By {currentUser ? currentUser.name : (authorName || "Guest Writer")}</span>
                <span>•</span>
                <span>{calculatedReadTime}</span>
              </div>
              <div className="my-3 text-center">
                <img
                  src={getActiveImage().startsWith("/") ? getActiveImage() : (getActiveImage().startsWith("http") || getActiveImage().startsWith("data:") ? getActiveImage() : `/${getActiveImage()}`)}
                  alt="Preview"
                  style={{ maxHeight: "340px", width: "100%", objectFit: "cover", borderRadius: "12px" }}
                />
              </div>
              <div className="mt-4 fs-6" style={{ whiteSpace: "pre-line", lineHeight: 1.8 }}>
                {content || "Your article content will appear here..."}
              </div>
            </div>

            <div className="text-end">
              <button
                type="button"
                className="btn btn-brand-primary px-4 py-2"
                onClick={handleSubmit}
              >
                <i className="fa-solid fa-paper-plane me-2"></i> Looks Great, Publish!
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogWrite;
