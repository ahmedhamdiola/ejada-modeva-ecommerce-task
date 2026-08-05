import type { Product } from "../../types"
import { MODAL_ADD_FIELDS } from "./data"
import Modal from "./Modal"
import useAddProduct from "../../hooks/mutations/useAddProduct"

interface AddProductModalProps {
    onClose: () => void
}

const AddProductModal = ({ onClose }: AddProductModalProps) => {
    const addProduct = useAddProduct();

    const handleSubmit = (values: Record<string, string>) => {
        const newProduct: Product = {
            id: String(Date.now()),
            createdAt: new Date().toISOString(),
            name: values.name ?? "",
            description: values.description ?? "",
            price: values.price ?? "0",
            category: values.category ?? "",
            soldAmount: values.soldAmount ? Number(values.soldAmount) : 0,
            image: values.image ?? "https://via.placeholder.com/300",
            rating: values.rating ? Number(values.rating) : 0,
        };

        addProduct.mutate(newProduct, {
            onSuccess: onClose,
        });
    };

    return (
        <Modal
            onClose={onClose}
            heading="Add Product"
            fields={MODAL_ADD_FIELDS}
            onSubmit={handleSubmit}
            submitLabel="Add Product"
        />
    )
}

export default AddProductModal
