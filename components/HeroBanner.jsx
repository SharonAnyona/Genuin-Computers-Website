"use client";
import React from "react";
import CarouselBanner from "./CarouselBanner";

const images1 = [
  { src: "/1.png", alt: "Banner 1" },
  { src: "/2.png", alt: "Banner 2" },
  { src: "/3.png", alt: "Banner 3" },
  { src: "/4.png", alt: "Banner 4" },
  { src: "/5.png", alt: "Banner 5" },
];

const HeroBanner = () => (
  <CarouselBanner images={images1} interval={3000} height="h-[400px]" />
);

export default HeroBanner;