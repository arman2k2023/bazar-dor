
import type { Product } from "@/types/product";
import { API_ENDPOINTS } from "@/lib/api";

export async function getProducts(): Promise<Product[]> {
    const response = await fetch(API_ENDPOINTS.products);

    if (!response.ok) {
        throw new Error("পণ্যের তথ্য লোড করা যায়নি");
    }

    const data: Product[] = await response.json();

    return data;
}
