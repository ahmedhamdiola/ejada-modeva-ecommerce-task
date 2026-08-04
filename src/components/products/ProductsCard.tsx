import { StarIcon } from "@heroicons/react/16/solid"
import Badge from "../ui/Badge"

interface ProductsCardProps {
    img?: string,
    category: string,
    name: string,
    price: number,
    rating: number
}

const ProductsCard = ({ img, category, name, price, rating }: ProductsCardProps) => {
    return (
        <div className="relative flex flex-col gap-3 hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer">
            <img src={img} alt="Product" className="w-full object-cover min-h-[420px]" />
            <p className="text-sm lg:text-lg text-gray-600">{category}</p>
            <h1 className="font-PFR text-2xl lg:text-4xl truncate">{name}</h1>
            <p className="text-sm lg:text-lg text-gray-600 ">${price}</p>
            <Badge Icon={StarIcon} text={rating} />
        </div>
    )
}

export default ProductsCard
