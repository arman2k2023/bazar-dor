
import Navbar from "@/components/layout/Navbar";
import PriceTicker from "@/components/layout/PriceTicker";
import HeroSection from "@/components/home/HeroSection";
import { getProducts } from "@/lib/products";

export default async function HomePage() {
    const products = await getProducts();

    const increasedProducts = products.filter(
        (product) => product.change.dir === "up"
    );

    const decreasedProducts = products.filter(
        (product) => product.change.dir === "down"
    );

    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Scrolling Price Ticker */}
            <PriceTicker />

            <main className="min-h-screen bg-[#EFF5F0] px-5 pb-10">
                {/* Hero Section */}
                <div className="mx-auto mt-8 max-w-7xl">
                    <HeroSection />
                </div>

                {/* Products with Increased Prices */}
                {increasedProducts.length > 0 && (
                    <section className="mx-auto mt-12 max-w-7xl">
                        <div className="mb-6">
                            <h2 className="text-2xl font-extrabold text-gray-900">
                                আজ দাম বেড়েছে{" "}
                                <span className="text-red-600">▲</span>
                            </h2>

                            <p className="mt-2 text-sm text-gray-500">
                                যেসব পণ্যের দাম গতকালের তুলনায় বেড়েছে
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {increasedProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </div>
                    </section>
                )}

                {/* Products with Decreased Prices */}
                {decreasedProducts.length > 0 && (
                    <section className="mx-auto mt-12 max-w-7xl">
                        <div className="mb-6">
                            <h2 className="text-2xl font-extrabold text-gray-900">
                                আজ দাম কমেছে{" "}
                                <span className="text-green-700">▼</span>
                            </h2>

                            <p className="mt-2 text-sm text-gray-500">
                                যেসব পণ্যের দাম গতকালের তুলনায় কমেছে
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {decreasedProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </div>
                    </section>
                )}

                {/* All Products */}
                <section
                    id="all-products"
                    className="mx-auto mt-12 max-w-7xl scroll-mt-6"
                >
                    <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                        <div>
                            <h2 className="text-2xl font-extrabold text-gray-900">
                                সব পণ্য
                            </h2>

                            <p className="mt-2 text-sm text-gray-500">
                                বাজারের সর্বশেষ পণ্যমূল্য দেখুন
                            </p>
                        </div>

                        <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-green-700 shadow-sm">
                            মোট {products.length}টি পণ্য
                        </span>
                    </div>

                    {products.length > 0 ? (
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {products.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-2xl bg-white p-10 text-center">
                            <p className="font-semibold text-gray-700">
                                কোনো পণ্য পাওয়া যায়নি।
                            </p>
                        </div>
                    )}
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-green-100 bg-white px-5 py-8">
                <div className="mx-auto max-w-7xl text-center">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} বাজার দর — সঠিক বাজারদর জানুন।
                    </p>
                </div>
            </footer>
        </>
    );
}

/* Product Card */
import type { Product } from "@/types/product";

function ProductCard({ product }: { product: Product }) {
    const changeStyle =
        product.change.dir === "up"
            ? "bg-red-50 text-red-600"
            : product.change.dir === "down"
                ? "bg-green-50 text-green-700"
                : "bg-gray-100 text-gray-600";

    const changeIcon =
        product.change.dir === "up"
            ? "▲"
            : product.change.dir === "down"
                ? "▼"
                : "—";

    return (
        <article className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
            {/* Product Icon and Price Change */}
            <div className="flex items-start justify-between gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-4xl">
                    {product.image}
                </div>

                <span
                    className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-bold ${changeStyle}`}
                >
                    {changeIcon} {Math.abs(product.change.pct)}%
                </span>
            </div>

            {/* Product Information */}
            <div className="mt-5">
                <h3 className="text-lg font-bold text-gray-800">
                    {product.nameBn}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                    {product.categoryNameBn} · প্রতি {product.unit}
                </p>
            </div>

            {/* Price Information */}
            <div className="mt-5 flex items-end justify-between gap-3 border-t border-gray-100 pt-4">
                <div>
                    <p className="text-xs text-gray-500">আজকের দাম</p>
                    <p className="mt-1 text-2xl font-extrabold text-green-700">
                        ৳{product.today}
                    </p>
                </div>

                <div className="text-right">
                    <p className="text-xs text-gray-400">গতকালের দাম</p>
                    <p className="mt-1 text-sm font-semibold text-gray-600">
                        ৳{product.yesterday}
                    </p>
                </div>
            </div>
        </article>
    );
}
