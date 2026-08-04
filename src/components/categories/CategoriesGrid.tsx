import CategoriesCard from "./CategoriesCard"
import { CATEGORIES } from "./data"

const CategoriesGrid = () => {
    return (
        <div className="grid grid-cols-2 grid-rows-2 gap-5 ">
            {
                CATEGORIES.map(category => (
                    <CategoriesCard key={category.id} img={category.image} title={category.title} className={category.className} />
                ))
            }
        </div>
    )
}

export default CategoriesGrid
