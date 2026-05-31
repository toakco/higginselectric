# Higgins Electric — Website

Next.js 14 marketing site for **Higgins Electric** (East Hampton, CT). Built by TOAKCO.

---

## Run it

```bash
cd "Web/HigginsElectric"
npm install        # first time only
npm run dev        # http://localhost:3000
```

Other commands:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run typecheck  # tsc --noEmit
npm run lint       # next lint
```

---

## Where to make edits — the three things you'll actually do

### 1. Change copy (headlines, mission, values, story)
Open **`lib/content.ts`**. Every piece of text on the site lives here. Change a string, save, refresh.

### 2. Add / change / remove a service
Open **`lib/services.ts`**. Push a new object onto the `services` array, or edit an existing one. The home grid, the services page, the marquee, and the footer all read from this file — one edit, everything updates.

### 3. Swap a photo
Drop the new `.png` or `.jpg` into **`public/assets/photos/`**, then reference its filename from `lib/content.ts` or `lib/services.ts` (e.g. `image: "/assets/photos/your-new-file.png"`).

### Also useful
- **Brand colors**: `tailwind.config.ts` under the `higgins` namespace.
- **Reviews**: `lib/reviews.ts`. Paste from Google with attribution intact — never fabricate.
- **Real logo**: drop the SVG at `public/assets/logo/higgins-electric.svg`, then swap `components/brand/HigginsLogo.tsx` to render an `<Image>` of it instead of the placeholder primitives.
- **Contact form submissions**: currently log to the dev server console. Wire to email/CRM in `app/api/contact/route.ts`.

---

## Architecture

```
app/                  Pages (Next.js 14 app router)
  layout.tsx          Root layout — fonts, Lenis smooth scroll, custom cursor mount
  page.tsx            Home
  services/page.tsx   Services
  work/page.tsx       Work (history timeline)
  about/page.tsx      About / mission / values
  careers/page.tsx    Hiring
  contact/page.tsx    Contact / quote request
  api/contact/        Form handler stub

components/
  ui/                 Nav, Footer, SmoothScroll, CustomCursor, MagneticCTA
  brand/              HigginsLogo, LightningBolt, WireTrace, ServiceMarquee,
                      VoltageGauge, SparkBurst
  gsap/               GSAPTextReveal, GSAPFadeUp (scroll-driven animation primitives)
  sections/home/      Hero, ServicesGrid, Mission, Stats, Reviews, DualCTA

lib/
  content.ts          All site copy + business info
  services.ts         Service definitions
  reviews.ts          Curated Google reviews
  utils.ts            cn() helper

public/assets/
  photos/             Real Higgins photography (15 files)
  logo/               Drop the final SVG here
  patterns/           Reserved for branded SVG patterns
```

---

## Tech

- **Next.js 14.2** app router · **React 18** · **TypeScript 5**
- **Tailwind CSS 3** with custom Higgins palette
- **GSAP 3 + @gsap/react + ScrollTrigger** for scroll-driven animation
- **@studio-freight/lenis** for buttery smooth scroll
- **Framer Motion 11** available for component transitions
- **react-hook-form + zod** ready for form validation work
- **Anton + Inter + JetBrains Mono** via `next/font/google` (no licensing, no extra files)

---

## Brand system

| Token | Hex | Where it shows up |
|---|---|---|
| `higgins-red` | `#C8202C` | Primary CTAs, service punctuation, gauge needle |
| `higgins-yellow` | `#FFD400` | High-voltage accent — links, marquee, lightning, scroll cues |
| `higgins-black` | `#0A0A0A` | Base background |
| `higgins-graphite` | `#1A1A1A` | Section panels (alternating) |
| `higgins-concrete` | `#9A9A9A` | Secondary type, dividers |
| `higgins-bone` | `#F2EFEA` | Primary type on dark, inverted section background |

**Typography**
- Display: **Anton** — set in `vw` units for headline scale.
- Body: **Inter**.
- Mono accent: **JetBrains Mono** — index numbers, stat formatting, telemetry feel.

---

## Signature animations

- **Lightning bolt path-draw** — hero entry, GSAP-driven SVG.
- **Wire trace** — animated background polylines that scrub on scroll.
- **Service marquee** — infinite horizontal ticker of service names.
- **Voltage gauge counters** — stats animate from 0 with a yellow arc filling on scroll.
- **Magnetic CTAs** — buttons follow the cursor on hover (math.atan2 + transform).
- **Custom cursor** — red dot + bone-colored ring that scales on hover targets. Desktop only; mobile gets the system cursor.
- **Spark burst** — subtle canvas particles drifting in the Mission section.
- **GSAPTextReveal** — chars/words/lines split + stagger reveal on scroll.

---

## Deploy

**Recommended:** Vercel — `vercel deploy` from this folder. Connects to Joey's account, Higgins gets its own project.

**Alt:** static export → GoDaddy. Add `output: "export"` to `next.config.js`, then `npm run build` produces an `out/` folder you can upload via FTP.

---

## Open handoff items (need John's input before launch)

- Confirm phone number (currently `860-267-7644` from the truck photo).
- Provide real email address (currently `info@higginselectric.com` placeholder).
- Provide CT electrical license number (currently `#E1-XXXXXX` placeholder).
- Provide final logo SVG (currently typographic placeholder).
- Confirm service-area radius (currently 30 miles).
- Decide on contact form delivery (email, CRM webhook, both).
