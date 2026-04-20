"use client";

import { useEffect, useState, type ReactNode } from "react";
import { siteConfig } from "@/data/site";

export function ConsultationTrigger({
  children,
  className,
  onOpen
}: {
  children: ReactNode;
  className?: string;
  onOpen?: () => void;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => {
          onOpen?.();
          setOpen(true);
        }}
      >
        {children}
      </button>

      {open ? (
        <div className="consultation-modal-backdrop" role="presentation" onClick={() => setOpen(false)}>
          <div
            className="consultation-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Choose consultation method"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="consultation-chip">Book consultation</div>
            <h2 className="consultation-title">Choose how you want to reach Evenaatii.</h2>
            <p className="consultation-copy">
              We can continue instantly on WhatsApp or connect by phone on the same number.
            </p>
            <div className="consultation-actions">
              <a className="consultation-action-primary" href={`https://wa.me/${siteConfig.whatsappNumber}`}>
                WhatsApp
              </a>
              <a className="consultation-action-secondary" href={siteConfig.callHref}>
                Call
              </a>
            </div>
            <button type="button" className="consultation-close" onClick={() => setOpen(false)}>
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
