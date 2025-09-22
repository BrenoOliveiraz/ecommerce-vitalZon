import { Product } from "@/sanity.types";
import ProductGrid from "./ProductGrid";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductsViewProps {
  products: Product[];

}

export default function ProductsView({ products }: ProductsViewProps) {
  return (
    <>
      <div className="m-20">

        <h1 className="text-4xl font-bold mb-10 mt-24 text-center text-gray-900">
          Conheça os nossos produtos!
        </h1>
      </div>
      <div className="relative flex flex-col items-center justify-between mb-8 max-w-6xl mx-auto">


        <ProductGrid products={products.slice(0, 5)} />


 
      </div>
    </>
  );
}
