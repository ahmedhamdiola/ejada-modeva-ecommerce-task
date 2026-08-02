import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import DiscountToast from "../components/layout/DiscountToast"

const MainLayout = () => {
    const location = useLocation();
    const isLandingPage = location.pathname === "/";
    return (
        <main className="min-h-screen">
            <DiscountToast />
            <Navbar isLandingPage={isLandingPage} />
            <Outlet />
            <Footer />
        </main>
    )
}

export default MainLayout
