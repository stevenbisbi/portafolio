import { Mail } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";

export function Contact() {
  return (
    <section id="contact" className="py-5">
      <div className="container text-center">
        <h2 className="fw-bold text-gradient mb-4">Contacto</h2>
        <p>¿Tienes un proyecto en mente? Escríbeme:</p>
        <div className="p-4 text-center d-flex justify-content-center">
          <div className="email p-4">
            <a href="mailto:tu-email@ejemplo.com" className="btn btn-primary">
              <Mail size={20} /> Email
            </a>
          </div>
          <div className="p-4 text-center">
            <a href="https://github.com/stevenbisbi">
              <DynamicIcon
                name="github"
                className="mx-auto mb-3 text-blue-400"
                size={32}
              />
            </a>
            <h3 className="font-semibold mb-2">GitHub</h3>
          </div>
          <div className="linkedin p-4 text-center">
            <a
              className=" text-center text-decoration-none"
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
      </div>
    </section>
  );
}
