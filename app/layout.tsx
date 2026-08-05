import type { Metadata } from "next";
import { MotionEffects } from "./components/MotionEffects";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pop N Bloom | Modern Balloon Art",
  description: "Bespoke balloon installations and event styling in Vancouver, designed with a floral eye and an editorial sensibility.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Pop N Bloom | Modern Balloon Art",
    description: "Bespoke balloon installations for life’s most beautiful moments.",
    type: "website",
    images: [{ url: "/og.png", width: 1732, height: 909, alt: "Pop N Bloom modern balloon art" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pop N Bloom | Modern Balloon Art",
    description: "Bespoke balloon installations for life’s most beautiful moments.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><MotionEffects />{children}</body></html>;
}
