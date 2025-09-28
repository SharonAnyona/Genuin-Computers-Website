// utils/fetchCategories.ts
import { BACKEND_URL } from "@/config";

// ---- Types ----
export type Category = {
  id: number;
  name: string;
  slug: string;
  subcategories?: Category[];
};

export type CategoryResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Category[];
};

// ---- Fetch categories ----
export async function fetchCategories(
  url: string = `${BACKEND_URL}/store/api/categories`
): Promise<CategoryResponse> {
  const res = await fetch(url, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Failed to fetch categories");

  return res.json();
}
