import Companylogos from "@/components/Companylogos";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import Hero from "@/components/Hero";
import { ProductGallery } from "@/components/ProductGallery";
import { ProductsGrid } from "@/components/Products-grid";
import { TopCategories } from "@/components/TopCategories";


export default function Home() {
  return (
    <>
    <Hero/>
    <Companylogos/>
    <FeaturedProducts />
      <TopCategories />
      <ProductGallery />
      <ProductsGrid size={8} name={"Our Products"} />
    
    </>
  );
}
