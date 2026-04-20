import { LeadForm } from "@/components/lead-form";
import { CTASection, CaseStudyGrid, PricingGrid, ProcessGrid, SectionIntro } from "@/components/sections";
import { featuredCaseStudies, processSteps, weddingPricing } from "@/data/site";
import { serviceSchema } from "@/lib/schema";

const weddingFormSteps = [
  {
    title: "Step 1",
    description: "Tell us the wedding date and what kind of planning support you are looking for.",
    fields: [
      { name: "eventDate", label: "Wedding date", type: "date" as const },
      {
        name: "supportType",
        label: "Planning support",
        type: "select" as const,
        options: ["Coordination", "Full Planning", "Luxury", "Not sure yet"]
      }
    ]
  },
  {
    title: "Step 2",
    description: "Scale and venue geography help us assess logistics early.",
    fields: [
      { name: "guestCount", label: "Guest count", type: "text" as const, placeholder: "Approx. 250" },
      { name: "location", label: "Location", type: "text" as const, placeholder: "City / venue / destination" }
    ]
  },
  {
    title: "Step 3",
    description: "Budget and function count tell us how to frame the planning path.",
    fields: [
      {
        name: "budget",
        label: "Budget",
        type: "select" as const,
        options: ["Under Rs. 3L", "Rs. 3L - 8L", "Rs. 8L - 15L", "Rs. 15L+"]
      },
      {
        name: "functions",
        label: "Functions",
        type: "select" as const,
        options: ["1-2", "3-4", "5+"]
      }
    ]
  },
  {
    title: "Step 4",
    description: "Share the design direction and any family, venue, or timeline constraints.",
    fields: [
      { name: "requirements", label: "Design notes and requirements", type: "textarea" as const, full: true, placeholder: "Style, decor preferences, family priorities, and venue constraints." }
    ]
  }
];

export default function WeddingsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema(
              "Wedding planning in Hubli",
              "Premium wedding planning, coordination, and luxury celebration design for couples in Hubli, Hubballi, and Karnataka.",
              "https://evenaatii.com/weddings"
            )
          )
        }}
      />
      <section className="page-hero">
        <div className="section-inner page-hero-grid">
          <div className="surface-card">
            <div className="eyebrow">Primary Revenue Engine</div>
            <h1 className="page-title">Weddings deserve emotion in the front and system behind it.</h1>
            <p className="page-copy">
              This page leads with premium perception, then gives couples exactly what they need to move forward: service clarity, proof with context, design cues, and a qualification flow that respects their time.
            </p>
            <div className="detail-list">
              <span>Hero-led trust</span>
              <span>Tiered packages</span>
              <span>Case-study proof</span>
              <span>Advanced form</span>
            </div>
          </div>
          <div
            className="image-side"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=80)"
            }}
          >
            <div className="page-hero-note">
              Emotional imagery stays uncluttered so the premium signal lands before the sales logic begins.
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <SectionIntro
            eyebrow="Packages"
            title="Three tiers built to qualify fit instead of exposing every detail at once."
            copy="Packages reveal enough to anchor decision-making while leaving room for tailoring. Starting prices guide expectation without collapsing the conversation into a commodity comparison."
          />
          <PricingGrid items={weddingPricing} />
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <SectionIntro
            eyebrow="Case Studies"
            title="Proof works harder when every image carries planning context."
            copy="No gallery walls. Each case study pairs a cinematic visual with venue, guest count, budget tier, and execution scope, helping prospects place themselves into the right planning conversation."
          />
          <CaseStudyGrid items={featuredCaseStudies.filter((item) => item.category === "Wedding")} />
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <SectionIntro
            eyebrow="Design Layer"
            title="Themes, decor, and invitation systems belong inside the funnel, not outside it."
            copy="Aesthetic direction is a decision accelerant. When couples can see the range of decor language and collateral quality, they understand the difference between coordination and a fully shaped experience."
          />
          <div className="proof-grid">
            <article className="surface-card">
              <div className="chip">Theme Directions</div>
              <h3 className="card-title">Garden romance to modern regal</h3>
              <p className="card-copy">Design stories are translated into palettes, florals, table language, lighting mood, and material references.</p>
            </article>
            <article className="surface-card">
              <div className="chip">Decor Styles</div>
              <h3 className="card-title">Built for scale and atmosphere</h3>
              <p className="card-copy">Mandaps, entry moments, stage language, and experiential styling remain visually coherent across all functions.</p>
            </article>
            <article className="surface-card">
              <div className="chip">Invitation Samples</div>
              <h3 className="card-title">The first impression becomes part of the event narrative</h3>
              <p className="card-copy">Digital invites, print suites, inserts, and guest communication assets extend the premium signal before arrival.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <SectionIntro
            eyebrow="Process"
            title="Clarity for families, calm for vendors, and one orchestrated system for delivery."
            copy="A strong process reduces friction across stakeholders and protects the wedding experience from last-minute chaos."
          />
          <ProcessGrid items={processSteps} />
        </div>
      </section>

      <section className="section">
        <div className="section-inner contact-grid">
          <LeadForm
            title="Wedding qualification form"
            description="This flow gathers the exact details needed for a useful first consultation: date, guest count, budget, location, and function count."
            ctaLabel="Request Wedding Consultation"
            steps={weddingFormSteps}
          />
          <div className="surface-card">
            <div className="eyebrow">Booking Logic</div>
            <h2 className="card-title">The form is part of the sales system, not an afterthought.</h2>
            <p className="card-copy">
              Mandatory qualification fields reduce unserious inquiries, improve package matching, and let the first call focus on decisions rather than basic discovery.
            </p>
            <div className="detail-list">
              <span>Date</span>
              <span>Guest count</span>
              <span>Budget</span>
              <span>Location</span>
              <span>Functions</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <CTASection
            title="Need invitation or decor support first?"
            copy="The Design Studio works as a standalone revenue stream for clients who want a quicker start through invitations, boards, or branding packages."
            primary={{ label: "Open Design Studio", href: "/design-studio" }}
            secondary={{ label: "See Booking Page", href: "/book" }}
          />
        </div>
      </section>
    </>
  );
}
