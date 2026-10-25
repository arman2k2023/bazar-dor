
import type {
    Category,
    CategoriesResponse,
} from "@/types/product";

import { API_ENDPOINTS } from "@/lib/api";

export async function getCategories(): Promise<Category[]> {
    const response = await fetch(API_ENDPOINTS.categories);

    if (!response.ok) {
        throw new Error("ক্যাটাগরির তথ্য লোড করা যায়নি");
    }

    const data: CategoriesResponse = await response.json();

    return data.value;
}
