// *********************
// Role of the component: Showcase different product categories with various layouts
// Name of the component: CategoryShowcase.tsx
// Developer: sharon anyona
// Version: 1.0
// Component call: <CategoryShowcase />
// Input parameters: None
// Output: Multiple category sections demonstrating different layouts
// *********************

"use client";

import React from "react";
import ProductCategorySection from "./ProductCategorySection";

const CategoryShowcase: React.FC = () => {
  // Sample banner images for different categories
  const laptopBanners = [
    { src: "/laptop-banner-1.jpg", alt: "Latest MacBooks" },
    { src: "/laptop-banner-2.jpg", alt: "Gaming Laptops" },
  ];

  const monitorBanners = [
    { src: "/monitor-banner-1.jpg", alt: "4K Monitors" },
    { src: "/monitor-banner-2.jpg", alt: "Gaming Monitors" },
  ];

  const accessoryBanners = [
    { src: "/accessory-banner-1.jpg", alt: "Premium Accessories" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Genuin Computers - Premium Tech Store
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest laptops, desktop PCs, MacBooks, monitors, and accessories 
            from top brands like Apple, Dell, HP, and more.
          </p>
        </div>

        {/* Featured Laptops Section */}
        <ProductCategorySection
          title="Featured Laptops"
          categorySlug="laptops"
          layout="featured"
          bannerImages={laptopBanners}
          bannerHeight="h-[300px]"
          bannerInterval={4000}
        />

        {/* Desktop Computers Section */}
        <ProductCategorySection
          title="Desktop Computers"
          categorySlug="computers"
          layout="default"
        />

        {/* Monitors Section */}
        <ProductCategorySection
          title="Professional Monitors"
          categorySlug="monitors"
          layout="default"
          bannerImages={monitorBanners}
          bannerHeight="h-[250px]"
        />

        {/* Accessories Section - Compact Layout */}
        <ProductCategorySection
          title="Essential Accessories"
          categorySlug="accessories"
          layout="compact"
          itemsPerRow={6}
          bannerImages={accessoryBanners}
          bannerHeight="h-[200px]"
        />

        {/* Gaming Peripherals */}
        <ProductCategorySection
          title="Gaming Peripherals"
          categorySlug="mice"
          layout="default"
        />

        {/* Audio Equipment */}
        <ProductCategorySection
          title="Premium Audio"
          categorySlug="headphones"
          layout="compact"
        />
      </div>
    </div>
  );
};

export default CategoryShowcase;
