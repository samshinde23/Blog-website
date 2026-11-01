import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const DEFAULT_USERS = [
  {
    id: "user-1",
    name: "Samrudh Shinde",
    email: "sam@horizon.blog",
    password: "password123",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    bio: "Passionate writer, photographer & globetrotter.",
    joinedDate: "October 2024"
  }
];

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    try {
      const stored = localStorage.getItem("horizon_users");
      return stored ? JSON.parse(stored) : DEFAULT_USERS;
    } catch (e) {
      return DEFAULT_USERS;
    }
  });

  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const stored = localStorage.getItem("horizon_current_user");
      return stored ? JSON.parse(stored) : null;
    } catch (e) {
      return null;
    }
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState("login");

  useEffect(() => {
    try {
      localStorage.setItem("horizon_users", JSON.stringify(users));
    } catch (e) {}
  }, [users]);

  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem("horizon_current_user", JSON.stringify(currentUser));
      } else {
        localStorage.removeItem("horizon_current_user");
      }
    } catch (e) {}
  }, [currentUser]);

  const login = async (email, password) => {
    const trimmedEmail = email.trim().toLowerCase();

    // Try Vercel PostgreSQL Backend first
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "login", email: trimmedEmail, password })
      });

      if (res.ok) {
        const data = await res.json();
        if (data.user) {
          setCurrentUser(data.user);
          setIsAuthModalOpen(false);
          return { success: true };
        }
      } else if (res.status === 401 || res.status === 400) {
        const errData = await res.json().catch(() => ({}));
        return { success: false, message: errData.error || "Invalid email or password." };
      }
    } catch (apiErr) {
      console.warn("Backend API not reachable, falling back to local session:", apiErr.message);
    }

    // Fallback to local accounts if database is not reachable / local dev
    const user = users.find(
      (u) => u.email.toLowerCase() === trimmedEmail && u.password === password
    );

    if (user) {
      setCurrentUser(user);
      setIsAuthModalOpen(false);
      return { success: true };
    } else {
      return { success: false, message: "Invalid email or password. Please try again." };
    }
  };

  const register = async ({ name, email, password, avatar, bio }) => {
    const trimmedEmail = email.trim().toLowerCase();
    const userAvatar =
      avatar ||
      `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(name.trim())}`;
    const userBio = bio || "New contributor on Blog Horizon.";

    // Try Vercel PostgreSQL Backend first
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "register",
          name: name.trim(),
          email: trimmedEmail,
          password,
          avatar: userAvatar,
          bio: userBio
        })
      });

      if (res.ok) {
        const data = await res.json();
        if (data.user) {
          setCurrentUser(data.user);
          setIsAuthModalOpen(false);
          return { success: true };
        }
      } else if (res.status === 409 || res.status === 400) {
        const errData = await res.json().catch(() => ({}));
        return {
          success: false,
          message: errData.error || "An account with this email already exists."
        };
      }
    } catch (apiErr) {
      console.warn("Backend API not reachable, falling back to local storage:", apiErr.message);
    }

    // Fallback to local accounts
    const existing = users.find((u) => u.email.toLowerCase() === trimmedEmail);
    if (existing) {
      return { success: false, message: "An account with this email already exists." };
    }

    const newUser = {
      id: "user-" + Date.now(),
      name: name.trim(),
      email: trimmedEmail,
      password,
      avatar: userAvatar,
      bio: userBio,
      joinedDate: new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" })
    };

    setUsers((prev) => [...prev, newUser]);
    setCurrentUser(newUser);
    setIsAuthModalOpen(false);
    return { success: true };
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const openAuthModal = (mode = "login") => {
    setAuthModalMode(mode);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  return (
    <AuthContext.Provider
      value={{
        users,
        currentUser,
        login,
        register,
        logout,
        isAuthModalOpen,
        authModalMode,
        setAuthModalMode,
        openAuthModal,
        closeAuthModal
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
