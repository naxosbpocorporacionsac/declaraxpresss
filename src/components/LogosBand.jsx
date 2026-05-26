const items = [
  'Declaraciones mensuales',
  'Regularizaciones SUNAT y SUNAFIL',
  'Planillas y nóminas',
  'Soporte con IA + especialistas',
];

export default function LogosBand() {
  return (
    <section className="logos-band">
      <div className="logos-row">
        {items.map(item => (
          <span key={item} className="trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
