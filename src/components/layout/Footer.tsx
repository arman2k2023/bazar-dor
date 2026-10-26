
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-green-100 bg-white px-5 py-8">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
                <Link href="/" className="text-xl font-extrabold text-green-700">
                    🛒 বাজার দর
                </Link>

                <p className="text-center text-sm text-gray-500">
                    নিত্যপ্রয়োজনীয় পণ্যের আজকের বাজারদর
                </p>

                <p className="text-sm text-gray-500">
                    © 2026 বাজার দর
                </p>
            </div>
        </footer>
    );
}
