import Image from "next/image";
import FixedBackgroundSection from "@/components/shared/FixedBackgroundSection";
import Icon from "../shared/Icon";
import Link from "next/link";

export default async function Hero() {
  return (
    <FixedBackgroundSection
      className="h-[500px] md:h-screen pt-28 pb-20 px-12 md:p-0 bg-gray-25 flex items-center flex-col justify-center"
      img="/images/pock.jpg"
      color="gray-500"
    >
      {/** Vorhand */}
      <div className="absolute w-full h-full bg-style5-strong z-20 animate-bannerFadeOut [animation-delay:_1.25s]"></div>

      <div className="md:h-[6rem]"></div>

      {/** Logo */}
      <Image
        className="relative z-20 w-[22rem] md:w-[28rem] mb-4 md:mb-[4rem] animate-heroLogoPopup"
        src="/svg/logo.svg"
        width={1000}
        height={1000}
        alt="Geerdet Logo"
      />

      {/** Line */}
      <div className="h-[2px] bg-orange z-30 mb-6 animate-lineIn [animation-delay:_0.5s]" /> 

      {/** Text */}
      <p className="text-orange relative z-10 text-center uppercase tracking-wide text-5 font-[600]">
        Unsere Solidarische <br />
        Landwirtschaft <br /> in Taunsstein
      </p>

      {/** Extra space for golden ratio */}
      <div className="hidden size-20 md:block"></div>

      {/** Bottom Arrow */}
      <Link
        href={"#first-section"}
        className="hidden opacity-0 md:flex absolute bottom-12 text-white z-30 flex-col items-center cursor-pointer animate-moreButtonIn [animation-delay:_2s]"
      >
        <p className="uppercase text-8 tracking-wide mb-2">Weiter</p>
        <Icon name="south" color="white" size="small" />
      </Link>
    </FixedBackgroundSection>
  );
}
