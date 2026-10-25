import Image from "next/image";

export default function Hero() {
  return (
    <section className="my-8 flex flex-col items-center justify-between gap-6 rounded-2xl bg-white p-6 sm:p-10 md:flex-row">
      <div className="max-w-xl">
        <p className="mb-3 text-sm font-semibold text-[var(--green)]">
          প্রতিদিনের বাজারদর, এক জায়গায়
        </p>

        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
          সঠিক বাজারদর জানুন,{" "}
          <span className="text-[var(--green)]">সাশ্রয়ী বাজার করুন</span>
        </h1>

        <p className="mt-4 leading-7 text-[var(--muted)]">
          নিত্যপ্রয়োজনীয় পণ্যের আজকের দাম ও বাজারের পরিবর্তন সহজেই দেখে নিন।
        </p>

        <a
          href="#সব-পণ্য"
          className="mt-6 inline-block rounded-lg bg-[var(--green)] px-5 py-3 text-sm font-semibold text-white hover:bg-green-800"
        >
          সব পণ্য দেখুন ↓
        </a>
      </div>
      <div className="relative h-40 w-full md:h-52 md:w-72">
        <Image
          src="/hero.png"
          alt="বাজারের পণ্যভর্তি ঝুড়ি"
          fill
          priority
          className="object-contain"
        />
      </div>
    </section>
  );
}
