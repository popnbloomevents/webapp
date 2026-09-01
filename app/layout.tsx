import type { Metadata } from "next";
import { MotionEffects } from "./components/MotionEffects";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vancouver Event Décor, Backdrops & Video Guestbook | Pop N Bloom",
  description: "Custom event décor, luxury backdrops and a styled vintage telephone video guestbook for weddings and celebrations in Vancouver and the Lower Mainland.",
  keywords: ["Vancouver event decor", "custom backdrops Vancouver", "video guestbook rental Vancouver", "vintage telephone video guestbook", "wedding decor Vancouver", "event backdrop rental", "video guestbook wedding"],
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Pop N Bloom | Event Décor & Video Guestbooks in Vancouver",
    description: "Style the scene and save every word with custom event décor, luxury backdrops and video guestbook rentals.",
    type: "website",
    images: [{ url: "/og.png", width: 1732, height: 909, alt: "Pop N Bloom modern balloon art" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pop N Bloom | Event Décor & Video Guestbooks in Vancouver",
    description: "Custom event décor, luxury backdrops and video guestbook rentals for Vancouver celebrations.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><MotionEffects />{children}</body></html>;
}
