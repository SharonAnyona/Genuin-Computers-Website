// *********************
// Role of the component: Classical hero component on home page
// Name of the component: Hero.tsx
// Developer:Sharon Anyona
// Version: 1.0
// Component call: <Hero />
// Input parameters: no input parameters
// Output: Classical hero component with two columns on desktop and one column on smaller devices
// *********************

"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Play, Star, Shield, Truck, Award } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-red-600/10 to-transparent rounded-full animate-spin-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-red-600/20 backdrop-blur-sm border border-red-500/30 rounded-full px-4 py-2 text-red-300 text-sm font-medium">
              <Star className="w-4 h-4 fill-current" />
              <span>Premium Quality Technology</span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Next-Gen
                <span className="block bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Computing
                </span>
                <span className="block text-4xl lg:text-5xl font-light text-gray-300">
                  Solutions
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Experience cutting-edge technology with our premium collection of computers, 
                laptops, and accessories. Built for professionals who demand excellence.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-8 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10K+</div>
                <div className="text-sm text-gray-400">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/shop" className="group inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/25">
                <span>Shop Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button className="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all duration-300 hover:scale-105">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 text-gray-300">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm">2 Year Warranty</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Truck className="w-5 h-5 text-blue-400" />
                <span className="text-sm">Free Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-sm">Award Winning</span>
              </div>
            </div>
          </div>

          {/* Right Content - Product Showcase */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative">
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-600/20 rounded-2xl backdrop-blur-sm border border-red-500/30 flex items-center justify-center animate-float">
                <div className="w-8 h-8 bg-red-600 rounded-lg"></div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center animate-float-delayed">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">4.9</div>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Product Image */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <Image
                  src="/watch for banner.png"
                  width={500}
                  height={500}
                  alt="Premium Technology"
                  className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  priority
                />
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent rounded-3xl blur-xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 fill-white">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
