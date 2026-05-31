import Image from "@/components/ui/Image";
import { business, contact } from "@/lib/content";
import { GSAPTextReveal } from "@/components/gsap/GSAPTextReveal";
import { GSAPFadeUp } from "@/components/gsap/GSAPFadeUp";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata = {
  title: "Contact · Higgins Electric",
  description:
    "Tell us about the job. Quote responses within 48 business hours. Emergency calls answered 24/7.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-higgins-black pt-32 pb-24 md:pt-40 md:pb-32">
        <Image
          src="/assets/photos/job-16.jpg"
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
            {contact.eyebrow}
            <span className="inline-block h-px w-6 bg-higgins-yellow" />
          </p>
          <h1 className="mx-auto max-w-[16ch] font-display text-fluid-3xl leading-[0.9] tracking-tightest text-higgins-bone">
            <GSAPTextReveal as="span" split="words" trigger="mount">
              {contact.headline}
            </GSAPTextReveal>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-fluid-base text-higgins-concrete">{contact.sub}</p>
        </div>
      </section>

      <section className="bg-higgins-graphite py-20 md:py-28">
        <div className="container-edge grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <GSAPFadeUp>
              <div className="space-y-10">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-higgins-yellow">
                    Call
                  </p>
                  <a
                    href={`tel:${business.phone.replace(/-/g, "")}`}
                    className="mt-2 block font-display text-4xl text-higgins-bone hover:text-higgins-yellow md:text-5xl"
                  >
                    {business.phone}
                  </a>
                </div>

                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-higgins-yellow">
                    Email
                  </p>
                  <a
                    href={`mailto:${business.email}`}
                    className="mt-2 block text-2xl text-higgins-bone hover:text-higgins-yellow"
                  >
                    {business.email}
                  </a>
                </div>

                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-higgins-yellow">
                    Shop
                  </p>
                  <p className="mt-2 text-lg leading-relaxed text-higgins-bone md:text-xl">
                    {business.address.street}
                    <br />
                    {business.address.city}, {business.address.state} {business.address.zip}
                  </p>
                </div>

                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-higgins-yellow">
                    Hours
                  </p>
                  <p className="mt-2 text-lg leading-relaxed text-higgins-bone md:text-xl">
                    {business.hours}
                  </p>
                </div>

              </div>
            </GSAPFadeUp>
          </div>

          <div className="md:col-span-7">
            <GSAPFadeUp delay={0.1}>
              <ContactForm />
            </GSAPFadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
