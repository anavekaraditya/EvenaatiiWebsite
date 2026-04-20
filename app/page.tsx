import { LandingHome } from "@/components/landing-home";
import { serviceSchema } from "@/lib/schema";

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
              "https://evenaatii.com"
            )
          )
        }}
      />
      <LandingHome />
    </>
  );
}
