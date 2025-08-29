
import BannerCarousel from "@/components/BannerS1";
import BannerS2 from "@/components/BannerS2";
import FinallSession from "@/components/FinalSession";
import ProductsView from "@/components/ProductsView";

import { getAllProducts } from "@/sanity/lib/products/getAllProducts";






export default async function Home() {
  const products = await getAllProducts()

  return (
    <div>

      <BannerCarousel
        images={[
          { src: "/bannerm.jpeg", alt: "Banner 1" },
          { src: "/banner2.jpeg", alt: "Banner 2" },
          { src: "/banner3.jpeg", alt: "Banner 3" },
          { src: "/banner4.jpeg", alt: "Banner 4" },
          { src: "/banner5.jpeg", alt: "Banner 5" },
          { src: "/banner5melhorado.jpeg", alt: "banner5melhorado" },
          { src: "/banner6.jpeg", alt: "Banner 6" },
        ]}
      />
      <div className="m-20">

        <h1 className="text-4xl font-bold mb-10 mt-24 text-center text-gray-900">
          Conheça os nossos produtos!
        </h1>

        <ProductsView products={products} />
      </div>

      
      <BannerS2 />
      <div className="m-20">

        <h1 className="text-4xl font-bold mb-10 mt-24 text-center text-gray-900">
          Melhores Ofertas!
        </h1>

        <ProductsView products={products} />
      </div>
      <FinallSession />

    </div>
  )
}
