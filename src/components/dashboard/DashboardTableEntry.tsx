import { PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid";
import type { ProductInterface } from "./data";

interface DashboardTableEntryProps {
    product: ProductInterface,
    onDelete: (id: number) => void,
    onEdit: (updatedProduct: ProductInterface) => void
}

const DashboardTableEntry = ({ product, onDelete, onEdit }: DashboardTableEntryProps) => {
    return (
        <tr key={product.id} className="border-t hover:bg-gray-50">
            <td className="p-5">
                <img
                    src={product.image}
                    className="size-16 rounded-lg object-cover"
                />
            </td>

            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>${product.price}</td>
            <td>{product.stock}</td>

            <td>
                <div className="flex justify-center gap-4">
                    <button onClick={() => onEdit(product)}>
                        <PencilSquareIcon className="size-6 text-yellow-400 hover:text-yellow-700 transition-all duration-200 cursor-pointer" />
                    </button>

                    <button onClick={() => onDelete(product.id)}>
                        <TrashIcon className="size-6 text-red-400 hover:text-red-700 transition-all duration-200 cursor-pointer" />
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default DashboardTableEntry
