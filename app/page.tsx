import IntroBanner from "@/components/home/IntroBanner";
import InfoOne from "@/components/home/InfoOne";
import InfoTwo from "@/components/home/InfoTwo";
import VegetableBoxBanner from "@/components/home/VegetableBoxBanner";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import OfferBanner from "@/components/home/OfferBanner";
import HeroSlideshow from "@/components/home/HeroSlideshow";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSlideshow />
      <IntroBanner />
      <VegetableBoxBanner />
      <InfoOne />
      <InfoTwo />
      <OfferBanner />
      <Footer />
    </>
  );
}
