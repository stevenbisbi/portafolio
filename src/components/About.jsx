import { GraduationCap, MapPin, Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="about" className="section-grid py-5 section-alt">
      <div className="container">
        <div className="text-center mb-5">
          <div className="eyebrow mb-2">Quién soy</div>
          <h2 className="fw-bold text-gradient section-heading fs-1">
            Sobre Mí
          </h2>
        </div>

        <div className="row align-items-center g-5">
          <div className="col-lg-4">
            <div className="about-photo-wrap">
              <div className="about-photo-glow" />
              <img
                src="/Profile.jpg"
                alt="Michael Steven Sánchez"
                className="about-photo"
              />
            </div>
          </div>

          <div className="col-lg-8">
            <p className="text-light fs-5 lh-lg">
              Soy estudiante y desarrollador de software con experiencia en
              Python y Django para el desarrollo backend, así como en
              tecnologías web como JavaScript, Node.js, Bootstrap y Sass. Me
              gusta combinar lo aprendido en la universidad con proyectos
              personales y académicos, lo que me ha permitido trabajar en
              sistemas de gestión, aplicaciones web y bases de datos.
            </p>
            <p className="text-light fs-5 lh-lg mt-3">
              Me caracterizo por ser autodidacta, constante y con facilidad
              para aprender nuevas tecnologías, lo que me permite adaptarme a
              distintos entornos de desarrollo. Actualmente, busco seguir
              creciendo como programador.
            </p>

            <div className="about-facts">
              <span className="about-fact">
                <GraduationCap size={16} /> Estudiante de desarrollo de
                software
              </span>
              <span className="about-fact">
                <Sparkles size={16} /> Full-stack: React · Django · Node.js
              </span>
              <span className="about-fact">
                <MapPin size={16} /> Disponible remoto
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
