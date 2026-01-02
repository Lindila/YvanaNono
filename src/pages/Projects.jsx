import { useState } from "react";
import "./projects.css";
import { Link } from "react-router-dom";

const projectsData = [
  {
    title: "Gestion Restaurant",
    description: "Jeu de tir multijoueur fluide et amusant.",
    image: "/projects/shooter.png",
    category: "frontend",
    projectLink: "https://example.com",
  },
  {
    title: "SkillWokz",
    description:
      "Plateforme de préparation aux entretiens techniques propulsée par l’IA.",
    image: "/projects/skillwokz.png",
    category: "ia",
    projectLink: "https://skillwokz-portfolio.vercel.app",
  },
  {
    title: "Clone de X",
    description: "Clone du réseau social X avec authentification et posts.",
    image: "/projects/xclone.png",
    category: "backend",
    projectLink: "https://example.com",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section className="projects-section">
      <h2 className="projects-title">Mes Projets</h2>
      <p className="projects-subtitle">
        Découvrez une sélection de mes réalisations les plus significatives
      </p>

      {/* Filtres */}
      <div className="projects-filters">
        {["all", "frontend", "backend", "ia"].map((cat) => (
          <button
            key={cat}
            className={filter === cat ? "active" : ""}
            onClick={() => setFilter(cat)}
          >
            {cat === "all"
              ? "Tous"
              : cat === "ia"
              ? "IA"
              : cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Cartes */}
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div className="project-card fade-in" key={index}>
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-actions">
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn primary"
                >
                  Voir le projet
                </a>

                <Link to="/contact" className="btn outline">
                  Me contacter
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
