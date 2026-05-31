import Link from "next/link";
import { business, footer, nav } from "@/lib/content";
import { HigginsLogo } from "@/components/brand/HigginsLogo";

export function Footer() {
  return (
    <footer className="relative border-t border-higgins-bone/10 bg-higgins-black">
      <div className="container-edge py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <HigginsLogo className="mb-6" />
            <p className="max-w-sm text-base leading-relaxed text-higgins-concrete md:text-lg">
              {business.legalName} · {business.address.street}, {business.address.city},{" "}
              {business.address.state} {business.address.zip}
            </p>
            <p className="mt-4 text-base text-higgins-concrete md:text-lg">{business.hours}</p>
            <p className="mt-2 text-sm uppercase tracking-widest text-higgins-concrete/80">
              {business.license}
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-higgins-bone/50">
              Site
            </p>
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
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-higgins-bone/50">
              Reach us
            </p>
            <a
              href={`tel:${business.phone.replace(/-/g, "")}`}
              className="block font-display text-3xl text-higgins-yellow transition-colors hover:text-higgins-bone md:text-4xl"
            >
              {business.phone}
            </a>
            <a
              href={`mailto:${business.email}`}
              className="mt-3 block text-base text-higgins-bone/85 transition-colors hover:text-higgins-yellow md:text-lg"
            >
              {business.email}
            </a>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 border border-higgins-red bg-higgins-red px-6 py-4 text-sm uppercase tracking-[0.25em] text-higgins-bone transition-colors hover:bg-transparent"
            >
              Request a quote
            </Link>
          </div>
        </div>

        <p className="mt-12 text-sm uppercase tracking-[0.3em] text-higgins-concrete/85">
          {business.legalName} is a subsidiary of {business.parent}.
        </p>

        <div className="mt-6 flex flex-col items-start justify-between gap-3 border-t border-higgins-bone/10 pt-6 text-sm uppercase tracking-widest text-higgins-concrete md:flex-row md:items-center">
          <span>{footer.rights}</span>
          <span>{footer.builtBy}</span>
        </div>
      </div>
    </footer>
  );
}
