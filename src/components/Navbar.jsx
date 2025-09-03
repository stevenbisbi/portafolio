import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            {["inicio", "sobre-mi", "proyectos", "habilidades", "contacto"].map(
              (link) => (
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
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
