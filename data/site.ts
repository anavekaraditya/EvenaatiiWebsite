export type ServiceLink = {
  title: string;
  href: string;
  description: string;
  qualifier: string;
};

export type CaseStudy = {
  title: string;
  slug: string;
  image: string;
  summary: string;
  details: string[];
  overlay: string[];
  category: string;
  cta: string;
};

export type PricingTier = {
  name: string;
  price: string;
  description: string;
  inclusions: string[];
  cta: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export const siteConfig = {
  brand: "Evenaatii",
  siteUrl: "https://evenaatiiwebsite.vercel.app",
  location: "2nd Floor, Shree Gurukrupa, above IDBI Bank, Akshay Colony, Hubballi, Karnataka - 580030",
  whatsappNumber: "919902866656",
  email: "evenaatiiplanners@gmail.com",
  phone: "+91 99028 66656",
  phoneDisplay: "99028 66656",
  callHref: "tel:+919902866656",
  mailHref: "mailto:evenaatiiplanners@gmail.com",
  instagramUrl: "https://www.instagram.com/evenaatii_planners",
  facebookUrl: "https://www.facebook.com/profile.php?id=100089817563493&mibextid=LQQJ4d",
  youtubeUrl: "https://www.youtube.com/@EvenaatiiPlanners",
  nav: [
    { label: "Story", href: "/#story" },
    { label: "Services", href: "/#services" },
    { label: "Portfolio", href: "/#portfolio" },
    { label: "Book", href: "/book" }
  ]
};

export const homeMetrics = [
  { value: "120+", label: "events produced with detail-led execution and decisive planning" },
  { value: "48 hrs", label: "average first-response window for qualified wedding and corporate leads" },
  { value: "4 funnels", label: "clear paths for weddings, corporate, social events, and design studio work" }
];

export const serviceLinks: ServiceLink[] = [
  {
    title: "Weddings",
    href: "/weddings",
    qualifier: "Primary revenue engine",
    description: "Narrative-rich planning and design for couples who want emotion, precision, and premium orchestration."
  },
  {
    title: "Corporate",
    href: "/corporate",
    qualifier: "Operational clarity",
    description: "Launches, conferences, retreats, and branded experiences built around logistics, timing, and stakeholder confidence."
  },
  {
    title: "Social",
    href: "/social-events",
    qualifier: "Fast decisions",
    description: "Birthdays, anniversaries, and milestone celebrations with fast package selection and low-friction booking."
  },
  {
    title: "Design Studio",
    href: "/design-studio",
    qualifier: "Standalone revenue stream",
    description: "Invitations, mood boards, stationery, and visual systems with fixed pricing and a clear order flow."
  }
];

export const featuredCaseStudies: CaseStudy[] = [
  {
    title: "Destination wedding with three-day orchestration",
    slug: "destination-wedding",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80",
    summary: "A 300-guest celebration designed to feel cinematic at every touchpoint, while remaining tightly controlled behind the scenes.",
    details: ["Venue: Heritage hillside resort", "Guest count: 300", "Budget tier: Premium", "Execution window: 3 days"],
    overlay: ["300 guest destination wedding", "Executed in 3 days"],
    category: "Wedding",
    cta: "Plan Similar Event"
  },
  {
    title: "Leadership summit with premium hospitality flow",
    slug: "leadership-summit",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80",
    summary: "Operational planning for executive arrivals, stage management, sponsor integration, and post-event reporting.",
    details: ["Venue: Convention ballroom", "Guest count: 450", "Budget tier: Enterprise", "Format: Multi-session summit"],
    overlay: ["450 delegate summit", "Sponsor and speaker managed"],
    category: "Corporate",
    cta: "Build This Format"
  },
  {
    title: "Milestone celebration with immersive family storytelling",
    slug: "milestone-celebration",
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1400&q=80",
    summary: "A social event designed for ease, warmth, and visual identity across invitations, decor, and guest experience.",
    details: ["Venue: Private lawn", "Guest count: 180", "Budget tier: Signature", "Format: Anniversary gala"],
    overlay: ["180 guest social event", "Design studio assets included"],
    category: "Social",
    cta: "Create Your Celebration"
  }
];

export const weddingPricing: PricingTier[] = [
  {
    name: "Coordination",
    price: "Starting from Rs. 75K",
    description: "For couples who already have direction but need calm, reliable execution and vendor alignment.",
    inclusions: ["Final month planning", "Production timeline and team coordination", "Vendor communication and rehearsal management", "On-ground event day supervision"],
    cta: "Check Coordination Fit"
  },
  {
    name: "Full Planning",
    price: "Starting from Rs. 2.5L",
    description: "A structured planning partnership spanning venue logic, design intent, guest journey, and delivery.",
    inclusions: ["Budget structuring and planning calendar", "Vendor sourcing and shortlist strategy", "Function-by-function experience planning", "Guest communication support"],
    cta: "Explore Full Planning"
  },
  {
    name: "Luxury",
    price: "Starting from Rs. 6L",
    description: "High-touch planning, aesthetic direction, and production control for multi-day premium celebrations.",
    inclusions: ["Creative direction and design narrative", "Hospitality and logistics management", "Premium vendor curation", "Founder-level involvement through final execution"],
    cta: "Apply for Luxury Planning"
  }
];

export const designPricing: PricingTier[] = [
  {
    name: "Invitations",
    price: "Starting from Rs. 18K",
    description: "Refined digital or print invitation systems for weddings and social events.",
    inclusions: ["Primary invite concept", "Up to three coordinated inserts", "WhatsApp-ready exports", "Two revision rounds"],
    cta: "Order Invitation Suite"
  },
  {
    name: "Boards",
    price: "Starting from Rs. 28K",
    description: "Mood boards, decor direction, styling notes, and aesthetic references for aligned execution.",
    inclusions: ["Theme narrative board", "Color and material direction", "Reference curation", "Styling deck delivery"],
    cta: "Request Design Board"
  },
  {
    name: "Branding",
    price: "Starting from Rs. 45K",
    description: "Visual identity for event properties, launch moments, and brand-led hospitality experiences.",
    inclusions: ["Identity concept", "Typography and palette system", "Collateral direction", "Launch asset kit"],
    cta: "Start Branding Project"
  }
];

export const processSteps: ProcessStep[] = [
  {
    title: "Qualify the brief",
    description: "We start with event type, date, budget, guest count, and decision context so the conversation begins with clarity."
  },
  {
    title: "Shape the plan",
    description: "We translate the brief into a focused path: scope, package fit, experience direction, and operational requirements."
  },
  {
    title: "Build the system",
    description: "Timelines, vendors, design layers, guest journeys, and approval checkpoints are structured into one delivery plan."
  },
  {
    title: "Execute with calm",
    description: "On-site production is handled with disciplined control so the experience feels effortless to hosts and guests."
  }
];

export const portfolioFilters = ["All", "Weddings", "Corporate", "Social", "Design Studio"];

export const seoPages = [
  "Wedding planners in Hubli",
  "Event planners Hubballi",
  "Wedding decorators Karnataka"
];

export const seoTopics = [
  "Wedding budget guide for Karnataka celebrations",
  "Venue shortlisting guide for Hubli and Hubballi couples",
  "90-day planning timeline for premium family events"
];
