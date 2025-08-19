// *********************
// Role of the component: Recommended for You section with personalized layout
// Name of the component: RecommendedSection.tsx
// Developer: sharon anyona
// Version: 1.0
// Component call: <RecommendedSection />
// Input parameters: none
// Output: Personalized product recommendations with smart layout
// *********************

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRightIcon, HeartIcon, TrendingUpIcon, UserIcon } from "lucide-react";
import { useProductStore } from "@/app/_zustand/store";
import toast from "react-hot-toast";

const RecommendedSection: React.FC = () => {
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart, calculateTotals } = useProductStore();

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.mainImage,
      amount: 1
    });
    calculateTotals();
    toast.success(`${product.title} added to cart!`);
  };

  useEffect(() => {
    const fetchRecommendedProducts = async () => {
      try {
        const data = await fetch("http://localhost:3002/api/products");
        const productsData = await data.json();
        
        // Simple recommendation logic: high-rated products with good stock
        const recommended = productsData
          .filter((product: Product) => product.rating >= 4 && product.inStock > 0)
          .sort((a: Product, b: Product) => b.rating - a.rating)
          .slice(0, 8);
        
        setRecommendedProducts(recommended);
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
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (!recommendedProducts || recommendedProducts.length === 0) {
    return null;
  }

  return (
    <section className="w-full mb-12">
      {/* Title Row */}
      <div className="flex bg-gradient-to-r from-purple-600 to-pink-600 rounded-t-md items-center justify-between mb-0 px-4 sm:px-6 lg:px-8 py-3 shadow-md">
        <h2 className="text-2xl md:text-2xl font-bold text-white flex items-center gap-3">
          <UserIcon size={24} className="text-purple-200" />
          Recommended for You
        </h2>
        <Link
          href="/recommended"
          className="group flex items-center gap-2 text-white hover:text-gray-200 font-medium transition-colors duration-200"
        >
          <span>View All</span>
          <ChevronRightIcon
            size={16}
            className="group-hover:translate-x-1 transition-transform duration-200"
          />
        </Link>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-b-md shadow-lg p-6">
        {/* Recommendation Reasons */}
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
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
              className="group bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 overflow-hidden relative"
            >
              {/* Recommendation Badge */}
              {index === 0 && (
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    #1 PICK
                  </span>
                </div>
              )}

              <Link href={`/product/${product.slug}`} className="block p-4">
                {/* Product Image */}
                <div className="relative mb-4 aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 via-white to-gray-100">
                  <img
                    src={product.mainImage ? `/${product.mainImage}` : "/product_placeholder.jpg"}
                    alt={product.title}
                    className="w-full h-full object-contain p-3 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Product Info */}
                <div className="space-y-2">
                  {/* Rating */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < (product.rating || 0)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300 fill-current"
                          }`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                      <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
                    </div>
                    <span className="text-xs text-purple-600 font-medium">Recommended</span>
                  </div>

                  <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-200 line-clamp-2 leading-tight">
                    {product.title}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-purple-600">
                          KSh {product.price.toFixed(2)}
                        </span>
                        {product.oldPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            KSh {product.oldPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                      {product.oldPrice && (
                        <span className="text-xs text-green-600 font-medium">
                          Save KSh {(product.oldPrice - product.price).toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>

              {/* Add to Cart Button */}
              <div className="px-4 pb-4">
                <button 
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  Add to Cart
                </button>
              </div>

              {/* Recommendation Reason */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-600/10 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-xs text-purple-700 font-medium text-center">
                  {index === 0 ? "Most popular in your category" : 
                   index === 1 ? "Highly rated by customers" :
                   index === 2 ? "Great value for money" :
                   "Frequently bought together"}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-8">
          <Link
            href="/recommended"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
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
