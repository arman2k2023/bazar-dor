
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

export async function getProductById(
  id: string
): Promise<Product | null> {
  const response = await fetch(
    `${API_ENDPOINTS.products}/${encodeURIComponent(id)}`
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("পণ্যের বিস্তারিত তথ্য লোড করা যায়নি");
  }

  const product: Product = await response.json();

  return product;
}
