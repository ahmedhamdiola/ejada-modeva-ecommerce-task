import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { NAVBAR_CATEGORIES, NAVBAR_LINKS } from './data'

const NavbarLinks = () => {
    const [showCatalog, setShowCatalog] = useState(false);

    return (
        <ul className="flex font-Lato gap-8 2xl:gap-16 select-none">
            {/* this is the catalog dropdown section */}
            <div className="flex flex-col hidden xl:block">
                {/* Catalog */}
                <div
                    className="flex items-center gap-2"
                    onClick={() => setShowCatalog(!showCatalog)}>
                    <li className="text-xl">Catalog</li>
                    <ChevronDownIcon className={`size-6 transition-transform ${showCatalog ? "rotate-180" : ""}`} />
                </div>
                {/* Dropdown Menu */}
                <div className={`absolute top-35 bg-white w-48 text-black rounded-md shadow-lg ${showCatalog ? "block" : "hidden"}`}>
                    <ul className="py-2">
                        {
                            NAVBAR_CATEGORIES.map(category => (
                                <li key={category.id} className="pl-3 py-2 hover:bg-gray-100 cursor-pointer">{category.name}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {NAVBAR_LINKS.map(link => (
                <li key={link.id} className="cursor-pointer text-xl hidden lg:block">
                    <a href={link.path}>
                        {link.name}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default NavbarLinks
