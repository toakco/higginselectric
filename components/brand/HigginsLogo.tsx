import Image from "@/components/ui/Image";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  full?: boolean;
};

/**
 * Higgins Electric primary lockup (client-provided PNG).
 * The wordmark is black with a yellow bolt, so we sit it on a bone chip with padding
 * so it stays legible on the dark nav/footer surfaces without altering brand colors.
 */
export function HigginsLogo({ className, full = true }: Props) {
  const src = "/assets/brand/higgins-logo.png";

  if (!full) {
    return (
      <span
        className={cn(
          "relative inline-flex h-9 w-9 items-center justify-center bg-higgins-bone p-1",
          className
        )}
      >
        <Image
          src={src}
          alt="Higgins Electric"
          fill
          sizes="36px"
          className="object-contain p-1"
          priority
        />
      </span>
    );
  }

  return (
    <span
      className={cn(
        "relative inline-flex h-10 w-[200px] items-center bg-higgins-bone px-3 py-1.5 md:h-12 md:w-[240px]",
        className
      )}
    >
      <Image
        src={src}
        alt="Higgins Electric"
        fill
        sizes="(min-width: 768px) 240px, 200px"
        className="object-contain p-1.5"
        priority
      />
    </span>
  );
}
