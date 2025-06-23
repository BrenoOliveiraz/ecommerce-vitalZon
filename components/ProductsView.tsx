import { Product } from "@/sanity.types";
import ProductGrid from "./ProductGrid";


interface ProductsViewProps {
    products: Product[];

}

export default function ProductsView({ products }: ProductsViewProps) {
    return (
        <div className="flex flex-col">
            <div className="w-full sm:w-[200px]">
                {/* <CategoriesSelectorComponent categories={categories} /> */}
            </div>

            <div className="flex-1">
                <div>
                    <ProductGrid products={products.slice(0, 4)} />

                    <hr className="w-1/2 sm:w-3/4" />
                </div>
            </div>


        </div>
    );
}
