import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "../components/ProjectCard";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
    axios
      .get("/api/projects")
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }} data-aos="fade-down">
        My Projects
      </h1>

      {projects.length === 0 ? (
        <p style={{ textAlign: "center" }}>No projects found.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {projects.map((project) => (
            <div
              key={project._id}
              data-aos="fade-up"
              data-aos-delay="100"
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                backgroundColor: "#fff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                transition: "0.3s",
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      )}

      {/* Responsive CSS */}
      <style>
        {`
          @media (max-width: 768px) {
            div[style*="gridTemplateColumns"] {
              grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            }
          }

          @media (max-width: 480px) {
            div[style*="gridTemplateColumns"] {
              grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            }
          }
        `}
      </style>
    </div>
  );
}
