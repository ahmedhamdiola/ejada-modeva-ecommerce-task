import { NAVBAR_CATEGORIES } from "./data"
const NavbarCategories = () => {
    return (
        <div className="hidden lg:flex xl:hidden gap-16 w-full justify-center bg-gray-100/20 rounded-xl mt-5">
            {NAVBAR_CATEGORIES.map(category => (
                <a key={category.id} className="py-2 cursor-pointer">{category.name}</a>
            ))}
        </div>
    )
}

export default NavbarCategories
