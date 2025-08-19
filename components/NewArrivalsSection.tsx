// *********************
// Role of the component: New Arrivals section with spotlight layout
// Name of the component: NewArrivalsSection.tsx
// Developer: sharon anyona
// Version: 1.0
// Component call: <NewArrivalsSection />
// Input parameters: none
// Output: Featured new arrivals with spotlight design
// *********************

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRightIcon, StarIcon, ClockIcon } from "lucide-react";
import { useProductStore } from "@/app/_zustand/store";
import toast from "react-hot-toast";

const NewArrivalsSection: React.FC = () => {
  const [newProducts, setNewProducts] = useState<Product[]>([]);
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
    const fetchNewProducts = async () => {
      try {
        const data = await fetch("http://localhost:3002/api/products");
        const productsData = await data.json();
        
        // Filter for new products
        const newArrivals = productsData.filter((product: Product) => product.isNew);
        setNewProducts(newArrivals);
      } catch (error) {
        console.error("Error fetching new products:", error);
        setNewProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNewProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
      </div>
    );
  }

  if (!newProducts || newProducts.length === 0) {
    return null;
  }

  const featuredProduct = newProducts[0];
  const otherProducts = newProducts.slice(1, 7);

  return (
    <section className="w-full mb-12">
      {/* Title Row */}
      <div className="flex bg-gradient-to-r from-green-600 to-emerald-700 rounded-t-md items-center justify-between mb-0 px-4 sm:px-6 lg:px-8 py-3 shadow-md">
        <h2 className="text-2xl md:text-2xl font-bold text-white flex items-center gap-3">
          <ClockIcon size={24} className="text-green-200" />
          New Arrivals
        </h2>
        <Link
          href="/new-arrivals"
          className="group flex items-center gap-2 text-white hover:text-gray-200 font-medium transition-colors duration-200"
        >
          <span>View All New</span>
          <ChevronRightIcon
            size={16}
            className="group-hover:translate-x-1 transition-transform duration-200"
          />
        </Link>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-b-md shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {/* Featured Product Spotlight */}
          <div className="lg:col-span-1 bg-gradient-to-br from-green-50 to-emerald-50 p-6 border-r border-gray-100">
            <div className="text-center mb-4">
              <span className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                <StarIcon size={16} fill="currentColor" />
                FEATURED NEW
              </span>
            </div>
            
            <Link href={`/product/${featuredProduct.slug}`} className="group block">
              <div className="relative mb-4 aspect-square overflow-hidden rounded-xl bg-white shadow-lg">
                <img
                  src={featuredProduct.mainImage ? `/${featuredProduct.mainImage}` : "/product_placeholder.jpg"}
                  alt={featuredProduct.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* NEW Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-gradient-to-r from-green-600 to-green-700 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg animate-pulse">
                    NEW
                  </span>
                </div>
              </div>
              
              <h3 className="font-bold text-lg text-gray-900 group-hover:text-green-600 transition-colors mb-2 line-clamp-2">
                {featuredProduct.title}
              </h3>
              
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl font-bold text-green-600">
                  KSh {featuredProduct.price.toFixed(2)}
                </span>
                {featuredProduct.oldPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    KSh {featuredProduct.oldPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </Link>
            
            <button 
              onClick={() => handleAddToCart(featuredProduct)}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 transform hover:scale-105"
            >
              Add to Cart
            </button>
          </div>

          {/* Other New Products Grid */}
          <div className="lg:col-span-2 p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {otherProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.slug}`}
                  className="group block"
                >
                  <div className="bg-gray-50 rounded-lg p-3 hover:bg-green-50 hover:shadow-md transition-all duration-200 border border-transparent hover:border-green-200">
                    <div className="relative aspect-square mb-3 overflow-hidden rounded-lg bg-white">
                      <img
                        src={product.mainImage ? `/${product.mainImage}` : "/product_placeholder.jpg"}
                        alt={product.title}
                        className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                      />
                      
                      {/* Mini NEW Badge */}
                      <div className="absolute top-1 left-1">
                        <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          NEW
                        </span>
                      </div>
                    </div>
                    
                    <h4 className="font-medium text-sm text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2 mb-2">
                      {product.title}
                    </h4>
                    
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-bold text-green-600">
                        KSh {product.price.toFixed(2)}
                      </span>
                      {product.oldPrice && (
                        <span className="text-xs text-gray-500 line-through">
                          KSh {product.oldPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            {otherProducts.length > 6 && (
              <div className="text-center mt-6">
                <Link
                  href="/new-arrivals"
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
                >
                  <span>View More New Arrivals</span>
                  <ChevronRightIcon size={16} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivalsSection;
