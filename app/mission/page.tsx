import Image from "@/components/ui/Image";
import { home } from "@/lib/content";
import { GSAPTextReveal } from "@/components/gsap/GSAPTextReveal";

export const metadata = {
  title: "Mission · Higgins Electric",
  description: home.mission.statement,
};

export default function MissionPage() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-higgins-black pt-32 pb-24 md:pt-40 md:pb-32">
      <Image
        src="/assets/photos/job-22.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-higgins-black/70 via-higgins-black/60 to-higgins-black" />

      <div className="container-edge relative flex w-full flex-col items-center text-center">
        <p className="mb-10 inline-flex items-center justify-center gap-3 text-sm uppercase tracking-[0.45em] text-higgins-yellow md:text-base">
          <span className="inline-block h-px w-6 bg-higgins-yellow" />
          {home.mission.eyebrow}
          <span className="inline-block h-px w-6 bg-higgins-yellow" />
        </p>

        <blockquote className="mx-auto max-w-[20ch] font-display text-fluid-3xl leading-[1.02] tracking-[0.005em] text-higgins-bone md:max-w-[24ch]">
          <GSAPTextReveal as="span" split="words" stagger={0.06}>
            {home.mission.statement}
          </GSAPTextReveal>
        </blockquote>
      </div>
    </section>
  );
}
