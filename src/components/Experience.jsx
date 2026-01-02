import "./experience.css";

export default function Experience() {
  return (
    <section className="section-container">
      <h2 className="section-title">Mon Expérience</h2>
      <p className="section-subtitle">
        Mon parcours professionnel et les projets sur lesquels j’ai travaillé
      </p>

      <div className="experience-timeline">

        {/* Expérience 1 */}
        <div className="experience-item">
          <div className="timeline-dot"></div>

          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3>Développeur Full Stack</h3>
                <span className="experience-company">MINRESI</span>
              </div>
              <span className="experience-badge">Stage</span>
            </div>

            <div className="experience-meta">
              <span>📅 2023 – 2024</span>
              <span>📍 Yaoundé, Cameroun</span>
            </div>

            <p className="experience-desc">
              Développement d’applications web modernes avec HTML,CSS et PHP.
            </p>

            <h4 className="experience-subtitle">Principales réalisations</h4>
            <ul className="experience-list">
              <li>Etude du systeme de gestion du courrier du MINRESI</li>
              <li>Elaboration et mise en oeuvre de La base de donnee</li>
              <li>Programmation des interfaces de gestion </li>
            </ul>

            <div className="experience-tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>PHP</span>
              <span>Wamp server</span>
              <span>Boostrap</span>
            </div>
          </div>
        </div>

        {/* Expérience 2 */}
        <div className="experience-item">
          <div className="timeline-dot"></div>

          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3>Développeur Frontend</h3>
                <span className="experience-company">Projets personnels</span>
              </div>
              <span className="experience-badge">Frelance</span>
            </div>

            <div className="experience-meta">
              <span>📅 2025 – Présent</span>
              <span>📍 📅 2023 – 2024</span>
            </div>

            <p className="experience-desc">
              Conception et développement des Interfaces de Gestion des immobiliers avec geolocalisation.
            </p>

            <ul className="experience-list">
              <li>Intégration de l API google MAP</li>
              <li>Intégration de maquettes Figma</li>
              <li>Gestion du mode sombre / clair</li>
            </ul>

            <div className="experience-tags">
              <span>React</span>
              <span>Tailwind</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Node.js</span>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
