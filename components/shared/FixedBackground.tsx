import { Color } from "@/types/theme";
import Image from "next/image";

/**
 * FixedBackground component displays a full-width, fixed background image
 * with an optional overlay color, covering the entire width and height
 * of the nearest relative parent element.
 */
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
      <div className="fixed inset-0 -z-10 w-full h-full">
        <Image
          fill
          className="absolute w-full h-full object-cover"
          src={src}
          alt={alt}
        />
      </div>

      {/** Abdunklung des bildes */}
      <div
        className={`fixed inset-0 -z-10 bg-${color}`}
      />
    </>
  );
};

export default FixedBackground;
