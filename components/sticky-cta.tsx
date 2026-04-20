"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";

export function StickyCTA() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <div className="sticky-cta" aria-label="Quick actions">
      <Link className="button-secondary" href={`https://wa.me/${siteConfig.whatsappNumber}`}>
        WhatsApp
      </Link>
      <Link className="button" href="/book">
        Start Booking
      </Link>
    </div>
  );
}
