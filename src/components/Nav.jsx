import Logo from './Logo';

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="nav-logo" href="#top" aria-label="Declara Xpress">
          <Logo size={48} onDark={true} />
        </a>
      </div>
    </nav>
  );
}
