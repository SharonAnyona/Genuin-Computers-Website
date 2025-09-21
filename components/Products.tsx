"use client";

import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { BACKEND_URL } from "@/config";
import { useSearchParams } from "next/navigation";

// *********************
// Role of the component: Showing products on the shop page with applied filter and sort
// Name of the component: Products.tsx
// Developer: Sharon Anyona
// Version: 2.0 (Converted to client component)
// Component call: <Products slug={slug} />
// Input parameters: { slug }: any
// Output: products grid
// *********************

const Products = ({ slug }: any) => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      
      // getting all data from URL slug and preparing everything for sending GET request
      const inStockNum = slug?.searchParams?.inStock === "true" ? 1 : 0;
      const outOfStockNum = slug?.searchParams?.outOfStock === "true" ? 1 : 0;
      const page = slug?.searchParams?.page ? Number(slug?.searchParams?.page) : 1;

      let stockMode: string = "lte";

      // preparing inStock and out of stock filter for GET request
      // If in stock checkbox is checked, stockMode is "equals"
      if (inStockNum === 1) {
        stockMode = "equals";
      }
      // If out of stock checkbox is checked, stockMode is "lt"
      if (outOfStockNum === 1) {
        stockMode = "lt";
      }
      // If in stock and out of stock checkboxes are checked, stockMode is "lte"
      if (inStockNum === 1 && outOfStockNum === 1) {
        stockMode = "lte";
      }
      // If in stock and out of stock checkboxes aren't checked, stockMode is "gt"
      if (inStockNum === 0 && outOfStockNum === 0) {
        stockMode = "gt";
      }

      // Always send category filter if slug is present
      let filterQuery = "";
      if (slug?.params?.slug?.length > 0) {
        const currentSlug = slug?.params?.slug[0];
        filterQuery = `filters[category][$equals]=${currentSlug}&`;
      }

      try {
        // sending API request with filtering, sorting and pagination for getting all products
        const response = await fetch(
          `${BACKEND_URL}/store/api/products/?filters[price][$lte]=${
            slug?.searchParams?.price || 300000
          }&filters[rating][$gte]=${
            Number(slug?.searchParams?.rating) || 0
          }&filters[inStock][$${stockMode}]=1&${filterQuery}sort=${
            slug?.searchParams?.sort
          }&page=${page}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const productsData = await response.json();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [slug, searchParams]); // Re-fetch when slug or searchParams change

  if (loading) {
    return (
      <div className="grid grid-cols-3 justify-items-center gap-x-2 gap-y-5 max-[1300px]:grid-cols-3 max-lg:grid-cols-2 max-[500px]:grid-cols-1">
        <div className="col-span-full text-center py-8">
          <div className="animate-pulse text-gray-600">Loading products...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 justify-items-center gap-x-2 gap-y-5 max-[1300px]:grid-cols-3 max-lg:grid-cols-2 max-[500px]:grid-cols-1">
      {products.length > 0 ? (
        products.map((product: Product) => (
          <ProductItem key={product.id} product={product} color="black" />
        ))
      ) : (
        <h3 className="text-3xl mt-5 text-center w-full col-span-full max-[1000px]:text-2xl max-[500px]:text-lg">
          No products found for specified query
        </h3>
      )}
    </div>
  );
};

export default Products;