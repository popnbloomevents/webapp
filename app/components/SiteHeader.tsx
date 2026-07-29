export function SiteHeader() {
  return (
    <header className="nav shell">
      <a className="brand" href="/" aria-label="Pop N Bloom home">
        <span>POP N BLOOM</span><small>EVENT STUDIO</small>
      </a>
      <nav aria-label="Primary navigation">
        <a href="/work">Our work</a><a href="/#services">Services</a><a href="/#story">Studio</a>
      </nav>
      <a className="navCta" href="/#inquire">Plan your moment <span>↗</span></a>
    </header>
  );
}
