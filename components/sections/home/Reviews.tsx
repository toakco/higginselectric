import Image from "@/components/ui/Image";
import { reviews } from "@/lib/reviews";
import { GSAPFadeUp } from "@/components/gsap/GSAPFadeUp";
import { GSAPTextReveal } from "@/components/gsap/GSAPTextReveal";
import { Star } from "lucide-react";

export function Reviews() {
  return (
    <section className="relative bg-higgins-bone py-24 text-higgins-black md:py-36">
      <div className="container-edge">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-higgins-red">
              <span className="mr-3 inline-block h-px w-10 bg-higgins-red align-middle" />
              From the neighbors
            </p>
            <h2 className="font-display text-fluid-3xl leading-[0.9] tracking-tightest">
              <GSAPTextReveal as="span" split="words">
                Built right.
              </GSAPTextReveal>
              <br />
              <GSAPTextReveal as="span" split="words" delay={0.15} className="text-higgins-red">
                Same expectations.
              </GSAPTextReveal>
            </h2>

            <div className="mt-10 grid grid-cols-2 gap-3 md:mt-12">
              <GSAPFadeUp>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/assets/photos/job-25.jpg"
                    alt="Higgins crew on a job"
                    fill
                    sizes="(min-width: 768px) 20vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </GSAPFadeUp>
              <GSAPFadeUp delay={0.1}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/assets/photos/job-30.jpg"
                    alt="Higgins Electric on site"
                    fill
                    sizes="(min-width: 768px) 20vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </GSAPFadeUp>
            </div>
          </div>

          <div className="grid gap-6 md:col-span-7 md:grid-cols-2">
            {reviews.map((r, i) => (
              <GSAPFadeUp key={r.name} delay={i * 0.08}>
                <article className="flex h-full flex-col gap-4 border border-higgins-black/10 bg-white p-6 md:p-8">
                  <div className="flex items-center gap-1 text-higgins-red">
                    {Array.from({ length: r.rating }).map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg leading-relaxed text-higgins-black/85 md:text-xl">
                    &ldquo;{r.body}&rdquo;
                  </p>
                  <div className="mt-auto flex items-center justify-between text-sm uppercase tracking-widest text-higgins-black/60">
                    <span>{r.name}</span>
                    <span>{r.source} · {r.date}</span>
                  </div>
                </article>
              </GSAPFadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
