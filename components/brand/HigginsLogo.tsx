import Image from "@/components/ui/Image";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  full?: boolean;
  /**
   * "light" = white logo (for dark backgrounds — default).
   * "dark"  = black logo (for white/light backgrounds).
   */
  variant?: "light" | "dark";
};

export function HigginsLogo({ className, full = true, variant = "light" }: Props) {
  const src =
    variant === "dark"
      ? "/assets/brand/higgins-logo-black.png"
      : "/assets/brand/higgins-logo-white.png";

  if (!full) {
    return (
      <span
        className={cn("relative inline-flex h-9 w-9 items-center justify-center", className)}
      >
        <Image
          src={src}
          alt="Higgins Electric"
          fill
          sizes="36px"
          className="object-contain"
          priority
        />
      </span>
    );
  }

  return (
    <span
      className={cn(
        "relative inline-flex h-10 w-[200px] items-center md:h-12 md:w-[240px]",
        className
      )}
    >
      <Image
        src={src}
        alt="Higgins Electric"
        fill
        sizes="(min-width: 768px) 240px, 200px"
        className="object-contain"
        priority
      />
    </span>
  );
}
