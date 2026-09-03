"use client";
import Image from "next/image";
import {useEffect,useRef} from "react";

export function Hero(){
  const hero=useRef<HTMLElement>(null);
  useEffect(()=>{const node=hero.current;if(!node||matchMedia("(prefers-reduced-motion: reduce)").matches)return;let frame=0;const update=()=>{frame=0;const y=Math.min(Math.max(window.scrollY,0),900);const mobile=matchMedia("(max-width: 640px)").matches;node.style.setProperty("--hero-shift",`${y*(mobile?.16:.24)}px`);node.style.setProperty("--hero-copy-shift",`${y*(mobile?.025:.055)}px`);node.style.setProperty("--hero-card-shift",`${y*(mobile?-.08:-.15)}px`);node.style.setProperty("--hero-note-shift",`${y*(mobile?.025:.052)}px`);node.style.setProperty("--hero-orbit-shift",`${y*(mobile?.08:.18)}px`);node.style.setProperty("--hero-orbit-two-shift",`${y*(mobile?-.055:-.126)}px`)};const onScroll=()=>{if(!frame)frame=requestAnimationFrame(update)};update();addEventListener("scroll",onScroll,{passive:true});return()=>{removeEventListener("scroll",onScroll);if(frame)cancelAnimationFrame(frame)}} ,[]);
  return <section ref={hero} className="hero" id="top">
    <div className="hero-scene" aria-hidden="true"><Image unoptimized src="/images/hero-mirae-turns-one.jpg" alt="" fill priority sizes="100vw"/></div>
    <div className="hero-overlay"/>
    <div className="hero-orbit hero-orbit-one"/><div className="hero-orbit hero-orbit-two"/>
    <div className="container hero-content"><p className="eyebrow light">Metro Vancouver event styling</p><h1>Creating celebrations<br/><span>that pop &amp; bloom.</span></h1><p>Balloon décor, custom backdrops, and a vintage video guestbook—thoughtfully styled for birthdays, baptisms, milestones, and celebrations across Metro Vancouver.</p><div className="hero-actions"><a className="button" href="#contact">Plan Your Event</a><a className="button button-outline" href="#portfolio">View Our Work</a></div></div>
    <aside className="hero-photo-card"><Image unoptimized src="/images/mirae-dessert-table-detail.jpg" alt="A closer view of a floral first birthday dessert table" fill sizes="(max-width:900px) 42vw,24vw"/><span>Made for your moment</span></aside>
    <aside className="hero-note"><small>Beautifully styled.</small><strong>Made to be remembered.</strong></aside>
    <div className="brand-strip"><p>Birthdays <b>•</b> Baptisms <b>•</b> Milestones <b>•</b> Corporate Events</p><strong>We style the scene. You make the memories.</strong></div>
  </section>}
