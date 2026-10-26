
import Link from "next/link";
import { notFound } from "next/navigation";
import CategoryProductList from "@/components/product/CategoryProductList";
import { getProducts } from "@/lib/products";

const categoryNames: Record<string, string> = {
  chal: "চাল",
  dal: "ডাল",
  tel: "তেল",
  sobji: "সবজি",
  mach: "মাছ",
  mangsho: "মাংস",
  "dim-dui": "ডিম-দুধ",
  mosla: "মশলা",
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const categoryName = categoryNames[slug];

  if (!categoryName) {
    notFound();
  }

  const allProducts = await getProducts();

  const products = allProducts.filter(
    (product) => product.category === slug
  );

  return (
    <main className="min-h-screen bg-[#EFF5F0] px-5 py-10">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="text-sm font-semibold text-green-700 hover:underline"
        >
          ← হোমে ফিরে যান
        </Link>

        <div className="mt-5">
          <h1 className="text-3xl font-extrabold text-gray-900">
            {categoryName}
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            এই ক্যাটাগরির মোট {products.length}টি পণ্য
          </p>
        </div>

        <CategoryProductList products={products} />
      </div>
    </main>
  );
}
