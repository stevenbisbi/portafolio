import { useState, useEffect } from "react";
import { DynamicIcon } from "lucide-react/dynamic";
import {
  Github,
  Mail,
  ExternalLink,
  Menu,
  X,
  Code,
  Database,
  Globe,
  Smartphone,
} from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css"; // estilos extra (gradientes, colores, etc.)
import profile from "./assets/profile.jpg";
import restaurant from "./assets/restaurant.png";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Restaurant Platform",
      description: "Plataforma de gestion para restaurantes.",
      image: restaurant,
      technologies: [
        "React",
        "Node.js",
        "Django",
        "Redux",
        "Bootstrap",
        "Redis",
        "PostgreSQL",
      ],
      github: "#",
      live: "#",
    },
    {
      id: 2,
      title: "API Zelda",
      description:
        "Frontend que consume una API Rest del videojuego The Legend Of Zelda.",
      image: "/API-zelda.PNG",
      technologies: ["React", "Bootstrap"],
      github: "#",
      live: "https://zeldaapi.netlify.app/",
    },
    {
      id: 3,
      title: "EDM Festival",
      description:
        "Dashboard del clima con pronósticos detallados y visualización de datos meteorológicos.",
      image: "/EDM.PNG",
      technologies: ["HTML", "JavaScript", "SASS"],
      github: "#",
      live: "https://steven-festival.netlify.app/",
    },
    {
      id: 4,
      title: "Landing Page ",
      description:
        "Dashboard del clima con pronósticos detallados y visualización de datos meteorológicos.",
      image: "landing-page.PNG",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "#",
      live: "https://proyecto-steven-sanchez-freelancer.netlify.app/",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "Vue.js",
        "Angular",
        "TypeScript",
        "Bootstrap",
        "SASS",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
      icon: <Globe className="text-primary me-2" />,
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Java",
        "Python",
        "Express",
        "Django",
        "GraphQL",
        "REST APIs",
        "SQL",
        "NoSQL",
        "Microservices",
        "CI/CD",
        "Testing",
        "Agile",
        "Azure",
      ],
      icon: <Database className="text-success me-2" />,
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis", "SQLite"],
      icon: <Database className="text-warning me-2" />,
    },
    {
      category: "Tools",
      items: ["Git", "Docker", "AWS", "Vercel", "Figma", "Jest"],
      icon: <Smartphone className="text-danger me-2" />,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "inicio",
        "sobre-mi",
        "proyectos",
        "habilidades",
        "contacto",
      ];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-dark text-light">
      {/* Navbar */}
      <nav className="navbar navbar-expand-md fixed-top bg-dark shadow">
        <div className="container">
          <span className="navbar-brand text-gradient">Portafolio</span>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          >
            <ul className="navbar-nav ms-auto">
              {[
                "inicio",
                "sobre-mi",
                "proyectos",
                "habilidades",
                "contacto",
              ].map((link) => (
                <li key={link} className="nav-item">
                  <button
                    className={`nav-link btn btn-link ${
                      activeSection === link
                        ? "text-primary fw-bold"
                        : "text-light"
                    }`}
                    onClick={() => scrollToSection(link)}
                  >
                    {link.replace("-", " ").toUpperCase()}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="inicio"
        className="d-flex align-items-center justify-content-center vh-100 text-center hero-section"
      >
        <div>
          <div
            className="rounded-circle border-1 mx-auto mb-4"
            width={300}
            height={400}
          >
            <img
              src={profile}
              alt="Foto de perfil"
              width={250}
              height={250}
              className="rounded-circle mx-auto shadow-lg"
            />
          </div>
          <h1 className="display-4 fw-bold text-gradient">
            Michael Steven Sanchez
          </h1>
          <p className="lead">Desarrollador Full Stack</p>
          <div className="icon-circle mx-auto mb-4">
            <Code size={64} />
          </div>
          <p className="text-secondary mb-4">
            Creando experiencias digitales excepcionales con código limpio y
            diseño intuitivo. <hr /> Especializado en desarrollo web moderno y
            soluciones tecnológicas innovadoras.
          </p>
          <div className="d-flex gap-3 justify-content-center">
            <button
              className="btn btn-primary px-4"
              onClick={() => scrollToSection("proyectos")}
            >
              Ver Proyectos
            </button>
            <button
              className="btn btn-outline-light px-4"
              onClick={() => scrollToSection("contacto")}
            >
              Contactar
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="sobre-mi" className="py-5 bg-secondary bg-opacity-25">
        <div className="container text-center">
          <h2 className="fw-bold text-gradient mb-4">Sobre Mí</h2>
          <p className="text-light">
            Soy estudiante y desarrollador de software con experiencia en Python
            y Django para el desarrollo backend, así como en tecnologías web
            como JavaScript, Node.js, Bootstrap y Sass. Me gusta combinar lo
            aprendido en la universidad con proyectos personales y académicos,
            lo que me ha permitido trabajar en sistemas de gestión, aplicaciones
            web y bases de datos.
            <br />
            <br />
            Me caracterizo por ser autodidacta, constante y con facilidad para
            aprender nuevas tecnologías, lo que me permite adaptarme a distintos
            entornos de desarrollo. Actualmente, busco seguir creciendo como
            programador.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="proyectos" className="py-5">
        <div className="container">
          <h2 className="fw-bold text-gradient text-center mb-5">
            Mis Proyectos
          </h2>
          <div className="row g-4">
            {projects.map((p) => (
              <div key={p.id} className="col-md-4">
                <div className="card bg-dark text-light h-100">
                  <img src={p.image} className="card-img-top" alt={p.title} />
                  <div className="card-body">
                    <h5 className="card-title">{p.title}</h5>
                    <p className="card-text">{p.description}</p>
                    <div>
                      {p.technologies.map((t, i) => (
                        <span key={i} className="badge bg-primary me-1">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="card-footer d-flex gap-2">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-light btn-sm"
                    >
                      <Github size={16} /> Código
                    </a>
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      <ExternalLink size={16} /> Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="habilidades" className="py-5 bg-secondary bg-opacity-25">
        <div className="container">
          <h2 className="fw-bold text-gradient text-center mb-5">
            Habilidades
          </h2>
          <div className="row g-4">
            {skills.map((s, i) => (
              <div key={i} className="col-md-3">
                <div className="card bg-dark text-light p-3 h-100">
                  <div className="d-flex align-items-center mb-2">
                    {s.icon}
                    <h5>{s.category}</h5>
                  </div>
                  <ul className="list-unstyled">
                    {s.items.map((item, j) => (
                      <li key={j} className="text-secondary">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold text-gradient mb-4">Contacto</h2>
          <p>¿Tienes un proyecto en mente? Escríbeme:</p>
          <div className="p-4 text-center">
            <a href="mailto:tu-email@ejemplo.com" className="btn btn-primary">
              <Mail size={20} /> Email
            </a>
            <div className="p-4 text-center">
              <a href="https://github.com/stevenbisbi">
                <DynamicIcon
                  name="github"
                  className="mx-auto mb-3 text-blue-400"
                  size={32}
                />
              </a>
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400">github.com/StevenBisbi</p>
            </div>
            <a
              className="p-4 text-center text-decoration-none"
              href="https://www.linkedin.com/in/steven-s-2b302b117/"
            >
              <DynamicIcon
                name="linkedin"
                className="mx-auto mb-3 text-blue-400"
                size={32}
              />
            </a>
            <h3 className="font-semibold mb-2">Linkedin</h3>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-3 bg-dark text-center border-top border-secondary">
        <small className="text-secondary">
          © 2024 Michael Steven Sanchez. Hecho con React.
        </small>
      </footer>
    </div>
  );
};

export default Portfolio;
