import type { ReactNode } from "react"

interface CircleIconProps {
    children: ReactNode
}

const CircleIcon = ({ children }: CircleIconProps) => {
    return (
        <div className="flex justify-center items-center rounded-full w-24 h-24 bg-[#008E93] my-auto shrink-0">
            {children}
        </div>
    )
}

export default CircleIcon
