import React from "react";
import Link from "next/link";
import { categoryMenuList } from "@/lib/utils";

const CategoryList = () => {
  return (
    <div className="py-6">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="flex gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {categoryMenuList.map((item, index) => (
            <div key={item.id} className="flex items-center gap-4 shrink-0">
              <Link
                href={item.href}
                className="text-black bg-gray-100 hover:bg-white hover:text-red-700 transition px-4 py-2 rounded-md text-sm shrink-0"
              >
                {item.title}
              </Link>

              {index !== categoryMenuList.length - 1 && (
                <div className="w-px h-5 bg-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
