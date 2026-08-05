import { XMarkIcon } from "@heroicons/react/16/solid"

interface ModalHeaderProps {
    heading: string
    onClose: () => void
}

const ModalHeader = ({ heading, onClose }: ModalHeaderProps) => {
    return (
        <div className="flex justify-between items-center text-gray-500 border-b pb-5 border-gray-300">
            <h1 className="font-PFR text-4xl">{heading}</h1>
            <XMarkIcon className="size-6 cursor-pointer" onClick={onClose} />
        </div>

    )
}

export default ModalHeader
