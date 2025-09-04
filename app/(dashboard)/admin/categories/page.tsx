"use client";
import { CustomButton, DashboardSidebar } from "@/components";
import { nanoid } from "nanoid";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SubcategoryForm from "./subcategory-form";
import { formatCategoryName } from "../../../../utils/categoryFormating";
import { BACKEND_URL } from "@/config";
// Extend Category type locally to include subcategories and slug for type safety
type CategoryWithSubcategories = Category & {
  slug: string;
  subcategories?: any[];
};
const DashboardCategory = () => {
  const [categories, setCategories] = useState<CategoryWithSubcategories[]>([]);

  // getting all categories to be displayed on the all categories page
  useEffect(() => {
    fetch(`${BACKEND_URL}/api/categories`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCategories(data);
      });
  }, []);

  // Custom order: laptops, pcs, tablets, printers, then others
  const order = ["laptops", "pcs", "tablets", "printers"];
  const orderedCategories: CategoryWithSubcategories[] = [
    ...order
      .map((slug) => categories.find((cat) => cat.slug?.toLowerCase() === slug))
      .filter((cat): cat is CategoryWithSubcategories => Boolean(cat)),
    ...categories.filter((cat) => !order.includes(cat.slug?.toLowerCase())),
  ];

  return (
    <div className="bg-white flex justify-start max-w-screen-2xl mx-auto h-full max-xl:flex-col max-xl:h-fit max-xl:gap-y-4">
      <DashboardSidebar />
      <div className="w-full">
        <h1 className="text-3xl font-semibold text-center mb-5">
          All Categories
        </h1>
        <div className="flex justify-end mb-5">
          <Link href="/admin/categories/new">
            <CustomButton
              buttonType="button"
              customWidth="110px"
              paddingX={10}
              paddingY={5}
              textSize="base"
              text="Add new category"
            />
          </Link>
        </div>
        {/* Subcategory Form */}
        <div className="mb-8">
          <SubcategoryForm
            categories={categories.map((cat) => ({
              id: cat.id,
              name: formatCategoryName(cat.name),
            }))}
            onSubcategoryAdded={() => {
              // Refresh categories after adding subcategory
              fetch(`${BACKEND_URL}/api/categories`)
                .then((res) => res.json())
                .then((data) => setCategories(data));
            }}
          />
        </div>
        <div className="xl:ml-5 w-full max-xl:mt-5 overflow-auto h-[80vh]">
          <table className="table table-md table-pin-cols">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orderedCategories &&
                orderedCategories.map((category) => (
                  <tr key={nanoid()}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div>
                        <p className="font-semibold">
                          {formatCategoryName(category?.name)}
                        </p>
                        {category.subcategories &&
                          category.subcategories.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-2">
                              {category.subcategories.map((sub: any) => (
                                <span
                                  key={sub.id}
                                  className="inline-block bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full border border-red-200"
                                >
                                  {sub.name}
                                </span>
                              ))}
                            </div>
                          )}
                      </div>
                    </td>
                    <th>
                      <Link
                        href={`/admin/categories/${category?.id}`}
                        className="btn btn-ghost btn-xs"
                      >
                        details
                      </Link>
                    </th>
                  </tr>
                ))}
            </tbody>
            {/* foot */}
            <tfoot>
              <tr>
                <th></th>
                <th>Name</th>
                <th></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardCategory;
