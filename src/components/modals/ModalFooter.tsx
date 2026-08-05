import Button from "../ui/Button"

interface ModalFooterProps {
    submitLabel?: string
}

const ModalFooter = ({ submitLabel = "Submit" }: ModalFooterProps) => {
    return (
        <div className="flex justify-center items-center py-5">
            <Button title={submitLabel} type="submit" className="w-full max-w-sm justify-center text-xl" />
        </div>
    )
}

export default ModalFooter
