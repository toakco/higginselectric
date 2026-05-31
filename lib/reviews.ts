export type Review = {
  name: string;
  rating: 4 | 5;
  body: string;
  source: "Google";
  date: string;
};

/**
 * Curated from the public Google reviews — verbatim or lightly trimmed for length.
 * Do not fabricate. To add a new review, paste from Google with attribution intact.
 */
export const reviews: Review[] = [
  {
    name: "Louise Breathnach",
    rating: 5,
    source: "Google",
    date: "2021",
    body: "Higgins did a great job installing a whole house generator for my elderly dad. Jerrod went above and beyond, with communication, getting work scheduled, and even checking other systems like the dehumidifier.",
  },
  {
    name: "Reed Gustafson",
    rating: 5,
    source: "Google",
    date: "2021",
    body: "John is one of the nicest people you could ever meet. Soft spoken, just a great guy and a great company.",
  },
  {
    name: "Jason Bernard",
    rating: 5,
    source: "Google",
    date: "2023",
    body: "Great place, great people, and great services.",
  },
  {
    name: "Mark Tice",
    rating: 4,
    source: "Google",
    date: "2020",
    body: "Solid work, fair pricing. The guys know what they're doing.",
  },
];
