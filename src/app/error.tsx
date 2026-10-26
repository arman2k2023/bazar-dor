
"use client";

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Application error:", error);
    }, [error]);

    return (
        <main className="flex min-h-[60vh] items-center justify-center bg-[#EFF5F0] px-5 py-12">
            <div className="w-full max-w-lg rounded-2xl border border-green-100 bg-white p-8 text-center shadow-sm">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-3xl">
                    ⚠️
                </div>

                <h1 className="mt-5 text-2xl font-extrabold text-gray-900">
                    দুঃখিত, সমস্যা হয়েছে!
                </h1>

                <p className="mt-3 leading-7 text-gray-600">
                    পেজটি লোড করা যাচ্ছে না। ইন্টারনেট সংযোগ পরীক্ষা করে আবার চেষ্টা করুন।
                </p>

                <button
                    type="button"
                    onClick={() => reset()}
                    className="mt-6 rounded-lg bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
                >
                    আবার চেষ্টা করুন
                </button>
            </div>
        </main>
    );
}
