import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      {/* Dark overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="content">
        <img src="/profile.jpg" alt="profile" className="profile-img" />
        <h1 className="name">Hi, I’m Gagan</h1>
        <h3 className="title">Aspiring AI Engineer</h3>

        <Link to="/projects" className="projects-btn">
          View My Projects 🚀
        </Link>
      </div>

      {/* Inline styles for animations */}
      <style>
        {`
          .home-container {
            position: relative;
            height: 100vh;
            width: 100%;
            background-image: url('/background.jpg');
            background-size: cover;
            background-position: center;
          }

          .overlay {
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            background-color: rgba(0,0,0,0.5);
            z-index: 0;
          }

          .content {
            position: relative;
            z-index: 1;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: white;
            padding: 0 20px;
          }

          .profile-img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            border: 4px solid white;
            margin-bottom: 20px;
            animation: float 3s ease-in-out infinite;
          }

          .name {
            font-size: 48px;
            margin: 0;
            opacity: 0;
            animation: fadeUp 1s forwards 0.3s;
          }

          .title {
            font-weight: 400;
            margin-top: 12px;
            opacity: 0;
            animation: fadeUp 1s forwards 0.6s;
          }

          .projects-btn {
            display: inline-block;
            margin-top: 30px;
            padding: 14px 28px;
            background-color: #007bff;
            color: #fff;
            border-radius: 8px;
            text-decoration: none;
            font-weight: bold;
            opacity: 0;
            animation: fadeUp 1s forwards 0.9s;
            transition: all 0.3s ease;
          }

          .projects-btn:hover {
            background-color: #0056b3;
          }

          /* Animations */
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }

          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          /* Responsive styles */
          @media (max-width: 768px) {
            .profile-img { width: 120px; height: 120px; }
            .name { font-size: 36px; }
            .title { font-size: 20px; }
            .projects-btn { padding: 12px 24px; font-size: 14px; }
          }

          @media (max-width: 480px) {
            .profile-img { width: 100px; height: 100px; }
            .name { font-size: 28px; }
            .title { font-size: 18px; }
            .projects-btn { padding: 10px 20px; font-size: 12px; }
          }
        `}
      </style>
    </div>
  );
}
