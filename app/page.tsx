import {
  CategoryMenu,
  HeroBanner,
  Incentives,
  IntroducingSection,
  Newsletter,
  ProductsSection,
  CategoryList,
} from "@/components";

export default function Home() {
  return (
    <>
      <CategoryList />
      <HeroBanner />
      <IntroducingSection />
      <CategoryMenu />
      <ProductsSection />
    </>
  );
}
