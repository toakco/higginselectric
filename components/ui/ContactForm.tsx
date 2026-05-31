"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { services } from "@/lib/services";
import { servicePages } from "@/lib/service-pages";
import { contact } from "@/lib/content";
import { MagneticCTA } from "@/components/ui/MagneticCTA";
import { getFormAction } from "@/lib/form";

function Form() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("service") ?? "";
  const matched = services.find((s) => s.slug === slug);
  const matchedPage = !matched && slug ? servicePages[slug] : null;
  const prefill = matched?.name ?? matchedPage?.eyebrow ?? "";

  const [selected, setSelected] = useState(prefill);

  const baseOptions = contact.serviceOptions;
  const extraOption = prefill && !baseOptions.includes(prefill) ? prefill : null;

  return (
    <form
      className="grid gap-5 border border-higgins-bone/15 bg-higgins-black p-8 md:p-12"
      {...getFormAction("Higgins Electric — quote request")}
    >
      <input type="hidden" name="source" value="contact" />

      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-higgins-concrete">
            {contact.formLabels.name}
          </span>
          <input
            name="name"
            required
            className="w-full border-b border-higgins-bone/30 bg-transparent py-3 text-base text-higgins-bone placeholder:text-higgins-concrete focus:border-higgins-yellow focus:outline-none"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-higgins-concrete">
            {contact.formLabels.email}
          </span>
          <input
            name="email"
            required
            type="email"
            className="w-full border-b border-higgins-bone/30 bg-transparent py-3 text-base text-higgins-bone placeholder:text-higgins-concrete focus:border-higgins-yellow focus:outline-none"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-higgins-concrete">
          {contact.formLabels.phone}
        </span>
        <input
          name="phone"
          type="tel"
          className="w-full border-b border-higgins-bone/30 bg-transparent py-3 text-base text-higgins-bone placeholder:text-higgins-concrete focus:border-higgins-yellow focus:outline-none"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-higgins-concrete">
          {contact.formLabels.service}
        </span>
        <select
          name="service"
          required
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="w-full appearance-none border-b border-higgins-bone/30 bg-higgins-black py-3 text-base text-higgins-bone focus:border-higgins-yellow focus:outline-none"
        >
          <option value="">Select one…</option>
          {extraOption && <option value={extraOption}>{extraOption}</option>}
          {baseOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-higgins-concrete">
          {contact.formLabels.description}
        </span>
        <textarea
          name="message"
          rows={5}
          className="w-full border-b border-higgins-bone/30 bg-transparent py-3 text-base text-higgins-bone placeholder:text-higgins-concrete focus:border-higgins-yellow focus:outline-none"
        />
      </label>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <span className="text-[10px] uppercase tracking-[0.3em] text-higgins-concrete">
          Quote response · 48 hours
        </span>
        <MagneticCTA variant="primary">{contact.formLabels.submit}</MagneticCTA>
      </div>
    </form>
  );
}

export function ContactForm() {
  return (
    <Suspense fallback={null}>
      <Form />
    </Suspense>
  );
}
