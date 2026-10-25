import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="mx-auto min-h-[70vh] max-w-6xl px-4 py-10">
        <section id="সব-পণ্য" className="rounded-2xl bg-white p-8">
          <h1 className="text-2xl font-bold">বাজার দর</h1>
          <p className="mt-2 text-[var(--muted)]">
            নিত্যপ্রয়োজনীয় পণ্যের আজকের বাজারদর এক নজরে।
          </p>
        </section>
      </main>
    </>
  );
}
