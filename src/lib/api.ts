
export const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL ??
    "https://openapi.programming-hero.com/api/bazardor";

export const API_ENDPOINTS = {
    products: `${API_BASE_URL}/products`,
    categories: `${API_BASE_URL}/categories`,
};
