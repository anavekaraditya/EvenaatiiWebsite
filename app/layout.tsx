import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ExitIntentPrompt } from "@/components/exit-intent-prompt";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyCTA } from "@/components/sticky-cta";
import { siteConfig } from "@/data/site";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Evenaatii | Event Planners in Hubballi, Hubli, Karnataka",
    template: "%s | Evenaatii"
  },
  description:
    "Evenaatii is an event planning and wedding planning studio in Hubballi, Hubli, Karnataka for weddings, social events, corporate events, decor direction, and event design.",
  keywords: [
    "event planners in Hubballi",
    "event planners in Hubli",
    "event management company in Hubballi",
    "event management company in Hubli",
    "wedding planners in Hubballi",
    "wedding planners in Hubli",
    "wedding decorators in Karnataka",
    "event planners in Karnataka",
    "corporate event planners in Karnataka",
    "luxury wedding planners in Hubballi"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: siteConfig.siteUrl,
    siteName: "Evenaatii",
    title: "Evenaatii | Event Planners in Hubballi, Hubli, Karnataka",
    description:
      "Wedding planners and event planners in Hubballi, Hubli, Karnataka for luxury weddings, social celebrations, and corporate events.",
    locale: "en_IN",
    images: [
      {
        url: "/figma-home/scroll-3.jpg",
        width: 1200,
        height: 630,
        alt: "Evenaatii event planners in Karnataka"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Evenaatii | Event Planners in Hubballi, Hubli, Karnataka",
    description:
      "Wedding planners and event planners in Hubballi, Hubli, Karnataka for premium celebrations and event design.",
    images: ["/figma-home/scroll-3.jpg"]
  },
  robots: {
    index: true,
    follow: true
  },
  category: "event planning"
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-IN">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
        <div className="page-shell">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <StickyCTA />
          <ExitIntentPrompt />
        </div>
      </body>
    </html>
  );
}
