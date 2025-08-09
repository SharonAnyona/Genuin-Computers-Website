import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCartIcon, HeartIcon, StarIcon } from "lucide-react";
import CartElement from "./CartElement";

const ProductItem = ({
  product,
  color,
}: {
  product: Product;
  color: string;
}) => {
  // const isNew = product?.isNew;
  // const oldPrice = product?.oldPrice;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group">
      <div className="relative">
        <div className="aspect-square overflow-hidden p-4 bg-gray-50 flex items-center justify-center">
          <Link href={`/product/${product.slug}`}>
            <Image
              src={
                product.mainImage
                  ? `/${product.mainImage}`
                  : "/product_placeholder.jpg"
              }
              width="0"
              height="0"
              sizes="100vw"
              className="w-auto h-[300px] object-contain"
              alt={product.title}
            />
          </Link>
        </div>

        {/* {isNew && (
          <span className="absolute top-2 left-2 bg-blue-700 text-white text-xs font-bold px-2 py-1 rounded">
            NEW
          </span>
        )}
        {oldPrice && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            SALE
          </span>
        )} */}

        <button className="absolute bottom-2 right-2 p-2 bg-white rounded-full shadow hover:bg-gray-100 transition-colors">
          <HeartIcon size={18} className="text-gray-600" />
        </button>
      </div>

      <div className="p-4">
        <div className="flex items-center mb-1">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              size={14}
              className={
                i < product.rating
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300"
              }
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">
            ({product.rating})
          </span>
        </div>

        <Link
          href={`/product/${product.slug}`}
          className={`block mb-1 font-medium line-clamp-2 h-12 ${
            color === "black" ? "text-gray-900" : "text-white"
          }`}
        >
          {product.title}
        </Link>

        <div className="flex items-center justify-between mt-2">
          <div>
            <span
              className={`font-bold ${
                color === "black" ? "text-gray-900" : "text-white"
              }`}
            >
              ${product.price.toFixed(2)}
            </span>
            {/* {oldPrice && (
              <span className="text-sm text-gray-500 line-through ml-2">
                ${oldPrice.toFixed(2)}
              </span>
            )} */}
          </div>
          <button className="p-2 bg-red-700 text-white rounded-full hover:bg-red-800 transition-colors">
            <ShoppingCartIcon size={16} />
          </button>
        </div>
      </div>

     
    </div>
  );
};

export default ProductItem;
