import {
  CategoryMenu,
  HeroBanner,
  Incentives,
  IntroducingSection,
  Newsletter,
  ProductsSection,
} from "@/components";

export default function Home() {
  return (
    <>
      <HeroBanner />
       <Incentives />
      <ProductsSection />
      <CategoryMenu />
      <IntroducingSection />
     
      <Newsletter />
    </>
  );
}
