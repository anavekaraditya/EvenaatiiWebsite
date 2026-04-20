"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ConsultationTrigger } from "@/components/consultation-trigger";

export function ExitIntentPrompt() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  if (pathname === "/") {
    return null;
  }

  useEffect(() => {
    const handleMouseLeave = (event: MouseEvent) => {
      if (event.clientY <= 0) {
        setVisible(true);
      }
    };

    window.addEventListener("mouseout", handleMouseLeave);
    return () => window.removeEventListener("mouseout", handleMouseLeave);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="exit-intent-backdrop" role="presentation" onClick={() => setVisible(false)}>
      <div className="exit-intent-modal" role="dialog" aria-modal="true" aria-label="Stay in touch" onClick={(event) => event.stopPropagation()}>
        <div className="chip">Before you go</div>
        <h2 className="card-title">Still comparing options?</h2>
        <p className="card-copy">
          Share your event type, date, and budget path first. We&apos;ll tell you which funnel or package direction fits best.
        </p>
        <div className="button-row">
          <ConsultationTrigger className="button" onOpen={() => setVisible(false)}>
            Start Inquiry
          </ConsultationTrigger>
          <button className="button-secondary" type="button" onClick={() => setVisible(false)}>
            Continue Browsing
          </button>
        </div>
      </div>
    </div>
  );
}
