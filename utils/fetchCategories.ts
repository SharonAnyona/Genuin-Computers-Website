// utils/fetchCategories.ts
import { BACKEND_URL } from "@/config";
// Fetches categories and subcategories from the backend API

export async function fetchCategories() {
  const res = await fetch(`${BACKEND_URL}/store/api/categories`, {
    next: { revalidate: 60 }, // ISR for Next.js if needed
  });
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}
