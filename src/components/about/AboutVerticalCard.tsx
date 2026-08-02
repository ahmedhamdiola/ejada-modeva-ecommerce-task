import CircleIcon from "../ui/CircleIcon"

interface AboutVerticalCardProps {
    Icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
        title?: string;
        titleId?: string;
    } & React.RefAttributes<SVGSVGElement>>
    heading: string,
    description: string
}


const AboutVerticalCard = ({ Icon, heading, description }: AboutVerticalCardProps) => {
    return (
        <div className="lg:row-span-2 bg-gray-100 p-4 sm:p-6 xl:p-10">
            <div className="h-full w-full bg-white">
                <div className="flex w-full flex-col items-center justify-center gap-4 px-4 py-6 sm:gap-5 sm:px-6 sm:py-8 xl:px-8 xl:py-10">
                    <CircleIcon>
                        <Icon className="size-8 text-white sm:size-10" />
                    </CircleIcon>
                    <h1 className="font-PFR px-2 text-2xl sm:text-3xl xl:text-3xl text-center">{heading}</h1>
                    <p className="text-sm text-gray-600">{description}</p>
                </div>
            </div>
        </div>

    )
}

export default AboutVerticalCard
