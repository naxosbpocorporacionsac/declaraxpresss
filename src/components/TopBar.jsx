export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <img src="/assets/declara-xpress-logo.png" alt="Declara Xpress" className="topbar-logo" />
        <a href="mailto:info@declaraxpress.com" className="topbar-email">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          info@declaraxpress.com
        </a>
      </div>
    </div>
  );
}
