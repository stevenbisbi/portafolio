import { useEffect, useState, useRef } from "react";

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Detectar si es móvil
    const isMobile = window.innerWidth <= 992;
    if (isMobile) return; // No aplicar auto-hide en móvil

    const handleMouseMove = () => {
      setVisible(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setVisible(false);
      }, 2000);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className={`header ${visible ? "" : "hidden"}`}>
      <h1>MSS</h1>

      <div className={`navigation ${open ? "active" : ""}`}>
        <a href="#about" onClick={() => setOpen(false)}>
          SOBRE MÍ
        </a>
        <a href="#projects" onClick={() => setOpen(false)}>
          PROYECTOS
        </a>
        <a href="#skills" onClick={() => setOpen(false)}>
          HABILIDADES
        </a>
        <a href="#contact" onClick={() => setOpen(false)}>
          CONTACTO
        </a>
      </div>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </div>
  );
}
