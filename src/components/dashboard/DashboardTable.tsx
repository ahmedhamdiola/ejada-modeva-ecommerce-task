import type { Product } from '../../types'
import DashboardTableEntry from './DashboardTableEntry'
interface DashboardTableProps {
    products: Product[],
}

const DashboardTable = ({ products }: DashboardTableProps) => {
    return (
        <div className="hidden rounded-xl border lg:block">
            <table className="w-full">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-5 text-left">Image</th>
                        <th className="text-left">Name</th>
                        <th className="text-left">Category</th>
                        <th className="text-left">Price</th>
                        <th className="text-left">Sold Amount</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((product) => (
                        <DashboardTableEntry key={product.id} product={product} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DashboardTable
