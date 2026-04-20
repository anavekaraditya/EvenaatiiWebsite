import { CTASection, PricingGrid, SectionIntro } from "@/components/sections";
import { designPricing } from "@/data/site";
import { serviceSchema } from "@/lib/schema";

export default function DesignStudioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema(
              "Event design studio",
              "Standalone invitation, board, and event branding packages with fixed pricing tiers.",
              "https://evenaatii.com/design-studio"
            )
          )
        }}
      />
      <section className="page-hero">
        <div className="section-inner page-hero-grid">
          <div className="surface-card">
            <div className="eyebrow">Design Studio</div>
            <h1 className="page-title">A standalone design revenue stream, not an add-on page.</h1>
            <p className="page-copy">
              Invitations, boards, and branding are productized into fixed-price tiers so the studio can convert independently from full event planning.
            </p>
            <div className="detail-list">
              <span>Invitations</span>
              <span>Boards</span>
              <span>Branding</span>
              <span>Order-ready</span>
            </div>
          </div>
          <div
            className="image-side"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1510070009289-b5bc34383727?auto=format&fit=crop&w=1400&q=80)"
            }}
          >
            <div className="page-hero-note">
              Fixed tiers reduce sales friction while preserving premium perception through strong visual language and controlled pricing exposure.
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <SectionIntro
            eyebrow="Fixed Tiers"
            title="Productize the offer so visitors can order with confidence."
            copy="This page removes ambiguity. Buyers see what the studio makes, where pricing starts, and what the next action is."
          />
          <PricingGrid items={designPricing} />
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <SectionIntro
            eyebrow="What to show"
            title="Design proof should still answer a buying question."
            copy="Use invitation samples, decor boards, and branding systems as proof of taste and quality, not as isolated visuals without decision context."
          />
          <div className="proof-grid">
            <article className="surface-card">
              <div className="chip">Invitations</div>
              <h3 className="card-title">Ceremony suites and RSVP assets</h3>
              <p className="card-copy">Digital-first and print-ready formats that feel elevated from the first guest touchpoint.</p>
            </article>
            <article className="surface-card">
              <div className="chip">Boards</div>
              <h3 className="card-title">Mood, palette, floral, and spatial direction</h3>
              <p className="card-copy">Boards help clients and vendors align faster, making them both a sales tool and a production tool.</p>
            </article>
            <article className="surface-card">
              <div className="chip">Branding</div>
              <h3 className="card-title">Identity systems for experiences</h3>
              <p className="card-copy">Ideal for launches, signature celebrations, and event properties that need a stronger visual language.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <CTASection
            title="Need something order-ready?"
            copy="The Design Studio page is designed to convert with a direct order path. Keep the next step simple and immediate."
            primary={{ label: "Order Now", href: "/book" }}
            secondary={{ label: "View Portfolio", href: "/portfolio" }}
          />
        </div>
      </section>
    </>
  );
}
