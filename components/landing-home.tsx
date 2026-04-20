"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import styles from "./landing-home.module.css";

const centerFrameStyle = {
  left: "50%",
  top: "300px",
  width: "384px",
  height: "221px",
  transform: "translateX(-50%)"
} satisfies CSSProperties;

const collageFrames = [
  {
    src: "/figma-home/frame-1.png",
    alt: "Wedding decor detail",
    depth: -10,
    style: { left: "24px", top: "33px", width: "203px", height: "110px" }
  },
  {
    src: "/figma-home/frame-2.png",
    alt: "Wedding venue detail",
    depth: -8,
    style: { right: "54px", top: "0px", width: "184px", height: "107px" }
  },
  {
    src: "/figma-home/frame-3.png",
    alt: "Wedding ceremony photo",
    depth: -6,
    style: { right: "220px", top: "252px", width: "124px", height: "117px" }
  },
  {
    src: "/figma-home/frame-4.png",
    alt: "Wedding setup detail",
    depth: 8,
    style: { right: "0px", top: "438px", width: "121px", height: "119px" }
  },
  {
    src: "/figma-home/frame-5.png",
    alt: "Wedding floral decor",
    depth: 12,
    style: { left: "0px", top: "438px", width: "188px", height: "151px" }
  },
  {
    src: "/figma-home/frame-6.png",
    alt: "Wedding design detail",
    depth: -4,
    style: { left: "213px", top: "293px", width: "98px", height: "83px" }
  },
  {
    src: "/figma-home/frame-8.png",
    alt: "Wedding floral close-up",
    depth: 10,
    style: { left: "219px", top: "686px", width: "185px", height: "151px" }
  },
  {
    src: "/figma-home/frame-9.png",
    alt: "Wedding stage photo",
    depth: 7,
    style: { right: "261px", top: "656px", width: "130px", height: "111px" }
  }
] as const;

const servicePills = [
  ["Weddings", "primary"],
  ["Corporate Events", "clarity"],
  ["Social Celebrations", "easy"],
  ["Design Studio", "visual"],
  ["Invitations", "suite"],
  ["Decor Direction", "style"],
  ["Guest Flow", "pace"],
  ["Hospitality", "warmth"],
  ["Venue Styling", "mood"],
  ["Multi-day Events", "full"],
  ["Stationery", "detail"],
  ["Branding", "studio"]
] as const;

const processSteps = [
  ["01", "Brief", "Date, city, scale, priorities"],
  ["02", "Shape", "Mood, decor, guest journey"],
  ["03", "Align", "Vendors, flow, hospitality"],
  ["04", "Execute", "Calm, polished delivery"]
] as const;

const stats = [
  ["120+", "events shaped with detail-led execution"],
  ["48 hrs", "average response window for qualified leads"],
  ["4", "clear service paths across the brand"],
  ["1", "founder-led vision across the process"]
] as const;

const galleryImages = [
  "/figma-home/scroll-1.jpg",
  "/figma-home/scroll-2.jpg",
  "/figma-home/scroll-3.jpg",
  "/figma-home/scroll-4.jpg",
  "/figma-home/scroll-5.jpg"
];

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const easeInOutCubic = (value: number) =>
  value < 0.5 ? 4 * value * value * value : 1 - Math.pow(-2 * value + 2, 3) / 2;

export function LandingHome() {
  const sceneRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const targetCardRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setMobileMenuOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  useEffect(() => {
    const scene = sceneRef.current;
    const sticky = stickyRef.current;
    const target = targetCardRef.current;

    if (!scene || !sticky || !target) {
      return;
    }

    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compactLayoutQuery = window.matchMedia("(max-width: 1100px)");
    let frameId = 0;

    const setSceneVar = (name: string, value: string) => {
      scene.style.setProperty(name, value);
    };

    const syncTargetGeometry = () => {
      const stickyRect = sticky.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      const targetCenterX = targetRect.left + targetRect.width / 2;
      const targetCenterY = targetRect.top + targetRect.height / 2;
      const stickyCenterX = stickyRect.left + stickyRect.width / 2;
      const stickyCenterY = stickyRect.top + stickyRect.height / 2;

      setSceneVar("--hero-target-x", `${targetCenterX - stickyCenterX}px`);
      setSceneVar("--hero-target-y", `${targetCenterY - stickyCenterY}px`);
      setSceneVar("--hero-scale-x", `${targetRect.width / stickyRect.width}`);
      setSceneVar("--hero-scale-y", `${targetRect.height / stickyRect.height}`);
    };

    const updateScene = () => {
      frameId = 0;
      syncTargetGeometry();

      const motionEnabled = !reducedMotionQuery.matches && !compactLayoutQuery.matches;
      scene.dataset.motion = motionEnabled ? "on" : "off";

      if (!motionEnabled) {
        setSceneVar("--hero-progress", "0");
        return;
      }

      const rect = scene.getBoundingClientRect();
      const scrollDistance = Math.max(scene.offsetHeight - window.innerHeight, 1);
      const rawProgress = clamp(-rect.top / scrollDistance, 0, 1);
      const stagedProgress = clamp((rawProgress - 0.045) / 0.89, 0, 1);
      const easedProgress = easeInOutCubic(stagedProgress);
      setSceneVar("--hero-progress", easedProgress.toFixed(4));
    };

    const requestUpdate = () => {
      if (frameId !== 0) {
        return;
      }

      frameId = window.requestAnimationFrame(updateScene);
    };

    requestUpdate();

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reducedMotionQuery.addEventListener("change", requestUpdate);
    compactLayoutQuery.addEventListener("change", requestUpdate);

    return () => {
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotionQuery.removeEventListener("change", requestUpdate);
      compactLayoutQuery.removeEventListener("change", requestUpdate);
    };
  }, []);

  return (
    <div className={styles.page}>
      <section className={styles.heroScene} ref={sceneRef} data-motion="on">
        <div className={styles.heroSceneSticky} ref={stickyRef}>
          <div className={styles.collageCanvas}>
            <div className={styles.collageStage}>
              {collageFrames.map((frame) => (
                <div key={frame.src} className={styles.collageCard} style={frame.style}>
                  <div
                    className={styles.collageCardMedia}
                    style={{ "--parallax-depth": `${frame.depth}px` } as CSSProperties}
                  >
                    <img src={frame.src} alt={frame.alt} />
                  </div>
                </div>
              ))}

              <div
                ref={targetCardRef}
                className={`${styles.collageCard} ${styles.collageTarget}`}
                style={centerFrameStyle}
                aria-hidden="true"
              >
                <video autoPlay loop muted playsInline preload="metadata" className={styles.targetVideo}>
                  <source src="/figma-home/whatsapp-video-ad.mp4" type="video/mp4" />
                </video>
              </div>

              <div className={styles.collageLabel}>
                <img src="/figma-home/brand-mark.svg" alt="" className={styles.collageLabelMark} />
                <span className={styles.collageLabelText}>Evenaatii Planners</span>
              </div>
            </div>
          </div>

          <div className={styles.heroMorphLayer}>
            <video className={styles.heroVideo} autoPlay loop muted playsInline preload="metadata">
              <source src="/figma-home/whatsapp-video-ad.mp4" type="video/mp4" />
            </video>
            <div className={styles.heroOverlay} />

            <div className={styles.heroNav}>
              <Link href="/" className={styles.heroBrand}>
                <img src="/figma-home/brand-mark.svg" alt="" className={styles.heroBrandMark} />
                <span className={styles.heroBrandText}>Evenaatii Planners</span>
              </Link>
              <nav className={styles.heroMenu} aria-label="Landing page navigation">
                <Link href="/#story">Story</Link>
                <Link href="#services">Services</Link>
                <Link href="#portfolio">Portfolio</Link>
                <Link href="#process">Process</Link>
              </nav>
              <Link href="/book" className={styles.heroBook}>
                Book consultation
              </Link>
              <button
                type="button"
                className={styles.heroMenuButton}
                aria-expanded={mobileMenuOpen}
                aria-controls="landing-mobile-menu"
                onClick={() => setMobileMenuOpen((open) => !open)}
              >
                <span className={styles.heroMenuButtonLine} />
                <span className={styles.heroMenuButtonLine} />
                <span className={styles.heroMenuButtonLine} />
              </button>
            </div>

            <div
              id="landing-mobile-menu"
              className={`${styles.mobileMenuPanel} ${mobileMenuOpen ? styles.mobileMenuPanelOpen : ""}`}
            >
              <Link href="/#story" onClick={() => setMobileMenuOpen(false)}>
                Story
              </Link>
              <Link href="#services" onClick={() => setMobileMenuOpen(false)}>
                Services
              </Link>
              <Link href="#portfolio" onClick={() => setMobileMenuOpen(false)}>
                Portfolio
              </Link>
              <Link href="#process" onClick={() => setMobileMenuOpen(false)}>
                Process
              </Link>
              <Link href="/book" onClick={() => setMobileMenuOpen(false)}>
                Book consultation
              </Link>
            </div>

            <div className={styles.heroContent}>
              <div className={styles.heroHeading}>
                Craft weddings with feeling.
                <br />
                Hold every moment with grace.
              </div>
              <div className={styles.heroCopy}>
                Luxury wedding planning and design for celebrations that feel emotionally rich,
                visually composed, and beautifully effortless from first guest arrival to final
                farewell.
              </div>
              <div className={styles.heroActions}>
                <Link href="/book" className={styles.primaryButton}>
                  Book consultation
                </Link>
                <Link href="#portfolio" className={styles.secondaryButton}>
                  View portfolio →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.splitSection} id="story">
        <div className={styles.splitContent}>
          <div className={styles.eyebrow}>Why Evenaatii</div>
          <h2 className={styles.sectionTitle}>
            The celebration feels seamless because every detail is deeply considered.
          </h2>
          <p className={styles.sectionCopy}>
            Evenaatii plans the flow, design, logistics, and guest experience behind the
            scenes so the day feels calm, intentional, and beautifully effortless in front
            of everyone who matters.
          </p>
          <div className={styles.sectionNote}>
            Founder-led. Multi-day capable. Design-first from the start.
          </div>
        </div>
        <div className={styles.splitImageWrap}>
          <div className={styles.splitImage}>
            <img src="/figma-home/frame-6.png" alt="Wedding decor planning detail" />
          </div>
        </div>
      </section>

      <section className={`${styles.splitSection} ${styles.splitSectionReversed}`}>
        <div className={styles.splitImageWrap}>
          <div className={styles.splitImage}>
            <img src="/figma-home/planning.png" alt="Wedding decor and styling" />
          </div>
        </div>
        <div className={styles.splitContent}>
          <div className={styles.eyebrow}>Planning system</div>
          <h2 className={styles.sectionTitle}>Design the atmosphere. Let the emotion lead.</h2>
          <p className={styles.sectionCopy}>
            From invitation language to floral texture, lighting, tablescapes, and ceremony
            mood, each visual choice is curated to feel personal rather than performative.
          </p>
        </div>
      </section>

      <section className={styles.bannerSection}>
        <img src="/figma-home/Vision.png" alt="Wedding stage" />
        <div className={styles.bannerOverlay}>
          <div className={styles.bannerContent}>
            <h2 className={styles.sectionTitle}>Your vision, held with calm precision.</h2>
            <p className={styles.sectionCopy}>
              Full planning for weddings that need thoughtful sequencing, elevated design
              direction, and effortless guest flow without visual noise or operational friction.
            </p>
            <div className={styles.stats}>
              {stats.map(([value, label]) => (
                <div key={label}>
                  <div className={styles.statValue}>{value}</div>
                  <div className={styles.statLabel}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.featureHeading}>
        <div className={styles.eyebrow}>Featured celebration</div>
        <h2 className={styles.sectionTitle}>Choose the planning depth that fits your celebration.</h2>
        <p className={styles.sectionCopy}>
          Each offering begins with a clear scope, starting investment, and enough flexibility
          to shape the celebration around your venue, guest count, and design ambition.
        </p>
      </section>

      <section className={styles.testimonial}>
        <img src="/figma-home/testimonial-bg.jpg" alt="Wedding testimonial background" />
        <div className={styles.testimonialOverlay}>
          <div className={styles.testimonialInner}>
            <div className={styles.quoteMark}>“</div>
            <p className={styles.quoteText}>
              The entire wedding felt so beautifully paced. I never had to wonder what was
              happening next because everything already felt taken care of.
            </p>
            <div className={styles.testimonialMeta}>Aarushi P. · Luxury wedding · Bengaluru</div>
          </div>
        </div>
      </section>

      <section className={styles.statement}>
        <div className={styles.statementEyebrow}>Built for meaningful celebrations</div>
        <div className={styles.statementLine}>Every celebration holds emotion.</div>
        <div className={styles.statementLine}>We shape what lingers.</div>
      </section>

      <section className={styles.processSection} id="process">
        <div className={styles.processCopy}>
          <div className={styles.eyebrow}>The process</div>
          <h2 className={styles.sectionTitle}>
            The process stays calm because every decision has a place.
          </h2>
          <p className={styles.sectionCopy}>
            From concept to coordination, the experience is structured to reduce noise,
            protect your time, and keep the celebration moving with confidence.
          </p>
          <div className={styles.processLead}>
            Each stage qualifies the brief, narrows choices, and turns creative direction into
            an event that feels effortless when it finally unfolds.
          </div>
          <div className={styles.processSteps}>
            {processSteps.map(([index, label, meta]) => (
              <div className={styles.processStep} key={index}>
                <div className={styles.processIndex}>{index}</div>
                <div className={styles.processLabel}>{label}</div>
                <div className={styles.processMeta}>{meta}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.processImage}>
          <img src="/figma-home/process.png" alt="Wedding planning process" />
        </div>
      </section>

      <section className={styles.servicePaths} id="services">
        <div className={styles.servicePathsHeader}>
          <div className={styles.eyebrow}>Service paths</div>
          <h2 className={styles.servicePathsTitle}>Select the experience you want us to shape.</h2>
          <p className={styles.servicePathsCopy}>
            Whether you need wedding planning, intimate social celebrations, corporate event
            execution, or design studio support, each path stays distinct and easy to choose
            from.
          </p>
        </div>

        <div className={styles.pillCloud}>
          {servicePills.map(([label, meta]) => (
            <div className={styles.pill} key={label}>
              <span className={styles.pillLabel}>{label}</span>
              <span className={styles.pillMeta}>{meta}</span>
            </div>
          ))}
        </div>

        <div className={styles.servicePrompt}>
          <div className={styles.servicePromptTitle}>Or start with your date</div>
          <div className={styles.searchBar}>
            <div className={styles.searchInput}>Tell us your event date, city, and budget range…</div>
            <span className={styles.searchAction}>→</span>
          </div>
        </div>
      </section>

      <section className={styles.pricingBand}>
        <img src="/figma-home/break-2.jpg" alt="Wedding stage lighting" />
        <div className={styles.pricingContent}>
          <div>
            <div className={styles.eyebrow}>Pricing</div>
            <h2 className={styles.sectionTitle}>One meaningful celebration justifies careful planning.</h2>
          </div>
          <p className={styles.sectionCopy}>
            Our packages are designed to anchor premium expectations with starting investment
            ranges while keeping enough flexibility for custom scope and layered add-ons.
          </p>
        </div>
      </section>

      <section className={styles.gallerySection} id="portfolio">
        <div className={styles.galleryHeader}>
          <h2 className={styles.sectionTitle}>A celebration this personal needs proof, not promises.</h2>
          <p className={styles.sectionCopy}>
            Browse real weddings shaped through atmosphere, guest experience, design direction,
            and execution that stays composed under pressure.
          </p>
        </div>
        <div className={styles.galleryTrack}>
          {galleryImages.map((src, index) => (
            <div className={styles.galleryCard} key={src}>
              <img src={src} alt={`Wedding gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      <section className={styles.closing}>
        <h2 className={styles.sectionTitle}>Beautiful weddings begin with a clear first conversation.</h2>
        <p className={styles.sectionCopy}>
          Tell us about the celebration you are imagining and we will guide the next step with
          clarity, taste, and the right level of planning depth.
        </p>
        <Link href="/book" className={styles.primaryButton}>
          Book consultation
        </Link>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <img src="/figma-home/brand-mark.svg" alt="" className={styles.heroBrandMark} />
          <span>Evenaatii</span>
        </div>
        <div className={styles.footerLinks}>
          <span>Terms</span>
          <span>Privacy</span>
        </div>
        <div className={styles.footerCopy}>© 2026 Evenaatii</div>
      </footer>
    </div>
  );
}
