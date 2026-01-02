import "./skills.css";

const skillsData = [
  {
    title: "Frontend",
    items: [
      { name: "HTML5", icon: "/icons/WhatsApp Image 2026-01-02 at 17.31.39 (2).jpeg" },
      { name: "CSS / Tailwind", icon: "/icons/WhatsApp Image 2026-01-02 at 17.31.39 (1).jpeg" },
      { name: "JavaScript", icon: "/icons/js.jpeg" },
      { name: "React", icon: "/icons/react.jpeg" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: "/icons/node.jpeg" },
      { name: "PHP", icon: "/icons/php.jpeg" },
      { name: "PostgreSQL", icon: "/icons/postgre.jpeg" },
      { name: "MongoDB", icon: "/icons/MONGO.jpeg" },
      { name: "Firebase", icon: "/icons/firebase.jpeg" },
    ],
  },
  {
    title: "Maintenance Informatique",
    items: [
      { name: "Diagnostic matériel", icon: "/icons/ordi.jpeg" },
      { name: "Carte mère", icon: "/icons/carte mere.jpeg" },
      { name: "SSD / HDD", icon: "/icons/ssd.jpeg" },
    ],
  },
  {
    title: "Intelligence Artificielle",
    items: [
      { name: "OpenAI", icon: "/icons/openia.jpeg" },
      { name: "TensorFlow", icon: "/icons/tensorf.jpeg" },
      { name: "PyTorch", icon: "/icons/pytorch.jpeg" },
    ],
  },
  {
    title: "Infographie",
    items: [
      { name: "Photoshop", icon: "/icons/PS.jpeg" },
      { name: "Illustrator", icon: "/icons/AI.jpeg" },
      { name: "Affinity Publisher", icon: "/icons/publisher.jpeg" },
      { name: "Canva", icon: "/icons/canva.jpeg" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Mes compétences</h2>
      <p className="skills-intro">
   Au fil de mon parcours, j’ai développé des compétences variées couvrant le
  développement web, le backend, l’intelligence artificielle et la maintenance
  informatique.
  Voici les technologies et domaines que j’utilise au quotidien dans mes projets.

</p>


      <div className="skills-wrapper">
        {skillsData.map((group, index) => (
          <div className="skills-group fade-in" key={index}>
            <h3 className="skills-group-title">{group.title}</h3>

            <div className="skills-grid">
              {group.items.map((skill, i) => (
                <div className="skill-card" key={i}>
                  <div className="skill-icon">
  <img src={skill.icon} alt={skill.name} />
</div>

                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
