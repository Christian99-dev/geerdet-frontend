import Navbar from "@/components/shared/Navbar";
import FixedBackgroundSection from "../shared/FixedBackgroundSection";
import Footer from "../shared/Footer";

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
        className="flex justify-center items-center h-[25vh] md:h-[50vh] text-5 font-bold uppercase text-orange tracking-wide"
        alt={title}
        img={img}
        color="gray-700"
      >
        {title}
      </FixedBackgroundSection>
      <div className="text-7 text-center px-8 md:px-[25%] py-8 md:py-16 text-black bg-orange/50 flex flex-col gap-10">{children}</div>
      <Footer />
    </>
  );
}
