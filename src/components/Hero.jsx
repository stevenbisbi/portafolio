import { Code } from "lucide-react";
export function Hero() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
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
            src={"/Profile.jpg"}
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
  );
}
