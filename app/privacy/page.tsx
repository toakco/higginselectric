import Image from "@/components/ui/Image";
import Link from "next/link";
import { privacy } from "@/lib/content";
import { GSAPTextReveal } from "@/components/gsap/GSAPTextReveal";
import { GSAPFadeUp } from "@/components/gsap/GSAPFadeUp";

export const metadata = {
  title: "Privacy Policy · Higgins Electric",
  description:
    "How Higgins Electric handles the information you share with us through the website.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="relative flex min-h-[60svh] items-center overflow-hidden bg-higgins-black pt-32 pb-20 md:pt-40 md:pb-28">
        <Image
          src="/assets/photos/job-09.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-higgins-black/70 via-higgins-black/60 to-higgins-black" />
        <div className="container-edge relative flex w-full flex-col items-center text-center">
          <p className="mb-8 inline-flex items-center justify-center gap-3 text-sm uppercase tracking-[0.45em] text-higgins-yellow md:text-base">
            <span className="inline-block h-px w-6 bg-higgins-yellow" />
            {privacy.eyebrow}
            <span className="inline-block h-px w-6 bg-higgins-yellow" />
          </p>
          <h1 className="mx-auto max-w-[18ch] font-display text-fluid-3xl leading-[0.9] tracking-tightest text-higgins-bone">
            <GSAPTextReveal as="span" split="words" trigger="mount">
              {privacy.headline}
            </GSAPTextReveal>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-fluid-base text-higgins-concrete">
            {privacy.sub}
          </p>
        </div>
      </section>

      <section className="bg-higgins-graphite py-20 md:py-28">
        <div className="container-edge grid gap-12 md:grid-cols-12">
          <p className="text-xs uppercase tracking-[0.4em] text-higgins-yellow md:col-span-3">
            <span className="mr-3 inline-block h-px w-10 bg-higgins-yellow align-middle" />
            The details
          </p>
          <div className="space-y-10 md:col-span-9">
            {privacy.sections.map((s, i) => (
              <GSAPFadeUp key={s.title} delay={i * 0.04}>
                <article>
                  <h2 className="font-display text-2xl tracking-wide text-higgins-bone md:text-3xl">
                    {s.title}
                  </h2>
                  <p className="mt-3 text-lg leading-relaxed text-higgins-bone/85 md:text-xl">
                    {s.body}
                  </p>
                </article>
              </GSAPFadeUp>
            ))}

            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-higgins-red bg-higgins-red px-6 py-4 text-sm uppercase tracking-[0.25em] text-higgins-bone transition-colors hover:bg-transparent"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
