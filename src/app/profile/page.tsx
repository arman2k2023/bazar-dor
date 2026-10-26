
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";

export default function ProfilePage() {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();

    const [name, setName] = useState("");
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        if (!isPending && !session) {
            router.replace("/sign-in");
        }
    }, [isPending, session, router]);

    useEffect(() => {
        if (session?.user) {
            setName(session.user.name ?? "");
        }
    }, [session?.user]);

    async function handleUpdateProfile(
        event: React.FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        const trimmedName = name.trim();

        if (!trimmedName) {
            toast.error("তোমার নাম লিখো");
            return;
        }

        setSaving(true);

        try {
            const { error } = await authClient.updateUser({
                name: trimmedName,
            });

            if (error) {
                toast.error(error.message || "নাম আপডেট করা যায়নি");
                return;
            }

            toast.success("প্রোফাইল সফলভাবে আপডেট হয়েছে!");
            await authClient.getSession();
            router.refresh();
        } catch {
            toast.error("সমস্যা হয়েছে। আবার চেষ্টা করো।");
        } finally {
            setSaving(false);
        }
    }

    if (isPending || !session?.user) {
        return (
            <main className="flex flex-1 items-center justify-center px-5 py-20">
                <div className="w-full max-w-lg animate-pulse rounded-2xl border border-gray-100 p-8">
                    <div className="mb-6 h-8 w-48 rounded bg-gray-200" />
                    <div className="mb-3 h-5 rounded bg-gray-100" />
                    <div className="h-10 rounded bg-gray-100" />
                </div>
            </main>
        );
    }

    return (
        <main className="flex flex-1 justify-center bg-gray-50 px-5 py-12">
            <section className="h-fit w-full max-w-lg rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl font-bold text-green-700">
                    {session.user.name?.charAt(0).toUpperCase() || "U"}
                </div>

                <h1 className="mb-2 text-2xl font-bold text-gray-900">
                    আমার প্রোফাইল
                </h1>

                <p className="mb-8 text-sm text-gray-500">
                    নিজের অ্যাকাউন্টের তথ্য দেখো এবং নাম পরিবর্তন করো।
                </p>

                <form onSubmit={handleUpdateProfile} className="space-y-5">
                    <div>
                        <label
                            htmlFor="name"
                            className="mb-2 block text-sm font-medium text-gray-700"
                        >
                            তোমার নাম
                        </label>

                        <input
                            id="name"
                            type="text"
                            autoComplete="name"
                            required
                            maxLength={100}
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                            placeholder="তোমার নাম লিখো"
                        />
                    </div>

                    <div>
                        <p className="mb-1 text-sm font-medium text-gray-700">
                            ইমেইল
                        </p>
                        <p className="break-all rounded-lg bg-gray-50 px-4 py-3 text-gray-600">
                            {session.user.email}
                        </p>
                        <p className="mt-1 text-xs text-gray-500">
                            এই পেজ থেকে ইমেইল পরিবর্তন করা যাবে না।
                        </p>
                    </div>

                    <button
                        type="submit"
                        disabled={saving || name.trim() === session.user.name}
                        className="w-full rounded-lg bg-green-700 px-4 py-3 font-semibold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {saving ? "আপডেট হচ্ছে..." : "নাম আপডেট করো"}
                    </button>
                </form>

                <Link
                    href="/"
                    className="mt-5 inline-flex text-sm font-medium text-green-700 hover:underline"
                >
                    ← হোম পেজে ফিরে যাও
                </Link>
            </section>
        </main>
    );
}
