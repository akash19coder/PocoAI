import Header from "../components/Header";
import { Hero } from "../components/Hero";
import { Pricing } from "../components/Pricing";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-2">
        <Hero />
        <Pricing />
      </main>
    </>
  );
}
