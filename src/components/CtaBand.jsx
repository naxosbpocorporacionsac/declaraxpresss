import { useState } from 'react';

const waNumber = import.meta.env.VITE_WA_NUMBER || '51999999999';

const necesidades = [
  'Declaraciones mensuales SUNAT',
  'Regularización de deuda',
  'Formalizar mi empresa',
  'Defensa ante SUNAT / SUNAFIL',
  'Planillas y nóminas',
  'Otro',
];

export default function CtaBand() {
  const [form, setForm] = useState({ nombre: '', telefono: '', ruc: '', whatsapp: '', necesidad: '', captcha: false });
  const [error, setError] = useState('');

  const handle = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const submit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.telefono || !form.necesidad) {
      setError('Por favor completa los campos obligatorios.');
      return;
    }
    if (!form.captcha) {
      setError('Confirma que no eres un robot.');
      return;
    }
    setError('');
    const lines = [
      `👋 Hola, me contacto desde la web de Declara Xpress.`,
      ``,
      `📋 *Datos de contacto*`,
      `• Nombre: ${form.nombre}`,
      `• Teléfono: ${form.telefono}`,
      form.ruc ? `• RUC: ${form.ruc}` : null,
      form.whatsapp ? `• WhatsApp: ${form.whatsapp}` : null,
      ``,
      `❓ *¿Qué necesito?*`,
      form.necesidad,
    ].filter(l => l !== null).join('\n');

    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(lines)}`, '_blank');
  };

  return (
    <section className="cta-band" id="contacto">
      <div className="cta-card">
        <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>
          <span className="dot" style={{ background: 'var(--coral-300)' }}></span>
          Empieza hoy
        </span>
        <h2>¿Listo para crecer? <em>Hablemos.</em></h2>
        <p className="lead">Diagnóstico gratuito en menos de 4 horas hábiles. Sin compromiso.</p>

        <form className="contacto-form" onSubmit={submit} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nombre">Nombre *</label>
              <input id="nombre" name="nombre" type="text" placeholder="Tu nombre completo" value={form.nombre} onChange={handle} />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Teléfono *</label>
              <input id="telefono" name="telefono" type="tel" placeholder="999 999 999" value={form.telefono} onChange={handle} />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="ruc">RUC <span className="optional">(opcional)</span></label>
              <input id="ruc" name="ruc" type="text" placeholder="20XXXXXXXXX" maxLength={11} value={form.ruc} onChange={handle} />
            </div>
            <div className="form-group">
              <label htmlFor="whatsapp">WhatsApp</label>
              <input id="whatsapp" name="whatsapp" type="tel" placeholder="999 999 999" value={form.whatsapp} onChange={handle} />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="necesidad">¿Qué necesitas? *</label>
            <select id="necesidad" name="necesidad" value={form.necesidad} onChange={handle}>
              <option value="">Selecciona una opción</option>
              {necesidades.map(n => <option key={n} value={n}>{n}</option>)}
            </select>
          </div>

          <label className="captcha-check">
            <input type="checkbox" name="captcha" checked={form.captcha} onChange={handle} />
            <span>No soy un robot</span>
          </label>

          {error && <p className="form-error">{error}</p>}

          <button type="submit" className="btn btn-coral form-submit">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.5 14.4c-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.3-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.9-2.1-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.6-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4C8.6 21.5 10.3 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
            </svg>
            Enviar por WhatsApp
          </button>
          <p className="form-note">Atención L–S 9:00–19:00 · San Miguel, Lima — Perú</p>
        </form>
      </div>
    </section>
  );
}
