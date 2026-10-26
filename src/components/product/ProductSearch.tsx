
"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/types/product";
import ProductCard from "@/components/product/ProductCard";

type ProductSearchProps = {
    products: Product[];
};

export default function ProductSearch({
    products,
}: ProductSearchProps) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = useMemo(() => {
        const query = searchTerm.trim().toLowerCase();

        if (!query) return [];

        return products.filter((product) =>
            product.nameBn.toLowerCase().includes(query)
        );
    }, [products, searchTerm]);

    return (
        <section className="mx-auto mt-10 max-w-7xl">
            <h2 className="text-2xl font-extrabold text-gray-900">
                পণ্য খুঁজুন
            </h2>

            <p className="mt-2 text-sm text-gray-500">
                পণ্যের বাংলা নাম লিখে বাজারদর খুঁজে দেখুন।
            </p>

            <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="যেমন: চাল, আলু, পেঁয়াজ..."
                aria-label="পণ্যের নাম দিয়ে খুঁজুন"
                className="mt-5 w-full rounded-xl border border-green-200 bg-white px-5 py-4 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />

            {searchTerm.trim() && (
                <div className="mt-6">
                    <p className="mb-4 text-sm text-gray-600">
                        পাওয়া গেছে {filteredProducts.length}টি পণ্য
                    </p>

                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {filteredProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-2xl bg-white p-8 text-center">
                            <p className="font-semibold text-gray-700">
                                দুঃখিত, এই নামে কোনো পণ্য পাওয়া যায়নি।
                            </p>
                        </div>
                    )}
                </div>
            )}
        </section>
    );
}
