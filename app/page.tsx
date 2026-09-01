import { InquiryForm } from "./components/InquiryForm";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

const featured = [
  { href:"/work/balloon-arrangements", image:"/arrangement-blush-v2.png", number:"01", title:"Artful arrangements", note:"Garlands · arches · statement pieces" },
  { href:"/work/weddings", image:"/wedding-ceremony-v2.png", number:"02", title:"Modern romance", note:"Weddings · engagements · showers" },
  { href:"/work/brand-events", image:"/brand-launch-v2.png", number:"03", title:"Brand impact", note:"Launches · openings · activations" },
];

export default function Home() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Pop N Bloom",
    description: "Luxury event décor, custom backdrops and video guestbook rentals in Vancouver and the Lower Mainland.",
    areaServed: ["Vancouver", "Lower Mainland", "Burnaby", "Richmond", "Surrey"],
    email: "hello@popnbloom.ca",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Event Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Event Décor and Custom Backdrops", description: "Custom event backdrops, balloon styling and statement décor for weddings, birthdays, showers and corporate events." } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Styled Vintage Telephone Video Guestbook Rental", description: "A decorated tabletop vintage telephone video guestbook for Vancouver weddings and events, capturing personal messages from guests." } },
      ],
    },
  };
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <SiteHeader />
      <section className="heroV4 shell" id="top">
        <div className="heroV4Copy">
          <p className="eyebrow">Vancouver & the Lower Mainland</p>
          <h1>We make<br />rooms <em>feel</em><br />like a party.</h1>
          <p>Custom event décor, statement backdrops and video guestbooks for celebrations that deserve to look beautiful and feel personal.</p>
          <div className="heroActions"><a className="primaryButton" href="#inquire">Start your event <span>↗</span></a><a className="textLink" href="/work">See the work <span>→</span></a></div>
          <div className="heroTrust"><span>Custom event styling</span><span>Video memories</span><span>Full setup</span></div>
        </div>
        <div className="heroV4Image"><img src="/hero-campaign-v4.png" alt="Sculptural pink, cherry and chrome balloon installation" /><div className="heroStamp"><b>POP!</b><small>Made in<br />Vancouver</small></div></div>
      </section>

      <div className="marquee" aria-hidden="true"><div>Event décor · Custom backdrops · Video guestbooks · Weddings · Milestones · Event décor · Custom backdrops · Video guestbooks · Weddings · Milestones ·</div></div>

      <section className="introV4 shell" id="story">
        <div className="introLabel"><p className="eyebrow">The Pop N Bloom way</p><span>Est. 2024</span></div>
        <div><h2>Beautiful scenes.<br /><em>Unfiltered memories.</em></h2><p>We style the moment guests walk into—and help you keep the messages they leave behind. Custom event décor and video guestbooks, thoughtfully brought together for celebrations across Vancouver.</p></div>
      </section>

      <section className="workV4" id="work"><div className="shell">
        <div className="v4SectionHead"><div><p className="eyebrow">What everyone’s saving</p><h2>Three ways<br />to make an entrance.</h2></div><a href="/work">View the full portfolio <span>↗</span></a></div>
        <div className="workV4Grid">{featured.map((item) => <a href={item.href} className="workV4Card" key={item.title}><div><img src={item.image} alt={item.title} /><span className="workNumber">{item.number}</span></div><small>{item.note}</small><h3>{item.title}</h3><span className="cardArrow">↗</span></a>)}</div>
      </div></section>

      <section className="serviceV4" id="services"><div className="shell">
        <div className="v4SectionHead serviceHead"><div><p className="eyebrow">Our two signature services</p><h2>Style the scene.<br />Save every word.</h2></div><p>One service transforms the room. The other preserves the voices, laughter and stories inside it.</p></div>
        <div className="signatureServices">
          <article className="signatureService">
            <div className="serviceImage"><img src="/service-event-decor-v1.png" alt="Luxury custom event backdrop with blush and cherry balloon décor in Vancouver" /><span>01</span></div>
            <div className="serviceBody"><p className="eyebrow">Vancouver event décor & backdrops</p><h3>Event Décor</h3><p>Turn an ordinary venue into a celebration that feels unmistakably yours. We design custom backdrops, balloon installations and polished focal moments for weddings, birthdays, showers, proposals and brand events across Vancouver and the Lower Mainland.</p><ul><li>Custom backdrop design</li><li>Balloon styling and statement installations</li><li>Delivery, professional setup and teardown</li></ul><a href="#inquire">Design my event <span>↗</span></a></div>
          </article>
          <article className="signatureService signatureReverse">
            <div className="serviceImage"><img src="/service-video-guestbook-v1.png" alt="Decorated tabletop vintage telephone video guestbook rental for a Vancouver wedding reception" /><span>02</span></div>
            <div className="serviceBody"><p className="eyebrow">Vintage telephone video guestbook Vancouver</p><h3>Video Guestbook</h3><p>A beautifully styled vintage telephone station becomes the place where your favourite people tell stories, share advice and leave wonderfully unscripted messages. Guests simply lift the receiver and record a personal video you can replay long after the celebration ends.</p><ul><li>Elegant tabletop telephone station styled to your event</li><li>Simple lift-and-record guest experience</li><li>Professional setup, florals and guest instructions</li><li>Collected video messages delivered after your event</li></ul><a href="#inquire">Reserve the video guestbook <span>↗</span></a></div>
          </article>
        </div>
      </div></section>

      <section className="proofV4 kidsParty"><div className="shell proofGrid"><div className="proofImage"><img src="/gallery-birthday.png" alt="Elegant pink balloon backdrop designed for a children's birthday party in Vancouver" /><span className="partyBadge">Little moments<br />made magical</span></div><div className="kidsPartyContent"><p className="eyebrow">Children’s party decoration</p><h2>Big wonder<br /><em>for little guests.</em></h2><p>From dreamy birthday backdrops to playful balloon installations, we turn their favourite colours and ideas into a celebration that feels magical—without losing the polished look grown-ups love.</p><div className="partyDetails"><span>Custom themes</span><span>Balloon backdrops</span><span>Welcome moments</span><span>Photo-ready styling</span></div><a className="primaryButton" href="#inquire">Plan their party <span>→</span></a></div></div></section>

      <section className="processV4 shell"><div className="v4SectionHead"><div><p className="eyebrow">Easy on purpose</p><h2>From “what if?”<br />to “wow.”</h2></div><p>Planning should feel exciting. Our three-step process keeps it simple.</p></div><div className="stepsV4"><article><span>01</span><h3>Tell us the feeling</h3><p>Date, venue, palette, inspiration—we’ll ask the right questions.</p></article><article><span>02</span><h3>See it take shape</h3><p>Receive a creative concept and clear custom proposal for your space.</p></article><article><span>03</span><h3>Walk into the wow</h3><p>We deliver, style, install and return for teardown. You simply arrive.</p></article></div></section>

      <section className="inquire inquireV4" id="inquire"><div className="shell inquiryLayout"><div className="inquiryCopy"><p className="eyebrow">Dates go quickly</p><h2>Let’s make<br /><em>some noise.</em></h2><p>Share the details you know. We’ll reply within two business days with availability and a creative next step.</p><div className="inquiryAside"><span>Prefer a direct note?</span><a href="mailto:hello@popnbloom.ca">hello@popnbloom.ca</a></div></div><InquiryForm /></div></section>
      <SiteFooter />
    </main>
  );
}
