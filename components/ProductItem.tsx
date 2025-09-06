"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShoppingCartIcon,
  HeartIcon,
  StarIcon,
  EyeIcon,
  Zap,
  Shield,
  Truck,
} from "lucide-react";
import { useSession } from "next-auth/react";
import { useWishlistStore } from "@/app/_zustand/wishlistStore";
import toast from "react-hot-toast";
import CartElement from "./CartElement";
import { BACKEND_URL } from "@/config";

const ProductItem = ({
  product,
  color,
  layout = "default",
}: {
  product: Product;
  color: string;
  layout?: "default" | "compact" | "featured";
}) => {
  const { data: session } = useSession();
  const { addToWishlist, removeFromWishlist, wishlist } = useWishlistStore();
  const [isProductInWishlist, setIsProductInWishlist] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const isNew = product?.isNew;
  const oldPrice = product?.oldPrice;
  const isInStock = product?.inStock > 0;
  const discountPercentage = oldPrice
    ? Math.round(((oldPrice - product.price) / oldPrice) * 100)
    : 0;

  // Layout variants for different categories
  const layoutClasses = {
    default: "w-full max-w-sm",
    compact: "w-full max-w-xs",
    featured: "w-full max-w-md",
  };

  const imageHeights = {
    default: "h-[280px]",
    compact: "h-[220px]",
    featured: "h-[320px]",
  };

  // Wishlist functionality
  const handleWishlistToggle = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!session?.user?.email) {
      toast.error("Please log in to add items to your wishlist", {
        duration: 4000,
        style: {
          background: "#FEF2F2",
          color: "#DC2626",
          border: "1px solid #FECACA",
        },
      });
      return;
    }

    try {
      if (isProductInWishlist) {
        // Remove from wishlist
        const userResponse = await fetch(
          `${BACKEND_URL}/api/users/email/${session.user.email}`,
          {
            cache: "no-store",
          }
        );
        const userData = await userResponse.json();

        await fetch(
          `${BACKEND_URL}/api/wishlist/${userData.id}/${product.id}`,
          {
            method: "DELETE",
          }
        );

        removeFromWishlist(product.id);
        setIsProductInWishlist(false);
        toast.success("Removed from wishlist", {
          duration: 3000,
          style: {
            background: "#F0FDF4",
            color: "#16A34A",
            border: "1px solid #BBF7D0",
          },
        });
      } else {
        // Add to wishlist
        const userResponse = await fetch(
          `${BACKEND_URL}/api/users/email/${session.user.email}`,
          {
            cache: "no-store",
          }
        );
        const userData = await userResponse.json();

        await fetch(`${BACKEND_URL}/api/wishlist`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ productId: product.id, userId: userData.id }),
        });

        addToWishlist({
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.mainImage,
          slug: product.slug,
          stockAvailabillity: product.inStock,
        });
        setIsProductInWishlist(true);
        toast.success("Added to wishlist", {
          duration: 3000,
          style: {
            background: "#FEF2F2",
            color: "#DC2626",
            border: "1px solid #FECACA",
          },
        });
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  // Check if product is in wishlist
  useEffect(() => {
    const checkWishlistStatus = async () => {
      if (session?.user?.email) {
        try {
          const userResponse = await fetch(
            `${BACKEND_URL}/api/users/email/${session.user.email}`,
            {
              cache: "no-store",
            }
          );
          const userData = await userResponse.json();

          const wishlistResponse = await fetch(
            `${BACKEND_URL}/api/wishlist/${userData.id}/${product.id}`
          );
          const wishlistData = await wishlistResponse.json();

          setIsProductInWishlist(wishlistData.length > 0);
        } catch (error) {
          console.error("Error checking wishlist status:", error);
        }
      }
    };

    checkWishlistStatus();
  }, [session?.user?.email, product.id, wishlist]);

  return (
    <div
      className={`bg-gradient-to-br from-white via-slate-50 to-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 group hover:-translate-y-2 hover:scale-[1.02] ${layoutClasses[layout]} relative`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        {/* Wishlist Icon - always visible, modern look */}
        <button
          onClick={handleWishlistToggle}
          className={`absolute top-4 right-4 z-30 p-2 rounded-full shadow-lg border border-gray-200 transition-all duration-300 hover:scale-110 bg-white/90 ${
            isProductInWishlist
              ? "bg-red-500 hover:bg-red-600"
              : "hover:bg-gray-100"
          }`}
          aria-label={
            isProductInWishlist ? "Remove from wishlist" : "Add to wishlist"
          }
        >
          <HeartIcon
            size={22}
            className={`transition-colors ${
              isProductInWishlist
                ? "text-white fill-white"
                : "text-gray-400 hover:text-red-500"
            }`}
          />
        </button>

        <Link href={`/product/${product.slug}`} className="block">
          <div
            className={`aspect-square overflow-hidden flex items-center justify-center relative ${imageHeights[layout]} bg-gradient-to-br from-slate-100 via-white to-gray-50 p-4 rounded-xl`}
          >
            <Image
              src={
                product.mainImage
                  ? `/${product.mainImage}`
                  : "/product_placeholder.jpg"
              }
              width={0}
              height={0}
              sizes="100vw"
              className={`w-auto h-full object-contain transition-all duration-500 drop-shadow-xl ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              alt={product.title}
              onLoad={() => setImageLoaded(true)}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded-xl"></div>
            )}
            {/* Status Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2 z-20">
              {isNew && (
                <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded shadow inline-flex items-center">
                  <Zap size={12} className="mr-1" /> NEW
                </span>
              )}
              {oldPrice && (
                <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded shadow">
                  -{discountPercentage}% OFF
                </span>
              )}
              {!isInStock && (
                <span className="bg-gray-700 text-white text-xs font-bold px-2 py-1 rounded shadow">
                  SOLD OUT
                </span>
              )}
            </div>
            {/* Manufacturer badge */}
            {product.manufacturer && (
              <span className="absolute bottom-3 left-3 bg-white/90 text-gray-700 text-xs font-medium px-2 py-1 rounded-full shadow">
                {product.manufacturer}
              </span>
            )}
          </div>
        </Link>
      </div>

      <div className="p-5 space-y-3">
        {/* Rating and stock */}
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                size={15}
                className={
                  i < product.rating
                    ? "text-amber-400 fill-amber-400"
                    : "text-gray-300"
                }
              />
            ))}
            <span className="text-xs text-gray-500 ml-1 font-medium">
              ({product.rating})
            </span>
          </div>
          {isInStock && (
            <span className="flex items-center text-xs text-green-600 font-semibold bg-green-50 px-2 py-1 rounded-full">
              <Shield size={12} className="mr-1" /> In Stock
            </span>
          )}
        </div>

        {/* Product Title */}
        <Link
          href={`/product/${product.slug}`}
          className={`block font-semibold text-lg line-clamp-2 leading-tight hover:text-red-600 transition-all duration-300 ${
            color === "black" ? "text-gray-900" : "text-gray-800"
          }`}
        >
          {product.title}
        </Link>

        {/* Description */}
        {product.description && (
          <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        )}

        {/* Features */}
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <span className="flex items-center">
            <Truck size={12} className="mr-1" />
            Free Shipping
          </span>
          <span className="flex items-center">
            <Shield size={12} className="mr-1" />
            Warranty
          </span>
        </div>

        {/* Price and actions */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-2">
          <div className="flex flex-col">
            <span
              className={`text-xl font-bold ${
                color === "black" ? "text-red-600" : "text-red-700"
              }`}
            >
              KSh {product.price.toLocaleString()}
            </span>
            {oldPrice && (
              <span className="text-xs text-gray-400 line-through font-medium">
                KSh {oldPrice.toLocaleString()}
              </span>
            )}
            {oldPrice && (
              <span className="text-xs text-green-600 font-semibold">
                Save KSh {(oldPrice - product.price).toLocaleString()}
              </span>
            )}
          </div>
          <button
            className={`p-3 rounded-full transition-all duration-300 shadow hover:shadow-lg ${
              isInStock
                ? "bg-gradient-to-r from-red-600 to-red-700 text-white hover:scale-110"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!isInStock}
            aria-label="Add to cart"
          >
            <ShoppingCartIcon size={20} />
          </button>
        </div>

        {/* Add to cart button for featured layout */}
        {layout === "featured" && (
          <button
            className={`w-full py-3 px-6 rounded-xl font-bold text-lg transition-all duration-300 shadow hover:shadow-lg ${
              isInStock
                ? "bg-gradient-to-r from-red-600 to-red-700 text-white hover:scale-105 hover:-translate-y-0.5"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!isInStock}
          >
            {isInStock ? "Add to Cart" : "Out of Stock"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
