"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface SubcategoryFormProps {
  categories: { id: string; name: string }[];
  onSubcategoryAdded?: () => void;
}

const SubcategoryForm: React.FC<SubcategoryFormProps> = ({
  categories,
  onSubcategoryAdded,
}) => {
  const [name, setName] = useState("");
  const [categoryId, setCategoryId] = useState(categories[0]?.id || "");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !categoryId) {
      toast.error("Please enter a name and select a category");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3002/api/subcategories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, categoryId }),
      });
      if (!res.ok) throw new Error("Failed to add subcategory");
      toast.success("Subcategory added!");
      setName("");
      if (onSubcategoryAdded) onSubcategoryAdded();
    } catch (err) {
      toast.error("Error adding subcategory");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 p-4 rounded-lg shadow flex flex-col gap-3 mb-6"
    >
      <h3 className="text-lg font-semibold mb-2">Add Subcategory</h3>
      <input
        type="text"
        placeholder="Subcategory name"
        className="input input-bordered w-full"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={loading}
      />
      <select
        className="select select-bordered w-full"
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
        disabled={loading}
      >
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>
      <button type="submit" className="btn btn-primary" disabled={loading}>
        {loading ? "Adding..." : "Add Subcategory"}
      </button>
    </form>
  );
};

export default SubcategoryForm;
