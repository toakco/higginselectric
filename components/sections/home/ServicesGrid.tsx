import Image from "@/components/ui/Image";
import Link from "next/link";
import { services } from "@/lib/services";
import { GSAPFadeUp } from "@/components/gsap/GSAPFadeUp";
import { GSAPTextReveal } from "@/components/gsap/GSAPTextReveal";
import { ArrowUpRight } from "lucide-react";

export function ServicesGrid() {
  return (
    <section className="relative bg-higgins-black py-24 md:py-36">
      <div className="container-edge">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-higgins-yellow">
              <span className="mr-3 inline-block h-px w-10 bg-higgins-yellow align-middle" />
              What we do
            </p>
            <h2 className="font-display text-fluid-3xl leading-[0.9] tracking-tightest text-higgins-bone">
              <GSAPTextReveal as="span" split="words" className="block">
                Sixteen service lines.
              </GSAPTextReveal>
              <GSAPTextReveal
                as="span"
                split="words"
                delay={0.2}
                className="block text-higgins-red"
              >
                One crew. One number. One promise.
              </GSAPTextReveal>
            </h2>
          </div>
          <p className="text-fluid-lg leading-relaxed text-higgins-bone/85 md:col-span-6 md:col-start-7 md:self-end">
            Every service below runs through the same East Hampton shop. Same trucks. Same crew.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-[1px] bg-higgins-bone/10 md:mt-24 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s, i) => (
            <GSAPFadeUp key={s.slug} delay={i * 0.05} className="contents">
              <Link
                href={`/services#${s.slug}`}
                data-cursor-hover
                className="group relative flex flex-col justify-between bg-higgins-black p-8 transition-colors hover:bg-higgins-graphite md:p-10"
              >
                <div className="relative aspect-[5/3] overflow-hidden bg-higgins-graphite">
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-higgins-black/40 to-transparent" />
                  <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.3em] text-higgins-yellow">
                    {String(i + 1).padStart(2, "0")} / {services.length}
                  </span>
                </div>

                <div className="mt-8 flex items-start justify-between gap-6">
                  <div>
                    <h3 className="font-display text-2xl leading-tight tracking-wide text-higgins-bone md:text-3xl">
                      {s.name}
                    </h3>
                    <p className="mt-3 max-w-[36ch] text-base leading-relaxed text-higgins-concrete md:text-lg">
                      {s.short}
                    </p>
                  </div>
                  <span className="mt-1 grid h-10 w-10 shrink-0 place-items-center border border-higgins-bone/30 text-higgins-bone transition-all duration-300 group-hover:border-higgins-yellow group-hover:bg-higgins-yellow group-hover:text-higgins-black">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>

                <span className="absolute inset-x-0 top-0 h-[2px] bg-higgins-red opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            </GSAPFadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
