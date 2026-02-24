import { Github, ExternalLink } from "lucide-react";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-5 section-grid">
      <div className="container">
        <h2 className="fw-bold text-gradient text-center mb-5">
          Mis Proyectos
        </h2>
        <div className="row g-4">
          {projects.map((p) => (
            <div key={p.id} className="">
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
  );
}
