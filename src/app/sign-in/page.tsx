
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";

export default function SignInPage() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [googleLoading, setGoogleLoading] = useState(false);
    const [githubLoading, setGithubLoading] = useState(false);

    const isBusy = loading || googleLoading || githubLoading;

    async function handleSignIn(
        event: React.FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();
        setLoading(true);

        try {
            const { error } = await authClient.signIn.email({
                email,
                password,
            });

            if (error) {
                toast.error(
                    error.message || "ইমেইল বা পাসওয়ার্ড সঠিক নয়"
                );
                return;
            }

            toast.success("সফলভাবে লগইন হয়েছে!");
            router.push("/");
            router.refresh();
        } catch {
            toast.error("লগইন করা যায়নি। আবার চেষ্টা করো।");
        } finally {
            setLoading(false);
        }
    }

    async function handleSocialSignIn(
        provider: "google" | "github"
    ) {
        const setSocialLoading =
            provider === "google"
                ? setGoogleLoading
                : setGithubLoading;

        setSocialLoading(true);

        try {
            const { error } = await authClient.signIn.social({
                provider,
                callbackURL: "/",
            });

            if (error) {
                toast.error(
                    error.message ||
                    `${provider === "google" ? "Google" : "GitHub"} Login ব্যর্থ হয়েছে`
                );
                setSocialLoading(false);
            }
        } catch {
            toast.error(
                `${provider === "google" ? "Google" : "GitHub"} Login করা যায়নি। আবার চেষ্টা করো।`
            );
            setSocialLoading(false);
        }
    }

    return (
        <main className="flex flex-1 items-center justify-center bg-gray-50 px-4 py-12">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm">
                <h1 className="mb-2 text-3xl font-bold text-gray-900">
                    আবার ফিরে এসেছ!
                </h1>

                <p className="mb-8 text-sm text-gray-500">
                    তোমার অ্যাকাউন্টে লগইন করো।
                </p>

                {/* Email and Password Sign In */}
                <form onSubmit={handleSignIn} className="space-y-5">
                    <div>
                        <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-medium text-gray-700"
                        >
                            ইমেইল
                        </label>

                        <input
                            id="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={email}
                            onChange={(event) =>
                                setEmail(event.target.value)
                            }
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                            placeholder="name@example.com"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="mb-2 block text-sm font-medium text-gray-700"
                        >
                            পাসওয়ার্ড
                        </label>

                        <input
                            id="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                            placeholder="তোমার পাসওয়ার্ড"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isBusy}
                        className="w-full rounded-lg bg-green-700 px-4 py-3 font-semibold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {loading ? "লগইন হচ্ছে..." : "Sign In"}
                    </button>
                </form>

                {/* Divider */}
                <div className="my-6 flex items-center gap-3">
                    <div className="h-px flex-1 bg-gray-200" />
                    <span className="text-sm text-gray-500">
                        অথবা
                    </span>
                    <div className="h-px flex-1 bg-gray-200" />
                </div>

                {/* Google Sign In */}
                <button
                    type="button"
                    onClick={() => handleSocialSignIn("google")}
                    disabled={isBusy}
                    className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 px-4 py-3 font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    <span className="text-lg font-bold text-blue-600">
                        G
                    </span>

                    {googleLoading
                        ? "Google-এ নিয়ে যাওয়া হচ্ছে..."
                        : "Google দিয়ে Sign In"}
                </button>

                {/* GitHub Sign In */}
                <button
                    type="button"
                    onClick={() => handleSocialSignIn("github")}
                    disabled={isBusy}
                    className="mt-3 flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 px-4 py-3 font-medium text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    <span className="text-lg font-bold">
                        GH
                    </span>

                    {githubLoading
                        ? "GitHub-এ নিয়ে যাওয়া হচ্ছে..."
                        : "GitHub দিয়ে Sign In"}
                </button>

                {/* Sign Up Link */}
                <p className="mt-6 text-center text-sm text-gray-600">
                    অ্যাকাউন্ট নেই?{" "}
                    <Link
                        href="/sign-up"
                        className="font-semibold text-green-700 hover:underline"
                    >
                        Sign Up
                    </Link>
                </p>
            </div>
        </main>
    );
}
