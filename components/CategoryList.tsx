import React from "react";
import Link from "next/link";
import { categoryMenuList } from "@/lib/utils";

const CategoryList = () => {
  const activeIndex = 1; // Replace with logic if needed

  return (
    <nav className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          role="tablist"
          className="flex gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide"
        >
          {categoryMenuList.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <Link
                key={item.id}
                href={item.href}
                role="tab"
                className={`py-3 px-2 text-sm font-medium border-b-2 ${
                  isActive
                    ? "text-red-700 border-red-700"
                    : "text-gray-700 border-transparent hover:text-red-700 hover:border-red-700"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default CategoryList;
