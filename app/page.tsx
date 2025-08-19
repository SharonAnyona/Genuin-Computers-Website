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
  RecommendedSection
} from "@/components";

export default function Home() {
  return (
    <>
      <PremiumHeroBanner/>
      {/* <HeroBanner /> */}
      <Incentives />
      <CategorySectionsPage />
      <NewArrivalsSection />
      <ShopByBrandSection />
      <ProductsSection />
      <RecommendedSection />
      {/* <IntroducingSection /> */}
      <Newsletter />
    </>
  );
}
