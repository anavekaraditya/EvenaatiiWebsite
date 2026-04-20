export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EventPlanner",
    name: "Evenaatii",
    areaServed: ["Hubli", "Hubballi", "Karnataka"],
    serviceType: ["Wedding planning", "Corporate events", "Social events", "Event design studio"],
    url: "https://evenaatii.com"
  };
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    areaServed: ["Hubli", "Hubballi", "Karnataka"],
    url
  };
}
