import DashboardTableEntry from './DashboardTableEntry'
import type { ProductInterface } from './data'
interface DashboardTableProps {
    products: ProductInterface[],
    onDelete: (id: number) => void,
    onEdit: (updatedProduct: ProductInterface) => void
}

const DashboardTable = ({ products, onDelete, onEdit }: DashboardTableProps) => {
    return (
        <div className="hidden rounded-xl border lg:block">
            <table className="w-full">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-5 text-left">Image</th>
                        <th className="text-left">Name</th>
                        <th className="text-left">Category</th>
                        <th className="text-left">Price</th>
                        <th className="text-left">Stock</th>
                        <th className="text-center">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map((product) => (
                        <DashboardTableEntry key={product.id} product={product} onDelete={onDelete} onEdit={onEdit} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DashboardTable
