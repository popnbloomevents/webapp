import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type Project = { image: string; title: string; note: string };

export function WorkCategory({ eyebrow, title, intro, hero, projects }: { eyebrow: string; title: string; intro: string; hero: string; projects: Project[] }) {
  return (
    <main>
      <SiteHeader />
      <section className="categoryHero shell">
        <div><a className="backLink" href="/work">← All work</a><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{intro}</p><a className="textLink" href="/#inquire">Ask about your event <span>→</span></a></div>
        <img src={hero} alt="" />
      </section>
      <section className="projectMasonry shell">
        {projects.map((project, index) => <figure key={`${project.title}-${index}`} className={index % 3 === 1 ? "projectWide" : ""}><img src={project.image} alt={project.title} /><figcaption><span>{project.title}</span><small>{project.note}</small></figcaption></figure>)}
      </section>
      <section className="portfolioCta"><div className="shell"><p className="eyebrow">Made for your room, your palette, your people</p><h2>Let’s create your<br /><em>signature moment.</em></h2><a className="primaryButton" href="/#inquire">Begin your inquiry <span>↗</span></a></div></section>
      <SiteFooter />
    </main>
  );
}
