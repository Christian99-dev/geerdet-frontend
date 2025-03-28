import FixedBackgroundSection from "@/components/shared/FixedBackgroundSection";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function Layout({
  children,
  title,
  img,
}: Readonly<{
  children: React.ReactNode;
  title: string;
  img: string;
}>) {
  return (
    <>
      <Navbar />
      <FixedBackgroundSection
        className="flex justify-center items-center h-[25vh] md:h-[50vh]"
        img={img}
        color="gray-700"
      >
        <h1 className="text-5 font-bold uppercase text-orange tracking-wide text-center  px-8 md:px-[25%]">
          {title}
        </h1>
      </FixedBackgroundSection>
      <div className="bg-orange/50">
        <div className="flex flex-col gap-6 text-7 text-center md:text-left py-8 md:py-16 text-background container px-5 mx-auto">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}
