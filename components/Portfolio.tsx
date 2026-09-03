"use client";
import Image from "next/image";
import {useState} from "react";
import {portfolio,type Category} from "@/data/portfolio";
import {Reveal} from "./Reveal";
const filters:["All"|Category,...Category[]]=["All","Birthdays","Baptisms","Milestones","Grab & Go","Themed Events","Video Guestbook"];
export function Portfolio(){const[active,setActive]=useState<(typeof filters)[number]>("All");const items=active==="All"?portfolio:portfolio.filter(i=>i.category===active);return <section className="portfolio section" id="portfolio"><Reveal className="container"><div className="section-heading"><div><p className="eyebrow">Real events, real joy</p><h2>A little look at what<br/><span>we’ve been blooming.</span></h2></div><p>From soft baptism palettes to bright character birthdays, every setup is built around the people being celebrated.</p></div><div className="filters" role="group" aria-label="Filter portfolio">{filters.map(f=><button className={active===f?"active":""} aria-pressed={active===f} onClick={()=>setActive(f)} key={f}>{f}</button>)}</div><div className="masonry" aria-live="polite">{items.map(item=><figure className={item.shape} key={item.src}><Image unoptimized src={item.src} alt={item.alt} fill sizes="(max-width:700px) 100vw,(max-width:1000px) 50vw,33vw"/><figcaption>{item.caption}</figcaption></figure>)}</div></Reveal></section>}
