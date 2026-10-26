
import Link from "next/link";
import type { Product } from "@/types/product";

type ProductCardProps = {
    product: Product;
};

export default function ProductCard({
    product,
}: ProductCardProps) {
    const priceChangeColor =
        product.change.dir === "up"
            ? "text-red-600 bg-red-50"
            : product.change.dir === "down"
                ? "text-green-700 bg-green-50"
                : "text-gray-600 bg-gray-100";

    return (
        <article className="flex h-full flex-col rounded-2xl border border-green-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            {/* Product Image */}
            <Link
                href={`/product/${product.id}`}
                aria-label={`${product.nameBn} এর বিস্তারিত দেখুন`}
                className="flex h-36 items-center justify-center rounded-xl bg-green-50"
            >
                <span className="text-6xl">
                    {product.image}
                </span>
            </Link>

            {/* Product Information */}
            <div className="mt-4 flex flex-1 flex-col">
                <p className="text-sm text-gray-500">
                    {product.categoryIcon} {product.categoryNameBn}
                </p>

                <Link
                    href={`/product/${product.id}`}
                    className="mt-2 text-lg font-bold text-gray-900 transition hover:text-green-700"
                >
                    {product.nameBn}
                </Link>

                <p className="mt-1 text-sm text-gray-500">
                    প্রতি {product.unit}
                </p>

                <div className="mt-4">
                    <p className="text-sm text-gray-500">
                        আজকের দাম
                    </p>

                    <p className="mt-1 text-2xl font-extrabold text-green-700">
                        ৳{product.today}
                    </p>
                </div>

                <div className="mt-3">
                    <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${priceChangeColor}`}
                    >
                        {product.change.dir === "up"
                            ? "▲ দাম বেড়েছে"
                            : product.change.dir === "down"
                                ? "▼ দাম কমেছে"
                                : "— অপরিবর্তিত"}{" "}
                        {Math.abs(product.change.pct)}%
                    </span>
                </div>

                {/* Product Details Link */}
                <Link
                    href={`/product/${product.id}`}
                    className="mt-5 block rounded-lg bg-green-700 px-4 py-3 text-center font-semibold text-white transition hover:bg-green-800"
                >
                    বিস্তারিত দেখুন →
                </Link>
            </div>
        </article>
    );
}
