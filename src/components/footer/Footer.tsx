import { ACCOUNT_SUBCATEGORIES, GET_HELP_SUBCATEGORIES, MENU_SUBCATEGORIES } from "./data"
import FooterCategories from "./FooterCategories"
import FooterLogoSection from "./FooterLogoSection"

const Footer = () => {
    return (
        <footer className="bg-[#008E93] pb-5 pt-50 px-16 flex flex-col gap-10 md:gap-20 text-white font-Lato">
            <div className="grid grid-cols-2 xl:grid-cols-7 gap-15">
                <FooterLogoSection />
                <FooterCategories category="Menu" subcategories={MENU_SUBCATEGORIES} />
                <FooterCategories category="Get Help" subcategories={GET_HELP_SUBCATEGORIES} />
                <FooterCategories category="Account" subcategories={ACCOUNT_SUBCATEGORIES} />
            </div>
            <h2 className="text-gray-300 text-center">All rights reserved <br />Copyright 2026 By Modeva Fashion</h2>
        </footer>
    )
}

export default Footer
