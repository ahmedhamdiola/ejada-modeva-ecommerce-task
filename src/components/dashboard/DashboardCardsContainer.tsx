import type { Product } from '../../types'
import DashboardCard from './DashboardCard'

interface DashboardCardsContainerProps {
    products: Product[],
}


const DashboardCardsContainer = ({ products }: DashboardCardsContainerProps) => {
    return (
        <div className="lg:hidden">
            {products.map((product) => (
                <DashboardCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default DashboardCardsContainer
