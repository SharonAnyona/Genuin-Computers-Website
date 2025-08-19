// *********************
// Role of the component: Main page component showcasing multiple product categories
// Name of the component: CategorySectionsPage.tsx
// Developer:Sharon Anyona
// Version: 1.0
// Component call: <CategorySectionsPage />
// Input parameters: none
// Output: Page with multiple product category sections
// *********************

"use client";

import React from "react";
import ProductCategorySection from "./ProductCategorySection";
import CarouselBanner from "./CarouselBanner";
import NewArrivalsSection from "./NewArrivalsSection";

const imagesmonitors = [
  { src: "/monitor1Banner.png", alt: "Banner 1" },
  { src: "/monitor2Banner.png", alt: "Banner 2" },
  { src: "/monitor3Banner.png", alt: "Banner 3" },
  { src: "/monitor4Banner.png", alt: "Banner 4" },
];
const images2 = [
  { src: "/macbook1Banner.png", alt: "Banner 1" },
  { src: "/macbook2Banner.png", alt: "Banner 2" },
  { src: "/macbook3Banner.png", alt: "Banner 3" },
  { src: "/macbook4Banner.png", alt: "Banner 4" },
];

const CategorySectionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Category Sections */}
      <div className="max-w-7xl mx-auto py-12">
        {/* Flash Sale Section */}
        <ProductCategorySection
          title="⚡ Flash Sale"
          categorySlug="flash-sale"
        />
        {/* New Arrivals Section */}
        <NewArrivalsSection/>

        {/* Monitors Section */}
        <ProductCategorySection
          title="🖥️ Monitors"
          categorySlug="monitors"
          bannerImages={imagesmonitors}
          bannerHeight="h-[300px]"
          bannerInterval={3000}
        />

        {/* MacBook Section */}
        <ProductCategorySection
          title="🍎 MacBook"
          categorySlug="macbook"
          bannerImages={images2}
          bannerHeight="h-[300px]"
          bannerInterval={3000}
        />

        {/* Desktop Computers Section */}
        <ProductCategorySection
          title="🖥️ Desktop Computers"
          categorySlug="desktop-computers"
          bannerImages={imagesmonitors}
          bannerHeight="h-[300px]"
          bannerInterval={3000}
        />

        {/* Gaming Laptops Section */}
        <ProductCategorySection
          title="🎮 Gaming Laptops"
          categorySlug="gaming-laptops"
          bannerImages={imagesmonitors}
          bannerHeight="h-[300px]"
          bannerInterval={3000}
        />

        {/* Accessories Section */}
        <ProductCategorySection
          title="🔌 Accessories"
          categorySlug="accessories"
          bannerImages={imagesmonitors}
          bannerHeight="h-[300px]"
          bannerInterval={3000}
        />
      </div>
    </div>
  );
};

export default CategorySectionsPage;
