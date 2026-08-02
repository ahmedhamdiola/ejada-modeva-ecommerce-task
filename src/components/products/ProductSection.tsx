import { ArrowRightIcon } from '@heroicons/react/24/outline'
import ProductsGrid from './ProductsGrid'
import Button from '../ui/Button'

interface ProductSectionProps {
    heading: string
}

const ProductSection = ({ heading }: ProductSectionProps) => {
    return (
        <div className="flex flex-col gap-5 lg:gap-15">
            <h1 className="text-xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-PFR">{heading}</h1>
            <ProductsGrid />
            <Button title="SEE MORE" Icon={ArrowRightIcon} />
        </div>
    )
}

export default ProductSection
