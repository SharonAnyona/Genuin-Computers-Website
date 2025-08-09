// *********************
// Role of the component: products section intended to be on the home page
// Name of the component: ProductsSection.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <ProductsSection slug={slug} />
// Input parameters: no input parameters
// Output: products grid
// *********************

import React from "react";
import ProductItem from "./ProductItem";
import Heading from "./Heading";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const ProductsSection = async () => {
  // sending API request for getting all products
  const data = await fetch("http://localhost:3001/api/products");
  const products = await data.json();
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
        <div className="flex space-x-2">
          <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
            <ChevronLeftIcon size={20} />
          </button>
          <button className="p-2 border border-gray-300 rounded-full hover:bg-gray-100">
            <ChevronRightIcon size={20} />
          </button>
      </div>
      <div className="flex justify-between items-center mb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product: Product) => (
            <ProductItem key={product.id} product={product} color="black" />
          ))}
        </div>
      </div>
      <div className="text-center mt-8">
        <a
          href="#"
          className="inline-block px-6 py-3 border border-red-600 text-red-600 font-medium rounded-md hover:bg-red-50 transition-colors"
        >
          View All Products
        </a>
      </div>
    </section>
  );
};

export default ProductsSection;
