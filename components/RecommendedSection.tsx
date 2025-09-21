// *********************
// Role of the component: Recommended for You section driven by backend API
// Name of the component: RecommendedSection.tsx
// Developer: sharon anyona
// Version: 1.2
// Component call: <RecommendedSection />
// Input parameters: none
// Output: Displays recommended products as returned by backend
// *********************

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ChevronRightIcon,
  HeartIcon,
  TrendingUpIcon,
  UserIcon,
} from "lucide-react";
import { useProductStore } from "@/app/_zustand/store";
import toast from "react-hot-toast";
import { BACKEND_URL } from "@/config";

interface ProductImage {
  id: number;
  src: string;
  alt: string;
}

interface Product {
  id: number;
  name: string;
  slug: string;
  price: string; // comes as string from backend
  brand: string;
  images: ProductImage[];
}

const RecommendedSection: React.FC = () => {
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart, calculateTotals } = useProductStore();

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      title: product.name,
      price: parseFloat(product.price),
      image: product.images[0]?.src || "/product_placeholder.jpg",
      amount: 1,
    });
    calculateTotals();
    toast.success(`${product.name} added to cart!`);
  };

  useEffect(() => {
    const fetchRecommendedProducts = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/store/api/products/`, {
          cache: "no-store",
        });
        if (!res.ok) throw new Error("Failed to fetch recommended products");

        const data: Product[] = await res.json();
        setRecommendedProducts(data); // directly backend format
      } catch (error) {
        console.error("Error fetching recommended products:", error);
        setRecommendedProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendedProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (!recommendedProducts.length) {
    return (
      <section className="w-full mb-12">
        <div className="flex bg-red-600 rounded-t-md items-center justify-between px-4 sm:px-6 lg:px-8 py-3 shadow-md">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            <UserIcon size={24} className="text-red-200" />
            Recommended for You
          </h2>
        </div>
        <div className="bg-white rounded-b-md shadow-lg p-6">
          <p className="text-gray-600">
            No recommendations available right now. Check back soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full mb-12">
      {/* Title Row */}
      <div className="flex bg-red-600 rounded-t-md items-center justify-between px-4 sm:px-6 lg:px-8 py-3 shadow-md">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <UserIcon size={24} className="text-red-200" />
          Recommended for You
        </h2>
        <Link
          href="/recommended"
          className="group flex items-center gap-2 text-white hover:text-gray-200 font-medium transition-colors"
        >
          <span>View All</span>
          <ChevronRightIcon size={16} className="group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-b-md shadow-lg p-6">
        {/* Recommendation Labels */}
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
            <TrendingUpIcon size={14} />
            Top Rated
          </span>
          <span className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
            <HeartIcon size={14} />
            Popular Choice
          </span>
          <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
            <UserIcon size={14} />
            Based on Your Browsing
          </span>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendedProducts.map((product, index) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-xl transition-all overflow-hidden relative"
            >
              {/* Badge for #1 pick */}
              {index === 0 && (
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    #1 PICK
                  </span>
                </div>
              )}

              <Link href={`/product/${product.slug}`} className="block p-4">
                {/* Product Image */}
                <div className="relative mb-4 aspect-square overflow-hidden rounded-xl bg-white">
                  <img
                    src={
                      product.images.length > 0
                        ? product.images[0].src
                        : "/product_placeholder.jpg"
                    }
                    alt={product.name}
                    className="w-full h-full object-contain p-3 group-hover:scale-110 transition-transform"
                  />
                </div>

                {/* Product Info */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900 group-hover:text-red-600 line-clamp-2 leading-tight">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-red-600">
                      KSh {parseFloat(product.price).toFixed(2)}
                    </span>
                  </div>
                </div>
              </Link>

              {/* Add to Cart */}
              <div className="px-4 pb-4">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-700 transition-all transform hover:scale-105 shadow-md"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-8">
          <Link
            href="/recommended"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-all transform hover:scale-105"
          >
            <span>Discover More Recommendations</span>
            <ChevronRightIcon size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecommendedSection;
