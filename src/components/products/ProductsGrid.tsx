import { WOMEN_PRODUCTS } from "./data"
import ProductsCard from "./ProductsCard"

const ProductsGrid = () => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {WOMEN_PRODUCTS.map(product => (
                <ProductsCard key={product.id} name={product.name} category={product.category} price={product.price} rating={product.rating} />
            ))}
        </div>
    )
}

export default ProductsGrid
