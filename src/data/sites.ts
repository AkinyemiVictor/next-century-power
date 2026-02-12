export type SiteProfile = {
  slug: string;
  name: string;
  image: string;
  size: string;
  potentialPower: string;
  timeline: string;
  location: string;
  mapPin: {
    left: string;
    top: string;
  };
  description: string[];
  partners: Array<{
    name: string;
    website: string;
    href: string;
  }>;
};

export const siteProfiles: SiteProfile[] = [
  {
    slug: "lagrange-in",
    name: "LAGRANGE, IN",
    image: "/assets/green%20field.png",
    size: "300 Acre",
    potentialPower: "3+ MW",
    timeline: "2 Years",
    location: "Lagrange, IN",
    mapPin: { left: "45%", top: "22%" },
    description: [
      "Lagrange is a cornerstone NCP development zone designed for rapid delivery of dedicated, high-capacity on-site power. The location combines favorable permitting conditions with strong corridor access for transmission, water, and fiber expansion.",
      "Its layout supports staged buildout, secure operations, and long-term flexibility for advanced generation technology, making it well-suited for hyperscale data campus growth and mission-critical industrial loads.",
    ],
    partners: [
      { name: "NIPSCO", website: "www.nipsco.com", href: "https://www.nipsco.com" },
      { name: "Amazon", website: "www.amazon.com", href: "https://www.amazon.com" },
      { name: "Inertial", website: "www.inertial.com", href: "https://www.inertial.com" },
    ],
  },
  {
    slug: "westview-ky",
    name: "WESTVIEW, KY",
    image: "/assets/landscape.png",
    size: "240 Acre",
    potentialPower: "2+ MW",
    timeline: "1 Year",
    location: "Westview, KY",
    mapPin: { left: "45%", top: "47%" },
    description: [
      "Westview is positioned for fast-track deployment where time-to-power is a primary constraint. The site footprint enables efficient phasing and straightforward integration with supporting infrastructure requirements.",
      "With a single-client operating model, this location is optimized for control, reliability, and expansion planning while reducing coordination friction that often delays traditional utility-dependent projects.",
    ],
    partners: [
      { name: "Big Rivers Electric", website: "www.bigrivers.com", href: "https://www.bigrivers.com" },
      { name: "Solential", website: "www.solential.com", href: "https://www.solential.com" },
      { name: "Boldt", website: "www.boldt.com", href: "https://www.boldt.com" },
    ],
  },
  {
    slug: "evansville-in",
    name: "EVANSVILLE, IN",
    image: "/assets/island.png",
    size: "175 Acre",
    potentialPower: "3+ MW",
    timeline: "2 Years",
    location: "Evansville, IN",
    mapPin: { left: "40%", top: "80%" },
    description: [
      "Evansville offers a compact, high-impact development profile for customers requiring resilient baseload supply with a clear pathway to cleaner generation over time. Its regional positioning supports both operational continuity and grid interface planning.",
      "NCP is designing this site to move from initial deployment to long-term optimization with minimal disruption, balancing near-term speed with future-readiness for carbon capture and advanced reactor transition.",
    ],
    partners: [
      {
        name: "CenterPoint Energy",
        website: "www.centerpointenergy.com",
        href: "https://www.centerpointenergy.com",
      },
      {
        name: "Siemens Energy",
        website: "www.siemens-energy.com",
        href: "https://www.siemens-energy.com",
      },
      { name: "Inertial", website: "www.inertial.com", href: "https://www.inertial.com" },
    ],
  },
  {
    slug: "whitesville-in",
    name: "WHITESVILLE, IN",
    image: "/assets/brown%20field.png",
    size: "425 Acre",
    potentialPower: "4+ MW",
    timeline: "3 Years",
    location: "Whitesville, IN",
    mapPin: { left: "71%", top: "73%" },
    description: [
      "Whitesville is the largest site in the current portfolio, purpose-built for scaled multi-phase power delivery and future industrial co-location opportunities. The acreage supports robust setback, logistics, and utility planning requirements.",
      "This location is engineered for long-horizon capacity growth while maintaining NCP's core priorities: dedicated client alignment, accelerated execution, and reliability-first operations from day one.",
    ],
    partners: [
      { name: "Duke Energy", website: "www.duke-energy.com", href: "https://www.duke-energy.com" },
      { name: "Solential", website: "www.solential.com", href: "https://www.solential.com" },
      { name: "Boldt", website: "www.boldt.com", href: "https://www.boldt.com" },
    ],
  },
];

export function getSiteBySlug(slug: string) {
  return siteProfiles.find((site) => site.slug === slug);
}
