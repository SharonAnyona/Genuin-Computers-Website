// *********************
// Role of the component: Reusable product category section with horizontal scrolling
// Name of the component: ProductCategorySection.tsx
// Developer: sharon anyona
// Version: 1.0
// Component call: <ProductCategorySection title="Category Name" categorySlug="category-slug" />
// Input parameters: title (string), categorySlug (string)
// Output: Category section with title row and scrollable products
// *********************

"use client";

import React, { useEffect, useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import CarouselBanner from "./CarouselBanner";
import { useProductStore } from "@/app/_zustand/store";
import toast from "react-hot-toast";


interface CarouselImage {
  src: string;
  alt: string;
}

interface ProductCategorySectionProps {
  title: string;
  categorySlug: string;
  bannerImages?: CarouselImage[];
  bannerHeight?: string;
  bannerInterval?: number;
  layout?: "default" | "compact" | "featured";
  itemsPerRow?: number;
}

const ProductCategorySection: React.FC<ProductCategorySectionProps> = ({
  title,
  categorySlug,
  bannerImages,
  bannerHeight = "h-[400px]",
  bannerInterval = 3000,
  layout = "default",
  itemsPerRow = 4,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
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
    const fetchProducts = async () => {
      try {
        const data = await fetch("http://localhost:3002/api/products");
        const productsData = await data.json();
        setProducts(productsData || []);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categorySlug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section className="w-full mb-12">
      {/* Title Row */}
      <div className="flex bg-gradient-to-r from-red-600 to-black rounded-t-md items-center justify-between mb-0 px-4 sm:px-6 lg:px-8 py-2 shadow-md">
        <h2 className="text-2xl md:text-2xl font-bold text-gray-50">
          {title}
        </h2>
        <Link
          href={`/shop/${categorySlug}`}
          className="group flex items-center gap-2 text-white hover:text-gray-200 font-medium transition-colors duration-200"
        >
          <span>See More</span>
          <ChevronRightIcon
            size={16}
            className="group-hover:translate-x-1 transition-transform duration-200"
          />
        </Link>
      </div>

      {/* Carousel Banner below Title Row */}
      {bannerImages && bannerImages.length > 0 && (
        <div className="mb-6">
          <CarouselBanner
            images={bannerImages}
            height={bannerHeight}
            interval={bannerInterval}
          />
        </div>
      )}

      {/* Horizontally Scrollable Products Row */}
      <div className="relative group">
        {/* Left Scroll Button */}
        <button className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-red-50 hover:border-red-300 transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110">
          <ChevronLeftIcon size={20} className="text-red-600" />
        </button>

        {/* Right Scroll Button */}
        <button className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center cursor-pointer hover:bg-red-50 hover:border-red-300 transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110">
          <ChevronRightIcon size={20} className="text-red-600" />
        </button>

        <div className={`flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide px-4 sm:px-6 lg:px-8 pb-4 scroll-smooth ${
          layout === "featured" ? "justify-center" : ""
        }`}>
          {products.slice(0, layout === "featured" ? 3 : 8).map((product: Product) => {
            // Determine card width based on layout and items per row
            const getCardWidth = () => {
              switch (layout) {
                case "compact":
                  return "w-48 md:w-52";
                case "featured":
                  return "w-80 md:w-96";
                default:
                  return "w-64 md:w-72";
              }
            };

            return (
              <div
                key={product.id}
                className={`flex-shrink-0 ${getCardWidth()} group`}
              >
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-2xl hover:border-red-200 hover:shadow-red-100/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] relative">
                  {/* Product Image */}
                  <Link href={`/product/${product.slug}`}>
                    <div className={`relative mb-4 aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 via-white to-gray-100 cursor-pointer ${
                      layout === "compact" ? "h-40" : layout === "featured" ? "h-64" : "h-48"
                    }`}>
                      {/* Subtle animated background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-red-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <img
                        src={product.mainImage ? `/${product.mainImage}` : "/product_placeholder.jpg"}
                        alt={product.title}
                        className="w-full h-full object-contain group-hover:scale-110 transition-all duration-500 drop-shadow-lg p-4 relative z-10"
                      />
                    
                    {/* Status badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2 z-20">
                      {product.isNew && (
                        <span className="bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse">
                          NEW
                        </span>
                      )}
                      {product.oldPrice && (
                        <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                          SALE
                        </span>
                      )}
                      {product.inStock === 0 && (
                        <span className="bg-gradient-to-r from-gray-600 to-gray-700 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                          OUT OF STOCK
                        </span>
                      )}
                    </div>

                    {/* Manufacturer badge */}
                    {product.manufacturer && (
                      <div className="absolute top-2 right-2">
                        <span className="bg-white bg-opacity-90 text-gray-700 text-xs font-medium px-2 py-1 rounded-full shadow-sm">
                          {product.manufacturer}
                        </span>
                      </div>
                    )}

                      {/* Quick View Overlay */}
                      {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white text-gray-900 px-3 py-2 rounded-full text-sm font-medium shadow-lg">
                            View Details
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </Link>

                  {/* Product Info */}
                  <div className="space-y-2">
                    {/* Rating */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-3 h-3 ${
                              i < (product.rating || 0)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-300 fill-current"
                            }`}
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                        <span className="text-xs text-gray-500 ml-1">({product.rating || 0})</span>
                      </div>
                      {product.inStock > 0 && (
                        <span className="text-xs text-green-600 font-medium">In Stock</span>
                      )}
                    </div>

                    <Link href={`/product/${product.slug}`}>
                      <h3 className="font-semibold text-gray-900 hover:text-red-600 transition-colors duration-200 line-clamp-2 leading-tight cursor-pointer">
                        {product.title}
                      </h3>
                    </Link>
                    
                    {/* Description for featured layout */}
                    {layout === "featured" && product.description && (
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {product.description}
                      </p>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-red-600">
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

                  {/* Add to Cart Button */}
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className={`w-full mt-4 py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                      (product.inStock ?? 0) > 0
                        ? "bg-red-600 text-white hover:bg-red-700 hover:scale-105 shadow-md hover:shadow-lg"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                    disabled={(product.inStock ?? 0) === 0}
                  >
                    {(product.inStock ?? 0) > 0 ? "Add to Cart" : "Out of Stock"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scroll Indicators for Mobile */}
        <div className="flex justify-center mt-4 lg:hidden">
          <div className="flex space-x-2">
            {[...Array(Math.ceil(products.length / 2))].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-red-300"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCategorySection;
