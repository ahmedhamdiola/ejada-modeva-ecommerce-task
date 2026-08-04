interface ButtonProps {
    title: string,
    Icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
        title?: string;
        titleId?: string;
    } & React.RefAttributes<SVGSVGElement>>
    onClick?: () => void
}

const Button = ({ title, Icon, onClick }: ButtonProps) => {
    return (
        <button className='bg-[#008E93] text-white p-5 w-fit flex gap-2 cursor-pointer hover:bg-[#015e61] transition-all' onClick={onClick}>
            {title}
            <Icon className='size-6' />
        </button>
    )
}

export default Button
