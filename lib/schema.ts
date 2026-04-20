import { siteConfig } from "@/data/site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService", "EventPlanner"],
    "@id": `${siteConfig.siteUrl}/#organization`,
    name: "Evenaatii",
    alternateName: "Evenaatii Planners",
    url: siteConfig.siteUrl,
    image: `${siteConfig.siteUrl}/figma-home/scroll-3.jpg`,
    logo: `${siteConfig.siteUrl}/figma-home/brand-mark.svg`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "2nd Floor, Shree Gurukrupa, above IDBI Bank, Akshay Colony",
      addressLocality: "Hubballi",
      addressRegion: "Karnataka",
      postalCode: "580030",
      addressCountry: "IN"
    },
    areaServed: [
      { "@type": "City", name: "Hubballi" },
      { "@type": "City", name: "Hubli" },
      { "@type": "AdministrativeArea", name: "Karnataka" },
      { "@type": "Country", name: "India" }
    ],
    serviceType: [
      "Wedding planner in Hubballi",
      "Event planner in Hubli",
      "Wedding decorator in Karnataka",
      "Corporate event planning",
      "Social event planning",
      "Event design studio"
    ],
    sameAs: [siteConfig.instagramUrl, siteConfig.facebookUrl, siteConfig.youtubeUrl],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: siteConfig.phone,
      email: siteConfig.email,
      areaServed: ["Hubballi", "Hubli", "Karnataka", "India"],
      availableLanguage: ["en", "hi", "kn"]
    }
  };
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    provider: {
      "@id": `${siteConfig.siteUrl}/#organization`
    },
    areaServed: ["Hubli", "Hubballi", "Karnataka", "India"],
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: url,
      availableLanguage: ["en", "hi", "kn"]
    },
    url
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.siteUrl}/#website`,
    url: siteConfig.siteUrl,
    name: "Evenaatii",
    inLanguage: "en-IN",
    publisher: {
      "@id": `${siteConfig.siteUrl}/#organization`
    }
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you offer wedding planning in Hubballi and Hubli?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Evenaatii offers wedding planning, design, and coordination for couples in Hubballi, Hubli, and surrounding Karnataka locations."
        }
      },
      {
        "@type": "Question",
        name: "Do you handle only weddings or other events in Karnataka as well?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Alongside weddings, Evenaatii also supports social celebrations, corporate events, hospitality-led experiences, and design studio work across Karnataka."
        }
      },
      {
        "@type": "Question",
        name: "How can I book an event planner consultation with Evenaatii?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can contact Evenaatii directly by phone or WhatsApp on +91 99028 66656, or use the booking page to start a qualified inquiry."
        }
      }
    ]
  };
}
