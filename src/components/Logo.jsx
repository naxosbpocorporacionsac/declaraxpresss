import { useId } from 'react';

function Mark({ size = 64, onDark = false }) {
  const id = useId().replace(/:/g, '');
  const sw = size * (80 / 1000);
  const r = size * 0.21;
  const strokeColor = onDark ? '#eef1f5' : '#eef1f5';

  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none"
         style={{ display: 'block', flexShrink: 0 }} aria-hidden="true">
      <defs>
        <linearGradient id={`g${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#26385c" />
          <stop offset="0.55" stopColor="#16233f" />
          <stop offset="1" stopColor="#0a1226" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="62" height="62" rx={r} fill={`url(#g${id})`} />
      <path
        d="M15 33 L26 44 L49 17 M49 17 L39 17 M49 17 L49 27"
        stroke={strokeColor}
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Logo({ size = 40, onDark = false }) {
  const declaraColor = onDark ? '#ffffff' : '#5f6877';
  const xpressColor  = onDark ? '#c2c9d6' : '#16233f';
  const fontSize = size * 0.55;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: size * 0.28 }}>
      <Mark size={size} onDark={onDark} />
      <div style={{
        fontWeight: 800,
        letterSpacing: '-0.035em',
        lineHeight: 0.92,
        textTransform: 'uppercase',
        fontFamily: 'var(--font-display)',
        fontSize,
        whiteSpace: 'nowrap',
        display: 'flex',
        gap: '0.22em',
        alignItems: 'baseline',
      }}>
        <span style={{ color: declaraColor }}>Declara</span>
        <span style={{ color: xpressColor }}>Xpress</span>
      </div>
    </div>
  );
}
