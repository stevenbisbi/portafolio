import { Github, Linkedin } from "lucide-react";

const STACK = ["React", "Node.js", "Django", "PostgreSQL", "Docker"];

export default function Hero() {
  return (
    <main className="section-grid hero">
      <div className="content">
        <div className="hero-avatar-row">
          <img
            src="/Profile.jpg"
            alt="Michael Steven Sánchez"
            className="hero-avatar"
          />
          <div className="tag-box">
            <div className="tag">Disponible para nuevos proyectos ▲</div>
          </div>
        </div>

        <h1>
          FULL-STACK <br />
          <span className="text-gradient">DEVELOPER</span>
        </h1>

        <p className="description">
          Este es mi portafolio. Aquí encontrarás una muestra de mi trabajo, mis
          conocimientos técnicos y mi pasión por la programación. ¡Explora y
          descubre lo que puedo ofrecer!
        </p>

        <div className="tech-pills">
          {STACK.map((tech) => (
            <span key={tech} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>

        <div className="buttons">
          <a
            href="https://github.com/stevenbisbi"
            target="_blank"
            rel="noreferrer"
            className="btn-get-started"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/michaelssb"
            target="_blank"
            rel="noreferrer"
            className="btn-signing-main"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>

        <div className="scroll-cue">
          <span className="scroll-cue-line" />
          Desliza para ver más
        </div>
      </div>
    </main>
  );
}
