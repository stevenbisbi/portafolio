export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-3 bg-dark text-center border-top border-secondary">
      <small className="text-secondary">
        © {year} Michael Steven Sanchez. Hecho con React.
      </small>
    </footer>
  );
}
