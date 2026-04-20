import { CaseStudyGrid, CTASection, SectionIntro } from "@/components/sections";
import { featuredCaseStudies, portfolioFilters } from "@/data/site";

export default function PortfolioPage() {
  return (
    <>
      <section className="page-hero">
        <div className="section-inner">
          <div className="surface-card">
            <div className="eyebrow">Portfolio</div>
            <h1 className="page-title">No raw galleries. Only proof with enough context to persuade.</h1>
            <p className="page-copy">
              Portfolio items are structured as mini case studies, not image dumps. That means better storytelling, better comprehension, and stronger conversion.
            </p>
            <div className="filter-row" aria-label="Portfolio filters">
              {portfolioFilters.map((filter) => (
                <div className="filter-pill" key={filter}>
                  {filter}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <SectionIntro
            eyebrow="Case Library"
            title="Each item helps a visitor self-sort into the right conversation."
            copy="Mini case studies replace passive browsing with active qualification. Visitors can compare event type, guest scale, budget tier, and execution scope at a glance."
          />
          <CaseStudyGrid items={featuredCaseStudies} />
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <CTASection
            title="Found a direction that feels right?"
            copy="The next step should never be vague. Move directly into a quick inquiry or a full planning form depending on how ready you are."
            primary={{ label: "Start Quick Inquiry", href: "/contact" }}
            secondary={{ label: "Open Full Form", href: "/book" }}
          />
        </div>
      </section>
    </>
  );
}
