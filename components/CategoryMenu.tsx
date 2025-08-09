// *********************
// Role of the component: Category wrapper that will contain title and category items
// Name of the component: CategoryMenu.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <CategoryMenu />
// Input parameters: no input parameters
// Output: section title and category items
// *********************

import React from "react";
import CategoryItem from "./CategoryItem";
import Image from "next/image";
import { categoryMenuList } from "@/lib/utils";
import Heading from "./Heading";

const CategoryMenu = () => {
  return (
    <div className="py-10 bg-[#f5f5f5]">
      <Heading title="Browse by range" />

      <div className="overflow-hidden w-full relative mt-8">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 px-6">
          {categoryMenuList.map((item) => (
            <CategoryItem title={item.title} key={item.id} href={item.href}>
              <div className="flex flex-col items-center justify-center w-32 h-32 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1">
                <Image
                  src={item.src}
                  width={48}
                  height={48}
                  alt={item.title}
                  className="mb-2 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </CategoryItem>
          ))}

          {/* Clone list again to create seamless marquee effect */}
          {categoryMenuList.map((item) => (
            <CategoryItem
              title={item.title}
              key={`clone-${item.id}`}
              href={item.href}
            >
              <div className="flex flex-col items-center justify-center w-32 h-32 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1">
                <Image
                  src={item.src}
                  width={48}
                  height={48}
                  alt={item.title}
                  className="mb-2 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </CategoryItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;
