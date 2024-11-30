import { Color } from "@/types/theme";
import Image from "next/image";
import { ReactNode } from "react";

export const InfoOne = () => {
  return (
    <section className="bg-background">
      <ImageText
        imageSrc="/images/pic01.jpg"
        heading={
          <>
            Straight from the
            <br />
            field to your box
          </>
        }
        paragraphText="Discover the freshest produce grown with care and love. Every item in your box supports sustainable farming and our shared vision for a greener future."
        background="gray-075"
      />
      <ImageText
        imageSrc="/images/pic02.jpg"
        heading={
          <>
            Permaculture:
            <br />
            Climate action in practice
          </>
        }
        paragraphText="Our commitment to permaculture restores ecosystems, enriches soil health, and actively combats climate change with every harvest."
        background="gray-15"
        reverse
      />
      <ImageText
        imageSrc="/images/pic03.jpg"
        heading={
          <>
            Why do our
            <br />
            cucumbers grow crooked?
          </>
        }
        paragraphText="Because nature isn’t perfect, and neither are we. Our focus is on quality and taste, not uniform shapes, to bring you food as nature intended."
        background="gray-224"
      />
    </section>
  );
};


export const ImageText = ({
  imageSrc,
  imageAlt = "",
  heading,
  paragraphText,
  reverse = false,
  background,
}: {
  imageSrc: string;
  imageAlt?: string;
  heading: ReactNode;
  paragraphText: string;
  reverse?: boolean;
  background: Color;
}) => {
  return (
    <section
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center bg-${background}`}
    >
      <div className="w-full md:w-1/2">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={400}
          className="w-full h-auto"
        />
      </div>
      <div className={`w-full text-center md:w-[60%] md:text-left p-12`}>
        <h2 className="mb-4 uppercase">{heading}</h2>
        <p>{paragraphText}</p>
      </div>
    </section>
  );
};
