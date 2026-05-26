const ArrowCircle = () => (
  <a className="ar" href="#contacto" aria-label="Empezar">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
      <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </a>
);

const steps = [
  {
    num: '01',
    title: 'Diagnóstico gratuito',
    desc: 'Revisamos tu RUC, régimen, declaraciones pasadas y posibles contingencias en menos de 24 horas.',
    featured: true,
  },
  {
    num: '02',
    title: 'Cumplimiento & compliance reducido',
    desc: 'Asumimos declaraciones mensuales, libros electrónicos y planillas — tú solo subes tus comprobantes.',
  },
  {
    num: '03',
    title: 'Avisos de SUNAT y SUNAFIL',
    desc: 'Revisamos tu buzón electrónico todos los días y respondemos por ti, antes de que se convierta en multa.',
  },
  {
    num: '04',
    title: 'Subes documentos',
    desc: 'Por WhatsApp o panel. Nuestro asistente IA los clasifica, valida y registra automáticamente.',
  },
  {
    num: '05',
    title: 'Evaluación & crecimiento',
    desc: 'Reportes mensuales con KPIs claros, recomendaciones tributarias y plan para optimizar tu carga fiscal.',
  },
];

export default function Proceso() {
  return (
    <section className="process" id="proceso">
      <div className="container process-inner">
        <div className="process-head">
          <span className="pill">
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--lime)' }}></span>
            Beneficios
          </span>
          <h2>Nuestro <em>proceso</em> claro y simple para tu tranquilidad.</h2>
        </div>

        <div className="proc-list">
          {steps.map(({ num, title, desc, featured }) => (
            <div key={num} className={`proc-row${featured ? ' featured' : ''}`}>
              <div className="num">{num}</div>
              <div>
                <div className="t">{title}</div>
              </div>
              <div className="d">{desc}</div>
              <ArrowCircle />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
