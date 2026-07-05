import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { id: "about", label: "Sobre mí" },
  { id: "projects", label: "Proyectos" },
  { id: "skills", label: "Habilidades" },
  { id: "contact", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 140;
      let current = "";
      for (const link of LINKS) {
        const el = document.getElementById(link.id);
        if (el && scrollPosition >= el.offsetTop) {
          current = link.id;
        }
      }
      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`header ${scrolled ? "scrolled" : ""}`}>
      <a
        className="brand"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <span className="brand-mark">MS</span>
        <span className="brand-name">Michael Sánchez</span>
      </a>

      <div className={`navigation ${open ? "active" : ""}`}>
        {LINKS.map((link) => (
          <a
            key={link.id}
            className={active === link.id ? "active" : ""}
            onClick={() => goTo(link.id)}
          >
            {link.label.toUpperCase()}
          </a>
        ))}
      </div>

      <button className="hamburger" onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>
    </div>
  );
}
