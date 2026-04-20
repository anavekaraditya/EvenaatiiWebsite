"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(!isHome);

  if (isHome) {
    return null;
  }

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 48);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <header className={`site-header ${isScrolled ? "site-header-scrolled" : "site-header-overlay"}`}>
      <div className="site-header-frame">
        <div className="site-header-inner">
          <Link href="/" className="brand-mark">
            {siteConfig.brand}
          </Link>
          <nav className="header-nav" aria-label="Primary">
            {siteConfig.nav.map((item) => {
              const isActive =
                item.href === "/#services"
                  ? pathname === "/" || pathname === "/corporate" || pathname === "/social-events" || pathname === "/design-studio"
                  : pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={isActive ? "header-link-active" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="header-cta">
            <Link className="header-cta-secondary" href={`https://wa.me/${siteConfig.whatsappNumber}`}>
              WhatsApp
            </Link>
            <Link className="header-cta-primary" href="/book">
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
