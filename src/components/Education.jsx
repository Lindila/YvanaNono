import "./education.css";

export default function Education() {
  return (
    <section className="section-container">
      {/* Titre principal */}
      <h2 className="section-title">Formation & Certifications</h2>
      <p className="section-subtitle">
        Mon parcours académique et les certifications qui valident mes compétences
      </p>

      {/* Formation académique */}
      <div className="edu-block">
        <h3 className="edu-heading">🎓 Formation Académique</h3>

        <div className="edu-grid">
          {/* Card 1 */}
          <div className="edu-card">
            <div className="edu-icon">🎓</div>
            <h4>Baccalauréat D</h4>
            <p className="edu-school">Lycée Bilingue d’Ekounou</p>
            <span className="edu-meta">2021 – 2022 • Yaoundé, Cameroun</span>
            <span className="edu-status">En cours</span>
          </div>

          {/* Card 2 */}
          <div className="edu-card">
            <div className="edu-icon">🎓</div>
            <h4>BTS en Génie Logiciel</h4>
            <p className="edu-school">ISSAM</p>
            <span className="edu-meta">2022 – 2024 • Yaoundé, Cameroun</span>
            <span className="edu-status">En cours</span>
          </div>

          {/* Card 3 */}
          <div className="edu-card">
            <div className="edu-icon">🎓</div>
            <h4>Licence en Génie Logiciel</h4>
            <p className="edu-school">ISSAM</p>
            <span className="edu-meta">2024 – 2025 • Yaoundé, Cameroun</span>
            <span className="edu-status">En cours</span>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="edu-block">
        <h3 className="edu-heading">🏆 Certifications</h3>

        <div className="edu-grid">
          <div className="edu-card">
            <div className="edu-icon">📜</div>
            <h4>Développement Web</h4>
            <p className="edu-school">OpenClassrooms</p>
            <span className="edu-meta">Certification professionnelle</span>
          </div>

          <div className="edu-card">
            <div className="edu-icon">📜</div>
            <h4>Intelligence Artificielle</h4>
            <p className="edu-school">Google / Coursera</p>
            <span className="edu-meta">Machine Learning & IA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
