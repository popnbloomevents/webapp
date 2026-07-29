import { InquiryForm } from "./components/InquiryForm";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

const services = [
  { number: "01", title: "Organic installations", text: "Sculptural garlands, arches and statement walls shaped to your venue." },
  { number: "02", title: "Weddings & soirées", text: "Considered décor for ceremonies, showers, birthdays and intimate dinners." },
  { number: "03", title: "Brand moments", text: "Photo-ready launches, openings and corporate celebrations in your palette." },
];
const featured = [
  { href:"/work/balloon-arrangements", image:"/arrangement-blush-v2.png", kicker:"Most loved", title:"Balloon arrangements", note:"Garlands · arches · statement pieces" },
  { href:"/work/weddings", image:"/wedding-ceremony-v2.png", kicker:"The romantic edit", title:"Weddings", note:"Ceremonies · receptions · showers" },
  { href:"/work/brand-events", image:"/brand-launch-v2.png", kicker:"Made to be noticed", title:"Brand events", note:"Launches · openings · activations" },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero shell" id="top">
        <div className="heroImage"><img src="/hero-balloons.png" alt="Blush and ivory organic balloon installation with flowers" /><span className="imageNote">Custom designed<br />for your moment</span></div>
        <div className="heroCopy">
          <p className="eyebrow">Vancouver · Event décor studio</p>
          <h1><span>Joy,</span><em>beautifully</em><span>arranged.</span></h1>
          <p className="intro">Bespoke balloon installations designed with a floral eye and an editorial sensibility.</p>
          <a className="textLink" href="#inquire">Create something beautiful <span>→</span></a>
        </div>
        <span className="heroIndex">Est. 2024 · YVR</span>
      </section>

      <section className="manifesto" id="story"><div className="shell manifestoInner"><p className="eyebrow">Our point of view</p><h2>Not just balloons.<br /><em>A feeling, made visible.</em></h2><p>We compose colour, scale and texture into immersive moments that belong wholly to you. Every installation is imagined from scratch, installed with care and remembered long after the last toast.</p></div></section>

      <section className="featuredWork shell" id="work">
        <div className="sectionHead"><div><p className="eyebrow">Popular work</p><h2>A little glimpse<br /><em>of what we do.</em></h2></div><div><p>Explore our most-requested celebration styles, then wander through the complete portfolio.</p><a className="textLink" href="/work">View all work <span>→</span></a></div></div>
        <div className="featuredGrid">{featured.map((item) => <a className="featuredCard" href={item.href} key={item.title}><div className="featuredImage"><img src={item.image} alt={item.title} /><span>{item.kicker}</span></div><div><small>{item.note}</small><h3>{item.title}</h3><i>↗</i></div></a>)}</div>
      </section>

      <section className="services" id="services"><div className="shell"><div className="sectionHead light"><div><p className="eyebrow">What we create</p><h2>One vision.<br /><em>Every detail.</em></h2></div><p>From the first colour swatch to the final flourish, we make the experience feel effortless.</p></div><div className="serviceList">{services.map((service) => <article key={service.number}><span>{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><i>↗</i></article>)}</div></div></section>

      <section className="process shell"><p className="eyebrow">How it unfolds</p><div className="processGrid"><h2>Dream it.<br /><em>We’ll shape it.</em></h2><ol><li><span>01</span><div><h3>Tell us your vision</h3><p>Share your date, venue, palette and the mood you want guests to feel.</p></div></li><li><span>02</span><div><h3>We design the moment</h3><p>You’ll receive a custom concept and transparent quote tailored to your space.</p></div></li><li><span>03</span><div><h3>Arrive & celebrate</h3><p>We deliver, install and style every detail before your guests step inside.</p></div></li></ol></div></section>

      <section className="inquire" id="inquire"><div className="shell inquiryLayout"><div className="inquiryCopy"><p className="eyebrow">Let’s make it memorable</p><h2>Your celebration<br /><em>starts here.</em></h2><p>Tell us what you’re dreaming up. We’ll reply within two business days with availability and thoughtful next steps.</p><div className="inquiryAside"><span>Prefer email?</span><a href="mailto:hello@popnbloom.ca">hello@popnbloom.ca</a></div></div><InquiryForm /></div></section>
      <SiteFooter />
    </main>
  );
}
