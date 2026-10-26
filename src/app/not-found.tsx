
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-[70vh] flex-col items-center justify-center bg-[#EFF5F0] px-5 text-center">
            <div className="mb-6 text-7xl">🛒</div>

            <h1 className="text-6xl font-extrabold text-green-700">
                404
            </h1>

            <h2 className="mt-4 text-2xl font-bold text-gray-800">
                পৃষ্ঠাটি খুঁজে পাওয়া যায়নি!
            </h2>

            <p className="mt-3 max-w-md text-gray-600">
                দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন সেটি পাওয়া যায়নি।
            </p>

            <Link
                href="/"
                className="mt-7 rounded-lg bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800"
            >
                হোম পেজে ফিরে যান
            </Link>
        </main>
    );
}
