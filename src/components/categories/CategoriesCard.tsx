interface CategoriesCardProps {
    img: string,
    title: string,
    className?: string
}

const CategoriesCard = ({ img, title, className }: CategoriesCardProps) => {
    return (
        <div className={className}>
            <div className="relative h-full">
                <img src={img} alt={title} className="w-full h-full object-cover" />
                <div className="absolute left-0 top-1/2 left-3 md:left-10">
                    <h1 className="font-PFR text-white text-lg md:text-3xl lg:text-6xl">{title}</h1>
                </div>
            </div>
        </div>
    )
}

export default CategoriesCard
