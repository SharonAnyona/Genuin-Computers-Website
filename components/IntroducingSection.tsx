// *********************
// Role of the component: IntroducingSection with the text "Introducing Singitronic"
// Name of the component: IntroducingSection.tsx
// Developer:Sharon Anyona
// Version: 1.0
// Component call: <IntroducingSection />
// Input parameters: no input parameters
// Output: Section with the text "Introducing Singitronic" and button
// *********************

import Link from "next/link";
import React from "react";

const IntroducingSection = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Amazing Products
          </h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
            Explore our curated collections of premium electronics, computers,
            and accessories
          </p>
        </div>
      </div>
    // <div className="py-20 pt-24 bg-gradient-to-l from-white to-gray-600">
    //   <div className="text-center flex flex-col gap-y-5 items-center">
    //     <h2 className="text-white text-8xl font-extrabold text-center mb-2 max-md:text-6xl max-[480px]:text-4xl">
    //       INTRODUCING <span className="text-black">GEN</span><span className="text-red-600">UiN</span>
    //     </h2>
    //     <div>
    //       <p className="text-white text-center text-2xl font-semibold max-md:text-xl max-[480px]:text-base">
    //         Buy the latest electronics.
    //       </p>
    //       <p className="text-white text-center text-2xl font-semibold max-md:text-xl max-[480px]:text-base">
    //         The best electronics for tech lovers.
    //       </p>
    //       <Link href="/shop" className="block text-black bg-white font-bold px-12 py-3 text-xl hover:bg-gray-100 w-96 mt-2  max-md:text-lg max-md:w-72 max-[480px]:w-60 mx-auto">
    //         SHOP NOW
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    
  );
};

export default IntroducingSection;
