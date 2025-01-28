import BannerOne from "@/components/home/BannerOne";
import Hero from "@/components/home/Hero";
import InfoOne from "@/components/home/InfoOne";
import InfoTwo from "@/components/home/InfoTwo";
import VegetableBoxBanner from "@/components/home/VegetableBoxBanner";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BannerOne />
      <InfoOne />
      <InfoTwo />
      <VegetableBoxBanner />
      <Footer />
    </>
  );
}
