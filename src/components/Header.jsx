import { useEffect, useState, useRef } from "react";

export default function Header() {
  const [visible, setVisible] = useState(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
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
      <div className="navigation">
        <a href="#about">SOBRE MÍ</a>
        <a href="#projects">PROYECTOS</a>
        <a href="#skills">HABILIDADES</a>
        <a href="#contact">CONTACTO</a>
      </div>
    </div>
  );
}
