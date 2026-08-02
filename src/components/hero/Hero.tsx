import MainCover from "../../assets/main.png"
import HeroHeading from "./HeroHeading"
import HeroAdvertisement from "./HeroAdvertisement"
import HeroScrollButton from "./HeroScrollButton"

const Hero = () => {
    return (
        <section className="relative overflow-hidden">
            <img src={MainCover} alt="Main Cover" className="w-full object-cover" />
            <div className="absolute bottom-2 px-4 md:px-10 flex flex-col xl:flex-row xl:items-end gap-6 xl:gap-15 ">
                <div className="flex flex-col items-center md:items-start gap-4">
                    <HeroHeading />
                    <HeroScrollButton />
                </div>
                <div className="hidden xl:flex flex-col gap-15 shrink-0 mb-10 overflow-hidden">
                    <HeroAdvertisement />
                    <HeroAdvertisement className="flex-row-reverse" />
                </div>
            </div>
        </section>
    )
}

export default Hero
