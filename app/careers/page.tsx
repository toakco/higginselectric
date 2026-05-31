import Image from "@/components/ui/Image";
import { careers } from "@/lib/content";
import { GSAPTextReveal } from "@/components/gsap/GSAPTextReveal";
import { GSAPFadeUp } from "@/components/gsap/GSAPFadeUp";
import { MagneticCTA } from "@/components/ui/MagneticCTA";
import { getFormAction } from "@/lib/form";

export const metadata = {
  title: "Careers · Higgins Electric",
  description: "Build power. Build a career. We hire on character first, license second.",
};

export default function CareersPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-higgins-black pt-40 pb-20 md:pt-48 md:pb-32">
        <Image
          src="/assets/photos/job-29.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-higgins-black/80 via-higgins-black/70 to-higgins-black" />
        <div className="container-edge relative">
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-higgins-yellow">
            <span className="mr-3 inline-block h-px w-10 bg-higgins-yellow align-middle" />
            {careers.hero.eyebrow}
          </p>
          <h1 className="max-w-[16ch] font-display text-fluid-3xl leading-[0.9] tracking-tightest text-higgins-bone">
            <GSAPTextReveal as="span" split="words" trigger="mount">
              {careers.hero.headline}
            </GSAPTextReveal>
          </h1>
          <p className="mt-8 max-w-xl text-fluid-base text-higgins-concrete">{careers.hero.sub}</p>
        </div>
      </section>

      <section className="bg-higgins-black py-24 md:py-32">
        <div className="container-edge">
          <p className="mb-12 text-xs uppercase tracking-[0.4em] text-higgins-yellow">
            <span className="mr-3 inline-block h-px w-10 bg-higgins-yellow align-middle" />
            Why here
          </p>
          <div className="grid gap-10 md:grid-cols-3">
            {careers.why.map((v, i) => (
              <GSAPFadeUp key={v.title} delay={i * 0.05}>
                <div className="border-t border-higgins-bone/20 pt-6">
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-higgins-red">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-3xl tracking-wide text-higgins-bone">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-lg leading-relaxed text-higgins-concrete md:text-xl">{v.body}</p>
                </div>
              </GSAPFadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-higgins-graphite py-24 md:py-32">
        <div className="container-edge">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-fluid-2xl tracking-tightest text-higgins-bone">
              <GSAPTextReveal as="span" split="words">
                Open roles
              </GSAPTextReveal>
            </h2>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-higgins-concrete">
              {careers.openRoles.length} listed
            </span>
          </div>

          <ul className="divide-y divide-higgins-bone/10 border-y border-higgins-bone/15">
            {careers.openRoles.map((role, i) => (
              <GSAPFadeUp key={role.title} delay={i * 0.04}>
                <li className="group grid grid-cols-12 items-start gap-6 py-8 transition-colors hover:bg-higgins-black/40">
                  <div className="col-span-12 md:col-span-5">
                    <h3 className="font-display text-2xl leading-tight tracking-wide text-higgins-bone md:text-3xl">
                      {role.title}
                    </h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.25em] text-higgins-yellow">
                      {role.type}
                    </p>
                  </div>
                  <p className="col-span-12 text-lg leading-relaxed text-higgins-concrete md:col-span-5 md:text-xl">
                    {role.summary}
                  </p>
                  <div className="col-span-12 flex md:col-span-2 md:justify-end">
                    <MagneticCTA href="#apply" variant="outline">
                      Apply
                    </MagneticCTA>
                  </div>
                </li>
              </GSAPFadeUp>
            ))}
          </ul>

          <p className="mt-10 max-w-xl text-lg text-higgins-concrete md:text-xl">{careers.noActiveRoles}</p>
        </div>
      </section>

      <section id="apply" className="bg-higgins-bone py-24 text-higgins-black md:py-32">
        <div className="container-edge">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="mb-6 text-xs uppercase tracking-[0.4em] text-higgins-red">
                <span className="mr-3 inline-block h-px w-10 bg-higgins-red align-middle" />
                Apply
              </p>
              <h2 className="font-display text-fluid-2xl leading-[0.95] tracking-tightest">
                Send your info.
                <br />
                <span className="text-higgins-red">We&apos;ll be in touch.</span>
              </h2>
            </div>

            <form
              className="grid gap-4 md:col-span-7"
              {...getFormAction("Higgins Electric — careers application")}
            >
              <input type="hidden" name="source" value="careers" />
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full border-b border-higgins-black/20 bg-transparent px-1 py-4 text-base placeholder:text-higgins-black/40 focus:border-higgins-red focus:outline-none"
                />
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="Email"
                  className="w-full border-b border-higgins-black/20 bg-transparent px-1 py-4 text-base placeholder:text-higgins-black/40 focus:border-higgins-red focus:outline-none"
                />
              </div>
              <input
                name="phone"
                placeholder="Phone"
                className="w-full border-b border-higgins-black/20 bg-transparent px-1 py-4 text-base placeholder:text-higgins-black/40 focus:border-higgins-red focus:outline-none"
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your experience"
                className="w-full border-b border-higgins-black/20 bg-transparent px-1 py-4 text-base placeholder:text-higgins-black/40 focus:border-higgins-red focus:outline-none"
              />
              <div className="mt-4">
                <MagneticCTA variant="primary">{careers.formCta}</MagneticCTA>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
