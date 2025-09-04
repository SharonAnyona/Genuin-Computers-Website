// utils/fetchCategories.ts
// Fetches categories and subcategories from the backend API

export async function fetchCategories() {
  const res = await fetch("http://localhost:3002/api/categories", {
    next: { revalidate: 60 }, // ISR for Next.js if needed
  });
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
}
