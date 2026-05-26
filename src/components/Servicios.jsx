import { useState } from 'react';

const cats = {
  trib: [
    'Gradualidad de deuda tributaria',
    'Fraccionamientos',
    'Suspensión 4ta categoría',
    'Suspensión de RUC',
    'Regularización PDT',
    'Regularización libros electrónicos',
    'Cambio de régimen tributario',
    'Devolución de impuestos',
    'Rectificatorias mensuales',
    'Detracciones y retenciones',
  ],
  lab: [
    'Alta T-Registro',
    'Planillas y beneficios sociales',
    'Administración de nóminas',
    'Boletas de pago electrónicas',
    'Cálculo de CTS y gratificaciones',
    'Liquidación de beneficios',
    'Contratos laborales',
    'Vacaciones y descansos',
    'Régimen MYPE laboral',
    'AFP / ONP / ESSALUD',
  ],
  cont: [
    'Estados financieros mensuales',
    'Conciliación bancaria',
    'Análisis de cuentas',
    'Provisiones contables',
    'Libros electrónicos (PLE)',
    'Activos fijos',
    'Cierre contable anual',
    'Reportes gerenciales',
    'Costeo de productos',
    'Operaciones con no domiciliados',
  ],
  leg: [
    'Escritos SUNAT / SUNAFIL',
    'REMYPE',
    'Respuesta carta inductiva',
    'Recurso de reclamación',
    'Apelación tributaria',
    'Respuesta a coactiva',
    'Defensa en fiscalización',
    'Trámites RUC virtual',
    'Cambio de domicilio fiscal',
    'Inscripción de sucursales',
  ],
};

const tabs = [
  { key: 'trib', num: '01', label: 'Tributarios' },
  { key: 'lab',  num: '02', label: 'Laborales' },
  { key: 'cont', num: '03', label: 'Servicios Contables' },
  { key: 'leg',  num: '04', label: 'Legales SUNAT' },
];

const ArrowRight = () => (
  <svg className="ar" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Servicios() {
  const [active, setActive] = useState('trib');

  return (
    <section className="servicios" id="servicios">
      <div className="container servicios-inner">
        <div className="servicios-head">
          <div>
            <span className="eyebrow"><span className="dot"></span>Servicios</span>
            <h2>Todo lo que tu negocio<br/>necesita en <em>un mismo lugar</em>.</h2>
          </div>
          <p className="right">
            Más de 20 trámites tributarios, laborales y contables que cubrimos por ti. Cambia de categoría para ver lo que está incluido en cada área.
          </p>
        </div>

        <div className="servicios-cats">
          <nav className="cat-list" role="tablist" aria-label="Categorías de servicios">
            {tabs.map(({ key, num, label }) => (
              <button
                key={key}
                className={active === key ? 'active' : ''}
                onClick={() => setActive(key)}
                role="tab"
                aria-selected={active === key}
              >
                <span className="num">{num}</span>
                {label}
                <ArrowRight />
              </button>
            ))}
          </nav>

          <div className="chip-grid">
            {cats[active].map((s) => (
              <span key={s} className="chip-dark">
                <span className="dot"></span>{s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
