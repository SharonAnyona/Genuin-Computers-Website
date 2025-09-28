"use client";
import React, { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import Image from "next/image";
import { fetchCategories, Category } from "@/utils/fetchCategories";
import Heading from "./Heading";

const CategoryMenu = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    setLoading(true);

    fetchCategories()
      .then((data) => {
        if (!ignore) setCategories(data.results); // ✅ use results array
      })
      .catch(() => {
        if (!ignore) setCategories([]);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, []);


  return (
    <div className="py-10 bg-[#f5f5f5]">
      <Heading title="Browse by range" />
      <div className="overflow-hidden w-full relative mt-8">
        {loading ? (
          <div className="flex gap-4 py-4">Loading categories...</div>
        ) : (
          <div className="animate-marquee whitespace-nowrap flex items-center gap-8 px-6">
            {categories.map((item) => (
              <CategoryItem
                title={item.name} // ✅ name → title
                key={item.id}
                href={`/categories/${item.slug}`} // ✅ slug → href
              >
                <div className="flex flex-col items-center justify-center w-32 h-32 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1">
                  <Image
                    src={"/category-placeholder.png"} // backend didn’t provide an image
                    width={48}
                    height={48}
                    alt={item.name}
                    className="mb-2 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </CategoryItem>
            ))}
            {categories.map((item) => (
              <CategoryItem
                title={item.name}
                key={`clone-${item.id}`}
                href={`/categories/${item.slug}`}
              >
                <div className="flex flex-col items-center justify-center w-32 h-32 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1">
                  <Image
                    src={"/category-placeholder.png"}
                    width={48}
                    height={48}
                    alt={item.name}
                    className="mb-2 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </CategoryItem>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryMenu;
