
import PriceTicker from "@/components/layout/PriceTicker";
import HeroSection from "@/components/home/HeroSection";
import ProductCard from "@/components/product/ProductCard";
import { getProducts } from "@/lib/products";
import ProductSearch from "@/components/product/ProductSearch";

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
            {/* Scrolling Price Ticker */}
            <PriceTicker />

            <main className="min-h-screen bg-[#EFF5F0] px-5 pb-10">
                {/* Hero Section */}
                <div className="mx-auto mt-8 max-w-7xl">
                    <HeroSection />
                </div>
                {/* Search Filter */}
                <ProductSearch products={products} />

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
        </>
    );
}
