import { ACCOUNT_SUBCATEGORIES, GET_HELP_SUBCATEGORIES, MENU_SUBCATEGORIES } from "./data"
import FooterLogoSection from "./FooterLogoSection"

const Footer = () => {
    return (
        <footer className="bg-[#008E93] pb-5 pt-50 px-16 flex flex-col gap-10 md:gap-20 text-white font-Lato">
            <div className="grid grid-cols-2 xl:grid-cols-7 gap-15">
                <FooterLogoSection />
                <div>
                    <h1 className="font-bold text-lg mb-5">Menu</h1>
                    <ul>
                        {MENU_SUBCATEGORIES.map(category =>
                            <li
                                key={category.id}
                                className="mt-2 cursor-pointer w-fit hover:underline">{category.name}</li>
                        )}
                    </ul>
                </div>
                <div>
                    <h1 className="font-bold text-lg mb-5">Get Help</h1>
                    <ul>
                        {GET_HELP_SUBCATEGORIES.map(category =>
                            <li
                                key={category.id}
                                className="mt-2 cursor-pointer w-fit hover:underline">{category.name}</li>
                        )}
                    </ul>
                </div>
                <div>
                    <h1 className="font-bold text-lg mb-5">Account</h1>
                    <ul>
                        {ACCOUNT_SUBCATEGORIES.map(category =>
                            <li
                                key={category.id}
                                className="mt-2 cursor-pointer w-fit hover:underline">{category.name}</li>
                        )}
                    </ul>
                </div>
            </div>
            <h2 className="text-gray-300 text-center">All rights reserved <br />Copyright 2026 By Modeva Fashion</h2>
        </footer>
    )
}

export default Footer
