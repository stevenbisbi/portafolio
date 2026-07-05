import { Mail } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";

export function Contact() {
  return (
    <section id="contact" className="py-5">
      <div className="container text-center">
        <div className="eyebrow mb-2">Trabajemos juntos</div>
        <h2 className="fw-bold text-gradient mb-3 fs-1">Contacto</h2>
        <p className="text-muted mb-4">
          ¿Tienes un proyecto en mente? Escríbeme:
        </p>

        <div className="d-flex justify-content-center flex-wrap gap-3">
          <a
            href="mailto:stevenex13@gmail.com"
            className="contact-card"
          >
            <Mail size={28} />
            <span className="fw-semibold">Email</span>
          </a>

          <a
            href="https://github.com/stevenbisbi"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <DynamicIcon name="github" size={28} />
            <span className="fw-semibold">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/michaelssb"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <DynamicIcon name="linkedin" size={28} />
            <span className="fw-semibold">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
