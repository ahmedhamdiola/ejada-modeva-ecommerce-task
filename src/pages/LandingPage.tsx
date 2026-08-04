import AboutSection from "../components/about/AboutSection"
import CategoriesGrid from "../components/categories/CategoriesGrid"
import Hero from "../components/hero/Hero"
import ProductSection from "../components/products/ProductSection"
import ReviewsSection from "../components/reviews/ReviewsSection"
import useMostRecentProducts from "../hooks/useMostRecentProducts"
import useMostSoldProducts from "../hooks/useMostSoldProducts"

const LandingPage = () => {
    const { data: recentProducts } = useMostRecentProducts()
    const { data: mostSoldProducts } = useMostSoldProducts()
    return (
        <>
            <Hero />
            <div className="flex flex-col gap-10 md:gap-20 lg:gap-35 px-4 lg:px-16 mt-15">
                <CategoriesGrid />
                <ProductSection heading="THE BEST DRESS FOR THE BEST WOMAN" products={recentProducts || []} />
                <ProductSection heading="BEST OUTFIT FOR YOUR HAPPINESS" products={mostSoldProducts || []} />
                <AboutSection />
                <ReviewsSection />
            </div>
        </>
    )
}

export default LandingPage
