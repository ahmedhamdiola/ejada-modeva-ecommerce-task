interface FooterCategoriesProps {
    category: string,
    subcategories: { id: number, name: string }[]
}
const FooterCategories = ({ category, subcategories }: FooterCategoriesProps) => {
    return (
        <div>
            <h1 className="font-bold text-lg mb-5">{category}</h1>
            <ul>
                {subcategories.map(category =>
                    <li
                        key={category.id}
                        className="mt-2 cursor-pointer w-fit hover:underline">{category.name}</li>
                )}
            </ul>
        </div>
    )
}

export default FooterCategories
