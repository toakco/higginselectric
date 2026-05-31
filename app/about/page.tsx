import Image from "@/components/ui/Image";
import { about, home } from "@/lib/content";
import { GSAPTextReveal } from "@/components/gsap/GSAPTextReveal";
import { GSAPFadeUp } from "@/components/gsap/GSAPFadeUp";
import { MagneticCTA } from "@/components/ui/MagneticCTA";

export const metadata = {
  title: "About · Higgins Electric",
  description:
    "John Higgins started Higgins Electric in 1982. Same shop. Same number. Same expectations four decades later.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-higgins-black pt-32 pb-24 md:pt-40 md:pb-32">
        <Image
          src="/assets/photos/facility-gate.jpg"
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
            {about.eyebrow}
            <span className="inline-block h-px w-6 bg-higgins-yellow" />
          </p>
          <h1 className="mx-auto max-w-[20ch] font-display text-fluid-3xl leading-[0.9] tracking-tightest text-higgins-bone">
            <GSAPTextReveal as="span" split="words" trigger="mount">
              {about.headline}
            </GSAPTextReveal>
          </h1>
        </div>
      </section>

      <section className="bg-higgins-graphite py-24 md:py-36">
        <div className="container-edge grid gap-10 md:grid-cols-12">
          <p className="text-xs uppercase tracking-[0.4em] text-higgins-yellow md:col-span-3">
            <span className="mr-3 inline-block h-px w-10 bg-higgins-yellow align-middle" />
            The story
          </p>
          <div className="space-y-8 md:col-span-9">
            {about.story.map((p, i) => (
              <GSAPFadeUp key={i} delay={i * 0.05}>
                <p className="text-fluid-lg leading-relaxed text-higgins-bone/95">{p}</p>
              </GSAPFadeUp>
            ))}
          </div>
        </div>
      </section>

      <section
        id="mission"
        className="relative overflow-hidden border-y border-higgins-bone/10 bg-higgins-black py-32 md:py-48"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent 0 64px, rgba(255,212,0,0.6) 64px 65px)",
          }}
        />
        <div className="container-edge relative grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.4em] text-higgins-yellow">
              <span className="mr-3 inline-block h-px w-10 bg-higgins-yellow align-middle" />
              {home.mission.eyebrow}
            </p>
            <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.35em] text-higgins-concrete">
              What we exist to do
            </p>
          </div>

          <div className="md:col-span-8">
            <blockquote className="font-display text-fluid-3xl leading-[0.95] tracking-tightest text-higgins-bone">
              <GSAPTextReveal as="span" split="words" stagger={0.05}>
                {home.mission.statement}
              </GSAPTextReveal>
            </blockquote>

            <GSAPFadeUp delay={0.2}>
              <p className="mt-10 max-w-xl text-lg leading-relaxed text-higgins-concrete md:text-xl">
                We want the power to work so well you forget we were there.
              </p>
            </GSAPFadeUp>
          </div>
        </div>
      </section>

      <section className="bg-higgins-bone py-20 text-higgins-black md:py-28">
        <div className="container-edge">
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-higgins-red">
            <span className="mr-3 inline-block h-px w-10 bg-higgins-red align-middle" />
            {home.values.eyebrow}
          </p>
          <div className="grid gap-10 md:grid-cols-3">
            {home.values.items.map((v, i) => (
              <GSAPFadeUp key={v.title} delay={i * 0.05}>
                <div className="border-t border-higgins-black/15 pt-6">
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-higgins-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-3xl tracking-wide">{v.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-higgins-black/80 md:text-xl">{v.body}</p>
                </div>
              </GSAPFadeUp>
            ))}
          </div>
          <div className="mt-16">
            <MagneticCTA href="/contact" variant="primary">
              Start a project
            </MagneticCTA>
          </div>
        </div>
      </section>
    </>
  );
}
