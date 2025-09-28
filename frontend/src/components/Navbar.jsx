import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="navbar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 32px",
        backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
        color: darkMode ? "#ffffff" : "#121212",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        position: "relative",
        zIndex: 10,
      }}
    >
      {/* Logo / Name */}
      <h2 style={{ margin: 0 }}>Gagan's Portfolio</h2>

      {/* Desktop Links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* Theme Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          background: "none",
          border: "2px solid",
          borderColor: darkMode ? "#ffffff" : "#121212",
          color: darkMode ? "#ffffff" : "#121212",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          cursor: "pointer",
          fontSize: "18px",
          marginLeft: "16px",
        }}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      {/* Hamburger Icon */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: "none",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "25px",
          height: "18px",
          background: "none",
          border: "none",
          cursor: "pointer",
          marginLeft: "16px",
        }}
      >
        <span style={{
          display: "block",
          height: "3px",
          width: "100%",
          backgroundColor: darkMode ? "#fff" : "#121212",
          borderRadius: "2px",
        }}></span>
        <span style={{
          display: "block",
          height: "3px",
          width: "100%",
          backgroundColor: darkMode ? "#fff" : "#121212",
          borderRadius: "2px",
        }}></span>
        <span style={{
          display: "block",
          height: "3px",
          width: "100%",
          backgroundColor: darkMode ? "#fff" : "#121212",
          borderRadius: "2px",
        }}></span>
      </button>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${menuOpen ? "open" : ""}`}
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          top: "70px",
          right: 0,
          backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
          width: "200px",
          padding: "16px",
          gap: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease",
        }}
      >
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>

      {/* Responsive CSS */}
      <style>
        {`
          @media (max-width: 768px) {
            .nav-links { display: none; }
            .hamburger { display: flex; }
          }
        `}
      </style>
    </nav>
  );
}
