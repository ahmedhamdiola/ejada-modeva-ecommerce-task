import { ChevronDownIcon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline"
import { NAVBAR_CATEGORIES, NAVBAR_LINKS } from "./data"
import { useState } from "react";

const Navbar = () => {
    const [showCatalog, setShowCatalog] = useState(false);
    return (
        <nav className="absolute top-0 p-10 flex items-center text-white gap-10 font-Lato">
            <h1 className="font-PFR text-6xl ml-8 mr-5"><span className="text-[#008E93]">M</span>ODEVA</h1>
            <ul className="flex font-Lato gap-16 select-none">
                {/* this is the Catalog Dropdown Section */}
                <div className="flex flex-col">
                    {/* Catalog */}
                    <div
                        className="flex items-center gap-2"
                        onClick={() => setShowCatalog(!showCatalog)}>
                        <li className="text-xl">Catalog</li>
                        <ChevronDownIcon className={`size-6 transition-transform ${showCatalog ? "rotate-180" : ""}`} />
                    </div>
                    {/* Dropdown Menu */}
                    <div className={`absolute top-25 bg-white w-48 text-black rounded-md shadow-lg ${showCatalog ? "block" : "hidden"}`}>
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
                    <li key={link.id} className="cursor-pointer text-xl">
                        <a href={link.path}>
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="flex relative items-center gap-3">
                <input type="text" name="search" placeholder="Search" className="bg-white text-gray-700 pl-8 h-10 w-74 focus:outline-none" />
                <MagnifyingGlassIcon className="absolute text-gray-400 size-5 top-1/2 -translate-y-1/2 left-2" />
                <UserIcon className="size-8 cursor-pointer" />
                <ShoppingCartIcon className="size-8 cursor-pointer" />
            </div>

        </nav>
    )
}

export default Navbar
