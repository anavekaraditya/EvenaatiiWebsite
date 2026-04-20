import { LeadForm } from "@/components/lead-form";
import { CTASection, SectionIntro } from "@/components/sections";
import { seoPages, seoTopics, siteConfig } from "@/data/site";

export default function BookPage() {
  return (
    <>
      <section className="page-hero">
        <div className="section-inner page-hero-grid">
          <div className="surface-card">
            <div className="eyebrow">Contact and Booking</div>
            <h1 className="page-title">Two entry paths, one goal: qualified conversations.</h1>
            <p className="page-copy">
              Visitors can choose a quick inquiry when they want speed, or a deeper planning form when they are ready to move with more detail and intent.
            </p>
            <div className="detail-list">
              <span>Quick inquiry</span>
              <span>Full planning form</span>
              <span>WhatsApp path</span>
              <span>Sales-ready inputs</span>
            </div>
          </div>
          <div className="surface-card">
            <div className="eyebrow">Direct Access</div>
            <h2 className="card-title">Prefer a faster start?</h2>
            <p className="card-copy">
              Use WhatsApp for a faster first touch, then route qualified leads into the same structured booking flow.
            </p>
            <div className="button-row">
              <a className="button" href={`https://wa.me/${siteConfig.whatsappNumber}`}>
                Open WhatsApp
              </a>
              <a className="button-secondary" href={`mailto:${siteConfig.email}`}>
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner contact-grid">
          <LeadForm
            title="Quick Inquiry"
            description="Designed for visitors who want to share the essentials and get a direction quickly."
            ctaLabel="Send Quick Inquiry"
          />
          <LeadForm
            title="Full Planning Form"
            description="Use the same multi-step structure, but this version is positioned as the deeper path for more committed leads."
            ctaLabel="Apply for Planning"
          />
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <SectionIntro
            eyebrow="SEO System"
            title="The content layer is ready for local intent and long-tail planning searches."
            copy="These are the core page and blog targets to build on top of the conversion architecture once content production begins."
          />
          <div className="proof-grid">
            <article className="surface-card">
              <div className="chip">Pages</div>
              <ul className="bullet-list">
                {seoPages.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="surface-card">
              <div className="chip">Content Layer</div>
              <ul className="bullet-list">
                {seoTopics.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="surface-card">
              <div className="chip">Build Spec</div>
              <p className="card-copy">Componentized sections, reusable form schema, and structured content data are already baked into the codebase for AI-assisted scaling.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <CTASection
            title="Need to see proof before you inquire?"
            copy="The portfolio route keeps narrative context intact while still ending in the same conversion system."
            primary={{ label: "View Portfolio", href: "/#portfolio" }}
            secondary={{ label: "Go Home", href: "/" }}
          />
        </div>
      </section>
    </>
  );
}
