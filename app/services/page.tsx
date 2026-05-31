import Image from "@/components/ui/Image";
import { services } from "@/lib/services";
import { GSAPTextReveal } from "@/components/gsap/GSAPTextReveal";
import { ServiceMarquee } from "@/components/brand/ServiceMarquee";
import { serviceMarquee } from "@/lib/services";
import { ServiceHoverCard } from "@/components/ui/ServiceHoverCard";

export const metadata = {
  title: "Services · Higgins Electric",
  description:
    "Commercial, industrial, residential, generators, high lift, panel upgrades, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-higgins-black pt-32 pb-24 md:pt-40 md:pb-32">
        <Image
          src="/assets/photos/job-12.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-higgins-black/70 via-higgins-black/60 to-higgins-black" />
        <div className="container-edge relative flex w-full flex-col items-center text-center">
          <p className="mb-8 inline-flex items-center justify-center gap-3 text-sm uppercase tracking-[0.45em] text-higgins-yellow md:text-base">
            <span className="inline-block h-px w-6 bg-higgins-yellow" />
            Services
            <span className="inline-block h-px w-6 bg-higgins-yellow" />
          </p>
          <h1 className="mx-auto max-w-[18ch] font-display text-fluid-3xl leading-[0.9] tracking-tightest text-higgins-bone">
            <GSAPTextReveal as="span" split="words" trigger="mount">
              Every electrical need.
            </GSAPTextReveal>
            <GSAPTextReveal
              as="span"
              split="words"
              trigger="mount"
              delay={0.2}
              className="block text-higgins-red"
            >
              One crew.
            </GSAPTextReveal>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-fluid-lg text-higgins-concrete">
            Hover any card to see what we cover. Tap on mobile.
          </p>
        </div>
      </section>

      <ServiceMarquee items={serviceMarquee} accent="yellow" />

      <section className="bg-higgins-black py-20 md:py-28">
        <div className="container-edge">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceHoverCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
