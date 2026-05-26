const menu = [
  { href: '#somos',    label: 'Nosotros' },
  { href: '#proceso',  label: 'Proceso' },
  { href: '#planes',   label: 'Planes' },
  { href: '#servicios',label: 'Servicios' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-mark">
              <img className="footer-logo-img" src="/assets/declara-xpress-logo.png" alt="Declara Xpress" />
            </div>
            <p className="pitch">
              Contabilidad inteligente con IA. Precisión, integridad y estrategia para tu negocio peruano.
            </p>
          </div>

          <nav className="footer-nav">
            <h5>Menú</h5>
            <ul>
              {menu.map(({ href, label }) => (
                <li key={label}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </nav>

          <div className="footer-location">
            <h5>Ubicación</h5>
            <p>San Miguel · Lima — Perú</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Declara Xpress · Todos los derechos reservados.</span>
        </div>
      </div>
      <p className="footer-wordmark">Declara<em>Xpress</em></p>
    </footer>
  );
}
