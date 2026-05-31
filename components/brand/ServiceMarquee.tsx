import { cn } from "@/lib/utils";

type Props = {
  items: string[];
  className?: string;
  /** "left" reverses the direction */
  direction?: "left" | "right";
  accent?: "red" | "yellow" | "bone";
};

export function ServiceMarquee({
  items,
  className,
  direction = "left",
  accent = "yellow",
}: Props) {
  const doubled = [...items, ...items];
  const accentClass =
    accent === "red"
      ? "text-higgins-red"
      : accent === "yellow"
        ? "text-higgins-yellow"
        : "text-higgins-bone";

  return (
    <div
      className={cn(
        "relative flex w-full overflow-hidden border-y border-higgins-bone/15 bg-higgins-black py-6",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center gap-12 whitespace-nowrap will-change-transform",
          "animate-marquee",
          direction === "right" && "[animation-direction:reverse]"
        )}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-12">
            <span
              className={cn(
                "font-display text-3xl tracking-[0.08em] md:text-5xl lg:text-6xl",
                i % 2 === 0 ? accentClass : "text-stroke"
              )}
            >
              {item}
            </span>
            <span className="text-higgins-yellow">⚡</span>
          </span>
        ))}
      </div>
    </div>
  );
}
