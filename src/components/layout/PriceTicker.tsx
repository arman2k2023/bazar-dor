
import { getProducts } from "@/lib/products";

export default async function PriceTicker() {
    const products = await getProducts();

    if (products.length === 0) {
        return null;
    }

    return (
        <section
            aria-label="আজকের বাজারদর"
            className="ticker-container overflow-hidden border-b border-green-100 bg-green-800 text-white"
        >
            <div className="ticker-track">
                {[0, 1].map((copy) => (
                    <div
                        key={copy}
                        className="ticker-group flex shrink-0 items-center gap-8 py-3 pr-8"
                        aria-hidden={copy === 1}
                    >
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="flex shrink-0 items-center gap-2 text-sm"
                            >
                                <span className="text-lg">{product.image}</span>

                                <span className="font-medium">{product.nameBn}</span>

                                <span className="font-bold">৳{product.today}</span>

                                <span
                                    className={
                                        product.change.dir === "up"
                                            ? "text-red-200"
                                            : product.change.dir === "down"
                                                ? "text-green-200"
                                                : "text-gray-200"
                                    }
                                >
                                    {product.change.dir === "up"
                                        ? "▲"
                                        : product.change.dir === "down"
                                            ? "▼"
                                            : "—"}{" "}
                                    {Math.abs(product.change.pct)}%
                                </span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}
