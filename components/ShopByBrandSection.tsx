"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";
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
  price: string;
  brand: string;
  images: ProductImage[];
}

interface Brand {
  name: string;
  products: Product[];
}

const ShopByBrandSection: React.FC = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductsAndGroupByBrand = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/store/api/products`);
        const products: Product[] = await res.json();

        // Group products by brand
        const brandMap = new Map<string, Product[]>();
        products.forEach((product) => {
          if (product.brand) {
            if (!brandMap.has(product.brand)) {
              brandMap.set(product.brand, []);
            }
            brandMap.get(product.brand)!.push(product);
          }
        });

        // Convert to array, limit 3 products per brand
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

  if (!brands.length) return null;

  return (
    <section className="w-full mb-12 bg-gradient-to-br from-red-50 via-white to-pink-100 py-10 px-2 sm:px-0">
      {/* Title Row */}
      <div className="flex bg-white/80 backdrop-blur border-b-2 border-red-500 rounded-t-2xl items-center justify-between mb-0 px-4 sm:px-8 py-4 shadow-lg">
        <h2 className="text-3xl font-extrabold text-gray-900 flex items-center gap-3">
          <span className="text-3xl">🏷️</span>
          Browse Our Range
        </h2>
        <Link
          href="/brands"
          className="group flex items-center gap-2 text-red-600 hover:text-red-800 font-semibold transition-colors"
        >
          <span>View All Brands</span>
          <ChevronRightIcon size={18} className="group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Brand Grid */}
      <div className="rounded-b-2xl shadow-2xl p-8 bg-white/70 backdrop-blur-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {brands.slice(0, 6).map((brand) => (
            <div
              key={brand.name}
              className="group relative bg-white/80 backdrop-blur border hover:border-red-400 hover:shadow-2xl transition-all rounded-2xl flex flex-col"
              style={{ minHeight: 340 }}
            >
              {/* Brand Header */}
              <div className="flex flex-col items-center justify-center bg-gradient-to-tr from-red-500/90 to-pink-400/80 p-7 border-b rounded-t-2xl shadow-md">
                <div className="w-20 h-20 mb-2 rounded-full flex items-center justify-center shadow-xl bg-white/90 border-4 overflow-hidden">
                  <span className="text-3xl font-extrabold text-red-500">
                    {brand.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white drop-shadow mb-1">
                  {brand.name}
                </h3>
              </div>

              {/* Products */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {brand.products.map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.slug}`}
                      className="group/product"
                    >
                      <div className="aspect-square bg-gradient-to-br from-gray-100 to-pink-50 rounded-xl overflow-hidden border group-hover/product:border-red-400 shadow-sm flex items-center justify-center">
                        <img
                          src={
                            product.images.length > 0
                              ? product.images[0].src
                              : "/product_placeholder.jpg"
                          }
                          alt={product.name}
                          className="w-full h-full object-contain p-2 group-hover/product:scale-110 transition-transform"
                        />
                      </div>
                      <p className="text-xs text-gray-700 mt-2 truncate group-hover/product:text-red-600 text-center">
                        {product.name}
                      </p>
                    </Link>
                  ))}
                </div>

                {/* View Brand Button */}
                <Link
                  href={`/brand/${brand.name.toLowerCase()}`}
                  className="block w-full text-center bg-gradient-to-tr from-red-500 to-pink-500 text-white py-2.5 rounded-lg font-semibold hover:bg-red-700/90 transition-all transform hover:scale-105 shadow-md"
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
