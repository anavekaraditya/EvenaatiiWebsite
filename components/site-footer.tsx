"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ConsultationTrigger } from "@/components/consultation-trigger";
import { siteConfig } from "@/data/site";

export function SiteFooter() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand-column">
          <div className="brand-mark">{siteConfig.brand}</div>
          <p className="muted">
            Premium event planning, design, and execution rooted in narrative clarity and qualified conversion.
          </p>
          <div className="site-footer-socials">
            <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href={siteConfig.facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href={siteConfig.youtubeUrl} target="_blank" rel="noreferrer" aria-label="YouTube">
              <YoutubeIcon />
            </a>
          </div>
        </div>
        <div className="footer-contact-grid">
          <div>
            <p className="footer-label">Call us at</p>
            <a href={siteConfig.callHref}>{siteConfig.phoneDisplay}</a>
          </div>
          <div>
            <p className="footer-label">Address</p>
            <p>{siteConfig.location}</p>
          </div>
          <div>
            <p className="footer-label">Mail</p>
            <a href={siteConfig.mailHref}>{siteConfig.email}</a>
          </div>
        </div>
        <div className="inline-actions">
          <Link href="/#portfolio">View Work</Link>
          <ConsultationTrigger>Book Consultation</ConsultationTrigger>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.4" cy="6.8" r="1.2" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M13.3 20.5v-7.1h2.4l.4-2.8h-2.8V8.8c0-.8.2-1.4 1.4-1.4h1.5V4.9c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.9v1.9H8v2.8h2.3v7.1h3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20.5 7.2c-.2-.9-.9-1.6-1.8-1.9C17.2 5 12 5 12 5s-5.2 0-6.7.3c-.9.3-1.6 1-1.8 1.9C3.2 8.8 3.2 12 3.2 12s0 3.2.3 4.8c.2.9.9 1.6 1.8 1.9 1.5.3 6.7.3 6.7.3s5.2 0 6.7-.3c.9-.3 1.6-1 1.8-1.9.3-1.6.3-4.8.3-4.8s0-3.2-.3-4.8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path d="m10.2 15.1 5-3.1-5-3.1v6.2Z" fill="currentColor" />
    </svg>
  );
}
