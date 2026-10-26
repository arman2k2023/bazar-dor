
"use client";

import { useState } from "react";
import type { Product } from "@/types/product";
import ProductCard from "@/components/product/ProductCard";

type SortOption = "default" | "price-asc" | "price-desc";
type FilterOption = "all" | "up" | "down";

type CategoryProductListProps = {
  products: Product[];
};

export default function CategoryProductList({
  products,
}: CategoryProductListProps) {
  const [sortBy, setSortBy] = useState<SortOption>("default");
  const [filterBy, setFilterBy] = useState<FilterOption>("all");

  const filteredProducts = products.filter((product) => {
    if (filterBy === "up") {
      return product.change.dir === "up";
    }

    if (filterBy === "down") {
      return product.change.dir === "down";
    }

    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") {
      return a.today - b.today;
    }

    if (sortBy === "price-desc") {
      return b.today - a.today;
    }

    return 0;
  });

  return (
    <div className="mt-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="flex flex-col gap-2 text-sm font-semibold text-gray-700">
          দাম সাজান
          <select
            value={sortBy}
            onChange={(event) =>
              setSortBy(event.target.value as SortOption)
            }
            className="rounded-lg border border-green-200 bg-white px-4 py-3 outline-none focus:border-green-600"
          >
            <option value="default">ডিফল্ট</option>
            <option value="price-asc">দাম: কম থেকে বেশি</option>
            <option value="price-desc">দাম: বেশি থেকে কম</option>
          </select>
        </label>

        <label className="flex flex-col gap-2 text-sm font-semibold text-gray-700">
          দামের পরিবর্তন
          <select
            value={filterBy}
            onChange={(event) =>
              setFilterBy(event.target.value as FilterOption)
            }
            className="rounded-lg border border-green-200 bg-white px-4 py-3 outline-none focus:border-green-600"
          >
            <option value="all">সব পণ্য</option>
            <option value="up">দাম বেড়েছে</option>
            <option value="down">দাম কমেছে</option>
          </select>
        </label>
      </div>

      <p className="mb-4 text-sm text-gray-500">
        পাওয়া গেছে {sortedProducts.length}টি পণ্য
      </p>

      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl bg-white p-10 text-center">
          <p className="font-semibold text-gray-700">
            এই ফিল্টারে কোনো পণ্য পাওয়া যায়নি।
          </p>
        </div>
      )}
    </div>
  );
}
