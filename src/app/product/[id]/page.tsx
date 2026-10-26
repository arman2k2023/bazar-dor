
import Link from "next/link";
import { headers } from "next/headers";
import { notFound, redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import { getProductById } from "@/lib/products";

export default async function ProductDetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    // Check authentication on the server
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect("/sign-in");
    }

    const product = await getProductById(id);

    if (!product) {
        notFound();
    }

    const marketPrices = product.markets ?? [];

    const lowestPrice =
        marketPrices.length > 0
            ? Math.min(...marketPrices.map((market) => market.min))
            : product.today;

    const highestPrice =
        marketPrices.length > 0
            ? Math.max(...marketPrices.map((market) => market.max))
            : product.today;

    const averagePrice =
        marketPrices.length > 0
            ? Math.round(
                marketPrices.reduce(
                    (total, market) =>
                        total + (market.min + market.max) / 2,
                    0
                ) / marketPrices.length
            )
            : product.today;

    return (
        <main className="min-h-screen bg-[#EFF5F0] px-5 py-10">
            <div className="mx-auto max-w-7xl">
                {/* Breadcrumb */}
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
                    <Link href="/" className="hover:text-green-700">
                        হোম
                    </Link>

                    <span>/</span>

                    <Link
                        href={`/category/${product.category}`}
                        className="hover:text-green-700"
                    >
                        {product.categoryNameBn}
                    </Link>

                    <span>/</span>

                    <span className="font-semibold text-gray-800">
                        {product.nameBn}
                    </span>
                </div>

                {/* Product Information */}
                <section className="mt-8 grid gap-8 rounded-3xl border border-green-50 bg-white p-6 shadow-sm md:grid-cols-2 md:p-10">
                    <div className="flex min-h-64 items-center justify-center rounded-2xl bg-green-50">
                        <span className="text-8xl">
                            {product.image}
                        </span>
                    </div>

                    <div className="flex flex-col justify-center">
                        <span className="w-fit rounded-full bg-green-50 px-3 py-1.5 text-sm font-semibold text-green-700">
                            {product.categoryIcon}{" "}
                            {product.categoryNameBn}
                        </span>

                        <h1 className="mt-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
                            {product.nameBn}
                        </h1>

                        <p className="mt-3 text-sm text-gray-500">
                            একক: প্রতি {product.unit}
                        </p>

                        <p className="mt-6 text-sm text-gray-500">
                            আজকের বাজারদর
                        </p>

                        <p className="mt-1 text-4xl font-extrabold text-green-700">
                            ৳{product.today}
                        </p>

                        <div className="mt-4 flex flex-wrap items-center gap-3">
                            <span
                                className={`rounded-full px-3 py-1.5 text-sm font-bold ${product.change.dir === "up"
                                        ? "bg-red-50 text-red-600"
                                        : product.change.dir === "down"
                                            ? "bg-green-50 text-green-700"
                                            : "bg-gray-100 text-gray-600"
                                    }`}
                            >
                                {product.change.dir === "up"
                                    ? "▲ দাম বেড়েছে"
                                    : product.change.dir === "down"
                                        ? "▼ দাম কমেছে"
                                        : "— দাম অপরিবর্তিত"}{" "}
                                {Math.abs(product.change.pct)}%
                            </span>

                            <span className="text-sm text-gray-500">
                                গতকাল: ৳{product.yesterday}
                            </span>
                        </div>
                    </div>
                </section>

                {/* Price Summary */}
                <section className="mt-10">
                    <h2 className="text-2xl font-extrabold text-gray-900">
                        বাজারদরের সারসংক্ষেপ
                    </h2>

                    <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <PriceSummary
                            title="সর্বনিম্ন দাম"
                            price={lowestPrice}
                            color="text-green-700"
                        />

                        <PriceSummary
                            title="সর্বোচ্চ দাম"
                            price={highestPrice}
                            color="text-red-600"
                        />

                        <PriceSummary
                            title="গড় দাম"
                            price={averagePrice}
                            color="text-blue-700"
                        />
                    </div>
                </section>

                {/* Market Price Table */}
                <section className="mt-10">
                    <h2 className="text-2xl font-extrabold text-gray-900">
                        বাজারভিত্তিক মূল্যতালিকা
                    </h2>

                    <div className="mt-5 overflow-x-auto rounded-2xl border border-gray-100 bg-white shadow-sm">
                        {marketPrices.length > 0 ? (
                            <table className="w-full min-w-[560px] text-left text-sm">
                                <thead className="bg-green-50 text-gray-700">
                                    <tr>
                                        <th className="px-5 py-4 font-bold">
                                            বাজার
                                        </th>
                                        <th className="px-5 py-4 font-bold">
                                            বিভাগ
                                        </th>
                                        <th className="px-5 py-4 font-bold">
                                            সর্বনিম্ন
                                        </th>
                                        <th className="px-5 py-4 font-bold">
                                            সর্বোচ্চ
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {marketPrices.map((market, index) => (
                                        <tr
                                            key={`${market.market}-${index}`}
                                            className="border-t border-gray-100"
                                        >
                                            <td className="px-5 py-4 font-semibold text-gray-800">
                                                {market.market}
                                            </td>

                                            <td className="px-5 py-4 text-gray-600">
                                                {market.division}
                                            </td>

                                            <td className="px-5 py-4 font-semibold text-green-700">
                                                ৳{market.min}
                                            </td>

                                            <td className="px-5 py-4 font-semibold text-red-600">
                                                ৳{market.max}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p className="p-8 text-center text-gray-500">
                                এই পণ্যের বাজারভিত্তিক মূল্যতথ্য পাওয়া যায়নি।
                            </p>
                        )}
                    </div>
                </section>

                <div className="mt-8">
                    <Link
                        href="/"
                        className="inline-flex rounded-xl bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800"
                    >
                        ← সব পণ্যে ফিরে যান
                    </Link>
                </div>
            </div>
        </main>
    );
}

function PriceSummary({
    title,
    price,
    color,
}: {
    title: string;
    price: number;
    color: string;
}) {
    return (
        <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">{title}</p>

            <p className={`mt-3 text-3xl font-extrabold ${color}`}>
                ৳{price}
            </p>
        </article>
    );
}
