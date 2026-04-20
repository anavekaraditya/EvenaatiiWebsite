"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const revealCards = [
  {
    title: "Planning desk",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80",
    className: "hero-card hero-card-top-left"
  },
  {
    title: "Venue scouting",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    className: "hero-card hero-card-mid-left"
  },
  {
    title: "Design review",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    className: "hero-card hero-card-top-right"
  },
  {
    title: "Guest experience",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=80",
    className: "hero-card hero-card-mid-right"
  },
  {
    title: "On-ground control",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=80",
    className: "hero-card hero-card-bottom-left"
  },
  {
    title: "Detail layer",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
    className: "hero-card hero-card-bottom-right"
  }
];

export function HomeHero() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const nextProgress = Math.min(window.scrollY / Math.max(viewportHeight * 1.1, 1), 1);
      setProgress(nextProgress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const stageStyle = useMemo(
    () => ({
      transform: `translateY(${progress * -20}px) scale(${1 - progress * 0.36})`,
      borderRadius: `${progress * 30}px`
    }),
    [progress]
  );

  const contentStyle = useMemo(
    () => ({
      opacity: 1 - progress * 1.35,
      transform: `translateY(${progress * -28}px)`
    }),
    [progress]
  );

  const revealStyle = useMemo(
    () => ({
      opacity: Math.max(0, (progress - 0.2) * 1.45),
      transform: `translateY(${48 - progress * 48}px)`
    }),
    [progress]
  );

  return (
    <section className="hero-cinematic">
      <div className="hero-cinematic-sticky">
        <div className="hero-canvas">
          <div className="hero-stage-shell">
            <div className="hero-stage" style={stageStyle}>
              <video
                className="hero-video"
                autoPlay
                muted
                loop
                playsInline
                poster="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=80"
              >
                <source src="/hero-loop.mp4" type="video/mp4" />
              </video>
              <div className="hero-stage-overlay" />
              <div className="hero-content hero-content-cinematic" style={contentStyle}>
                <div className="eyebrow hero-eyebrow-light">Perception, comprehension, conversion</div>
                <h1 className="hero-title">Events that feel effortless. Memories that don&apos;t.</h1>
                <p className="hero-copy">
                  A premium event brand built as a multi-funnel conversion system, where every scroll resolves a decision and every page qualifies intent.
                </p>
                <div className="button-row hero-actions">
                  <Link className="hero-primary-cta" href="/book">
                    Book Consultation
                  </Link>
                  <Link className="hero-text-cta" href="/portfolio">
                    View Work
                  </Link>
                </div>
              </div>
              <div className="hero-scroll-hint" style={{ opacity: 1 - progress }}>
                Scroll to enter the system
              </div>
            </div>
          </div>

          <div className="hero-reveal" style={revealStyle}>
            {revealCards.map((card) => (
              <div
                key={card.title}
                className={card.className}
                style={{ backgroundImage: `url(${card.image})` }}
                aria-hidden="true"
              />
            ))}

            <div className="hero-reveal-center">
              <div className="hero-reveal-frame">
                <div
                  className="hero-reveal-image"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=80)"
                  }}
                />
              </div>
              <div className="hero-reveal-copy">
                The hero contracts into a curated proof canvas, guiding attention from cinematic emotion into a structured next step.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
