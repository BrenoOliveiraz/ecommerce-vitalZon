
import BannerCarousel from "@/components/BannerS1";
import BannerS2 from "@/components/BannerS2";
import FinallSession from "@/components/FinalSession";
import ProductsView from "@/components/ProductsView";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";

export default async function Home() {
  const products = await getAllProducts();

  return (
    <div>
      <BannerCarousel
        images={[
          { src: "/bannerm.jpeg", alt: "Banner 1" },
          { src: "/banner2.jpeg", alt: "Banner 2" },
          { src: "/banner3.jpeg", alt: "Banner 3" },
          { src: "/banner4.jpeg", alt: "Banner 4" },
          { src: "/banner5.jpeg", alt: "Banner 5" },
          { src: "/banner6.jpeg", alt: "Banner 6" },
        ]}
        imagesMD={[
          { src: "/banner1MD.jpeg", alt: "Banner 1" },
          { src: "/banner2MD.jpeg", alt: "Banner 2" },
          { src: "/banner3MD.jpeg", alt: "Banner 3" },
          { src: "/banner4MD.jpeg", alt: "Banner 4" },
          { src: "/banner5MD.jpeg", alt: "Banner 5" },
          { src: "/banner6MD.png", alt: "Banner 6" }, 
        ]}
      />

      <ProductsView products={products} />
      <BannerS2 />
      <FinallSession />
    </div>
  );
}
