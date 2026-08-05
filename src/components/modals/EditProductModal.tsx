import type { Product } from "../../types"
import { MODAL_EDIT_FIELDS } from "./data"
import Modal from "./Modal"
import useEditProduct from "../../hooks/mutations/useEditProduct"

interface EditProductModalProps {
    onClose: () => void,
    product: Product
}

const EditProductModal = ({ onClose, product }: EditProductModalProps) => {
    const editProduct = useEditProduct();

    const handleSubmit = (values: Record<string, string>, currentProduct?: Product) => {
        if (!currentProduct) return;

        const modifiedProduct: Product = {
            ...currentProduct,
            name: values.name ?? currentProduct.name,
            description: values.description ?? currentProduct.description,
            price: values.price ?? currentProduct.price,
            category: values.category ?? currentProduct.category,
            soldAmount: values.soldAmount ? Number(values.soldAmount) : currentProduct.soldAmount,
        };

        editProduct.mutate(modifiedProduct, {
            onSuccess: onClose,
        });
    };

    return (
        <Modal
            onClose={onClose}
            heading="Edit Product"
            fields={MODAL_EDIT_FIELDS}
            product={product}
            onSubmit={handleSubmit}
            submitLabel="Save Changes"
        />
    )
}

export default EditProductModal
