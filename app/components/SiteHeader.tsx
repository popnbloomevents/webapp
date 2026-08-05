export function SiteHeader() {
  return (
    <header className="nav shell">
      <a className="brand" href="/" aria-label="Pop N Bloom home">
        <span>POP N BLOOM</span><small>SCULPTURAL CELEBRATIONS</small>
      </a>
      <nav aria-label="Primary navigation">
        <a href="/work">Work</a><a href="/#services">Services</a><a href="/#story">About</a>
      </nav>
      <a className="navCta" href="/#inquire">Check your date <span>↗</span></a>
    </header>
  );
}
