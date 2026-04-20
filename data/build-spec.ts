export const buildSpec = {
  stackOptions: ["Framer", "Webflow", "Next.js"],
  recommendedStack: "Next.js",
  pageSchemas: {
    home: ["hero", "trustStrip", "serviceSelection", "featuredCaseStudy", "process", "pricingAnchor", "leadCapture"],
    weddings: ["hero", "packages", "caseStudies", "designLayer", "process", "advancedLeadForm"],
    corporate: ["hero", "clientAndCapabilityProof", "eventTypes", "executionCapability", "cta"],
    socialEvents: ["hero", "packageFirstOffer", "caseProof", "cta"],
    designStudio: ["hero", "fixedPricing", "productProof", "orderNowCta"],
    portfolio: ["filters", "miniCaseStudies", "conversionCta"],
    booking: ["quickInquiry", "fullPlanningForm", "seoSystem", "conversionCta"]
  },
  componentLibrary: [
    "SiteHeader",
    "StickyCTA",
    "Hero surface",
    "SectionIntro",
    "ServiceGrid",
    "CaseStudyGrid",
    "PricingGrid",
    "ProcessGrid",
    "LeadForm",
    "CTASection",
    "ExitIntentPrompt",
    "SiteFooter"
  ],
  formSchema: {
    default: ["eventType", "eventDate", "guestCount", "location", "budgetRange", "requirements"],
    weddings: ["eventDate", "supportType", "guestCount", "location", "budget", "functions", "requirements"]
  },
  contentBlocksDefined: true
} as const;
