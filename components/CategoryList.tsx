import React from "react";
import Link from "next/link";
import { categoryMenuList } from "@/lib/utils";

const CategoryList = () => {
  return (
    <div className="py-6 ">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="flex gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {categoryMenuList.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="text-black bg-gray-100 hover:bg-white hover:text-red-700 transition px-4 py-2 rounded-md text-sm shrink-0"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
