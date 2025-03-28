import { Color } from "@/types/theme/theme";
import Image from "next/image";
import { ReactNode } from "react";

export default async function InfoOne() {
  return (
    <section className="bg-background">
      <ImageText
        imageSrc="/images/stroh.jpeg"
        heading={
          <>
            Aus der Gemeinschaft:
            <br />
            Verbundenheit erleben
          </>
        }
        paragraphText="Direkt aus der Zusammenarbeit lokaler Erzeuger entsteht unser Angebot. Jeder Artikel steht für Nachhaltigkeit, Fairness und den Spirit einer starken Gemeinschaft."
        background="gray-075"
      />
      <ImageText
        imageSrc="/images/blume.jpeg"
        heading={
          <>
            Permakultur:
            <br />
            Natürliche Kreisläufe entdecken
          </>
        }
        paragraphText="Mit innovativen Permakultur-Methoden gestalten wir einen nachhaltigen Anbau. Unser Ansatz fördert den Boden, schützt die Umwelt und sichert die Zukunft für kommende Generationen."
        background="gray-15"
        reverse
      />
      <ImageText
        imageSrc="/images/amisch.jpeg"
        heading={
          <>
            Natur in ihrer Vielfalt:
            <br />
            Unikate aus echtem Anbau
          </>
        }
        paragraphText="Die natürlichen Unregelmäßigkeiten unserer Produkte sind Ausdruck authentischer Handwerkskunst. Jede Ernte erzählt eine Geschichte von Natur, Freiheit und unverfälschter Frische."
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
          className="w-full md:h-[28rem] h-[32rem] object-cover"
        />
      </div>
      <div className={`w-full text-center md:w-[60%] md:text-left p-12`}>
        <h2 className="mb-4 uppercase">{heading}</h2>
        <p>{paragraphText}</p>
      </div>
    </section>
  );
};
