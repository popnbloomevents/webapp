"use client";
import {useEffect,useRef,useState,type ReactNode} from "react";
export function Reveal({children,className=""}:{children:ReactNode,className?:string}){const ref=useRef<HTMLDivElement>(null);const[shown,setShown]=useState(false);useEffect(()=>{const el=ref.current;if(!el)return;const observer=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){setShown(true);observer.disconnect()}},{threshold:.08});observer.observe(el);return()=>observer.disconnect()},[]);return <div ref={ref} className={`reveal ${shown?"shown":""} ${className}`}>{children}</div>}
