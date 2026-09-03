"use client";
import Image from "next/image";
import {useEffect,useRef} from "react";

export function Hero(){
  const hero=useRef<HTMLElement>(null);
  useEffect(()=>{const node=hero.current;if(!node||matchMedia("(prefers-reduced-motion: reduce)").matches)return;let frame=0;const update=()=>{frame=0;const y=Math.min(Math.max(window.scrollY,0),900);const mobile=matchMedia("(max-width: 640px)").matches;const factor=(desktop:number,compact:number)=>y*(mobile?compact:desktop);node.style.setProperty("--hero-shift",`${factor(.34,.2)}px`);node.style.setProperty("--hero-eyebrow-shift",`${factor(.07,.035)}px`);node.style.setProperty("--hero-title-shift",`${factor(.12,.06)}px`);node.style.setProperty("--hero-body-shift",`${factor(.17,.085)}px`);node.style.setProperty("--hero-actions-shift",`${factor(.22,.11)}px`);node.style.setProperty("--hero-card-shift",`${factor(.16,.08)}px`);node.style.setProperty("--hero-note-shift",`${factor(.2,.08)}px`);node.style.setProperty("--hero-strip-shift",`${factor(.11,.055)}px`);node.style.setProperty("--hero-orbit-shift",`${factor(.26,.12)}px`);node.style.setProperty("--hero-orbit-two-shift",`${factor(-.19,-.09)}px`)};const onScroll=()=>{if(!frame)frame=requestAnimationFrame(update)};update();addEventListener("scroll",onScroll,{passive:true});return()=>{removeEventListener("scroll",onScroll);if(frame)cancelAnimationFrame(frame)}} ,[]);
  return <section ref={hero} className="hero" id="top">
    <div className="hero-scene" aria-hidden="true"><Image unoptimized src="/images/hero-mirae-turns-one.jpg" alt="" fill priority sizes="100vw"/></div>
    <div className="hero-overlay"/>
    <div className="hero-orbit hero-orbit-one"/><div className="hero-orbit hero-orbit-two"/>
    <div className="container hero-content"><p className="eyebrow light">Metro Vancouver event styling</p><h1>Creating celebrations<br/><span>that pop &amp; bloom.</span></h1><p>Balloon decor, custom backdrops, and a vintage video guestbook—thoughtfully styled for birthdays, baptisms, milestones, and celebrations across Metro Vancouver.</p><div className="hero-actions"><a className="button" href="#contact">Plan Your Event</a><a className="button button-outline" href="#portfolio">View Our Work</a></div></div>
    <aside className="hero-photo-card"><Image unoptimized src="/images/princess-7-indoor.jpg" alt="A princess-themed balloon arrangement for a children's celebration" fill sizes="(max-width:900px) 42vw,24vw"/><span>Made for your moment</span></aside>
    <aside className="hero-note"><small>Beautifully styled.</small><strong>Made to be remembered.</strong></aside>
    <div className="brand-strip"><p>Birthdays <b>•</b> Baptisms <b>•</b> Milestones <b>•</b> Corporate Events</p><strong>We style the scene. You make the memories.</strong></div>
  </section>}
