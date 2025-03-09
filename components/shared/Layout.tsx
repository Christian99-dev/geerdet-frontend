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
      <div className="text-7 text-center items-center px-8 md:px-[25%] py-8 md:py-16 text-background bg-orange/50 flex flex-col gap-6">
        {children}
      </div>
      <Footer />
    </>
  );
}
