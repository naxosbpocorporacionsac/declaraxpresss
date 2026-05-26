const testimonials = [
  {
    cls: 'c-1',
    quote: 'Antes pagaba multas casi cada mes. Con Declara llevo un año sin un solo problema con SUNAT.',
    author: 'Sofía Reyes',
    role: 'Fundadora · Mistura Studio',
  },
  {
    cls: 'c-2',
    quote: 'La IA detectó dos facturas con CIF mal puesto antes del cierre. Me ahorraron una orden de pago.',
    author: 'Andi Gutiérrez',
    role: 'CEO · Antares Comex',
  },
  {
    cls: 'c-3',
    quote: 'Tener un contador asignado por WhatsApp es lo mejor. Respuestas claras, sin enredos.',
    author: 'Patricia Lévano',
    role: 'Gerente · Inverlima SAC',
  },
  {
    cls: 'c-4',
    quote: 'Migramos régimen MYPE en 48 horas y pagué menos IR ese mismo trimestre. Recomendado.',
    author: 'Luis Tello',
    role: 'Socio · Olivos Lab',
  },
];

export default function Testimonios() {
  return (
    <section className="testi container">
      <div className="testi-head">
        <span className="eyebrow"><span className="dot"></span>Testimonios</span>
        <h2>Historias <em>reales</em>, confianza probada.</h2>
        <p>Conoce lo que dicen nuestros clientes sobre el servicio, el soporte y el éxito que han alcanzado.</p>
      </div>
      <div className="testi-grid">
        {testimonials.map(({ cls, quote, author, role }) => (
          <div key={author} className={`testi-card ${cls}`}>
            <div className="photo"></div>
            <div className="body">
              <div className="qm">"</div>
              <p className="quote">{quote}</p>
              <div className="author">{author}</div>
              <div className="role">{role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
