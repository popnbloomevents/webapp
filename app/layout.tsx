import type {Metadata} from "next";
import {Montserrat,Poppins} from "next/font/google";
import "./globals.css";
const montserrat=Montserrat({subsets:["latin"],variable:"--font-heading",display:"swap"});
const poppins=Poppins({subsets:["latin"],weight:["300","400","500","600"],variable:"--font-body",display:"swap"});
export const metadata:Metadata={metadataBase:new URL("https://www.popnbloomevents.ca"),title:"Pop'n Bloom Events | Event Styling in Metro Vancouver",description:"Warm, modern balloon décor, personalized backdrops and an emotional Video Guestbook experience for celebrations across Metro Vancouver.",keywords:["Metro Vancouver event styling","balloon decor Vancouver","custom event backdrops","video guestbook rental","birthday decor Vancouver"],openGraph:{title:"Pop'n Bloom Events",description:"Creating celebrations that pop & bloom.",type:"website",images:[{url:"/images/hero-mirae-turns-one.jpg",width:2048,height:1366,alt:"Pop'n Bloom first birthday event styling"}]},twitter:{card:"summary_large_image",title:"Pop'n Bloom Events",description:"Creating celebrations that pop & bloom.",images:["/images/hero-mirae-turns-one.jpg"]}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}><body>{children}</body></html>}
