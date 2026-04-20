import { CTASection, CaseStudyGrid, PricingGrid, SectionIntro } from "@/components/sections";
import { designPricing, featuredCaseStudies } from "@/data/site";
import { serviceSchema } from "@/lib/schema";

export default function SocialEventsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema(
              "Social event planning",
              "Package-first social event planning for anniversaries, birthdays, and milestone celebrations.",
              "https://evenaatii.com/social-events"
            )
          )
        }}
      />
      <section className="page-hero">
        <div className="section-inner page-hero-grid">
          <div className="surface-card">
            <div className="eyebrow">Social Events</div>
            <h1 className="page-title">Lower friction. Faster decisions. The same premium feel.</h1>
            <p className="page-copy">
              Social events benefit from package-first presentation and a lighter path to conversion. The tone remains polished, but the route to inquiry is faster and simpler.
            </p>
          </div>
          <div
            className="image-side"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1400&q=80)"
            }}
          >
            <div className="page-hero-note">
              This funnel shortens the time from inspiration to booking by reducing complexity without feeling generic.
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <SectionIntro
            eyebrow="Package-first"
            title="Offer quick clarity for milestone celebrations and family-led events."
            copy="Packages and add-ons matter more here than elaborate explanation. Buyers want confidence, simplicity, and a sense of premium care."
          />
          <PricingGrid items={designPricing} />
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <SectionIntro
            eyebrow="Proof"
            title="Keep the persuasion visual, but always grounded in event context."
            copy="Each featured social event proves the format, guest scale, and style direction instead of asking visitors to interpret a gallery on their own."
          />
          <CaseStudyGrid items={featuredCaseStudies.filter((item) => item.category === "Social")} />
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <CTASection
            title="Want a fast quote with a premium finish?"
            copy="Use the booking page for a quick inquiry, or move into the Design Studio if you only need invitations, boards, or a visual package first."
            primary={{ label: "Quick Inquiry", href: "/book" }}
            secondary={{ label: "Open Design Studio", href: "/design-studio" }}
          />
        </div>
      </section>
    </>
  );
}
