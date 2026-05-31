import { home } from "@/lib/content";
import { GSAPTextReveal } from "@/components/gsap/GSAPTextReveal";
import { GSAPFadeUp } from "@/components/gsap/GSAPFadeUp";

export function Capabilities() {
  return (
    <section className="bg-higgins-black py-24 md:py-32">
      <div className="container-edge">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-higgins-yellow">
              <span className="mr-3 inline-block h-px w-10 bg-higgins-yellow align-middle" />
              {home.capabilities.eyebrow}
            </p>
            <h2 className="font-display text-fluid-2xl leading-[0.95] tracking-tightest text-higgins-bone">
              <GSAPTextReveal as="span" split="words">
                {home.capabilities.headline}
              </GSAPTextReveal>
            </h2>
          </div>

          <ul className="md:col-span-7 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
            {home.capabilities.items.map((item, i) => (
              <GSAPFadeUp key={item} delay={i * 0.03}>
                <li className="flex items-start gap-3 border-b border-higgins-bone/10 py-5 text-lg leading-relaxed text-higgins-bone md:text-xl">
                  <span className="mt-2 inline-block h-2 w-2 flex-shrink-0 bg-higgins-yellow" />
                  <span>{item}</span>
                </li>
              </GSAPFadeUp>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
