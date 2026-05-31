import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/lib/services";
import Image from "@/components/ui/Image";
import { MagneticCTA } from "@/components/ui/MagneticCTA";
import { GSAPTextReveal } from "@/components/gsap/GSAPTextReveal";
import { GSAPFadeUp } from "@/components/gsap/GSAPFadeUp";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: `${service.name} · Higgins Electric`,
    description: service.long,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return notFound();

  return (
    <>
      <section className="bg-higgins-black pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-edge">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-6 flex items-center gap-2 text-sm uppercase tracking-[0.4em] text-higgins-yellow">
                <Link href="/services" className="transition-opacity hover:opacity-70">
                  Services
                </Link>
                <span className="inline-block h-px w-4 bg-higgins-yellow/50" />
                <span className="text-higgins-concrete">{service.name}</span>
              </p>
              <h1 className="font-display text-fluid-3xl leading-[0.9] tracking-tightest text-higgins-bone">
                <GSAPTextReveal as="span" split="words" trigger="mount">
                  {service.name}
                </GSAPTextReveal>
              </h1>
              <p className="mt-6 max-w-xl text-fluid-lg leading-relaxed text-higgins-concrete">
                {service.long}
              </p>
              <div className="mt-10">
                <MagneticCTA href={`/contact?service=${service.slug}`} variant="primary">
                  Get a quote
                </MagneticCTA>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden bg-higgins-graphite">
              <Image
                src={service.image}
                alt={service.name}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-contain p-6"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-higgins-graphite py-20 md:py-28">
        <div className="container-edge">
          <p className="mb-10 text-xs uppercase tracking-[0.4em] text-higgins-yellow">
            <span className="mr-3 inline-block h-px w-10 bg-higgins-yellow align-middle" />
            What&apos;s included
          </p>
          <ul className="grid gap-6 md:grid-cols-2">
            {service.bullets.map((b, i) => (
              <GSAPFadeUp key={b} delay={i * 0.05}>
                <li className="flex items-start gap-4 border-t border-higgins-bone/15 pt-5">
                  <span className="mt-2 block h-px w-6 shrink-0 bg-higgins-red" />
                  <span className="text-lg leading-snug text-higgins-bone/90 md:text-xl">{b}</span>
                </li>
              </GSAPFadeUp>
            ))}
          </ul>
          <div className="mt-14">
            <MagneticCTA href={`/contact?service=${service.slug}`} variant="primary">
              Request this service
            </MagneticCTA>
          </div>
        </div>
      </section>
    </>
  );
}
