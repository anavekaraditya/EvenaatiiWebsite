"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";

export function SiteFooter() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <div className="brand-mark">{siteConfig.brand}</div>
          <p className="muted">
            Premium event planning, design, and execution rooted in narrative clarity and qualified conversion.
          </p>
        </div>
        <div>
          <p>{siteConfig.location}</p>
          <p>{siteConfig.email}</p>
          <p>{siteConfig.phone}</p>
        </div>
        <div className="inline-actions">
          <Link href="/portfolio">View Work</Link>
          <Link href="/book">Book Consultation</Link>
        </div>
      </div>
    </footer>
  );
}
