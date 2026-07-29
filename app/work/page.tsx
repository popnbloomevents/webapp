import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

const collections = [
  { href:"/work/balloon-arrangements", image:"/arrangement-blush-v2.png", number:"01", title:"Balloon arrangements", note:"Garlands, arches & sculptural moments" },
  { href:"/work/weddings", image:"/wedding-ceremony-v2.png", number:"02", title:"Weddings", note:"Ceremonies, receptions & showers" },
  { href:"/work/brand-events", image:"/brand-launch-v2.png", number:"03", title:"Brand events", note:"Launches, openings & activations" },
];

export default function WorkPage() {
  return <main><SiteHeader /><section className="workIntro shell"><p className="eyebrow">The portfolio</p><h1>Celebrations,<br /><em>collected.</em></h1><p>Browse our work by occasion. Each collection is a glimpse into how colour, scale and atmosphere can transform a room.</p></section><section className="collectionList shell">{collections.map((item) => <a href={item.href} className="collectionRow" key={item.title}><span>{item.number}</span><div className="collectionImage"><img src={item.image} alt={item.title} /></div><div><small>{item.note}</small><h2>{item.title}</h2></div><i>↗</i></a>)}</section><section className="portfolioCta"><div className="shell"><p className="eyebrow">Have something else in mind?</p><h2>Every good idea<br /><em>starts with a feeling.</em></h2><a className="primaryButton" href="/#inquire">Tell us yours <span>↗</span></a></div></section><SiteFooter /></main>;
}
