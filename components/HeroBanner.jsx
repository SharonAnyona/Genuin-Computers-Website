import React from "react";

const HeroBanner = () => {
  return (
    <div className="carousel w-full h-500 ">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="/1.png" className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="/3.png" className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="/3.png" className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src="/4.png" className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div> 
      </div>
        <div id="slide5" className="carousel-item relative w-full">
        <img src="/5.png" className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle">
            ❯
          </a>
        </div>       
      </div>
        <div id="slide6" className="carousel-item relative w-full">
        <img src="/6.png" className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide7" className="btn btn-circle">
            ❯
          </a>
        </div>        
      </div>
        <div id="slide7" className="carousel-item relative w-full">
        <img src="/7.png" className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide8" className="btn btn-circle">
            ❯
          </a>
        </div>       
      </div>
        <div id="slide8" className="carousel-item relative w-full">
        <img src="/8.png" className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide9" className="btn btn-circle">
            ❯
          </a>
        </div>
        
      </div>
        <div id="slide9" className="carousel-item relative w-full">
        <img src="/9.png" className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide10" className="btn btn-circle">
            ❯
          </a>
        </div>
        
      </div>
        <div id="slide10" className="carousel-item relative w-full">
        <img src="/10.png" className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default HeroBanner;
