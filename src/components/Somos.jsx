const valueCards = [
  {
    cls: 'peach',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Cumplimiento total',
    body: 'Declaraciones puntuales ante SUNAT y SUNAFIL todo el año.',
  },
  {
    cls: 'lavender',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Auditoría IA 24/7',
    body: 'Tus libros revisados en tiempo real para evitar contingencias.',
  },
  {
    cls: 'lime',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 11l9-8 9 8M5 9.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Riesgo controlado',
    body: 'Detectamos contingencias antes de que se conviertan en multas.',
  },
  {
    cls: 'sky',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Acompañamiento real',
    body: 'Un contador asignado y WhatsApp directo. Sin call-centers.',
  },
];

export default function Somos() {
  return (
    <section className="somos container" id="somos">
      <div className="somos-grid">
        <div className="somos-photo">
          <img className="somos-photo-img" src="/assets/team-photo.png" alt="Equipo Declara Xpress" />
          <div className="somos-card-floating">
            <div className="ic">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="t">Tu equipo asignado</p>
              <p className="d">Especialistas MYPE · Lima</p>
            </div>
          </div>
        </div>

        <div className="somos-r">
          <span className="eyebrow"><span className="dot"></span>Quiénes somos</span>
          <h2>Auditoría <em>&amp;</em> tranquilidad para tu negocio.</h2>
          <p className="body">
            No somos solo un estudio contable con IA. Somos aliados para ayudarte a formalizar,
            cumplir y crecer. Combinamos experiencia tributaria, automatización y acompañamiento práctico.
          </p>
          <div className="value-cards">
            {valueCards.map(({ cls, icon, title, body }) => (
              <div key={title} className={`value-card ${cls}`}>
                <div className="ic">{icon}</div>
                <h4>{title}</h4>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
