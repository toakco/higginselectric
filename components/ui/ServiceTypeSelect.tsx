"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { services } from "@/lib/services";
import { ChevronDown } from "lucide-react";

export function ServiceTypeSelect() {
  const router = useRouter();
  const [value, setValue] = useState("");

  return (
    <label className="group relative flex w-full max-w-md items-center">
      <span className="sr-only">Select a service</span>
      <select
        value={value}
        onChange={(e) => {
          const slug = e.target.value;
          setValue(slug);
          if (slug) router.push(`/services/${slug}`);
        }}
        className="w-full cursor-pointer appearance-none border-2 border-higgins-yellow bg-higgins-black/80 px-5 py-4 pr-12 font-mono text-sm uppercase tracking-[0.2em] text-higgins-bone backdrop-blur transition-colors hover:bg-higgins-graphite focus:border-higgins-red focus:outline-none md:text-base"
      >
        <option value="" disabled>
          Select a service type
        </option>
        {services.map((s) => (
          <option key={s.slug} value={s.slug} className="bg-higgins-black text-higgins-bone">
            {s.name}
          </option>
        ))}
      </select>
      <ChevronDown
        aria-hidden
        className="pointer-events-none absolute right-4 h-5 w-5 text-higgins-yellow transition-transform group-hover:translate-y-0.5"
      />
    </label>
  );
}
