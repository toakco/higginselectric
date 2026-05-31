import NextImage, { ImageProps } from "next/image";

export default function Image({ src, ...props }: ImageProps) {
  const resolvedSrc =
    typeof src === "string" && src.startsWith("/")
      ? `/higginselectric${src}`
      : src;
  return <NextImage src={resolvedSrc} {...props} />;
}
