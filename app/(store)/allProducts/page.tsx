import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import ProductGrid from "@/components/ProductGrid";
import { Product } from "@/sanity.types";

export default async function AllProductsPage() {
  const products: Product[] = await getAllProducts();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Todos os Produtos</h1>
      <ProductGrid products={products} />
    </div>
  );
}
