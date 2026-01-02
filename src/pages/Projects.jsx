import { useState } from "react";
import { Link } from "react-router-dom";
import "./projects.css";

const projectsData = [
  {
    title: "Gestion Restaurant",
    image: "/projects/Capture2.PNG",
    description:
      "Application de gestion pour restaurant avec interface moderne et fluide.",
    category: "frontend",
    projectLink: "https://lindila-github.vercel.app/",
  },
  {
    title: "Mon Portfolio",
    image: "/projects/Capture.PNG",
    description:
      "Mon site portfolio déployé sur Vercel présentant mes projets et compétences.",
    category: "frontend",
    projectLink: "https://yvana-nono.vercel.app/",
  },
  {
    title: "GestCourr",
    image: "/projects/Capture3.PNG",
    description:
      "Gestion du courrier au MINRESI.",
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
        Une sélection de projets déployés et fonctionnels
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

      {/* Projets */}
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div className="project-card fade-in" key={index}>
            {/* Aperçu automatique du site */}
            <div className="project-preview">
              <img src={project.image} alt={project.title} />
            </div>

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
