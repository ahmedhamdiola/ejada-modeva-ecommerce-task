import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct } from "../../services/products";
import { toast } from "react-toastify";

const useAddProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: addProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
            toast.success("Product added successfully.");
        },
        onError: (error) => {
            const message = error instanceof Error ? error.message : "Failed to add product.";
            toast.error(message);
        },
    });
};

export default useAddProduct;