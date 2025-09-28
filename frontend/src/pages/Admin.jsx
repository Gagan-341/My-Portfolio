// pages/Admin.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "../components/ProjectCard";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Admin({ darkMode }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Form state
  const [form, setForm] = useState({
    title: "",
    description: "",
    link: "",
    tags: "",
    image: null,
  });

  const [editingId, setEditingId] = useState(null); // null = create, id = edit

  // Fetch projects
  const fetchProjects = async () => {
    try {
      const res = await axios.get("/api/projects");
      setProjects(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
    fetchProjects();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) setForm({ ...form, [name]: files[0] });
    else setForm({ ...form, [name]: value });
  };

  // Handle create or update
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("link", form.link);
    formData.append("tags", form.tags);
    if (form.image) formData.append("image", form.image);

    try {
      if (editingId) {
        // Update project
        await axios.put(`/api/projects/${editingId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setEditingId(null);
      } else {
        // Create project
        await axios.post("/api/projects", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      setForm({ title: "", description: "", link: "", tags: "", image: null });
      fetchProjects();
    } catch (err) {
      console.error(err);
    }
  };

  // Delete project
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/projects/${id}`);
      fetchProjects();
    } catch (err) {
      console.error(err);
    }
  };

  // Pre-fill form for editing
  const handleEdit = (project) => {
    setForm({
      title: project.title,
      description: project.description,
      link: project.link,
      tags: project.tags.join(", "),
      image: null,
    });
    setEditingId(project._id);
  };

  return (
    <div style={{ padding: "40px", color: darkMode ? "#fff" : "#121212" }}>
      <h1 data-aos="fade-down" style={{ textAlign: "center", marginBottom: "30px" }}>Admin Panel</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        data-aos="fade-down"
        style={{
          marginBottom: "40px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={form.title}
          onChange={handleChange}
          required
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />

        <textarea
          name="description"
          placeholder="Project Description"
          value={form.description}
          onChange={handleChange}
          required
          rows={4}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
            resize: "vertical",
          }}
        />

        <input
          type="text"
          name="link"
          placeholder="Project Link"
          value={form.link}
          onChange={handleChange}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />

        <input
          type="text"
          name="tags"
          placeholder="Tags (comma separated)"
          value={form.tags}
          onChange={handleChange}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />

        <input type="file" name="image" onChange={handleChange} />

        <div style={{ display: "flex", gap: "12px" }}>
          <button
            type="submit"
            style={{
              flex: 1,
              padding: "12px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
          >
            {editingId ? "Update Project" : "Add Project"}
          </button>

          {editingId && (
            <button
              type="button"
              onClick={() => {
                setEditingId(null);
                setForm({ title: "", description: "", link: "", tags: "", image: null });
              }}
              style={{
                flex: 1,
                padding: "12px",
                backgroundColor: "#6c757d",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#5a6268")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#6c757d")}
            >
              Cancel Edit
            </button>
          )}
        </div>
      </form>

      {/* Projects list */}
      {loading ? (
        <p style={{ textAlign: "center" }}>Loading projects...</p>
      ) : projects.length === 0 ? (
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
                position: "relative",
                borderRadius: "12px",
                overflow: "hidden",
                backgroundColor: darkMode ? "#1e1e1e" : "#fff",
                color: darkMode ? "#fff" : "#121212",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                transition: "0.3s",
              }}
            >
              <ProjectCard project={project} darkMode={darkMode} />
              <div style={{ display: "flex", gap: "8px", padding: "10px" }}>
                <button
                  onClick={() => handleEdit(project)}
                  style={{
                    flex: 1,
                    padding: "8px",
                    backgroundColor: "orange",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(project._id)}
                  style={{
                    flex: 1,
                    padding: "8px",
                    backgroundColor: "red",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
