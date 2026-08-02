import { ArrowRightIcon } from '@heroicons/react/24/outline'
import ProductsGrid from './ProductsGrid'

interface ProductSectionProps {
    heading: string
}

const ProductSection = ({ heading }: ProductSectionProps) => {
    return (
        <div className="flex flex-col gap-5 lg:gap-15">
            <h1 className="text-xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-PFR">{heading}</h1>
            <ProductsGrid />
            <button className='bg-[#008E93] text-white p-5 w-fit flex gap-2 cursor-pointer hover:bg-[#015e61] transition-all'>
                SEE MORE
                <ArrowRightIcon className='size-6' />
            </button>
        </div>
    )
}

export default ProductSection
