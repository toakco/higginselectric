import Image from "@/components/ui/Image";
import { about, home } from "@/lib/content";
import { GSAPTextReveal } from "@/components/gsap/GSAPTextReveal";
import { GSAPFadeUp } from "@/components/gsap/GSAPFadeUp";
import { MagneticCTA } from "@/components/ui/MagneticCTA";

export const metadata = {
  title: "About · Higgins Electric",
  description:
    "Connecticut-based electrical contractor. Over thirty years serving the surrounding area.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
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
          <p className="mb-10 inline-flex items-center justify-center gap-3 text-sm uppercase tracking-[0.45em] text-higgins-yellow md:text-base">
            <span className="inline-block h-px w-6 bg-higgins-yellow" />
            {about.eyebrow}
            <span className="inline-block h-px w-6 bg-higgins-yellow" />
          </p>

          <blockquote className="mx-auto max-w-[22ch] font-display text-fluid-3xl leading-[0.95] tracking-tightest text-higgins-bone">
            <GSAPTextReveal as="span" split="words" stagger={0.05} trigger="mount">
              {home.mission.statement}
            </GSAPTextReveal>
          </blockquote>
        </div>
      </section>

      {/* Story — alternating photo + paragraph blocks */}
      <section className="bg-higgins-graphite">
        {about.story.map((block, i) => {
          const reverse = i % 2 === 1;
          return (
            <div
              key={block.heading}
              className="border-b border-higgins-bone/5 py-20 last:border-b-0 md:py-28"
            >
              <div className="container-edge grid items-center gap-12 md:grid-cols-12">
                {/* Photo */}
                <div className={`md:col-span-6 ${reverse ? "md:order-2" : ""}`}>
                  <GSAPFadeUp delay={0.05}>
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-higgins-black">
                      <Image
                        src={block.image}
                        alt={block.caption}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                      <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 bg-higgins-black/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-higgins-yellow backdrop-blur">
                        <span className="h-1 w-1 rounded-full bg-higgins-red" />
                        {block.caption}
                      </span>
                    </div>
                  </GSAPFadeUp>
                </div>

                {/* Copy */}
                <div className={`md:col-span-6 ${reverse ? "md:order-1" : ""}`}>
                  <GSAPFadeUp delay={0.1}>
                    <p className="mb-4 inline-flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.35em] text-higgins-yellow md:text-xs">
                      <span className="inline-block h-px w-8 bg-higgins-yellow" />
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h2 className="font-display text-3xl leading-tight tracking-wide text-higgins-bone md:text-4xl">
                      {block.heading}
                    </h2>
                    <p className="mt-5 text-lg leading-relaxed text-higgins-bone/85 md:text-xl">
                      {block.body}
                    </p>
                  </GSAPFadeUp>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Values */}
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
                  <p className="mt-3 text-lg leading-relaxed text-higgins-black/80 md:text-xl">
                    {v.body}
                  </p>
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
