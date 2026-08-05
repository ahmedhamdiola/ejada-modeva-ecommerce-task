interface ButtonProps {
    title: string,
    Icon?: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
        title?: string;
        titleId?: string;
    } & React.RefAttributes<SVGSVGElement>>
    onClick?: () => void
    type?: "button" | "submit" | "reset"
    className?: string
}

const Button = ({ title, Icon, onClick, type = "button", className }: ButtonProps) => {
    return (
        <button type={type} className={`bg-[#008E93] text-white p-5 w-fit flex gap-2 cursor-pointer hover:bg-[#015e61] transition-all ${className}`} onClick={onClick}>
            {title}
            {Icon && <Icon className='size-6' />}
        </button>
    )
}

export default Button
