import { useQuery } from "@tanstack/react-query"
import { getMostRecentProducts } from "../services/products"

const useMostRecentProducts = () => {
    return useQuery({
        queryKey: ["products", "recent"],
        queryFn: getMostRecentProducts
    })
}

export default useMostRecentProducts
