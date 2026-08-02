import { StarIcon } from "@heroicons/react/16/solid"
import ProductImg from "../../assets/product1.png"
import Badge from "../ui/Badge"

interface ProductsCardProps {
    img?: string,
    category: string,
    name: string,
    price: number,
    rating: number
}

const ProductsCard = ({ category, name, price, rating }: ProductsCardProps) => {
    return (
        <div className="relative flex flex-col gap-3 hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer">
            <img src={ProductImg} alt="Product" className="w-full object-cover" />
            <p className="text-sm lg:text-lg text-gray-600">{category}</p>
            <h1 className="font-PFR text-2xl lg:text-4xl truncate">{name}</h1>
            <p className="text-sm lg:text-lg text-gray-600 ">${price}</p>
            <Badge Icon={StarIcon} text={rating} />
        </div>
    )
}

export default ProductsCard
