import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-copy">
        <p>Contabilidad inteligente con IA.<br/>Precisión, integridad y estrategia para tu negocio.</p>
        <p>© 2026 Declara Xpress · Todos los derechos reservados.</p>
      </div>
      <div className="footer-logo-wrap">
        <Logo size={52} onDark={true} />
      </div>
    </footer>
  );
}
