import { PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid";
import type { ProductInterface } from "./data";

interface DashboardCardProps {
    product: ProductInterface,
    onDelete: (id: number) => void,
    onEdit: (updatedProduct: ProductInterface) => void
}


const DashboardCard = ({ product, onDelete, onEdit }: DashboardCardProps) => {
    return (
        <div
            key={product.id}
            className="rounded-xl border bg-white p-4 shadow-sm"
        >
            <div className="flex gap-4">
                <img
                    src={product.image}
                    className="size-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                    <h2 className="font-semibold">{product.name}</h2>
                    <p className="text-gray-500">{product.category}</p>
                    <p className="mt-2 font-medium">${product.price}</p>
                    <p className="text-sm text-gray-500">
                        Stock: {product.stock}
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <button onClick={() => onEdit(product)}>
                        <PencilSquareIcon className="size-6 text-yellow-400 hover:text-yellow-700 transition-all duration-200 cursor-pointer" />
                    </button>

                    <button onClick={() => onDelete(product.id)}>
                        <TrashIcon className="size-6 text-red-400 hover:text-red-700 transition-all duration-200 cursor-pointer" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DashboardCard
