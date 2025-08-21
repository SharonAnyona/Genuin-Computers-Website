// *********************
// Role of the component: products section intended to be on the home page
// Name of the component: ProductsSection.tsx
// Developer: Sharon Anyona
// Version: 1.0
// Component call: <ProductsSection slug={slug} />
// Input parameters: no input parameters
// Output: products grid
// *********************

import React from "react";
import ProductItem from "./ProductItem";
import Heading from "./Heading";
import { ChevronLeftIcon, ChevronRightIcon, SparklesIcon } from "lucide-react";
import { BACKEND_URL } from "@/config";
const ProductsSection = async () => {
  // sending API request for getting all products
  const data = await fetch(`${BACKEND_URL}/api/products`);
  const products = await data.json();

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-red-100 to-pink-100 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-100 to-indigo-100 rounded-full filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-full text-sm font-medium text-red-700 mb-6">
            <SparklesIcon size={16} className="text-red-500" />
            Featured Collection
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Discover Our Premium Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Handpicked selection of the finest quality products, carefully
            curated for your satisfaction
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Featured Products
            </h3>
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
              {products.length} items
            </span>
          </div>
          <div className="flex space-x-3">
            <button className="p-3 border border-gray-200 rounded-full hover:bg-white hover:border-gray-300 hover:shadow-md transition-all duration-200 group">
              <ChevronLeftIcon
                size={20}
                className="text-gray-600 group-hover:text-gray-800"
              />
            </button>
            <button className="p-3 border border-gray-200 rounded-full hover:bg-white hover:border-gray-300 hover:shadow-md transition-all duration-200 group">
              <ChevronRightIcon
                size={20}
                className="text-gray-600 group-hover:text-gray-800"
              />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {products.map((product: Product) => (
            <div key={product.id} className="group">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-xl hover:border-gray-200 transition-all duration-300 transform hover:-translate-y-1">
                <ProductItem product={product} color="black" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4">
            <a
              href="/shop"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <span>View All Products</span>
              <ChevronRightIcon
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </a>
            <p className="text-sm text-gray-500">
              Explore our complete collection of premium products
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
