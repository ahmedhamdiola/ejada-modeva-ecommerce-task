import { ChevronDoubleDownIcon } from '@heroicons/react/16/solid'

const HeroScrollButton = () => {
    return (
        <div className="flex w-full justify-center">
            <a
                href="#"
                className="flex items-center justify-center gap-1.5 text-white font-Lato text-xs md:text-lg xl:text-xl transition-transform hover:scale-[1.1] xl:translate-x-2/1 whitespace-nowrap"
            >
                <span>SCROLL DOWN</span>
                <ChevronDoubleDownIcon className="size-4 shrink-0 size-6" />
            </a>
        </div>
    )
}

export default HeroScrollButton
