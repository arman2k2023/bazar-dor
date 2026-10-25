import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PriceTicker from "@/components/PriceTicker";

export default function Home() {
  return (
    <>
      <Navbar />
      <PriceTicker />

      <main className="mx-auto max-w-6xl px-4">
        <Hero />

        <section id="সব-পণ্য" className="min-h-40 pb-12">
          <h2 className="text-xl font-bold">সব পণ্য</h2>
        </section>
      </main>
    </>
  );
}
