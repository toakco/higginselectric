import { Hero } from "@/components/sections/home/Hero";
import { Stats } from "@/components/sections/home/Stats";
import { Reviews } from "@/components/sections/home/Reviews";
import { DualCTA } from "@/components/sections/home/DualCTA";
import { ServiceMarquee } from "@/components/brand/ServiceMarquee";
import { serviceMarquee } from "@/lib/services";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceMarquee items={serviceMarquee} accent="bone" />
      <Stats />
      <ServiceMarquee items={serviceMarquee} accent="yellow" direction="right" />
      <Reviews />
      <DualCTA />
    </>
  );
}
