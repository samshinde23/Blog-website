import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import { BlogProvider } from "../context/BlogContext";
import Navbar from "./Navbar";
import AuthModal from "./AuthModal";
import Home from "./Home";
import Food from "./Food";
import Travel from "./Travel";
import Relationship from "./Relationship";
import Pets from "./Pets";
import BlogView from "./BlogView";
import BlogWrite from "./BlogWrite";
import Comments from "./Comments";
import "../App.css";

function App() {
  return (
    <AuthProvider>
      <BlogProvider>
        <div className="app-wrapper">
          <Navbar />
          <AuthModal />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Food" element={<Food />} />
              <Route path="/Travel" element={<Travel />} />
              <Route path="/Relationship" element={<Relationship />} />
              <Route path="/Pets" element={<Pets />} />

              {/* View Blog routes */}
              <Route path="/blog/:id" element={<BlogView />} />
              <Route path="/homeview/:id" element={<BlogView />} />
              <Route path="/foodview/:id" element={<BlogView />} />
              <Route path="/travelview/:id" element={<BlogView />} />
              <Route path="/relationshipview/:id" element={<BlogView />} />
              <Route path="/petsview/:id" element={<BlogView />} />

              {/* Create / Write Blog */}
              <Route path="/BlogWrite" element={<BlogWrite />} />
              <Route path="/create" element={<BlogWrite />} />
              <Route path="/write" element={<BlogWrite />} />

              {/* Comments & Community Discussions */}
              <Route path="/Comments" element={<Comments />} />

              {/* 404 redirect */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </BlogProvider>
    </AuthProvider>
  );
}

export default App;
