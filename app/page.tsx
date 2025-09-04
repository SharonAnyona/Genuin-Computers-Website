import {
  HeroBanner,
  Incentives,
  Newsletter,
  ProductsSection,
  IntroducingSection,
  PremiumHeroBanner,
  CategorySectionsPage,
  NewArrivalsSection,
  ShopByBrandSection,
  RecommendedSection,
} from "@/components";

export default function Home() {
  return (
    <>
      {/* <PremiumHeroBanner/> */}
      <HeroBanner />
      <div className=" max-w-screen-2xl mx-auto px-8 sm:px-10 lg:px-12">
        <Incentives />
        <CategorySectionsPage />
        <NewArrivalsSection />
        <ShopByBrandSection />
        {/* <ProductsSection /> */}
        <RecommendedSection />
      </div>
      {/* <IntroducingSection /> */}
      <Newsletter />
    </>
  );
}
