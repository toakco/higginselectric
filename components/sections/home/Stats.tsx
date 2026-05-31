import { home } from "@/lib/content";
import { VoltageGauge } from "@/components/brand/VoltageGauge";

export function Stats() {
  return (
    <section className="relative bg-higgins-black py-24 md:py-32">
      <div className="container-edge">
        <p className="mb-12 text-xs uppercase tracking-[0.4em] text-higgins-yellow">
          <span className="mr-3 inline-block h-px w-10 bg-higgins-yellow align-middle" />
          By the numbers
        </p>
        <div className="grid gap-12 md:grid-cols-4">
          {home.stats.map((s) => (
            <VoltageGauge
              key={s.label}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
              decimals={s.value % 1 !== 0 ? 1 : 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
