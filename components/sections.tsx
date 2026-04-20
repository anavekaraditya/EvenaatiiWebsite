import Link from "next/link";
import { siteConfig, type CaseStudy, type PricingTier, type ProcessStep, type ServiceLink } from "@/data/site";

export function SectionIntro({
  eyebrow,
  title,
  copy
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="section-intro">
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="section-title">{title}</h2>
      <p className="section-copy">{copy}</p>
    </div>
  );
}

export function ServiceGrid({ items }: { items: ServiceLink[] }) {
  return (
    <div className="service-grid">
      {items.map((item) => (
        <article className="service-card" key={item.href}>
          <div>
            <div className="service-qualifier">{item.qualifier}</div>
            <h3 className="card-title">{item.title}</h3>
            <p className="card-copy">{item.description}</p>
          </div>
          <Link className="service-link" href={item.href}>
            Explore
          </Link>
        </article>
      ))}
    </div>
  );
}

export function CaseStudyGrid({ items }: { items: CaseStudy[] }) {
  return (
    <div className="case-grid">
      {items.map((item) => (
        <article className="case-card" key={item.slug}>
          <div className="image-cover" style={{ backgroundImage: `url(${item.image})` }}>
            <div className="overlay-meta">
              {item.overlay.map((label) => (
                <span className="overlay-pill" key={label}>
                  {label}
                </span>
              ))}
            </div>
          </div>
          <div className="case-content">
            <div className="service-qualifier">{item.category}</div>
            <h3 className="card-title">{item.title}</h3>
            <p className="card-copy">{item.summary}</p>
            <div className="detail-list">
              {item.details.map((detail) => (
                <span key={detail}>{detail}</span>
              ))}
            </div>
            <a className="button-secondary" href={siteConfig.callHref}>
              {item.cta}
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

export function PricingGrid({ items }: { items: PricingTier[] }) {
  return (
    <div className="pricing-grid">
      {items.map((item) => (
        <article className="tier-card" key={item.name}>
          <div className="tier-header">
            <div>
              <div className="service-qualifier">{item.name}</div>
              <p className="card-copy">{item.description}</p>
            </div>
            <div className="pricing-value">{item.price}</div>
          </div>
          <ul className="bullet-list">
            {item.inclusions.map((inclusion) => (
              <li key={inclusion}>{inclusion}</li>
            ))}
          </ul>
          <a className="button" href={siteConfig.callHref}>
            {item.cta}
          </a>
        </article>
      ))}
    </div>
  );
}

export function ProcessGrid({ items }: { items: ProcessStep[] }) {
  return (
    <div className="process-grid">
      {items.map((item, index) => (
        <article className="process-card" key={item.title}>
          <div className="step-number">{String(index + 1).padStart(2, "0")}</div>
          <h3 className="card-title">{item.title}</h3>
          <p className="card-copy">{item.description}</p>
        </article>
      ))}
    </div>
  );
}

export function CTASection({
  title,
  copy,
  primary,
  secondary
}: {
  title: string;
  copy: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
}) {
  return (
    <div className="cta-banner">
      <div>
        <div className="eyebrow">Next Decision</div>
        <h2 className="section-title cta-title">
          {title}
        </h2>
        <p className="section-copy">{copy}</p>
      </div>
      <div className="button-row">
        <Link className="button" href={primary.href}>
          {primary.label}
        </Link>
        <Link className="button-secondary" href={secondary.href}>
          {secondary.label}
        </Link>
      </div>
    </div>
  );
}
