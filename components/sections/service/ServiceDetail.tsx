import Image from "@/components/ui/Image";
import Link from "next/link";
import { GSAPTextReveal } from "@/components/gsap/GSAPTextReveal";
import { GSAPFadeUp } from "@/components/gsap/GSAPFadeUp";
import { MagneticCTA } from "@/components/ui/MagneticCTA";
import type { ServicePage } from "@/lib/service-pages";

export function ServiceDetail({ data }: { data: ServicePage }) {
  const half = Math.ceil(data.bullets.length / 2);
  const col1 = data.bullets.slice(0, half);
  const col2 = data.bullets.slice(half);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70svh] items-center overflow-hidden bg-higgins-black pt-32 pb-20 md:pt-40 md:pb-28">
        <Image
          src={data.hero}
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
            {data.eyebrow}
            <span className="inline-block h-px w-6 bg-higgins-yellow" />
          </p>
          <h1 className="mx-auto max-w-[22ch] font-display text-fluid-3xl leading-[0.9] tracking-tightest text-higgins-bone">
            <GSAPTextReveal as="span" split="words" trigger="mount">
              {data.title}
            </GSAPTextReveal>
          </h1>
        </div>
      </section>

      {/* Body */}
      <section className="bg-higgins-graphite py-20 md:py-28">
        <div className="container-edge grid gap-12 md:grid-cols-12">
          <p className="text-xs uppercase tracking-[0.4em] text-higgins-yellow md:col-span-3">
            <span className="mr-3 inline-block h-px w-10 bg-higgins-yellow align-middle" />
            What we cover
          </p>

          <div className="space-y-10 md:col-span-9">
            <GSAPFadeUp>
              <p className="text-fluid-lg leading-relaxed text-higgins-bone/95">{data.intro}</p>
            </GSAPFadeUp>

            <GSAPFadeUp delay={0.1}>
              <div className="grid gap-3 md:grid-cols-2">
                <ul className="space-y-3">
                  {col1.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-lg leading-snug text-higgins-bone/95 md:text-xl"
                    >
                      <span className="mt-3 inline-block h-px w-4 shrink-0 bg-higgins-red" />
                      {b}
                    </li>
                  ))}
                </ul>
                <ul className="space-y-3">
                  {col2.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-lg leading-snug text-higgins-bone/95 md:text-xl"
                    >
                      <span className="mt-3 inline-block h-px w-4 shrink-0 bg-higgins-red" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </GSAPFadeUp>

            <GSAPFadeUp delay={0.2}>
              <p className="text-lg leading-relaxed text-higgins-bone/85 md:text-xl">
                {data.closing}
              </p>
            </GSAPFadeUp>

            <div className="pt-2">
              <MagneticCTA href={`/contact?service=${data.slug}`} variant="primary">
                Request a quote
              </MagneticCTA>
            </div>
          </div>
        </div>
      </section>

      {/* Three feature cards */}
      <section className="bg-higgins-graphite pb-24 md:pb-32">
        <div className="container-edge">
          <div className="grid gap-8 md:grid-cols-3">
            {data.cards.map(({ title, body, Icon }, i) => (
              <GSAPFadeUp key={title} delay={i * 0.05}>
                <Link
                  href={`/contact?service=${data.slug}`}
                  className="group flex h-full flex-col items-center border border-higgins-bone/10 bg-higgins-black p-10 text-center transition-colors hover:border-higgins-yellow/40"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-higgins-bone/5 text-higgins-yellow transition-colors group-hover:bg-higgins-yellow group-hover:text-higgins-black">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl tracking-wide text-higgins-bone md:text-3xl">
                    {title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-higgins-bone/75 md:text-lg">
                    {body}
                  </p>
                </Link>
              </GSAPFadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
