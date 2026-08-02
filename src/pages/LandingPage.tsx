import AboutSection from "../components/about/AboutSection"
import CategoriesGrid from "../components/categories/CategoriesGrid"
import Hero from "../components/hero/Hero"
import ProductSection from "../components/products/ProductSection"
import ReviewsSection from "../components/reviews/ReviewsSection"

const LandingPage = () => {
    return (
        <>
            <Hero />
            <div className="flex flex-col gap-10 md:gap-20 lg:gap-35 px-16 mt-15">
                <CategoriesGrid />
                <ProductSection heading="THE BEST DRESS FOR THE BEST WOMAN" />
                <ProductSection heading="BEST OUTFIT FOR YOUR HAPPINESS" />
                <AboutSection />
                <ReviewsSection />
            </div>
        </>
    )
}

export default LandingPage
