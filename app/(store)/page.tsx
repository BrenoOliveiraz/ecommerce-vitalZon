import Banner from "@/components/BannerS1";
import ProductsView from "@/components/ProductsView";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";


export default async function Home() {
  const products = await getAllProducts()



  return (
    <div>

      <Banner src="/bs2.png" alt="Banner" />
      <div className="m-20">
        <ProductsView products={products} />
      </div>


    </div>
  )
}
