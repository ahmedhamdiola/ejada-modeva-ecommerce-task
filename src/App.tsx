import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import CategoriesGrid from "./components/categories/CategoriesGrid"
import ProductSection from "./components/products/ProductSection"
import DiscountToast from "./components/layout/DiscountToast"
import AboutSection from "./components/about/AboutSection"
import ReviewsSection from "./components/reviews/ReviewsSection"
import Footer from "./components/footer/Footer"

function App() {

  return (
    <>
      <DiscountToast />
      <Navbar />
      <Hero />
      <div className="flex flex-col gap-10 md:gap-20 lg:gap-35 px-16 mt-15">
        <CategoriesGrid />
        <ProductSection heading="THE BEST DRESS FOR THE BEST WOMAN" />
        <ProductSection heading="BEST OUTFIT FOR YOUR HAPPINESS" />
        <AboutSection />
        <ReviewsSection />
      </div>
      <Footer />
    </>
  )
}

export default App
