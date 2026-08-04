import { useQuery } from "@tanstack/react-query"
import { getAllProducts } from "../services/products"

const useProducts = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: getAllProducts
    })
}
export default useProducts
