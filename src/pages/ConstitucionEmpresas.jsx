import { useEffect } from 'react';
import Analytics from '../components/Analytics';
import Formaliza from '../components/Formaliza';
import WhatsAppFloat from '../components/WhatsAppFloat';
import Footer from '../components/Footer';

function NavyHeader() {
  return (
    <header style={{ background: 'var(--navy)', padding: '18px 0' }}>
      <div className="container hero-topbar-inner">
        <a href="/">
          <img src="/assets/declara-xpress-logo.png" alt="Declara Xpress" className="hero-topbar-logo" />
        </a>
        <a href="mailto:info@declaraxpress.com" className="hero-topbar-email">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          info@declaraxpress.com
        </a>
      </div>
    </header>
  );
}

export default function ConstitucionEmpresas() {
  useEffect(() => {
    document.title = 'Constitución de Empresas — Declara Xpress';
    document.querySelector('meta[name="description"]')
      ?.setAttribute('content', 'Formaliza Fácil y rápido sin moverte de tu negocio.');
  }, []);

  return (
    <>
      <Analytics />
      <NavyHeader />
      <Formaliza />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
