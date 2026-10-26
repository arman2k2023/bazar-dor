"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";

const categories = [
    { name: "🍚চাল", href: "/category/chal" },
    { name: "🫘ডাল", href: "/category/dal" },
    { name: "🛢️তেল", href: "/category/tel" },
    { name: "🥬সবজি", href: "/category/sobji" },
    { name: "🐟মাছ", href: "/category/mach" },
    { name: "🍗মাংস", href: "/category/mangsho" },
    { name: "🥛ডিম-দুধ", href: "/category/dim-dui" },
    { name: "🌶️মশলা", href: "/category/mosla" },
];

export default function Navbar() {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSigningOut, setIsSigningOut] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const [banglaDate, setBanglaDate] = useState("");

    useEffect(() => {
        const formattedDate = new Intl.DateTimeFormat("bn-BD", {
            day: "numeric",
            month: "long",
            year: "numeric",
        }).format(new Date());

        setBanglaDate(formattedDate);
    }, []);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setIsMenuOpen(false);
            }
        }

        function handleEscape(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setIsMenuOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    async function handleSignOut() {
        if (isSigningOut) return;

        setIsSigningOut(true);

        try {
            const { error } = await authClient.signOut();

            if (error) {
                toast.error("লগআউট করা যায়নি। আবার চেষ্টা করো।");
                return;
            }

            setIsMenuOpen(false);
            toast.success("সফলভাবে লগআউট হয়েছে!");
            router.push("/");
            router.refresh();
        } catch {
            toast.error("সমস্যা হয়েছে। আবার চেষ্টা করো।");
        } finally {
            setIsSigningOut(false);
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
                        <div className="relative" ref={menuRef}>
                            <button
                                type="button"
                                onClick={() => setIsMenuOpen((open) => !open)}
                                aria-expanded={isMenuOpen}
                                aria-haspopup="menu"
                                className="flex max-w-52 items-center gap-2 rounded-lg border border-green-600 px-4 py-2 text-sm font-semibold text-green-700 transition hover:bg-green-50"
                            >
                                <span className="max-w-36 truncate">
                                    {session.user.name || "আমার অ্যাকাউন্ট"}
                                </span>

                                <svg
                                    className={`h-4 w-4 shrink-0 transition-transform ${isMenuOpen ? "rotate-180" : ""
                                        }`}
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.22 7.22a.75.75 0 0 1 1.06 0L10 10.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 8.28a.75.75 0 0 1 0-1.06Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>

                            {isMenuOpen && (
                                <div
                                    role="menu"
                                    className="absolute right-0 top-full mt-2 w-52 overflow-hidden rounded-xl border border-green-100 bg-white py-2 shadow-lg"
                                >
                                    <Link
                                        href="/profile"
                                        role="menuitem"
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-green-50 hover:text-green-700"
                                    >
                                        <svg
                                            className="h-5 w-5"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            aria-hidden="true"
                                        >
                                            <circle cx="12" cy="8" r="4" />
                                            <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
                                        </svg>
                                        আমার প্রোফাইল
                                    </Link>

                                    <div className="mx-3 border-t border-gray-100" />

                                    <button
                                        type="button"
                                        role="menuitem"
                                        onClick={handleSignOut}
                                        disabled={isSigningOut}
                                        className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-medium text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        <svg
                                            className="h-5 w-5"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            aria-hidden="true"
                                        >
                                            <path d="M10 17l5-5-5-5" />
                                            <path d="M15 12H3" />
                                            <path d="M12 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6" />
                                        </svg>
                                        {isSigningOut ? "লগআউট হচ্ছে..." : "সাইন আউট"}
                                    </button>
                                </div>
                            )}
                        </div>
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
                                className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-800"
                            >
                                সাইন আপ
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
