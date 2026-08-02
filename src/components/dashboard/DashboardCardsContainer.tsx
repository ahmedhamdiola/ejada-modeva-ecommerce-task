import type { ProductInterface } from './data'
import DashboardCard from './DashboardCard'

interface DashboardCardsContainerProps {
    products: ProductInterface[],
    onDelete: (id: number) => void,
    onEdit: (updatedProduct: ProductInterface) => void

}


const DashboardCardsContainer = ({ products, onDelete, onEdit }: DashboardCardsContainerProps) => {
    return (
        <div className="lg:hidden">
            {products.map((product) => (
                <DashboardCard key={product.id} product={product} onDelete={onDelete} onEdit={() => onEdit} />
            ))}
        </div>
    )
}

export default DashboardCardsContainer
