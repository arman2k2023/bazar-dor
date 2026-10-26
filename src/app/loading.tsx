
export default function Loading() {
    return (
        <main
            className="min-h-screen animate-pulse bg-[#EFF5F0] px-5 py-8"
            aria-label="পেজ লোড হচ্ছে"
            aria-busy="true"
        >
            <div className="mx-auto max-w-7xl">
                {/* Hero Skeleton */}
                <div className="grid gap-8 rounded-2xl border border-green-100 bg-white p-6 shadow-sm md:grid-cols-2 md:p-8">
                    <div className="space-y-4">
                        <div className="h-6 w-36 rounded-full bg-green-100" />
                        <div className="h-9 w-full max-w-md rounded-lg bg-gray-200" />
                        <div className="h-9 w-4/5 max-w-sm rounded-lg bg-gray-200" />
                        <div className="h-4 w-full max-w-md rounded bg-gray-100" />
                        <div className="h-4 w-3/4 rounded bg-gray-100" />
                        <div className="h-11 w-40 rounded-lg bg-green-100" />
                    </div>

                    <div className="min-h-48 rounded-xl bg-gray-100" />
                </div>

                {/* Search Skeleton */}
                <div className="mt-10">
                    <div className="h-7 w-40 rounded bg-gray-200" />
                    <div className="mt-5 h-14 w-full rounded-xl border border-green-100 bg-white" />
                </div>

                {/* Product Section Skeletons */}
                {[1, 2, 3].map((section) => (
                    <section key={section} className="mt-12">
                        <div className="h-7 w-48 rounded bg-gray-200" />
                        <div className="mt-3 h-4 w-64 max-w-full rounded bg-gray-100" />

                        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm"
                                >
                                    <div className="flex h-36 items-center justify-center rounded-xl bg-green-50">
                                        <div className="h-20 w-20 rounded-full bg-gray-200" />
                                    </div>

                                    <div className="mt-4 h-4 w-24 rounded bg-gray-100" />
                                    <div className="mt-3 h-6 w-3/4 rounded bg-gray-200" />
                                    <div className="mt-3 h-4 w-20 rounded bg-gray-100" />
                                    <div className="mt-5 h-7 w-28 rounded bg-gray-200" />
                                    <div className="mt-3 h-6 w-24 rounded-full bg-green-100" />
                                    <div className="mt-5 h-11 w-full rounded-lg bg-green-100" />
                                </div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>

            <p className="sr-only">বাজারদরের তথ্য লোড হচ্ছে। অপেক্ষা করুন।</p>
        </main>
    );
}
