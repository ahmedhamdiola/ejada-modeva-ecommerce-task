import { PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid";
import type { Product } from "../../types";
import useDeleteProduct from "../../hooks/mutations/useDeleteProduct";
import useEditProduct from "../../hooks/mutations/useEditProduct";

interface DashboardTableEntryProps {
    product: Product,
}

const DashboardTableEntry = ({ product }: DashboardTableEntryProps) => {
    const deleteProduct = useDeleteProduct();
    const editProduct = useEditProduct();
    return (
        <tr key={product.id} className="border-t">
            <td className="p-5">
                <img
                    src={product.image}
                    className="size-16 rounded-lg object-cover"
                />
            </td>

            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>${product.price}</td>
            <td>{product.soldAmount}</td>

            <td>
                <div className="flex justify-center gap-4">
                    <button onClick={() => editProduct.mutate({ id: Number(product.id), product })}>
                        <PencilSquareIcon className="size-6 text-yellow-400 hover:text-yellow-700 transition-all duration-200 cursor-pointer" />
                    </button>

                    <button onClick={() => deleteProduct.mutate(Number(product.id))}>
                        <TrashIcon className="size-6 text-red-400 hover:text-red-700 transition-all duration-200 cursor-pointer" />
                    </button>
                </div>
            </td>
        </tr >
    )
}

export default DashboardTableEntry
