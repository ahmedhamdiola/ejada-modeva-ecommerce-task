import { useState } from "react";
import { Bars3Icon, ShoppingCartIcon, UserIcon, XMarkIcon } from "@heroicons/react/24/outline";
import NavbarLinks from "./NavbarLinks";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <nav className="absolute z-5 top-0 px-3 md:px-10 pt-16 text-white font-Lato w-full flex flex-col">
                <div className="flex items-center justify-center md:justify-start gap-3 md:gap-5 xl:gap-10">
                    <button
                        className="lg:hidden size-5 md:size-10 shrink-0 flex items-center justify-center"
                        onClick={() => setMobileOpen(!mobileOpen)}>
                        {mobileOpen ? <XMarkIcon className="size-5 md:size-10 text-white" /> : <Bars3Icon className="size-5 md:size-10 text-white" />
                        }
                    </button>
                    <h1 className="font-PFR text-2xl md:text-5xl xl:text-6xl md:ml-2 lg:ml-8 md:mr-5">
                        <span className="text-[#008E93]">M</span>ODEVA
                    </h1>
                    <NavbarLinks />
                    <div className="flex gap-3">
                        <div className="hidden md:flex">
                            <SearchBar />
                        </div>
                        <UserIcon className="size-5 md:size-8 cursor-pointer shrink-0" />
                        <ShoppingCartIcon className="size-5 md:size-8 cursor-pointer shrink-0" />
                    </div>
                </div>
            </nav>
            <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
        </>
    );
};

export default Navbar;
