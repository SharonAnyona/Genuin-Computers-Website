"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { fetchCategories } from "@/utils/fetchCategories";

// ---- Types ----
interface SubCategory {
  id: number;
  name: string;
  slug: string;
}

type Category = {
  id: number;
  name: string;
  slug: string;
  subcategories?: Category[];
};

type CategoryResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Category[];
};

// ---- Component ----
const CategoryList = () => {
  const [categories, setCategories] = useState<CategoryResponse>({
    count: 0,
    next: null,
    previous: null,
    results: [],
  });
  
  const [loading, setLoading] = useState(true);
  const [openCategoryId, setOpenCategoryId] = useState<number | null>(null);

  const openTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);



  useEffect(() => {
    let ignore = false;
    setLoading(true);


    fetchCategories()
      .then((data) => {
        if (!ignore) setCategories(data);
      })
      .catch(() => {
        if (!ignore) setCategories({ count: 0, next: null, previous: null, results: [] });
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, []);

  const scheduleOpen = (id: number) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    if (openTimerRef.current) clearTimeout(openTimerRef.current);
    openTimerRef.current = setTimeout(() => setOpenCategoryId(id), 120);
  };

  const scheduleClose = () => {
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => setOpenCategoryId(null), 200);
  };

  if (loading) {
    return (
      <nav className="bg-white border-t border-gray-200 relative z-[100001]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 py-4">Loading categories...</div>
        </div>
      </nav>
    );
  }

  // ✅ Map categories
  const mappedCategories = categories.results.map((cat) => ({
    ...cat,
    id: cat.id,
    title: cat.name,
    href: cat.slug ? `/shop/${cat.slug}` : "#",
    subcategories: (cat.subcategories || []).map((sub) => ({
      ...sub,
      id: sub.id,
      title: sub.name,
      href: sub.slug ? `/shop/${sub.slug}` : "#",
    })),
  }));

  return (
    <nav className="bg-white border-t border-gray-200 relative z-[100001]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          role="tablist"
          className="flex gap-4 overflow-x-auto overflow-y-visible whitespace-nowrap scrollbar-hide"
        >
          {mappedCategories.map((item) => {
            const isOpen = openCategoryId === item.id;

            return (
              <div
                key={item.id}
                className={`relative group ${isOpen ? "z-[100002]" : ""}`}
                onMouseEnter={() => scheduleOpen(item.id)}
                onMouseLeave={scheduleClose}
              >
                <Link
                  href={item.href}
                  role="tab"
                  className={`py-2 px-2 text-base font-semibold border-b-2 transition-all duration-200  shadow-none transform-gpu
                    ${
                      isOpen
                        ? "text-red-500 border-red-600 bg-white shadow-lg scale-105"
                        : "text-gray-700 border-transparent hover:text-red-600 hover:border-red-400 hover:bg-gray-100 hover:shadow-md hover:scale-105"
                    } flex items-center gap-2 cursor-pointer`}
                  style={{ minWidth: 120 }}
                  aria-expanded={
                    item.subcategories && item.subcategories.length > 0
                      ? isOpen
                      : undefined
                  }
                >
                  <span>{item.title}</span>
                </Link>

                {item.subcategories && item.subcategories.length > 0 && (
                  <div className="absolute top-full left-0 z-[100003] mt-1 w-64 bg-white border border-gray-200 rounded-b-lg shadow-2xl pointer-events-auto opacity-100 scale-100 transition-all duration-200">
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {item.subcategories.map((subcategory, subIndex) => (
                          <Link
                            key={subcategory.id ?? subIndex}
                            href={subcategory.href}
                            className="block px-3 py-2 text-sm text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors duration-150 group"
                          >
                            <div className="flex items-center justify-between">
                              <span className="group-hover:translate-x-1 transition-transform duration-150">
                                {subcategory.title}
                              </span>
                              <div className="w-2 h-2 bg-red-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-150"></div>
                            </div>
                          </Link>
                        ))}
                      </div>

                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <Link
                          href={item.href}
                          className="block px-3 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors duration-150 text-center"
                        >
                          View All {item.title}
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ✅ Simple pagination controls */}
        <div className="flex justify-center items-center gap-4 py-4">
        {categories.previous && (
          <button
            onClick={() => fetchCategories(categories.previous!).then(setCategories)}
            className="px-3 py-1 text-sm border rounded hover:bg-gray-100"
          >
            Previous
          </button>
        )}
        {categories.next && (
          <button
            onClick={() => fetchCategories(categories.next!).then(setCategories)}
            className="px-3 py-1 text-sm border rounded hover:bg-gray-100"
          >
            Next
          </button>
        )}
      </div>
      </div>
    </nav>
  );
}

export default CategoryList;
