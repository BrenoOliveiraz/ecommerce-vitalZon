import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import ProductGrid from "@/components/ProductGrid";
import CategoriesSelectorComponent from "@/components/CategorySelector";
import { Product } from "@/sanity.types";

export default async function AllProductsPage() {
  const products: Product[] = await getAllProducts();
  const categories = await getAllCategories();

  return (
    <div className="px-4 py-10 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 text-center sm:text-left">
          Todos os Produtos
        </h1>

        <div className="w-full sm:w-72">
          <CategoriesSelectorComponent categories={categories} />
        </div>
      </div>

      <ProductGrid products={products} />
    </div>
  );
}
