// components/ProjectCard.jsx
import React from "react";

export default function ProjectCard({ project, darkMode }) {
  return (
    <div
      data-aos="fade-up"
      style={{
        backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
        color: darkMode ? "#ffffff" : "#121212",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        textAlign: "left",
        transition: "0.3s",
      }}
    >
      {/* Title */}
      <h2>{project.title}</h2>

      {/* Description */}
      <p>{project.description}</p>

      {/* Optional Image */}
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "180px",
            objectFit: "cover",
            borderRadius: "8px",
            marginBottom: "12px",
          }}
        />
      )}

      {/* Link */}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "10px",
            padding: "10px 16px",
            backgroundColor: darkMode ? "#007bff" : "#121212",
            color: "#fff",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          View Project
        </a>
      )}
    </div>
  );
}
