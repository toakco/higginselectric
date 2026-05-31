import {
  Building2,
  Truck,
  Lightbulb,
  Zap,
  Wrench,
  Home,
  ClipboardList,
  PlugZap,
  type LucideIcon,
} from "lucide-react";

export type ServiceCard = {
  title: string;
  body: string;
  Icon: LucideIcon;
};

export type ServicePage = {
  slug: string;
  eyebrow: string;
  title: string;
  hero: string;
  intro: string;
  bullets: string[];
  closing: string;
  cards: ServiceCard[];
};

export const servicePages: Record<string, ServicePage> = {
  "commercial-industrial": {
    slug: "commercial-industrial",
    eyebrow: "Commercial & Industrial",
    title: "Commercial & Industrial Services",
    hero: "/assets/photos/piping.png",
    intro:
      "Reliable power keeps your business running. Our certified electricians handle the full scope — design, install, and service — for commercial and industrial sites.",
    bullets: [
      "Design, install, and retrofit",
      "Maintenance and repair",
      "Upgrades and lighting",
      "System testing and troubleshooting",
      "Energy-efficient lighting",
      "Generator install and service",
      "Emergency electrical service",
      "Trenching and excavation",
      "Thermal imaging reports",
      "Fire alarm and CCTV systems",
      "Aerial work to 100 ft",
      "Load bank generator testing",
    ],
    closing:
      "We work around your schedule to keep downtime low. On time. On budget. Code correct the first time.",
    cards: [
      {
        title: "New Construction",
        body: "Full electrical for new commercial builds. Plan to power-on.",
        Icon: Building2,
      },
      {
        title: "Bucket Truck Work",
        body: "Aerial work, exterior lighting, and high-lift jobs handled in-house.",
        Icon: Truck,
      },
      {
        title: "Emergency Lighting",
        body: "Code-compliant emergency lighting designed, installed, and maintained.",
        Icon: Lightbulb,
      },
    ],
  },

  "commercial-generators": {
    slug: "commercial-generators",
    eyebrow: "Commercial Generators",
    title: "Commercial Generators — Sales & Service",
    hero: "/assets/photos/generator-front.png",
    intro:
      "Your business runs on uninterrupted power. We sell, install, and service commercial-grade generators sized to your load.",
    bullets: [
      "Generator sales — small business to industrial",
      "Right-sized for your load and fuel type",
      "Install, repair, and maintenance",
      "Preventative service plans",
      "24/7 emergency response",
      "Code-correct transfer switches",
    ],
    closing:
      "Skilled techs. Latest tools. Personal service when you need answers fast.",
    cards: [
      {
        title: "Generators",
        body: "Commercial sales and install. Reliable power for any operation.",
        Icon: Zap,
      },
      {
        title: "Emergency Services",
        body: "24/7 generator install and repair. We answer the phone.",
        Icon: Truck,
      },
      {
        title: "Maintenance Contracts",
        body: "Scheduled service that keeps your standby system ready.",
        Icon: Wrench,
      },
    ],
  },

  "residential-generators": {
    slug: "residential-generators",
    eyebrow: "Residential Generators",
    title: "Residential Generators — Sales & Service",
    hero: "/assets/photos/generator-white.png",
    intro:
      "Power outages don't have to disrupt your home. We sell, install, and service residential generators sized for your house.",
    bullets: [
      "Generator sales — occasional or full standby",
      "Right-sized for your home and fuel type",
      "Install, repair, and maintenance",
      "Preventative service plans",
      "24/7 emergency response",
      "Whole-home transfer switches",
    ],
    closing:
      "Safety and quality first. Our team is available 24/7 so your home stays protected.",
    cards: [
      {
        title: "Generators",
        body: "Residential sales and install. Keep your home powered.",
        Icon: Zap,
      },
      {
        title: "Emergencies",
        body: "24/7 service for unexpected outages. We show up.",
        Icon: Truck,
      },
      {
        title: "Service Contracts",
        body: "Reliable maintenance so your generator is ready when you need it.",
        Icon: Wrench,
      },
    ],
  },

  residential: {
    slug: "residential",
    eyebrow: "Residential",
    title: "Residential Services",
    hero: "/assets/photos/wiring.png",
    intro:
      "Your home's electrical needs to be safe and reliable. Our licensed electricians cover repairs, installs, and full upgrades.",
    bullets: [
      "Panel upgrades",
      "Wiring and rewiring",
      "Lighting install and repair",
      "Circuit breaker replacement",
      "GFCI outlet install",
      "Smoke detector install and maintenance",
      "Surge protection",
      "Electrical inspections",
    ],
    closing:
      "On time. Clean work. Same crew that runs the local hospital runs your house.",
    cards: [
      {
        title: "New Construction",
        body: "Full residential electrical for new builds and additions.",
        Icon: Home,
      },
      {
        title: "Renovations",
        body: "Kitchen, bath, and full remodels. Wired right, finished clean.",
        Icon: ClipboardList,
      },
      {
        title: "Updates",
        body: "Modern panels, EV chargers, smart switches, and energy upgrades.",
        Icon: PlugZap,
      },
    ],
  },
};

export const servicePageSlugs = Object.keys(servicePages);
