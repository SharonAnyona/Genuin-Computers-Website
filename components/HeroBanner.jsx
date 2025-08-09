"use client";
import React, { useEffect, useState } from "react";

const totalSlides = 10;

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev % totalSlides) + 1);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel w-full h-[500px] relative overflow-hidden">
      {[...Array(totalSlides)].map((_, index) => {
        const slideNumber = index + 1;
        return (
          <div
            key={slideNumber}
            className={`carousel-item w-full absolute transition-opacity duration-1000 ${
              currentSlide === slideNumber
                ? "opacity-100 relative"
                : "opacity-0"
            }`}
          >
            <img src={`/${slideNumber}.png`} className="w-full object-cover" />
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

export default HeroBanner;
