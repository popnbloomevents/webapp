"use client";
import {useState} from "react";
import {BrandLogo} from "./BrandLogo";
export function Header(){const[open,setOpen]=useState(false);const close=()=>setOpen(false);return <header className="site-header"><div className="container nav-wrap"><a href="#top" onClick={close}><BrandLogo/></a><button className="menu-button" aria-label="Toggle navigation" aria-expanded={open} onClick={()=>setOpen(!open)}><span/><span/></button><nav className={open?"open":""} aria-label="Primary navigation"><a onClick={close} href="#services">Services</a><a onClick={close} href="#video-guestbook">Video Guestbook</a><a onClick={close} href="#portfolio">Portfolio</a><a onClick={close} href="#about">About</a><a onClick={close} className="nav-cta" href="#contact">Let’s Celebrate</a></nav></div></header>}
