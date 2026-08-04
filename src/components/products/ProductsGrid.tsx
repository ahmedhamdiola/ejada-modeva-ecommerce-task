import type { Product } from "../../types"
import ProductsCard from "./ProductsCard"

interface ProductsGridProps {
    products: Product[]
}

const ProductsGrid = ({ products }: ProductsGridProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {products.map(product => (
                <ProductsCard key={product.id} img={product.image} name={product.name} category={product.category} price={Number(product.price)} rating={product.rating} />
            ))}
        </div>
    )
}

export default ProductsGrid
