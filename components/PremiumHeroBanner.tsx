"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Star, Shield, Truck, Award, ArrowRight } from "lucide-react";

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  badge?: string;
  features: string[];
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "Premium Computing Solutions",
    subtitle: "Experience Excellence",
    description: "Discover cutting-edge technology with unmatched performance and reliability. Built for professionals who demand the best.",
    image: "/1.png",
    ctaText: "Explore Collection",
    ctaLink: "/products",
    badge: "New Arrivals",
    features: ["Free Shipping", "2-Year Warranty", "24/7 Support"]
  },
  {
    id: 2,
    title: "Gaming Powerhouse",
    subtitle: "Unleash Your Potential",
    description: "High-performance gaming systems designed to deliver exceptional experiences. Every frame matters.",
    image: "/2.png",
    ctaText: "Shop Gaming",
    ctaLink: "/category/gaming",
    badge: "Best Sellers",
    features: ["RGB Lighting", "Liquid Cooling", "VR Ready"]
  },
  {
    id: 3,
    title: "Professional Workstations",
    subtitle: "Power Your Productivity",
    description: "Enterprise-grade workstations for creative professionals and businesses. Reliability meets performance.",
    image: "/3.png",
    ctaText: "View Workstations",
    ctaLink: "/category/workstations",
    badge: "Pro Series",
    features: ["ECC Memory", "Certified Drivers", "Enterprise Support"]
  }
];

const PremiumHeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const currentSlideData = heroSlides[currentSlide];

  return (
    <div className="relative h-[80vh] min-h-[600px] overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Premium background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-blue-900/20"></div>
      
      {/* Main content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
            
            {/* Left content */}
            <div className="space-y-8 text-white">
              {/* Badge */}
              {currentSlideData.badge && (
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600/20 to-red-700/20 backdrop-blur-sm border border-red-500/30 rounded-full px-4 py-2">
                  <Star size={16} className="text-red-400" />
                  <span className="text-sm font-semibold text-red-300">{currentSlideData.badge}</span>
                </div>
              )}

              {/* Title */}
              <div className="space-y-4">
                <h2 className="text-sm font-semibold text-red-400 uppercase tracking-wider">
                  {currentSlideData.subtitle}
                </h2>
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="text-gradient-primary">{currentSlideData.title}</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  {currentSlideData.description}
                </p>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-6">
                {currentSlideData.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-gray-300">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Trust indicators */}
              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <Shield className="text-green-400" size={20} />
                  <span className="text-sm text-gray-300">Secure Payment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="text-blue-400" size={20} />
                  <span className="text-sm text-gray-300">Free Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="text-yellow-400" size={20} />
                  <span className="text-sm text-gray-300">Premium Quality</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <Link
                  href={currentSlideData.ctaLink}
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-105 hover:-translate-y-1 group"
                >
                  <span className="text-lg">{currentSlideData.ctaText}</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right content - Image */}
            <div className="relative">
              <div className="relative z-10">
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                
                {/* Main image container */}
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
                  <div className="relative aspect-square">
                    {!imageLoaded && (
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-pulse rounded-2xl"></div>
                    )}
                    <Image
                      src={currentSlideData.image}
                      alt={currentSlideData.title}
                      fill
                      className={`object-contain transition-all duration-700 ${
                        imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                      onLoad={() => setImageLoaded(true)}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 z-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 z-10"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-red-500 scale-125'
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
        <div 
          className="h-full bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / heroSlides.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default PremiumHeroBanner;
