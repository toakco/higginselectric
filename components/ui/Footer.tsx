import Link from "next/link";
import { business, footer, nav, serviceLinks } from "@/lib/content";
import { HigginsLogo } from "@/components/brand/HigginsLogo";

export function Footer() {
  return (
    <footer className="relative border-t border-higgins-bone/10 bg-higgins-black">
      <div className="container-edge py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Logo + contact block */}
          <div className="md:col-span-5">
            <HigginsLogo className="mb-6" variant="light" />

            <p className="text-sm leading-relaxed text-higgins-concrete md:text-base">
              {business.license}
            </p>
            <p className="mt-3 text-base leading-relaxed text-higgins-concrete md:text-lg">
              {business.address.poBox} / {business.address.street}
              <br />
              {business.address.city}, {business.address.state} {business.address.zip}
            </p>

            <div className="mt-6 space-y-2">
              <p className="text-base text-higgins-concrete md:text-lg">
                <span className="text-higgins-bone/60">Office Hours: </span>
                {business.hours}
              </p>
              <a
                href={`mailto:${business.email}`}
                className="block text-base text-higgins-bone/85 transition-colors hover:text-higgins-yellow md:text-lg"
              >
                {business.email}
              </a>
            </div>
          </div>

          {/* Site nav */}
          <div className="md:col-span-3">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-higgins-bone/50">Site</p>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-lg text-higgins-bone transition-colors hover:text-higgins-yellow md:text-xl"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy"
                  className="text-lg text-higgins-bone transition-colors hover:text-higgins-yellow md:text-xl"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* What we do */}
          <div className="md:col-span-4">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-higgins-bone/50">
              What we do
            </p>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-lg text-higgins-bone transition-colors hover:text-higgins-yellow md:text-xl"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Reach us */}
        <div className="mt-14 border-t border-higgins-bone/10 pt-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-higgins-bone/50">
                Reach us
              </p>
              <a
                href={`tel:${business.phone.replace(/\D/g, "")}`}
                className="block font-display text-4xl text-higgins-yellow transition-colors hover:text-higgins-bone md:text-5xl"
              >
                {business.phone}
              </a>
              <p className="mt-3 text-sm text-higgins-concrete/80">
                {business.legalName} is a subsidiary of {business.parent}.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-higgins-red bg-higgins-red px-6 py-4 text-sm uppercase tracking-[0.25em] text-higgins-bone transition-colors hover:bg-transparent"
            >
              Request a quote
            </Link>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-higgins-bone/10 pt-6 text-xs uppercase tracking-widest text-higgins-concrete md:flex-row md:items-center">
          <span>{footer.rights}</span>
          <span>{footer.builtBy}</span>
        </div>
      </div>
    </footer>
  );
}
