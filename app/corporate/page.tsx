import { CTASection, CaseStudyGrid, ProcessGrid, SectionIntro } from "@/components/sections";
import { featuredCaseStudies, processSteps } from "@/data/site";
import { serviceSchema } from "@/lib/schema";

export default function CorporatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema(
              "Corporate event planning",
              "Operationally clear corporate event production for launches, conferences, retreats, and stakeholder experiences.",
              "https://evenaatii.com/corporate"
            )
          )
        }}
      />
      <section className="page-hero">
        <div className="section-inner page-hero-grid">
          <div className="surface-card">
            <div className="eyebrow">Corporate Events</div>
            <h1 className="page-title">Operational confidence is the product.</h1>
            <p className="page-copy">
              Corporate prospects do not need emotional overload. They need execution capability, clean communication, reliable timelines, and visible readiness for multi-stakeholder environments.
            </p>
            <div className="detail-list">
              <span>Launches</span>
              <span>Leadership summits</span>
              <span>Conferences</span>
              <span>Retreats</span>
            </div>
          </div>
          <div
            className="image-side"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80)"
            }}
          >
            <div className="page-hero-note">
              The tone here prioritizes capability, not sentiment. Every section is built to reduce risk for decision-makers.
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <SectionIntro
            eyebrow="Capability"
            title="Show the event types and logistics depth before asking for the inquiry."
            copy="Corporate leads convert when they can quickly confirm capacity, professionalism, and production discipline."
          />
          <div className="proof-grid">
            <article className="surface-card">
              <div className="chip">Client Readiness</div>
              <h3 className="card-title">Brand and stakeholder aware</h3>
              <p className="card-copy">Built to accommodate sponsor deliverables, speaker logistics, executive hosting, and approval chains.</p>
            </article>
            <article className="surface-card">
              <div className="chip">Execution</div>
              <h3 className="card-title">From registration to post-event wrap</h3>
              <p className="card-copy">The system supports stage management, hospitality, team briefing, backend logistics, and reporting-oriented thinking.</p>
            </article>
            <article className="surface-card">
              <div className="chip">Formats</div>
              <h3 className="card-title">Flexible across scale</h3>
              <p className="card-copy">Town halls, launches, retreats, dinners, and conferences can each route into the same qualified planning workflow.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <SectionIntro
            eyebrow="Case Proof"
            title="Case studies still matter, but the emphasis shifts to delivery confidence."
            copy="Logos and visuals help, yet what closes the gap is proof of coordination, timing, hospitality control, and stakeholder management."
          />
          <CaseStudyGrid items={featuredCaseStudies.filter((item) => item.category === "Corporate")} />
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <SectionIntro
            eyebrow="Process"
            title="The same system, translated for corporate decision-making."
            copy="Qualification gathers scale, format, venue, approvals, and production requirements so teams can move into scope and delivery faster."
          />
          <ProcessGrid items={processSteps} />
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <CTASection
            title="Ready to scope an event with less back and forth?"
            copy="Use the booking flow to submit event type, date, delegate count, location, and budget band so the first conversation starts with context."
            primary={{ label: "Book Corporate Consultation", href: "/book" }}
            secondary={{ label: "View Portfolio", href: "/portfolio" }}
          />
        </div>
      </section>
    </>
  );
}
