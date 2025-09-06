// *********************
// Role of the component: Shop by Brand section with brand logos and featured products
// Name of the component: ShopByBrandSection.tsx
// Developer: sharon anyona
// Version: 1.0
// Component call: <ShopByBrandSection />
// Input parameters: none
// Output: Brand showcase with featured products per brand
// *********************

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";
import { BACKEND_URL } from "@/config";

interface Brand {
  name: string;
  logo?: string;
  products: Product[];
}

const ShopByBrandSection: React.FC = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductsAndGroupByBrand = async () => {
      try {
        const data = await fetch(`${BACKEND_URL}/api/products`);
        const productsData = await data.json();

        // Group products by manufacturer/brand
        const brandMap = new Map<string, Product[]>();
        productsData.forEach((product: Product) => {
          if (product.manufacturer) {
            if (!brandMap.has(product.manufacturer)) {
              brandMap.set(product.manufacturer, []);
            }
            brandMap.get(product.manufacturer)!.push(product);
          }
        });

        // Convert to brands array and limit to 3 products per brand
        const brandsArray = Array.from(brandMap.entries()).map(
          ([name, products]) => ({
            name,
            products: products.slice(0, 3),
          })
        );

        setBrands(brandsArray);
      } catch (error) {
        console.error("Error fetching products:", error);
        setBrands([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProductsAndGroupByBrand();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (!brands || brands.length === 0) {
    return null;
  }

  return (
    <section className="w-full mb-12 bg-gradient-to-br from-red-50 via-white to-pink-100 py-10 px-2 sm:px-0">
      {/* Title Row */}
      <div className="flex bg-white/80 backdrop-blur border-b-2 border-red-500 rounded-t-2xl items-center justify-between mb-0 px-4 sm:px-8 py-4 shadow-lg">
        <h2 className="text-3xl md:text-3xl font-extrabold text-gray-900 flex items-center gap-3 tracking-tight">
          <span className="text-3xl">🏷️</span>
          Shop by Brand
        </h2>
        <Link
          href="/brands"
          className="group flex items-center gap-2 text-red-600 hover:text-red-800 font-semibold transition-colors duration-200"
        >
          <span>View All Brands</span>
          <ChevronRightIcon
            size={18}
            className="group-hover:translate-x-1 transition-transform duration-200"
          />
        </Link>
      </div>

      {/* Brand Grid */}
      <div className="rounded-b-2xl shadow-2xl p-8 bg-white/70 backdrop-blur-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {brands.slice(0, 6).map((brand, index) => (
            <div
              key={brand.name}
              className="group relative bg-white/80 backdrop-blur border border-gray-100 hover:border-red-400 hover:shadow-2xl transition-all duration-300 overflow-hidden rounded-2xl p-0 flex flex-col"
              style={{ minHeight: 340 }}
            >
              {/* Brand Header */}
              <div className="flex flex-col items-center justify-center bg-gradient-to-tr from-red-500/90 to-pink-400/80 p-7 border-b border-gray-200 rounded-t-2xl shadow-md">
                <div className="w-20 h-20 mb-2 rounded-full flex items-center justify-center shadow-xl bg-white/90 border-4 border-white overflow-hidden">
                  {brand.logo ? (
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="text-3xl font-extrabold text-red-500">
                      {brand.name.charAt(0).toUpperCase()}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white drop-shadow mb-1 tracking-wide">
                  {brand.name}
                </h3>
              </div>

              {/* Featured Products */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {brand.products.map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.slug}`}
                      className="group/product"
                    >
                      <div className="aspect-square bg-gradient-to-br from-gray-100 to-pink-50 rounded-xl overflow-hidden border border-gray-200 group-hover/product:border-red-400 shadow-sm transition-all duration-200 flex items-center justify-center">
                        <img
                          src={
                            product.mainImage
                              ? `/${product.mainImage}`
                              : "/product_placeholder.jpg"
                          }
                          alt={product.title}
                          className="w-full h-full object-contain p-2 group-hover/product:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <p className="text-xs text-gray-700 mt-2 truncate group-hover/product:text-red-600 transition-colors text-center">
                        {product.title}
                      </p>
                    </Link>
                  ))}
                </div>

                {/* View Brand Button */}
                <Link
                  href={`/brand/${brand.name.toLowerCase()}`}
                  className="block w-full text-center bg-gradient-to-tr from-red-500 to-pink-500 text-white py-2.5 rounded-lg font-semibold hover:bg-red-700/90 transition-all duration-200 transform hover:scale-105 shadow-md"
                >
                  View All {brand.name} Products
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByBrandSection;
