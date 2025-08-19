"use client";
import React, { useEffect, useState } from "react";

interface CarouselImage {
  src: string;
  alt: string;
}

interface CarouselBannerProps {
  images: CarouselImage[];
  interval?: number;
  height?: string;
}

const CarouselBanner: React.FC<CarouselBannerProps> = ({ images, interval = 4000, height = "h-[500px]" }) => {
 const totalSlides = images.length;
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev % totalSlides) + 1);
    }, interval);
    return () => clearInterval(timer);
  }, [totalSlides, interval]);

  if (!images || images.length === 0) return null;

  return (
    <div className={`carousel w-full ${height} relative overflow-hidden`}>
      {images.map((img, index) => {
        const slideNumber = index + 1;
        return (
          <div
            key={slideNumber}
            className={`carousel-item w-full absolute transition-opacity duration-1000 ${
              currentSlide === slideNumber ? "opacity-100 relative" : "opacity-0"
            }`}
          >
            <img src={img.src} alt={img.alt} className="w-full object-cover" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <button
                className="btn btn-circle"
                onClick={() =>
                  setCurrentSlide(
                    slideNumber === 1 ? totalSlides : slideNumber - 1
                  )
                }
              >
                ❮
              </button>
              <button
                className="btn btn-circle"
                onClick={() =>
                  setCurrentSlide(
                    slideNumber === totalSlides ? 1 : slideNumber + 1
                  )
                }
              >
                ❯
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CarouselBanner;