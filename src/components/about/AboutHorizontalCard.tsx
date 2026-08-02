import CircleIcon from "../ui/CircleIcon"

interface AboutHorizontalCardProps {
    Icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
        title?: string;
        titleId?: string;
    } & React.RefAttributes<SVGSVGElement>>
    heading: string,
    description: string
}

const AboutHorizontalCard = ({ Icon, heading, description }: AboutHorizontalCardProps) => {
    return (
        <div className="col-span-1 bg-gray-100 p-4 sm:p-6  xl:col-span-2 xl:p-10">
            <div className="flex h-full w-full flex-col items-center gap-4 bg-white p-4 sm:flex-row sm:gap-5 sm:p-6 xl:p-10">
                <CircleIcon>
                    <Icon className="size-8 text-white sm:size-10" />
                </CircleIcon>
                <div className="flex flex-col gap-3 text-center sm:gap-5 sm:text-left">
                    <h1 className="font-PFR text-2xl sm:text-3xl xl:text-4xl">{heading}</h1>
                    <p className="text-sm text-gray-600 sm:text-base">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutHorizontalCard
