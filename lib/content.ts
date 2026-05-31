/**
 * Single source of truth for site copy + business info.
 * Edit anything in this file to change what appears on the site.
 */

export const business = {
  name: "Higgins Electric",
  legalName: "HIGGINS ELECTRIC, Inc.",
  parent: "Higgins Enterprise",
  tagline: "Power. Delivered.",
  phone: "(860) 267-0842",
  email: "Power4u@HigginsElec.com",
  address: {
    poBox: "P.O. Box 258",
    street: "68 Middletown Avenue",
    city: "East Hampton",
    state: "CT",
    zip: "06424",
  },
  serviceArea: "Connecticut. 30 miles around East Hampton.",
  hours: "Mon-Fri 7:30 am – 3 pm",
  license: "Licensed Contractor in the State of CT (# E1-122293)",
  founded: "1982",
  ownerName: "John Higgins",
  yearsInBusiness: "40+",
  freeConsultations: true,
  bidListWelcome: true,
  social: {
    google: "https://www.google.com/search?q=higgins+electric+east+hampton+ct",
  },
};

export const nav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Hiring", href: "/hiring" },
  { label: "Contact", href: "/contact" },
];

export const serviceLinks = [
  { label: "Commercial & Industrial Services", href: "/services/commercial-industrial" },
  { label: "Commercial Generators – Sales & Service", href: "/services/commercial-generators" },
  { label: "Residential Generators – Sales & Service", href: "/services/residential-generators" },
  { label: "Residential Services", href: "/services/residential" },
];

export const home = {
  hero: {
    eyebrow: "Connecticut electrical contractor",
    headlineTop: "POWER.",
    headlineBottom: "DELIVERED.",
    sub: "Family owned out of East Hampton. Commercial, industrial, and residential electrical. Generators, panels, high lift, and everything in between.",
    primaryCta: { label: "Request a free consultation", href: "/contact" },
    secondaryCta: { label: "What we do", href: "/services" },
  },
  mission: {
    eyebrow: "Mission",
    statement: "Power. Done right. So you never think about it.",
  },
  values: {
    eyebrow: "Values",
    items: [
      {
        title: "Show up.",
        body: "Quoted Monday. On site by Friday. Emergencies answered any hour.",
      },
      {
        title: "Do it right.",
        body: "Code correct the first time. Site cleaned before we leave.",
      },
      {
        title: "Stay local.",
        body: "Same crew. Same trucks. Same number. Your neighbors hire us.",
      },
    ],
  },
  stats: [
    { value: 16, suffix: "+", label: "Service lines" },
    { value: 100, suffix: " ft", label: "Aerial reach" },
    { value: 24, suffix: "/7", label: "Emergency response" },
    { value: 4.8, suffix: "★", label: "Google rating" },
  ],
  capabilities: {
    eyebrow: "What we cover",
    headline: "One call. Every electrical need on the property.",
    items: [
      "Electrical design, install, and upgrades",
      "Generator sales, install, and service",
      "Standby and emergency transfer switches",
      "EV charging stations",
      "Parking lot, streetlight, and athletic field lighting",
      "Bucket truck work, aerial to 100 feet",
      "Trenching, excavation, and concrete",
      "Steel fabrication and modifications",
      "Crane work and utility poles",
      "PLC controls and automation",
      "Interstate battery dealer",
      "Siren repair and emergency notification",
      "Transportation and hauling",
      "Fencing and site enclosures",
      "Thermal imaging reports",
      "Fire alarm and CCTV camera systems",
      "Load bank generator testing",
      "Panel upgrades and service entrances",
    ],
  },
  trust: {
    eyebrow: "Why Higgins",
    items: [
      {
        title: "Owner on the job.",
        body: "John walks the sites and signs off the work. The electrician. Not a sales rep.",
      },
      {
        title: "Free consultations.",
        body: "We look at the job before we quote it. No pressure. No hidden line items.",
      },
      {
        title: "Bid list ready.",
        body: "Facility needs bidding procedures and specs? Add Higgins to your list.",
      },
      {
        title: "Licensed and insured.",
        body: "Licensed in Connecticut. Trained on code, controllers, and transfer gear.",
      },
    ],
  },
  dualCta: {
    forClients: {
      eyebrow: "Need work done",
      headline: "Get a quote today.",
      cta: { label: "Start a project", href: "/contact" },
    },
    forCareers: {
      eyebrow: "Want to work for Higgins",
      headline: "We are always hiring top talent.",
      cta: { label: "See hiring", href: "/hiring" },
    },
  },
};

export const about = {
  eyebrow: "About",
  story: [
    {
      heading: "Connecticut-based. Over thirty years in.",
      body: "Skilled crew. Competitive pricing. Fully licensed and insured.",
      image: "/assets/photos/john-work.png",
      caption: "Owner on the job",
    },
    {
      heading: "Trained on the new stuff. Code first.",
      body: "Our team stays current on codes and regulations. Trained in generator design, install, and service — plus integrated controllers, microprocessors, and automated transfer gear.",
      image: "/assets/photos/generator-front.png",
      caption: "Generator systems",
    },
    {
      heading: "Let's talk about the job.",
      body: "Need electrical or generator work? Add us to your bid list. We'd be glad to meet.",
      image: "/assets/photos/lift-interior.png",
      caption: "On site",
    },
  ],
};

export const careers = {
  hero: {
    eyebrow: "Careers",
    headline: "Build power. Build a career.",
    sub: "We hire on character first. License second. If you have both we are already interested.",
  },
  why: [
    {
      title: "Real work.",
      body: "No filler. On a truck the first week.",
    },
    {
      title: "Real crew.",
      body: "Small shop. You know everyone. They know you.",
    },
    {
      title: "Real growth.",
      body: "Apprentices get classroom hours paid. Journeymen run their own jobs.",
    },
  ],
  openRoles: [
    {
      title: "Licensed Journeyman Electrician",
      type: "Full-time · East Hampton, CT",
      summary:
        "Commercial and residential. Drives a service van. CT E2 license required.",
    },
    {
      title: "Apprentice Electrician",
      type: "Full-time · East Hampton, CT",
      summary:
        "No experience needed. We get you in the program. Show up. Ask good questions. Do the work.",
    },
    {
      title: "Generator Technician",
      type: "Full-time · East Hampton, CT",
      summary:
        "Install, service, and troubleshoot standby systems. Cummins, Winco, or Kohler a plus. ATS familiarity required.",
    },
    {
      title: "Diesel Mechanic",
      type: "Full-time · East Hampton, CT",
      summary:
        "Service the truck fleet, bucket lifts, and diesel generators. Field plus shop work.",
    },
  ],
  formCta: "Send your info",
  noActiveRoles:
    "Not seeing a fit? Send your info anyway. We meet most of our hires before we are hiring.",
};

export const contact = {
  eyebrow: "Contact",
  headline: "Tell us about the job.",
  sub: "Free consultation on every quote. Responses within 48 business hours. For emergencies, call the number below.",
  formLabels: {
    name: "Your name",
    email: "Email",
    phone: "Phone",
    service: "What do you need?",
    description: "Tell us a little more",
    submit: "Send it",
  },
  serviceOptions: [
    "Generator install or service",
    "Panel upgrade",
    "Commercial / industrial",
    "Residential service",
    "New construction",
    "EV charging station",
    "Bucket truck work",
    "Parking lot or site lighting",
    "Fire alarm or CCTV",
    "Thermal imaging report",
    "Load bank generator test",
    "Emergency (24/7)",
    "Bid list / specs package",
    "Something else",
  ],
};

export const footer = {
  rights: "© Copyright 2026 | Higgins Electric, Inc. All Rights Reserved.",
  builtBy: "Site by Toaks",
};

export const privacy = {
  eyebrow: "Privacy",
  headline: "Privacy Policy.",
  sub: "Short version. We don't sell your data. We only use it to answer you.",
  sections: [
    {
      title: "Information We Collect",
      body:
        "We don't collect anything unless you choose to share it with us through the contact form. If you do, we keep your name, email, and whatever you put in the message.",
    },
    {
      title: "Cookies",
      body: "We don't use cookies.",
    },
    {
      title: "Use of Information",
      body:
        "We use what you send us to answer your question. We don't share it with anyone else unless the law requires it.",
    },
    {
      title: "Data Security",
      body:
        "We take reasonable steps to protect your info. The internet isn't perfect — no system is fully bulletproof — but we treat your data with care.",
    },
    {
      title: "Changes",
      body:
        "We can update this policy anytime. If something material changes, we'll update this page.",
    },
    {
      title: "Contact",
      body: "Questions about privacy? Use the contact form and we'll get back to you.",
    },
  ],
};
