import Nav from "@/components/Nav";
import Marquee from "@/components/Marquee";
import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import Ritual from "@/components/sections/Ritual";
import Menu from "@/components/sections/Menu";
import Seasonal from "@/components/sections/Seasonal";
import Shop from "@/components/sections/Shop";
import Classes from "@/components/sections/Classes";
import Social from "@/components/sections/Social";
import Visit from "@/components/sections/Visit";
import Footer from "@/components/sections/Footer";

const marqueeItems = [
  "Hand-whisked daily",
  "Single-origin Shizuoka",
  "New flavors every two weeks",
  "A tiny green escape",
  "Hojicha · Genmaicha · Matcha",
  "Covington, Kentucky",
];

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Marquee
          items={marqueeItems}
          className="bg-matcha-100 text-matcha-800"
        />
        <Story />
        <Ritual />
        <Menu />
        <Seasonal />
        <Shop />
        <Classes />
        <Social />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
