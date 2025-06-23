import { Product } from "@/sanity.types";
import ProductGrid from "./ProductGrid";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductsViewProps {
  products: Product[];
}

export default function ProductsView({ products }: ProductsViewProps) {
  return (
    <div className="relative flex flex-col">
      {/* Grid com 4 produtos */}
      <ProductGrid products={products.slice(0, 4)} />

      {/* Seta grande no canto direito */}
      <Link
        href="/products"
        className="absolute top-1/2 right-0 translate-x-6 -translate-y-1/2 z-10 p-4 bg-black text-white rounded-full shadow-md hover:bg-gray-800 transition"
        aria-label="Ver todos os produtos"
      >
        <ArrowRight className="w-8 h-8" />
      </Link>
    </div>
  );
}
