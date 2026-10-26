
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";

const categories = [
    { name: "হোম", href: "/" },
    { name: "চাল", href: "/category/chal" },
    { name: "ডাল", href: "/category/dal" },
    { name: "তেল", href: "/category/tel" },
    { name: "সবজি", href: "/category/sobji" },
    { name: "মাছ", href: "/category/mach" },
    { name: "মাংস", href: "/category/mangsho" },
    { name: "ডিম-দুধ", href: "/category/dim-dui" },
    { name: "মশলা", href: "/category/mosla" },
];

export default function Navbar() {
    const router = useRouter();

    const { data: session, isPending } = authClient.useSession();

    const banglaDate = new Intl.DateTimeFormat("bn-BD", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date());

    async function handleSignOut() {
        try {
            const { error } = await authClient.signOut();

            if (error) {
                toast.error("লগআউট করা যায়নি। আবার চেষ্টা করো।");
                return;
            }

            toast.success("সফলভাবে লগআউট হয়েছে!");
            router.push("/");
            router.refresh();
        } catch {
            toast.error("সমস্যা হয়েছে। আবার চেষ্টা করো।");
        }
    }

    return (
        <header className="sticky top-0 z-50 border-b border-green-100 bg-white shadow-sm">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4">
                {/* Logo */}
                <Link href="/" className="shrink-0">
                    <h1 className="text-2xl font-extrabold text-green-700">
                        🛒 বাজার দর
                    </h1>

                    <p className="mt-1 text-xs text-gray-500">
                        {banglaDate}
                    </p>
                </Link>

                {/* Authentication Buttons */}
                <div className="flex items-center gap-2">
                    {isPending ? (
                        <div className="h-10 w-28 animate-pulse rounded-lg bg-gray-100" />
                    ) : session?.user ? (
                        <>
                            <Link
                                href="/profile"
                                className="max-w-40 truncate rounded-lg border border-green-600 px-4 py-2 text-sm font-semibold text-green-700 transition hover:bg-green-50"
                            >
                                {session.user.name || "আমার প্রোফাইল"}
                            </Link>

                            <button
                                type="button"
                                onClick={handleSignOut}
                                className="rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-800"
                            >
                                সাইন আউট
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/sign-in"
                                className="rounded-lg border border-green-600 px-4 py-2 text-sm font-semibold text-green-700 transition hover:bg-green-50"
                            >
                                সাইন ইন
                            </Link>

                            <Link
                                href="/sign-up"
                                className="rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-800"
                            >
                                নিবন্ধন
                            </Link>
                        </>
                    )}
                </div>
            </div>

            {/* Category Navigation */}
            <nav className="border-t border-gray-100">
                <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-5 py-3">
                    {categories.map((category) => (
                        <Link
                            key={category.href}
                            href={category.href}
                            className="shrink-0 text-sm font-medium text-gray-600 transition hover:text-green-700"
                        >
                            {category.name}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
}
