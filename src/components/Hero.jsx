import { waUrl } from '../utils/whatsapp';

const ArrowIcon = () => (
  <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-inner">
        <h1>Contabilidad Inteligente con <em>IA</em> para MYPES, Emprendedores y Profesionales Independientes</h1>
        <p className="hero-subtitle">Declara bien, evita multas de SUNAT y crece con tranquilidad desde <em>S/170 al mes.</em></p>
        <p className="hero-sub">
          Automatizamos tu gestión contable, tributaria y laboral para que te enfoques en tu negocio, no en trámites.
        </p>
        <div className="hero-ctas">
          <a className="btn btn-navy" href="#planes">
            Ver Planes <ArrowIcon />
          </a>
          <a className="btn btn-coral" href={waUrl} target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.5 14.4c-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.3-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.9-2.1-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.6-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4C8.6 21.5 10.3 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
            </svg>
            Diagnóstico Gratuito por WhatsApp
          </a>
        </div>

        <div className="hero-stage" aria-hidden="true">
          <svg className="hero-spark spark-1" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" />
          </svg>
          <svg className="hero-spark spark-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" />
          </svg>

          <div className="hero-video-wrap">
            <video className="hero-video" autoPlay muted loop playsInline preload="metadata">
              <source src="/assets/hero-video.mp4" type="video/mp4" />
            </video>
            <div className="hero-video-overlay"></div>
          </div>

          <div className="hero-stat hero-stat-1">
            <div className="t">Clientes activos</div>
            <div className="v">+500 <em>negocios</em></div>
          </div>

          <div className="hero-stat hero-stat-2">
            <div className="row">
              <div className="av"></div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--ink)', marginBottom: '2px' }}>
                  Andi G.
                </div>
                <div className="sub" style={{ margin: 0 }}>"Mi gestor IA de IGV revisó todo hoy."</div>
              </div>
            </div>
          </div>

          <div className="hero-stat hero-stat-3">
            <div className="t">IGV a declarar</div>
            <div className="v"><em>S/</em>2,769</div>
            <div className="sub">PDT 621 listo · Noviembre 2025.</div>
            <div className="bar">
              <span className="fill"></span>
              <span className="fill"></span>
              <span className="fill"></span>
              <span className="fill"></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
