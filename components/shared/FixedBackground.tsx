import { Color } from "@/types/theme";
import Image from "next/image";

const FixedBackground = ({
  src,
  color,
  alt,
}: {
  src: string;
  color: Color;
  alt: string;
}) => {
  return (
    <>
      <div className="absolute md:fixed -z-10 w-full h-full">
        <Image
          fill
          className="absolute w-full h-full object-cover"
          src={src}
          alt={alt}
        />
      </div>

      {/** Abdunklung des bildes */}
      <div
        className={`absolute -z-9 bg-${color} top-0 left-0 right-0 bottom-0`}
      />
    </>
  );
};

export default FixedBackground;
