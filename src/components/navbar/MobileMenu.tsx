import { XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { NAVBAR_LINKS, NAVBAR_CATEGORIES } from "./data";
import SearchBar from "./SearchBar";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
    const [catalogOpen, setCatalogOpen] = useState(false);

    return (
        <>
            <div
                className={`lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={onClose}
            />
            <aside
                className={`lg:hidden fixed top-0 left-0 h-full w-72 md:w-80 bg-white text-gray-800 z-50 flex flex-col
                    transform transition-transform duration-300 ease-in-out
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
                    <span className="font-PFR text-3xl">
                        <span className="text-[#008E93]">M</span>ODEVA
                    </span>
                    <button onClick={onClose} aria-label="Close menu">
                        <XMarkIcon className="size-7 text-black" />
                    </button>
                </div>
                <div className="md:hidden px-6 py-4 border-b border-gray-200">
                    <SearchBar />
                </div>
                <nav className="flex flex-col px-6 py-4 gap-1 flex-1 overflow-y-auto">
                    <div>
                        <button
                            className="flex items-center justify-between w-full py-3 text-lg font-Lato border-b border-gray-200"
                            onClick={() => setCatalogOpen(!catalogOpen)}
                        >
                            <span>Catalog</span>
                            <ChevronDownIcon
                                className={`size-5 transition-transform duration-200 ${catalogOpen ? "rotate-180" : ""}`}
                            />
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-300 ${catalogOpen ? "max-h-60" : "max-h-0"
                                }`}
                        >
                            <ul className="pl-4 py-2 flex flex-col gap-1">
                                {NAVBAR_CATEGORIES.map((category) => (
                                    <li
                                        key={category.id}
                                        className="py-2 text-base text-gray-500 hover:text-gray-900 cursor-pointer"
                                    >
                                        {category.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {NAVBAR_LINKS.map((link) => (
                        <a
                            key={link.id}
                            href={link.path}
                            className="py-3 text-lg font-Lato border-b border-gray-200 hover:text-gray-500 transition-colors"
                            onClick={onClose}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
            </aside>
        </>
    );
};

export default MobileMenu;
