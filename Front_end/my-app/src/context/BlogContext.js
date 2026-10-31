import React, { createContext, useContext, useState, useEffect } from "react";
import { initialBlogs } from "../data/initialBlogs";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState(() => {
    try {
      const stored = localStorage.getItem("horizon_blogs");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
      return initialBlogs;
    } catch (e) {
      return initialBlogs;
    }
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    try {
      localStorage.setItem("horizon_blogs", JSON.stringify(blogs));
    } catch (e) {
      console.error(e);
    }
  }, [blogs]);

  const getBlogById = (id) => {
    const numericId = parseInt(id, 10);
    return blogs.find((b) => b.id === numericId || b.id === id);
  };

  const addBlog = (blogData) => {
    const newId = Date.now();
    const newPost = {
      id: newId,
      title: blogData.title,
      category: blogData.category || "General",
      image: blogData.image || "home1.jpg",
      date: new Date().toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" }),
      author: blogData.author || "Guest Writer",
      authorAvatar: blogData.authorAvatar || `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(blogData.author || "Guest")}`,
      authorEmail: blogData.authorEmail || "",
      readTime: blogData.readTime || "4 min read",
      summary: blogData.summary || blogData.content.slice(0, 150) + "...",
      content: blogData.content,
      likes: 0,
      likedBy: [],
      comments: []
    };

    setBlogs((prev) => [newPost, ...prev]);
    return newPost;
  };

  const addComment = (blogId, commentData) => {
    const numericId = parseInt(blogId, 10);
    const newComment = {
      id: "comment-" + Date.now(),
      name: commentData.name.trim(),
      avatar: commentData.avatar || `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(commentData.name)}`,
      text: commentData.text.trim(),
      date: new Date().toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })
    };

    setBlogs((prev) =>
      prev.map((b) => {
        if (b.id === numericId || b.id === blogId) {
          return {
            ...b,
            comments: [newComment, ...(b.comments || [])]
          };
        }
        return b;
      })
    );

    return newComment;
  };

  const toggleLike = (blogId, userIdentifier) => {
    const numericId = parseInt(blogId, 10);
    setBlogs((prev) =>
      prev.map((b) => {
        if (b.id === numericId || b.id === blogId) {
          const likedBy = b.likedBy || [];
          const hasLiked = userIdentifier && likedBy.includes(userIdentifier);
          if (hasLiked) {
            return {
              ...b,
              likes: Math.max(0, (b.likes || 1) - 1),
              likedBy: likedBy.filter((u) => u !== userIdentifier)
            };
          } else {
            return {
              ...b,
              likes: (b.likes || 0) + 1,
              likedBy: userIdentifier ? [...likedBy, userIdentifier] : likedBy
            };
          }
        }
        return b;
      })
    );
  };

  const deleteBlog = (blogId) => {
    const numericId = parseInt(blogId, 10);
    setBlogs((prev) => prev.filter((b) => b.id !== numericId && b.id !== blogId));
  };

  // Dynamically collect all categories
  const categories = [
    "All",
    "Home",
    "Food",
    "Travel",
    "Relationship",
    "Pets",
    ...Array.from(new Set(blogs.map((b) => b.category))).filter(
      (c) => !["All", "Home", "Food", "Travel", "Relationship", "Pets"].includes(c)
    )
  ];

  return (
    <BlogContext.Provider
      value={{
        blogs,
        getBlogById,
        addBlog,
        addComment,
        toggleLike,
        deleteBlog,
        categories,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogs = () => useContext(BlogContext);
