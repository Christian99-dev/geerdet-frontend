import Image from "next/image";
import FixedBackground from "../shared/FixedBackground";
import Icon from "../shared/Icon";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="pt-28 pb-20 px-12 relative md:h-screen md:p-0 bg-gray-25 flex items-center flex-col justify-center">
      <FixedBackground
        src="/images/banner.jpg"
        alt="Bilder von Möhren"
        color="gray-500"
      />

      {/** Vorhand */}
      <div className="absolute w-full h-full bg-style5-strong z-20 animate-bannerFadeOut [animation-delay:_1.25s]"></div>

      {/** Logo */}
      <Image
        className="relative z-20 w-[17rem] mb-4 animate-heroLogoPopup"
        src="/images/geerdet_logo.png"
        width={1000}
        height={1000}
        alt="Bilder von Möhren"
      />

      {/** Line */}
      <div className="h-[2px] bg-white z-30 mb-6 animate-lineIn [animation-delay:_0.5s]" />

      {/** Text */}
      <p className="text-white relative z-10 text-center uppercase tracking-wide">
        Unsere Solidarische
        <br />
        Landwirtschaft
        <br />
        in Taunusstein.
      </p>

      {/** Extra space for golden ratio */}
      <div className="hidden size-20 md:block"></div>

      {/** Bottom Arrow */}
      <Link href={"#first-section"} className="hidden opacity-0 md:flex absolute bottom-12 text-white z-30 flex-col items-center cursor-pointer animate-moreButtonIn [animation-delay:_2s]">
        <p className="uppercase text-8 tracking-wide mb-2">
          Hier geht´s weiter
        </p>
        <Icon name="arrowDown" color="white" size="medium" />
      </Link>
    </section>
  );
};
