interface BadgeProps {
    text: number,
    Icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
        title?: string;
        titleId?: string;
    } & React.RefAttributes<SVGSVGElement>>
}

const Badge = ({ text, Icon }: BadgeProps) => {
    return (
        <div className="absolute top-0 right-0 bg-[#008E93] m-2 md:m-4 rounded-lg px-3 flex items-center gap-1">
            <Icon className="size-3 md:size-6 text-yellow-500" />
            <p className="text-white font-Lato text-xs md:text-xl">{text}</p>
        </div>
    )
}

export default Badge
