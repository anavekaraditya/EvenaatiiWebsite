import type { Metadata } from "next";
import { LandingHome } from "@/components/landing-home";
import { siteConfig } from "@/data/site";
import { faqSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Wedding Planners and Event Planners in Hubballi, Hubli",
  description:
    "Evenaatii is a wedding planner and event planner in Hubballi, Hubli, Karnataka for luxury weddings, social celebrations, design direction, and event management.",
  keywords: [
    "wedding planner Hubballi",
    "wedding planner Hubli",
    "event planner Hubballi",
    "event planner Hubli",
    "event management Hubballi",
    "event management Hubli",
    "wedding decorators Karnataka",
    "luxury wedding planning Karnataka"
  ],
  alternates: {
    canonical: "/"
  }
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema(
              "Event planning in Hubli",
              "Premium event planning and design for weddings, corporate events, social functions, and branded collateral.",
              siteConfig.siteUrl
            )
          )
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema()) }}
      />
      <LandingHome />
    </>
  );
}
