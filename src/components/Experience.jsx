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
                <span className="experience-company">Twingo SARL</span>
              </div>
              <span className="experience-badge">Stage</span>
            </div>

            <div className="experience-meta">
              <span>📅 2023 – 2024</span>
              <span>📍 Yaoundé, Cameroun</span>
            </div>

            <p className="experience-desc">
              Développement d’applications web modernes avec React, Firebase et Appwrite.
            </p>

            <h4 className="experience-subtitle">Principales réalisations</h4>
            <ul className="experience-list">
              <li>Optimisation des performances réduisant le temps de chargement de 40%</li>
              <li>Création d’interfaces modernes et responsives</li>
            </ul>

            <div className="experience-tags">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>TypeScript</span>
              <span>Appwrite</span>
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
              <span className="experience-badge">Freelance</span>
            </div>

            <div className="experience-meta">
              <span>📅 2022 – Présent</span>
              <span>📍 Remote</span>
            </div>

            <p className="experience-desc">
              Conception et développement d’interfaces utilisateur modernes et accessibles.
            </p>

            <ul className="experience-list">
              <li>Intégration de maquettes Figma</li>
              <li>Gestion du mode sombre / clair</li>
            </ul>

            <div className="experience-tags">
              <span>React</span>
              <span>Tailwind</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
