import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoBar from "@/components/InfoBar";
import DailySpecials from "@/components/DailySpecials";
import Stats from "@/components/Stats";
import FeaturedDishes from "@/components/FeaturedDishes";
import SaucesSpotlight from "@/components/SaucesSpotlight";
import Menu from "@/components/Menu";
import Reviews from "@/components/Reviews";
import Catering from "@/components/Catering";
import Location from "@/components/Location";
import Social from "@/components/Social";
import Footer from "@/components/Footer";
import MobileOrderBar from "@/components/MobileOrderBar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <InfoBar />
      <DailySpecials />
      <Stats />
      <FeaturedDishes />
      <SaucesSpotlight />
      <Menu />
      <Reviews />
      <Catering />
      <Location />
      <Social />
      <Footer />
      <MobileOrderBar />
    </main>
  );
}
