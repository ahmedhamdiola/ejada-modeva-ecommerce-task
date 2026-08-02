import AdvertCover from "../../assets/advert.png"

interface HeroAdvertisementProps {
    className?: string
}

const HeroAdvertisement = ({ className }: HeroAdvertisementProps) => {
    return (
        <div className={`w-130 bg-white flex gap-5 ${className}`}>
            <img src={AdvertCover} alt="Advertisement" />
            <div className="flex flex-col my-auto gap-5 px-5 font-Lato">
                <h1 className="font-PFR text-4xl">
                    Product Name in Here
                </h1>
                <p className="text-gray-500 text-xl">$300.00</p>
                <a href="#" className="text-lg underline w-fit">SHOP NOW</a>
            </div>
        </div>
    )
}

export default HeroAdvertisement
