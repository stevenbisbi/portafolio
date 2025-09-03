import { Globe, Database, Smartphone } from "lucide-react";

export function Skills() {
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
  return (
    <section id="habilidades" className="py-5 bg-secondary bg-opacity-25">
      <div className="container">
        <h2 className="fw-bold text-gradient text-center mb-5">Habilidades</h2>
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
  );
}
