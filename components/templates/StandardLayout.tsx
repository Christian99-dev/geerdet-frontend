import Navbar from "@/components/shared/Navbar";
import FixedBackgroundSection from "../shared/FixedBackgroundSection";
import Footer from "../shared/Footer";
import Image from "next/image";

export default function StandardLayout({
  title,
  img,
  children,
}: {
  title: string;
  img: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <FixedBackgroundSection
        className="flex justify-center items-center h-[25vh] md:h-[50vh]"
        alt={title}
        img={img}
        color="gray-700"
      >
        <h1 className="text-5 font-bold uppercase text-orange tracking-wide">
          {title}
        </h1>
      </FixedBackgroundSection>
      <div className="text-7 text-center items-center px-8 md:px-[25%] py-8 md:py-16 text-black bg-orange/50 flex flex-col gap-6">
        {children}
      </div>
      <Footer />
    </>
  );
}

export function Titel({ titel }: { titel: string }) {
  return (
    <h2 className="text-7 font-bold uppercase text-background">{titel}</h2>
  );
}

export function Paragraph({ text }: { text: string }) {
  return <p>{text}</p>;
}

export function Img({ src, alt }: { src: string; alt: string }) {
  return <Image width={1000} height={1000} className="w-full aspect-video object-cover" src={src} alt={alt} />;
}
