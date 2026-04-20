import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ExitIntentPrompt } from "@/components/exit-intent-prompt";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyCTA } from "@/components/sticky-cta";
import { organizationSchema } from "@/lib/schema";
import "./globals.css";

export const metadata: Metadata = {
  title: "Evenaatii | Premium Event Planning and Design",
  description: "Narrative-led event planning, design studio services, and qualified conversion funnels for weddings, corporate events, and social celebrations.",
  metadataBase: new URL("https://evenaatii.com")
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
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
