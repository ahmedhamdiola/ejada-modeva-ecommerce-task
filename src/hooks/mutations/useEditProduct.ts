import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProduct } from "../../services/products";
import { toast } from "react-toastify";

const useEditProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: editProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
            toast.success("Product updated successfully.");
        },
        onError: (error) => {
            const message = error instanceof Error ? error.message : "Failed to update product.";
            toast.error(message);
        },
    });
};

export default useEditProduct;