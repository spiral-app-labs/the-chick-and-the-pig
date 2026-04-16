import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DailySpecials from "@/components/DailySpecials";
import FeaturedDishes from "@/components/FeaturedDishes";
import SaucesSpotlight from "@/components/SaucesSpotlight";
import Menu from "@/components/Menu";
import Reviews from "@/components/Reviews";
import Catering from "@/components/Catering";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import MobileOrderBar from "@/components/MobileOrderBar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <DailySpecials />
      <FeaturedDishes />
      <SaucesSpotlight />
      <Menu />
      <Reviews />
      <Catering />
      <Location />
      <Footer />
      <MobileOrderBar />
    </main>
  );
}
