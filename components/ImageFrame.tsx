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
  return (
    <div className={`relative ${className}`}>
      {/* ambient shadow — asymmetric ellipse, heavier under the left/front
          of the card and tapering away to the right */}
      <div
        className="absolute -bottom-4 left-0 h-10 w-[75%] rounded-[100%] bg-black/40 blur-2xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-3 left-1/3 h-6 w-1/2 rounded-[100%] bg-black/30 blur-xl"
        aria-hidden="true"
      />

      {/* the framed image itself */}
      <div className="relative overflow-hidden rounded-[2.5rem] shadow-xl shadow-black/20 ring-1 ring-black/5">
        <Image
          src={src}
          alt={alt}
          width={1040}
          height={1200}
          className="h-auto w-full object-cover"
          priority
        />
      </div>
    </div>
  );
}
