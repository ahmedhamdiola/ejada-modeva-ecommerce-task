import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProduct } from "../../services/products";

const useEditProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: editProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["products"],
            });
        },
    });
};

export default useEditProduct;