const services = [
  { number: "01", title: "Organic installations", text: "Sculptural garlands, arches and statement walls shaped to your venue." },
  { number: "02", title: "Weddings & soirées", text: "Considered décor for ceremonies, showers, birthdays and intimate dinners." },
  { number: "03", title: "Brand moments", text: "Photo-ready launches, openings and corporate celebrations in your palette." },
];

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#top" aria-label="Pop N Bloom home">
          <span>POP N BLOOM</span><small>EVENT STUDIO</small>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a><a href="#services">Services</a><a href="#story">Studio</a>
        </nav>
        <a className="navCta" href="#inquire">Plan your moment <span>↗</span></a>
      </header>

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <p className="eyebrow">Vancouver · Event décor studio</p>
          <h1>Making joy<br />feel <em>artful.</em></h1>
          <p className="intro">Bespoke balloon installations designed with a floral eye and an editorial sensibility.</p>
          <a className="textLink" href="#inquire">Create something beautiful <span>→</span></a>
        </div>
        <div className="heroImage">
          <img src="/hero-balloons.png" alt="Blush and ivory organic balloon installation with flowers" />
          <span className="imageNote">Custom designed<br />for your moment</span>
        </div>
        <div className="scrollMark"><span>Scroll to discover</span><i /></div>
      </section>

      <section className="manifesto" id="story">
        <div className="shell manifestoInner">
          <p className="eyebrow">Our point of view</p>
          <h2>Not just balloons.<br /><em>A feeling, made visible.</em></h2>
          <p>We compose colour, scale and texture into immersive moments that belong wholly to you. Every installation is imagined from scratch, installed with care and remembered long after the last toast.</p>
        </div>
      </section>

      <section className="work shell" id="work">
        <div className="sectionHead">
          <div><p className="eyebrow">Selected celebrations</p><h2>Scenes from<br /><em>beautiful days.</em></h2></div>
          <p>Organic forms, quiet drama and palettes that feel personal—not prescribed.</p>
        </div>
        <div className="gallery">
          <figure className="photo photoTall"><img src="/gallery-birthday.png" alt="Rose and burgundy birthday balloon arch with florals" /><figcaption><span>Petal & Merlot</span><small>Birthday soirée</small></figcaption></figure>
          <figure className="photo photoWide"><img src="/gallery-wedding.png" alt="Ivory and champagne wedding balloon installation with candles" /><figcaption><span>Champagne Light</span><small>Modern wedding</small></figcaption></figure>
          <div className="quoteCard"><span>“</span><blockquote>It looked like the room had bloomed just for us.</blockquote><small>— Clara, bride</small></div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="shell">
          <div className="sectionHead light">
            <div><p className="eyebrow">What we create</p><h2>One vision.<br /><em>Every detail.</em></h2></div>
            <p>From the first colour swatch to the final flourish, we make the experience feel effortless.</p>
          </div>
          <div className="serviceList">
            {services.map((service) => (
              <article key={service.number}><span>{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><i>↗</i></article>
            ))}
          </div>
        </div>
      </section>

      <section className="process shell">
        <p className="eyebrow">How it unfolds</p>
        <div className="processGrid">
          <h2>Dream it.<br /><em>We’ll shape it.</em></h2>
          <ol>
            <li><span>01</span><div><h3>Tell us your vision</h3><p>Share your date, venue, palette and the mood you want guests to feel.</p></div></li>
            <li><span>02</span><div><h3>We design the moment</h3><p>You’ll receive a custom concept and transparent quote tailored to your space.</p></div></li>
            <li><span>03</span><div><h3>Arrive & celebrate</h3><p>We deliver, install and style every detail before your guests step inside.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="inquire" id="inquire">
        <div className="shell inquireInner">
          <p className="eyebrow">Let’s make it memorable</p>
          <h2>Your celebration<br /><em>starts here.</em></h2>
          <p>Tell us what you’re dreaming up. We’ll reply within two business days with availability and next steps.</p>
          <a className="primaryButton" href="mailto:hello@popnbloom.ca?subject=Event%20inquiry">Start your inquiry <span>↗</span></a>
        </div>
      </section>

      <footer className="shell footer">
        <a className="brand" href="#top"><span>POP N BLOOM</span><small>EVENT STUDIO</small></a>
        <p>Modern balloon art for life’s most beautiful moments.</p>
        <div><a href="mailto:hello@popnbloom.ca">Email</a><a href="#work">Instagram</a><a href="#services">Services</a></div>
        <small>© 2026 Pop N Bloom · Vancouver, BC</small>
      </footer>
    </main>
  );
}
