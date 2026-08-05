import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "../../services/products";
import { toast } from "react-toastify";

const useDeleteProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
            toast.success("Product deleted successfully.");
        },
        onError: (error) => {
            const message = error instanceof Error ? error.message : "Failed to delete product.";
            toast.error(message);
        },
    });
};

export default useDeleteProduct;