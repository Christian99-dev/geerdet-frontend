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
            Das kommt mir
            <br />
            unbedingt in die Kiste
          </>
        }
        paragraphText="Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula."
        background="gray-075"
      />
      <ImageText
        imageSrc="/images/pic02.jpg"
        heading={
          <>
            Permakultur
            <br />
            ist angewandter Klimaschutz
          </>
        }
        paragraphText="Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula."
        background="gray-15"
        reverse
      />
      <ImageText
        imageSrc="/images/pic03.jpg"
        heading={
          <>
            Warum sind unsere
            <br />
            Gurken gerne krumm?
          </>
        }
        paragraphText="Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula."
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
