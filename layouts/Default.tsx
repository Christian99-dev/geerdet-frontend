import Navbar from "@/components/shared/Navbar";
import FixedBackgroundSection from "../components/shared/FixedBackgroundSection";
import Footer from "../components/shared/Footer";
import Image from "next/image";
import Button from "@/components/shared/Button";
import { type DownloadButton, type Img, type Paragraph, type Titel } from "@/types/layouts/default";

export default function Default({
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
      <div className="text-7 text-center items-center px-8 md:px-[25%] py-8 md:py-16 text-background bg-orange/50 flex flex-col gap-6">
        {children}
      </div>
      <Footer />
    </>
  );
}

export function Titel({ titel }: Titel) {
  return (
    <h2 className="text-7 font-bold uppercase">{titel}</h2>
  );
}

export function Paragraph({ text }: Paragraph) {
  return <p className="text-8">{text}</p>;
}

export function Img({ src, alt }: Img) {
  return <Image width={1000} height={1000} className="w-full aspect-video object-cover" src={src} alt={alt} />;
}

export function DownloadButton({ text, downloadLink }: DownloadButton) {
  return (
    <Button
      text={text}
      onClick={() => {
        const link = document.createElement("a");
        link.href = downloadLink;
        link.download = downloadLink.split("/").pop() || "download";
        link.click();
      }}
    />
  );
}
