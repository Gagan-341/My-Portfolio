import React from "react";

export default function Footer() {
  return (
    <footer style={{ background: "#333", color: "#fff", textAlign: "center", padding: "10px" }}>
      <p>© {new Date().getFullYear()} My Portfolio | Built with React + Node.js</p>
    </footer>
  );
}
