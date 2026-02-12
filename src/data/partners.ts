export type PartnerProfile = {
  slug: string;
  name: string;
  heroTitle: string;
  cardDescription: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  logoClassName?: string;
  detailTitle: string;
  lead: string;
  paragraphs: string[];
};

export const partnerProfiles: PartnerProfile[] = [
  {
    slug: "siemens-energy",
    name: "Siemens Energy",
    heroTitle: "Siemens Energy",
    cardDescription: "Advanced Turbine & Energy System Integration",
    logo: "/assets/Siemens_Energy_logo.svg%201.png",
    logoWidth: 255,
    logoHeight: 110,
    logoClassName: "h-[76px] w-auto",
    detailTitle: "Advanced Turbine &\nEnergy System Integration",
    lead: "The Siemens Energy team is our preferred single- and dual-combustion gas turbine manufacturer.",
    paragraphs: [
      "Siemens Energy brings decades of proven expertise in large-scale power generation and a comprehensive portfolio of advanced gas turbine technologies that align perfectly with our customers' near-term baseload requirements.",
      "Their established track record in delivering reliable, high-efficiency combustion systems provides the technical foundation and operational confidence needed for NCP's sequential transition strategy from fossil fuel generation to SMRs.",
      "Additionally, Siemens Energy's global service network and deep understanding of grid-scale power systems integration ensures that NCP can deliver dependable baseload solutions while maintaining the operational excellence required for critical infrastructure projects.",
      "Their partnership also brings valuable experience in power plant lifecycle management and performance optimization, which will be essential as NCP navigates the complex transition from conventional generation to advanced nuclear technologies.",
    ],
  },
  {
    slug: "boldt",
    name: "Boldt",
    heroTitle: "Boldt",
    cardDescription: "Power & Infrastructure Construction & Consulting",
    logo: "/assets/Boldt_bw%201.png",
    logoWidth: 220,
    logoHeight: 75,
    logoClassName: "h-[52px] w-auto",
    detailTitle: "Power & Infrastructure Construction Expertise",
    lead: "Boldt contributes practical construction leadership for complex, schedule-driven energy deployments.",
    paragraphs: [
      "Its teams bring deep experience coordinating heavy civil, mechanical, and electrical scopes across mission-critical infrastructure where sequencing and constructability are decisive.",
      "For NCP projects, that discipline supports early risk identification, tighter field execution, and better alignment between design assumptions and build realities.",
      "This partnership approach helps accelerate project timelines while maintaining quality, safety, and handover readiness for high-availability power assets.",
    ],
  },
  {
    slug: "solential",
    name: "Solential",
    heroTitle: "Solential",
    cardDescription: "Microgrid & Redundant Energy Solutions",
    logo: "/assets/Solential_Logo_v4_854x313%201.png",
    logoWidth: 250,
    logoHeight: 105,
    logoClassName: "h-[72px] w-auto",
    detailTitle: "Microgrid & Redundant Energy Solutions",
    lead: "Solential supports resilient architecture design for microgrid and backup-power strategies.",
    paragraphs: [
      "Its experience spans distributed controls, redundant system design, and integration strategies that improve continuity across variable operating conditions.",
      "That capability strengthens NCP's ability to deliver dependable on-site generation with failure-tolerant configurations for high-uptime environments.",
      "From planning through commissioning, this collaboration focuses on practical redundancy decisions that improve reliability without slowing deployment speed.",
    ],
  },
  {
    slug: "department-of-energy-america",
    name: "United States Department of Energy",
    heroTitle: "Department Of Energy",
    cardDescription: "Submitted RFI",
    logo: "/assets/department%20of%20energy%20america.png",
    logoWidth: 118,
    logoHeight: 118,
    logoClassName: "h-[96px] w-[96px]",
    detailTitle: "Federal Engagement & Energy Infrastructure Dialogue",
    lead: "NCP submitted an RFI response to the U.S. Department of Energy to contribute practical input on large-scale, reliable power for digital infrastructure.",
    paragraphs: [
      "That submission reflects a broader effort to align private deployment plans with public-sector priorities around grid resilience, domestic capacity, emissions reduction, and long-term energy security.",
      "Our team tracks evolving program guidance, commercialization pathways, and regulatory context so development decisions remain realistic, compliant, and financeable from early design through delivery.",
      "As this dialogue advances, NCP will continue sharing field-informed perspectives on phased generation strategies that accelerate near-term capacity while supporting responsible transition to next-generation technologies.",
    ],
  },
  {
    slug: "inertial",
    name: "Inertial",
    heroTitle: "Inertial",
    cardDescription: "Carbon Capture Expertise",
    logo: "/assets/inertial%201.png",
    logoWidth: 248,
    logoHeight: 56,
    logoClassName: "h-[48px] w-auto",
    detailTitle: "Carbon Capture Expertise",
    lead: "Inertial contributes specialized technical insight for carbon capture pathways tied to site-scale power generation.",
    paragraphs: [
      "Its expertise helps evaluate capture architectures, operational interfaces, and performance tradeoffs relevant to phased deployments.",
      "This supports NCP's objective to reduce emissions impact while preserving the speed and reliability requirements of mission-critical sites.",
      "Over time, the collaboration informs practical implementation approaches that connect carbon strategy, commercial value creation, and long-term infrastructure resilience.",
    ],
  },
];

export function getPartnerBySlug(slug: string) {
  return partnerProfiles.find((partner) => partner.slug === slug);
}
