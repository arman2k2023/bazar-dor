import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-green-50 via-white to-emerald-100 px-6 py-10 md:px-12 md:py-16">
            <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
                {/* Left Content */}
                <div>
                    <span className="inline-flex rounded-full border border-green-200 bg-white px-4 py-2 text-sm font-semibold text-green-700 shadow-sm">
                        🌿 প্রতিদিনের বাজারদর, এক জায়গায়
                    </span>

                    <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                        আজকের বাজারের দাম
                        <span className="mt-2 block text-green-700">
                            এক নজরে
                        </span>
                    </h1>

                    <p className="mt-5 max-w-lg text-base leading-8 text-gray-600">
                        চাল, ডাল, তেল, সবজি, মাছসহ নিত্যপ্রয়োজনীয় পণ্যের
                        আজকের দাম ও বাজারের পরিবর্তন সহজেই জেনে নিন।
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <Link
                            href="#all-products"
                            className="rounded-xl bg-green-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-green-700/20 transition hover:-translate-y-0.5 hover:bg-green-800"
                        >
                            সব পণ্য দেখুন →
                        </Link>

                        <span className="text-sm font-medium text-gray-500">
                            ✓ সহজ · নির্ভরযোগ্য · প্রতিদিন
                        </span>
                    </div>
                </div>

                {/* Right Visual */}
                <div className="relative flex min-h-64 items-center justify-center md:min-h-80">
                    <Image
                        src="/hero.png"
                        alt="বাজারের নিত্যপ্রয়োজনীয় পণ্য"
                        width={600}
                        height={500}
                        priority
                        className="h-auto w-full max-w-xl object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
