interface ButtonProps {
    title: string,
    Icon?: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
        title?: string;
        titleId?: string;
    } & React.RefAttributes<SVGSVGElement>>
    onClick?: () => void
    type?: "button" | "submit" | "reset"
    className?: string
    disabled?: boolean
    isLoading?: boolean
}

const Button = ({ title, Icon, onClick, type = "button", className, disabled = false, isLoading = false }: ButtonProps) => {
    return (
        <button
            type={type}
            disabled={disabled}
            className={`bg-[#008E93] text-white p-5 w-fit flex items-center gap-2 transition-all cursor-pointer ${disabled ? "opacity-60 cursor-not-allowed" : "hover:bg-[#015e61]"} ${className}`}
            onClick={onClick}
        >
            <span className="inline-flex items-center gap-2">
                {title}
                {isLoading && <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />}
            </span>
            {Icon && !isLoading && <Icon className='size-6' />}
        </button>
    )
}

export default Button
