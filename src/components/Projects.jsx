import { Github, ExternalLink } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-5 section-grid">
      <div className="container">
        <div className="text-center mb-5">
          <div className="eyebrow mb-2">Trabajo reciente</div>
          <h2 className="fw-bold text-gradient section-heading fs-1">
            Mis Proyectos
          </h2>
        </div>
        <div className="row g-4">
          {projects.map((p) => (
            <div key={p.id} className="col-md-6 col-lg-4">
              <div
                className={`card bg-dark text-light h-100 project-card position-relative ${
                  p.featured ? "featured" : ""
                }`}
              >
                {p.featured && (
                  <span className="featured-badge">Actual</span>
                )}

                {p.image ? (
                  <div className="project-image-wrap">
                    <img src={p.image} alt={p.title} />
                  </div>
                ) : (
                  <div className="project-icon-tile">
                    <DynamicIcon name={iconKebab(p.icon)} />
                  </div>
                )}

                <div className="card-body">
                  <h5 className="card-title">{p.title}</h5>
                  <p className="card-text">{p.description}</p>
                  <div className="mb-2">
                    {p.technologies.map((t, i) => (
                      <span key={i} className="badge bg-primary me-1 mb-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="card-footer d-flex flex-wrap gap-2">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-light btn-sm"
                    >
                      <Github size={16} /> {p.github2 ? "Backend" : "Código"}
                    </a>
                  )}

                  {p.github2 && (
                    <a
                      href={p.github2}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-light btn-sm"
                    >
                      <Github size={16} /> Frontend
                    </a>
                  )}

                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      <ExternalLink size={16} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// lucide-react/dynamic expects kebab-case icon names (e.g. "Factory" -> "factory")
function iconKebab(name) {
  return (name || "boxes")
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .toLowerCase();
}
