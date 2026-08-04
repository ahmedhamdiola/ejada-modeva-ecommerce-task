import { ArrowRightIcon } from '@heroicons/react/24/outline'
import ProductsGrid from './ProductsGrid'
import Button from '../ui/Button'
import type { Product } from '../../types'

interface ProductSectionProps {
    heading: string
    products: Product[]
}

const ProductSection = ({ heading, products }: ProductSectionProps) => {
    return (
        <div className="flex flex-col gap-5 lg:gap-15">
            <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-PFR">{heading}</h1>
            <ProductsGrid products={products} />
            <Button title="SEE MORE" Icon={ArrowRightIcon} />
        </div>
    )
}

export default ProductSection
