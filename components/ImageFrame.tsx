import Image from "next/image";

type FramedImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function FramedImage({
  src,
  alt,
  className = ""
}: FramedImageProps) {
  if (!src) return null;
  return (
    <div className={`relative h-full w-full ${className}`}>
      <div className="relative h-full w-full overflow-hidden rounded-4xl shadow-[0px_10px_15px_rgba(0,0,0,0.7)]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover z-1"
          priority
        />
      </div>
      <div className="curved-drop-shadow"></div>
    </div>
  );
}
