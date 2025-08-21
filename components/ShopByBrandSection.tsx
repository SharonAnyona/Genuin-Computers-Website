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
        const data = await fetch("http://localhost:3002/api/products");
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
    <section className="w-full mb-12">
      {/* Title Row */}
      <div className="flex bg-gray-900 border-b-2 border-red-600 rounded-t-md items-center justify-between mb-0 px-4 sm:px-6 lg:px-8 py-3 shadow-md">
        <h2 className="text-2xl md:text-2xl font-bold text-white flex items-center gap-3">
          <span className="text-2xl">🏷️</span>
          Shop by Brand
        </h2>
        <Link
          href="/brands"
          className="group flex items-center gap-2 text-white hover:text-gray-200 font-medium transition-colors duration-200"
        >
          <span>View All Brands</span>
          <ChevronRightIcon
            size={16}
            className="group-hover:translate-x-1 transition-transform duration-200"
          />
        </Link>
      </div>

      {/* Brand Grid */}
      <div className="bg-white rounded-b-md shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.slice(0, 6).map((brand, index) => (
            <div
              key={brand.name}
              className="group bg-white rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Brand Header */}
              <div className="bg-gray-900 p-6 text-center border-b border-gray-800">
                <h3 className="text-xl font-bold text-white mb-2">
                  {brand.name}
                </h3>
                <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-gray-900">
                    {brand.name.charAt(0).toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Featured Products */}
              <div className="p-6">
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {brand.products.map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.slug}`}
                      className="group/product"
                    >
                      <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden border hover:border-red-300 transition-all duration-200">
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
                      <p className="text-xs text-gray-700 mt-2 truncate group-hover/product:text-red-600 transition-colors">
                        {product.title}
                      </p>
                    </Link>
                  ))}
                </div>

                {/* View Brand Button */}
                <Link
                  href={`/brand/${brand.name.toLowerCase()}`}
                  className="block w-full text-center bg-red-600 text-white py-2.5 rounded-lg font-medium hover:bg-red-700 transition-all duration-200 transform hover:scale-105"
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
