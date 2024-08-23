import Footer from "../components/footer";
import Header from "../components/Header";
import { Hero } from "../components/Hero";
import { Pricing } from "../components/Pricing";
import { HeroHighlight } from "../components/ui/hero-highlight";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-2">
        <Hero />
        <Pricing />
        <Footer />
      </main>
    </>
  );
}
