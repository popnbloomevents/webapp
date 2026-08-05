import { InquiryForm } from "./components/InquiryForm";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

const featured = [
  { href:"/work/balloon-arrangements", image:"/arrangement-blush-v2.png", number:"01", title:"Artful arrangements", note:"Garlands · arches · statement pieces" },
  { href:"/work/weddings", image:"/wedding-ceremony-v2.png", number:"02", title:"Modern romance", note:"Weddings · engagements · showers" },
  { href:"/work/brand-events", image:"/brand-launch-v2.png", number:"03", title:"Brand impact", note:"Launches · openings · activations" },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="heroV4 shell" id="top">
        <div className="heroV4Copy">
          <p className="eyebrow">Vancouver & the Lower Mainland</p>
          <h1>We make<br />rooms <em>feel</em><br />like a party.</h1>
          <p>Bespoke balloon art and event styling for people who want celebration without the cookie-cutter.</p>
          <div className="heroActions"><a className="primaryButton" href="#inquire">Start your event <span>↗</span></a><a className="textLink" href="/work">See the work <span>→</span></a></div>
          <div className="heroTrust"><span>Custom concepts</span><span>Full setup</span><span>Stress-free teardown</span></div>
        </div>
        <div className="heroV4Image"><img src="/hero-campaign-v4.png" alt="Sculptural pink, cherry and chrome balloon installation" /><div className="heroStamp"><b>POP!</b><small>Made in<br />Vancouver</small></div></div>
      </section>

      <div className="marquee" aria-hidden="true"><div>Balloon art · Backdrops · Florals · Brand moments · Milestones · Balloon art · Backdrops · Florals · Brand moments · Milestones ·</div></div>

      <section className="introV4 shell" id="story">
        <div className="introLabel"><p className="eyebrow">The Pop N Bloom way</p><span>Est. 2024</span></div>
        <div><h2>Less party store.<br /><em>More art direction.</em></h2><p>We turn a palette, a place and a reason to celebrate into one unforgettable visual story. Thoughtful scale. Unexpected colour. Every detail handled.</p></div>
      </section>

      <section className="workV4" id="work"><div className="shell">
        <div className="v4SectionHead"><div><p className="eyebrow">What everyone’s saving</p><h2>Three ways<br />to make an entrance.</h2></div><a href="/work">View the full portfolio <span>↗</span></a></div>
        <div className="workV4Grid">{featured.map((item) => <a href={item.href} className="workV4Card" key={item.title}><div><img src={item.image} alt={item.title} /><span className="workNumber">{item.number}</span></div><small>{item.note}</small><h3>{item.title}</h3><span className="cardArrow">↗</span></a>)}</div>
      </div></section>

      <section className="serviceV4" id="services"><div className="shell">
        <div className="v4SectionHead serviceHead"><div><p className="eyebrow">Choose your impact</p><h2>Start with a feeling.<br />We’ll build the rest.</h2></div><p>Every proposal is custom. These are the three most popular ways clients begin.</p></div>
        <div className="packageGrid">
          <article><span>01</span><small>From $650</small><h3>The Moment</h3><p>A polished focal point for showers, birthdays and intimate celebrations.</p><ul><li>Organic balloon feature</li><li>Curated colour palette</li><li>Delivery & installation</li></ul><a href="#inquire">Ask about The Moment ↗</a></article>
          <article className="packageFeatured"><div>Most requested</div><span>02</span><small>From $1,500</small><h3>The Scene</h3><p>A complete photo-ready setting with layered balloon art and styling pieces.</p><ul><li>Statement balloon installation</li><li>Backdrop or plinth styling</li><li>Florals & custom details</li><li>Setup and teardown</li></ul><a href="#inquire">Ask about The Scene ↗</a></article>
          <article><span>03</span><small>Custom proposal</small><h3>The Experience</h3><p>Immersive styling for weddings, launches and celebrations that fill a room.</p><ul><li>Creative direction</li><li>Multiple styled moments</li><li>Vendor coordination</li><li>Full-service execution</li></ul><a href="#inquire">Build an experience ↗</a></article>
        </div>
      </div></section>

      <section className="proofV4"><div className="shell proofGrid"><div className="proofImage"><img src="/gallery-birthday.png" alt="Pink and burgundy balloon installation" /></div><div className="proofQuote"><span>“</span><blockquote>Every guest stopped at the entrance. It didn’t just decorate the room—it changed the whole energy.</blockquote><p>Clara M. · Vancouver bride</p><div><b>48+</b><small>celebrations styled</small><b>100%</b><small>custom designed</small></div></div></div></section>

      <section className="processV4 shell"><div className="v4SectionHead"><div><p className="eyebrow">Easy on purpose</p><h2>From “what if?”<br />to “wow.”</h2></div><p>Planning should feel exciting. Our three-step process keeps it simple.</p></div><div className="stepsV4"><article><span>01</span><h3>Tell us the feeling</h3><p>Date, venue, palette, inspiration—we’ll ask the right questions.</p></article><article><span>02</span><h3>See it take shape</h3><p>Receive a creative concept and clear custom proposal for your space.</p></article><article><span>03</span><h3>Walk into the wow</h3><p>We deliver, style, install and return for teardown. You simply arrive.</p></article></div></section>

      <section className="inquire inquireV4" id="inquire"><div className="shell inquiryLayout"><div className="inquiryCopy"><p className="eyebrow">Dates go quickly</p><h2>Let’s make<br /><em>some noise.</em></h2><p>Share the details you know. We’ll reply within two business days with availability and a creative next step.</p><div className="inquiryAside"><span>Prefer a direct note?</span><a href="mailto:hello@popnbloom.ca">hello@popnbloom.ca</a></div></div><InquiryForm /></div></section>
      <SiteFooter />
    </main>
  );
}
