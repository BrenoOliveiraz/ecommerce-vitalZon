import Banner from "@/components/BannerS1";
import BannerS2 from "@/components/BannerS2";
import ProductsView from "@/components/ProductsView";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";


export default async function Home() {
  const products = await getAllProducts()



  return (
    <div>

      <Banner src="/bs2.png" alt="Banner" />
      <div className="m-20">

        <h1 className="text-4xl font-bold mb-10 mt-24 text-center text-gray-900">
          Conheça os nossos produtos!
        </h1>

        <ProductsView products={products} />
      </div>
    <BannerS2 />

    </div>
  )
}
