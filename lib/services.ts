export type Service = {
  slug: string;
  name: string;
  short: string;
  long: string;
  bullets: string[];
  image: string;
  href?: string;
};

export const services: Service[] = [
  {
    slug: "commercial-industrial",
    name: "Commercial & Industrial",
    short:
      "Service contracts, new construction, factory floor work, retail buildouts.",
    long:
      "Reliable electricity keeps your business open. We work flexible hours around your shift schedule.",
    bullets: [
      "Design, install, and retrofit",
      "Emergency, fire alarm, and CCTV",
      "Thermal imaging reports",
      "Bid list welcome",
    ],
    image: "/assets/photos/piping.png",
  },
  {
    slug: "residential",
    name: "Residential",
    short:
      "Service calls, panel upgrades, lighting, EV chargers, kitchen and bath remodels.",
    long:
      "Minor repair or major install. Same crew that works the local hospital works your house.",
    bullets: [
      "Panel upgrades 100A and up",
      "Wiring, lighting, and outlets",
      "EV chargers and surge protection",
      "Free consultations",
    ],
    image: "/assets/photos/wiring.png",
  },
  {
    slug: "generators",
    name: "Generators",
    short:
      "Cummins, Winco, and Kohler. Whole home to commercial standby. Sales and service.",
    long:
      "Three brands. Every size. Full install, service, and 24/7 emergency response.",
    bullets: [
      "Cummins, Winco, Kohler installer",
      "Whole home and commercial standby",
      "Transfer switches and ATS",
      "24/7 emergency service",
    ],
    image: "/assets/photos/generator-white.png",
  },
  {
    slug: "high-lift",
    name: "High Lift & Aerial",
    short:
      "Bucket trucks. Aerial reach to 100 feet. Parking lots, athletic fields, exterior service.",
    long:
      "We own the lift, the truck, and the certifications. The work happens on our schedule.",
    bullets: [
      "Aerial work to 100 feet",
      "Parking lot and athletic field lighting",
      "Storm damage repairs",
      "Bucket truck rentals with operator",
    ],
    image: "/assets/photos/workers-lift.png",
  },
  {
    slug: "panel-upgrades",
    name: "Panel & Service Upgrades",
    short:
      "Old fuse box. Undersized service. We size, source, and replace. Often same day.",
    long:
      "Panel work is where most home electrical problems start. We size right the first time.",
    bullets: [
      "100A and 200A residential upgrades",
      "Commercial and industrial upgrades",
      "Subpanels and feeder runs",
      "Generator ready panels",
    ],
    image: "/assets/photos/splitter.png",
  },
  {
    slug: "switches-power",
    name: "Switches & Power",
    short:
      "Transfer switches, disconnects, distribution, EV chargers.",
    long:
      "Distribution separates a good electrician from a great one. Sized and placed correctly.",
    bullets: [
      "Automatic and emergency transfer switches",
      "Service disconnects and distribution",
      "EV charging stations",
      "Inspection ready documentation",
    ],
    image: "/assets/photos/job-08.jpg",
  },
  {
    slug: "crane-work",
    name: "Crane Work",
    short:
      "Crane support for generator drops, rooftop equipment, signs, and structural picks.",
    long:
      "Jobs that need a lift bigger than a bucket truck. Generator pads. Rooftops. Sign installs.",
    bullets: [
      "Generator and equipment lifts",
      "Rooftop unit placement",
      "Sign and pole installation",
      "Structural picks and rigging",
    ],
    image: "/assets/photos/job-03.jpg",
  },
  {
    slug: "excavation",
    name: "Excavation",
    short:
      "Trenching, conduit runs, and site excavation for service entrances.",
    long:
      "We dig the trench, set the conduit, and backfill the right way. Locates ordered.",
    bullets: [
      "Service entrance trenching",
      "Underground feeder runs",
      "Transformer and equipment pads",
      "Locates, backfill, and restoration",
    ],
    image: "/assets/photos/job-06.jpg",
  },
  {
    slug: "concrete",
    name: "Concrete",
    short:
      "Pads, footings, and bollards for generators, transformers, and site equipment.",
    long:
      "Concrete that supports the electrical install. Formed, poured, finished, and cured.",
    bullets: [
      "Generator and transformer pads",
      "Light pole footings",
      "Bollard installation",
      "Equipment pads to spec",
    ],
    image: "/assets/photos/job-15.jpg",
  },
  {
    slug: "steel-fab",
    name: "Steel Fabrication",
    short:
      "Custom steel for mounts, brackets, supports, enclosures, and structural mods.",
    long:
      "When the catalog part does not exist, we build it. Field mods when the site fights the plan.",
    bullets: [
      "Custom mounts and brackets",
      "Rooftop structural supports",
      "Conduit racks and trapeze hangers",
      "Welded enclosures and platforms",
    ],
    image: "/assets/photos/air-filter.png",
  },
  {
    slug: "batteries",
    name: "Interstate Batteries",
    short:
      "Authorized Interstate dealer. Standby, automotive, deep cycle, and equipment batteries.",
    long:
      "Authorized Interstate Battery dealer. Pickup at the shop or delivered with service.",
    bullets: [
      "Standby and generator starting batteries",
      "Automotive and truck batteries",
      "Deep cycle and marine batteries",
      "Testing and replacement",
    ],
    image: "/assets/photos/job-33.jpg",
  },
  {
    slug: "siren-repair",
    name: "Siren Repair",
    short:
      "Service and repair on municipal warning sirens and emergency notification systems.",
    long:
      "Municipal warning sirens, plant evacuation sirens, and emergency notification. Repair and test.",
    bullets: [
      "Municipal warning siren repair",
      "Plant evacuation siren service",
      "Scheduled testing and maintenance",
      "Replacement and upgrade",
    ],
    image: "/assets/photos/job-27.jpg",
  },
  {
    slug: "transportation",
    name: "Transportation & Hauling",
    short:
      "Equipment hauling, jobsite delivery, and heavy load transport.",
    long:
      "We move our equipment. We can move yours too. CDL drivers. Proper rigging. Insured.",
    bullets: [
      "Generator and equipment delivery",
      "Heavy material hauling",
      "Jobsite to jobsite moves",
      "Insured and CDL staffed",
    ],
    image: "/assets/photos/job-21.jpg",
  },
  {
    slug: "fencing",
    name: "Fencing",
    short:
      "Security fencing, generator enclosures, and site perimeter work.",
    long:
      "Generator enclosures, equipment yards, security perimeter, and code required fencing.",
    bullets: [
      "Generator and equipment enclosures",
      "Site security perimeter",
      "Transformer and switchgear fencing",
      "Gates and access hardware",
    ],
    image: "/assets/photos/fence.jpg",
  },
  {
    slug: "plc-controls",
    name: "PLC Controls",
    short:
      "Power Logic Controls. Design, install, programming, and troubleshooting.",
    long:
      "PLC for industrial process and building automation. New installs and retrofits.",
    bullets: [
      "PLC design and install",
      "Industrial process and building automation",
      "Programming and HMI configuration",
      "Troubleshooting and retrofit",
    ],
    image: "/assets/photos/job-09.jpg",
  },
  {
    slug: "utility-poles",
    name: "Utility Poles",
    short:
      "Pole sets, replacements, transfers, and overhead line work.",
    long:
      "We set poles, transfer utilities, replace damaged poles after storms, and run overhead service.",
    bullets: [
      "New pole sets",
      "Pole replacement and transfer",
      "Overhead service runs",
      "Storm damage replacement",
    ],
    image: "/assets/photos/job-26.jpg",
  },
];

export const serviceMarquee = services.map((s) => s.name.toUpperCase());
