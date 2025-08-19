"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCartIcon, HeartIcon, StarIcon, EyeIcon, Zap, Shield, Truck } from "lucide-react";
import { useSession } from "next-auth/react";
import { useWishlistStore } from "@/app/_zustand/wishlistStore";
import toast from "react-hot-toast";
import CartElement from "./CartElement";

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
  const discountPercentage = oldPrice ? Math.round(((oldPrice - product.price) / oldPrice) * 100) : 0;

  // Layout variants for different categories
  const layoutClasses = {
    default: "w-full max-w-sm",
    compact: "w-full max-w-xs",
    featured: "w-full max-w-md"
  };

  const imageHeights = {
    default: "h-[280px]",
    compact: "h-[220px]",
    featured: "h-[320px]"
  };

  // Wishlist functionality
  const handleWishlistToggle = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!session?.user?.email) {
      toast.error("Please log in to add items to your wishlist", {
        duration: 4000,
        style: {
          background: '#FEF2F2',
          color: '#DC2626',
          border: '1px solid #FECACA'
        }
      });
      return;
    }

    try {
      if (isProductInWishlist) {
        // Remove from wishlist
        const userResponse = await fetch(`http://localhost:3002/api/users/email/${session.user.email}`, {
          cache: "no-store",
        });
        const userData = await userResponse.json();
        
        await fetch(`http://localhost:3002/api/wishlist/${userData.id}/${product.id}`, {
          method: "DELETE",
        });
        
        removeFromWishlist(product.id);
        setIsProductInWishlist(false);
        toast.success("Removed from wishlist", {
          duration: 3000,
          style: {
            background: '#F0FDF4',
            color: '#16A34A',
            border: '1px solid #BBF7D0'
          }
        });
      } else {
        // Add to wishlist
        const userResponse = await fetch(`http://localhost:3002/api/users/email/${session.user.email}`, {
          cache: "no-store",
        });
        const userData = await userResponse.json();
        
        await fetch("http://localhost:3002/api/wishlist", {
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
            background: '#FEF2F2',
            color: '#DC2626',
            border: '1px solid #FECACA'
          }
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
          const userResponse = await fetch(`http://localhost:3002/api/users/email/${session.user.email}`, {
            cache: "no-store",
          });
          const userData = await userResponse.json();
          
          const wishlistResponse = await fetch(`http://localhost:3002/api/wishlist/${userData.id}/${product.id}`);
          const wishlistData = await wishlistResponse.json();
          
          setIsProductInWishlist(wishlistData.length > 0);
        } catch (error) {
          console.error('Error checking wishlist status:', error);
        }
      }
    };
    
    checkWishlistStatus();
  }, [session?.user?.email, product.id, wishlist]);

  return (
    <div 
      className={`bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 border border-gray-100/50 group hover:-translate-y-3 hover:scale-[1.03] ${layoutClasses[layout]} relative backdrop-blur-sm`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <div className={`aspect-square overflow-hidden p-6 bg-gradient-to-br from-slate-50 via-white to-gray-50 flex items-center justify-center relative ${imageHeights[layout]}`}>
          {/* Premium animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-50/40 via-purple-50/20 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
          <Link href={`/product/${product.slug}`} className="relative z-10">
            <div className="relative">
              <Image
                src={
                  product.mainImage
                    ? `/${product.mainImage}`
                    : "/product_placeholder.jpg"
                }
                width="0"
                height="0"
                sizes="100vw"
                className={`w-auto h-full object-contain group-hover:scale-110 transition-all duration-700 drop-shadow-2xl ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                alt={product.title}
                onLoad={() => setImageLoaded(true)}
              />
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse rounded-lg"></div>
              )}
            </div>
          </Link>
          
          {/* Premium overlay with quick actions */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
            {/* Premium wishlist button only */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
              <button 
                onClick={handleWishlistToggle}
                className={`p-3 backdrop-blur-md rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 border border-white/20 ${
                  isProductInWishlist 
                    ? 'bg-red-500/95 hover:bg-red-600' 
                    : 'bg-white/95 hover:bg-white'
                }`}
              >
                <HeartIcon 
                  size={18} 
                  className={`transition-colors ${
                    isProductInWishlist 
                      ? 'text-white fill-white' 
                      : 'text-gray-700 hover:text-red-500'
                  }`} 
                />
              </button>
            </div>
          </div>

          {/* Premium status badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
            {isNew && (
              <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-xl animate-pulse border border-white/20 backdrop-blur-sm">
                <Zap size={12} className="inline mr-1" />
                NEW
              </span>
            )}
            {oldPrice && (
              <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-xl border border-white/20 backdrop-blur-sm">
                -{discountPercentage}% OFF
              </span>
            )}
            {!isInStock && (
              <span className="bg-gradient-to-r from-gray-600 to-gray-800 text-white text-xs font-bold px-4 py-2 rounded-full shadow-xl border border-white/20 backdrop-blur-sm">
                OUT OF STOCK
              </span>
            )}
          </div>
        </div>

        {/* Manufacturer badge */}
        {product.manufacturer && (
          <div className="absolute top-3 right-3">
            <span className="bg-white bg-opacity-90 text-gray-700 text-xs font-medium px-2 py-1 rounded-full shadow-sm">
              {product.manufacturer}
            </span>
          </div>
        )}
      </div>

      <div className="p-6 space-y-4">
        {/* Premium rating and trust indicators */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  size={16}
                  className={
                    i < product.rating
                      ? "text-amber-400 fill-amber-400 drop-shadow-sm"
                      : "text-gray-300"
                  }
                />
              ))}
              <span className="text-sm text-gray-600 ml-2 font-medium">
                ({product.rating})
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {isInStock && (
              <span className="flex items-center text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-1 rounded-full">
                <Shield size={12} className="mr-1" />
                In Stock
              </span>
            )}
          </div>
        </div>

        {/* Premium product title */}
        <Link
          href={`/product/${product.slug}`}
          className={`block font-bold text-lg line-clamp-2 leading-tight hover:text-red-600 transition-all duration-300 ${
            color === "black" ? "text-gray-900" : "text-white"
          }`}
        >
          {product.title}
        </Link>

        {/* Enhanced description preview */}
        {product.description && (
          <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        )}
        
        {/* Premium features */}
        <div className="flex items-center space-x-4 text-xs text-gray-500">
          <span className="flex items-center">
            <Truck size={12} className="mr-1" />
            Free Shipping
          </span>
          <span className="flex items-center">
            <Shield size={12} className="mr-1" />
            Warranty
          </span>
        </div>

        {/* Premium price and actions */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex flex-col space-y-1">
            <div className="flex items-center gap-3">
              <span
                className={`text-xl font-bold ${
                  color === "black" ? "text-red-600" : "text-white"
                }`}
              >
                KSh {product.price.toLocaleString()}
              </span>
              {oldPrice && (
                <span className="text-sm text-gray-500 line-through font-medium">
                  KSh {oldPrice.toLocaleString()}
                </span>
              )}
            </div>
            {oldPrice && (
              <span className="text-sm text-emerald-600 font-semibold">
                Save KSh {(oldPrice - product.price).toLocaleString()}
              </span>
            )}
          </div>
          
          <button 
            className={`p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl ${
              isInStock 
                ? "bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 hover:scale-110" 
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!isInStock}
          >
            <ShoppingCartIcon size={18} />
          </button>
        </div>

        {/* Premium add to cart button for featured layout */}
        {layout === "featured" && (
          <button 
            className={`w-full py-3 px-6 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
              isInStock
                ? "bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 hover:scale-105 hover:-translate-y-0.5"
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
