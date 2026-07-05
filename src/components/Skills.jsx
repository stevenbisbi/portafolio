import { Globe, Database, Smartphone } from "lucide-react";

export function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "Angular",
        "TypeScript",
        "Bootstrap",
        "SASS",
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
      icon: <Globe size={20} className="text-info" />,
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Python",
        "Express",
        "Django",
        "REST APIs",
        "SQL",
        "NoSQL",
      ],
      icon: <Database size={20} className="text-success" />,
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "SQLite"],
      icon: <Database size={20} className="text-warning" />,
    },
    {
      category: "Tools",
      items: ["Git", "Docker"],
      icon: <Smartphone size={20} className="text-danger" />,
    },
  ];
  return (
    <section id="skills" className="py-5 section-alt">
      <div className="container">
        <div className="text-center mb-5">
          <div className="eyebrow mb-2">Caja de herramientas</div>
          <h2 className="fw-bold text-gradient section-heading fs-1">
            Habilidades
          </h2>
        </div>
        <div className="row g-4">
          {skills.map((s, i) => (
            <div key={i} className="col-md-6 col-lg-3">
              <div className="card bg-dark text-light p-3 h-100">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span className="skill-category-icon">{s.icon}</span>
                  <h5 className="mb-0">{s.category}</h5>
                </div>
                <div className="skill-chip-list">
                  {s.items.map((item, j) => (
                    <span key={j} className="skill-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
