import '../App.css';
import profilePic from '../assets/images/WhatsApp Image 2026-01-01 at 12.32.03.jpeg'; // Remplace par ton image
import Skills from "../components/Skills";
import Education from "../components/Education";
import Experience from "../components/Experience";


export default function Home() {
  const socialLinks = [
    {
      href: "https://github.com/Lindila",
      label: "GitHub",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .5C5.375.5 0 5.875 0 12.5c0 5.25 3.438 9.688 8.206 11.25.6.113.82-.263.82-.588 0-.288-.013-1.25-.013-2.275-3.338.738-4.038-1.625-4.038-1.625-.55-1.425-1.35-1.8-1.35-1.8-1.1-.75.088-.738.088-.738 1.213.088 1.85 1.238 1.85 1.238 1.075 1.838 2.825 1.313 3.512 1 .113-.775.425-1.313.775-1.613-2.662-.3-5.462-1.338-5.462-5.962 0-1.313.462-2.387 1.212-3.225-.125-.3-.525-1.512.113-3.162 0 0 .988-.313 3.238 1.212.95-.263 1.963-.388 2.975-.388s2.025.125 2.975.388c2.25-1.525 3.238-1.212 3.238-1.212.638 1.65.238 2.863.113 3.162.75.838 1.213 1.912 1.213 3.225 0 4.637-2.813 5.65-5.488 5.95.438.375.825 1.113.825 2.25 0 1.625-.013 2.938-.013 3.338 0 .325.213.713.825.588C20.563 22.188 24 17.75 24 12.5 24 5.875 18.625.5 12 .5z"/>
        </svg>
      )
    },
    {
      href: "https://gitlab.com/lyrayvy",
      label: "GitLab",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .5l3.065 8.824h8.964l-7.244 5.253 2.764 8.923-7.549-5.5-7.547 5.5 2.764-8.923-7.244-5.253h8.964z"/>
        </svg>
      )
    },
    {
      href: "https://linkedin.com/in/yvana-nono",
      label: "LinkedIn",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5C3.335 3.5 2 4.835 2 6.48c0 1.644 1.335 2.98 2.98 2.98s2.98-1.336 2.98-2.98c0-1.645-1.335-2.98-2.98-2.98zM2 21h5.96v-11H2v11zm7.92-11h5.714v1.524h.082c.797-1.508 2.744-3.096 5.65-3.096 6.045 0 7.16 3.98 7.16 9.152V21H17v-7.762c0-1.848-.033-4.225-2.576-4.225-2.576 0-2.972 2.012-2.972 4.09V21H7.92v-11z"/>
        </svg>
      )
    },
    {
      href: "https://www.facebook.com/share/1DFUG7Nemw/?mibextid=wwXIfr",
      label: "Facebook",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.008 3.657 9.145 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.196 2.238.196v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.145 22 17.008 22 12z"/>
        </svg>
      )
    },
    {
      href: "https://wa.me/237677576783",
      label: "WhatsApp",
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.52 3.484A11.946 11.946 0 0012 0C5.373 0 0 5.373 0 12c0 2.115.555 4.1 1.528 5.857L0 24l6.422-1.522A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12 0-3.193-1.243-6.185-3.48-8.516zm-8.52 17c-1.925 0-3.739-.525-5.29-1.43l-.377-.23-3.813.905.987-3.71-.245-.386C2.525 14.164 2 13.037 2 12c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10zm5.285-7.45c-.078-.13-.282-.21-.588-.367-.305-.157-1.81-.89-2.088-.994-.277-.104-.48-.156-.682.156-.202.313-.783.993-.96 1.196-.177.202-.355.23-.66.078-.305-.157-1.288-.475-2.453-1.515-.907-.807-1.518-1.805-1.695-2.118-.177-.313-.019-.48.138-.636.142-.142.314-.37.472-.555.157-.185.21-.313.314-.52.104-.207.052-.39-.026-.547-.078-.157-.682-1.643-.933-2.247-.245-.585-.495-.506-.682-.516l-.58-.01c-.202 0-.53.075-.808.36-.277.284-1.06 1.035-1.06 2.523s1.085 2.92 1.235 3.123c.157.207 2.14 3.26 5.18 4.567.725.313 1.29.5 1.73.638.726.207 1.388.178 1.91.108.583-.077 1.81-.738 2.065-1.448.255-.71.255-1.318.177-1.448z"/>
        </svg>
      )
    }
  ];

  return (
    <div>

      {/* Hero Section */}
      <div className="section-container hero-container flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Texte */}
        <div className="flex-1">
          <h1 className="text-5xl font-extrabold text-cyan-400 mb-4">
            <br></br>
            <br></br>
            Hola, Moi c'est Yvana Nono
          </h1>
          <h3 className="text-gray-600 text-lg mb-6">Ingenieur Logiciel</h3>
          <p className="text-gray-400 text-lg mb-6">
            Passionnée par la programmation, la maintenance informatique et la création de solutions numériques qui facilitent la vie des utilisateurs. J’aime créer, apprendre et donner vie à des idées grâce à la programmation. Chaque ligne de code est pour moi une façon de résoudre des problèmes et d’apporter quelque chose de concret aux autres.
          </p>
          <div>
            <a href="#projects" className="btn-primary mr-4">
              Voir mes projets
            </a>
            <a href="#contact" className="btn-secondary">
              Me contacter
            </a>
          </div>
        </div>

        {/* Photo + réseaux sociaux */}
        <div className="flex-1 flex flex-col items-center">
          <div className="hero-photo mb-6">
            <img
              src={profilePic}
              alt="Yvana Nono"
            />
          </div>

          {/* Réseaux sociaux */}
          <div className="flex gap-6">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-200 transition-colors"
                aria-label={link.label}
              >
                {link.svg}
              </a>
            ))}
          </div>
        </div>
      </div>
              <>
               <Skills />
              </>
      {/* Projets récents */}
<section id="projects" className="section-container">
  <h2 className="section-title">Mes projets</h2>
  <p className="section-subtitle">
    Quelques projets que j’ai réalisés récemment
  </p>

  <div className="projects-grid">
    {/* Projet 1 */}
    <div className="project-box">
      <img
        src="/projects/shooter.jpg"
        alt="Shooter Game"
        className="project-image"
      />

      <div className="project-content">
        <h3>Shooter Game</h3>
        <p>
          Jeu de tir multijoueur fluide avec une expérience immersive et
          dynamique.
        </p>

        <div className="project-buttons">
          <a
            href="https://exemple.com"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Voir le projet
          </a>
          <a href="#contact" className="btn-secondary">
            Me contacter
          </a>
        </div>
      </div>
    </div>

    {/* Projet 2 */}
    <div className="project-box">
      <img
        src="/projects/skillwokz.jpg"
        alt="SkillWokz"
        className="project-image"
      />

      <div className="project-content">
        <h3>SkillWokz</h3>
        <p>
          Plateforme de préparation aux entretiens techniques avec l’aide de
          l’IA.
        </p>

        <div className="project-buttons">
          <a
            href="https://skillwokz-portfolio.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Voir le projet
          </a>
          <a href="#contact" className="btn-secondary">
            Me contacter
          </a>
        </div>
      </div>
    </div>

    {/* Projet 3 */}
    <div className="project-box">
      <img
        src="/projects/xclone.jpg"
        alt="Clone de X"
        className="project-image"
      />

      <div className="project-content">
        <h3>Clone de X</h3>
        <p>
          Clone du réseau social X avec Firebase, authentification et posts.
        </p>

        <div className="project-buttons">
          <a
            href="https://exemple.com"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Voir le projet
          </a>
          <a href="#contact" className="btn-secondary">
            Me contacter
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
<Education />
<Experience />


    </div>
  );
}
