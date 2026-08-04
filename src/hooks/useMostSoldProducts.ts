import { useQuery } from "@tanstack/react-query"
import { getMostSoldProducts } from "../services/products"

const useMostSoldProducts = () => {
    return useQuery({
        queryKey: ["products", "sold"],
        queryFn: getMostSoldProducts
    })

}

export default useMostSoldProducts
